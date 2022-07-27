import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { cx, getRandomId, getAlphanumeric, getAlpha, getNumeric, getCased, CASE_TYPES, getClassName, isAndroid } from './utils';
import CSS from './react-codes-input.css';
const DEFAULT_CODE_LENGTH = 6;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');
const ALPHABETNUMERICS = [...ALPHABETS, ...NUMBERS];
const TAB = 'tab';
const ENTER = 'enter';
const BACKSPACE = 'backspace';
const DELETE = 'delete';
const ARROW_LEFT = 'arrowleft';
const ARROW_RIGHT = 'arrowright';
const ARROW_UP = 'arrowup';
const ARROW_DOWN = 'arrowdown';
const OPERRATION_KEYS = [ENTER, BACKSPACE, DELETE, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN];
const ALLOWED_KEYS = [...ALPHABETNUMERICS, ...OPERRATION_KEYS];
const INVALID_KEY = '';
const HIDDEN_INPUT_TYPE = 'password';
const IS_MOBILE = () => {
  if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
    return false;
  } else {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
};
const isValidKey = (key: string, type: string, code: string) => {
  if (!ALLOWED_KEYS.includes(key)) {
    return INVALID_KEY;
  }
  if (OPERRATION_KEYS.includes(key)) {
    switch (key) {
      case BACKSPACE: {
        if (code === '') {
          return INVALID_KEY;
        } else {
          return BACKSPACE;
        }
      }
      case DELETE: {
        if (code === '') {
          return INVALID_KEY;
        } else {
          return DELETE;
        }
      }
      case ARROW_UP: {
        return ARROW_LEFT;
      }
      case ARROW_DOWN: {
        return ARROW_RIGHT;
      }
      default: {
        return key;
      }
    }
  }
  if (type === DEFAULT_TYPES.NUMBER) {
    if (NUMBERS.indexOf(key) < 0) {
      return INVALID_KEY;
    }
  }
  if (type === DEFAULT_TYPES.ALPHA) {
    if (ALPHABETS.indexOf(key) < 0) {
      return INVALID_KEY;
    }
  }
  if (type === DEFAULT_TYPES.ALPHANUMERTIC) {
    if (ALPHABETNUMERICS.indexOf(key) < 0) {
      return INVALID_KEY;
    }
  }
  return key;
};
export enum DEFAULT_TYPES {
  ALPHANUMERTIC = 'alphanumeric',
  ALPHA = 'alpha',
  NUMBER = 'number',
}
interface AttibutesObj {
  type?: string;
  pattern?: string;
  minLength?: number;
}
export interface ReactCodesInputProps {
  wrapperRef?: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (value: string) => void;
  initialFocus?: boolean;
  codeLength?: number;
  id?: string;
  type?: 'number' | 'alpha' | 'alphanumeric';
  letterCase?: 'upper' | 'lower';
  disabled?: boolean;
  hide?: boolean;
  focusColor?: string;
  classNameComponent?: string;
  classNameWrapper?: string;
  classNameCodeWrapper?: string;
  classNameEnteredValue?: string;
  classNameCode?: string;
  classNameCodeWrapperFocus?: string;
  customStyleComponent?: React.CSSProperties;
  customStyleWrapper?: React.CSSProperties;
  customStyleCodeWrapper?: React.CSSProperties;
  customStyleEnteredValue?: React.CSSProperties;
  customStyleCode?: React.CSSProperties;
  customStyleCodeWrapperFocus?: React.CSSProperties;
  placeholder?: string;
  customStylePlaceholder?: React.CSSProperties;
}
const ReactCodesInput: React.FC<ReactCodesInputProps> = ({
  initialFocus = false,
  wrapperRef,
  codeLength = DEFAULT_CODE_LENGTH,
  id = null,
  onChange,
  type = DEFAULT_TYPES.ALPHANUMERTIC,
  letterCase = CASE_TYPES.UPPERCASE,
  value = '',
  disabled = false,
  hide = false,
  focusColor = '#007bff',
  classNameComponent = '',
  classNameWrapper = '',
  classNameCodeWrapper = '',
  classNameEnteredValue = '',
  classNameCode = '',
  classNameCodeWrapperFocus = '',
  customStyleComponent = {},
  customStyleWrapper = {},
  customStyleCodeWrapper = {},
  customStyleEnteredValue = {},
  customStyleCode = {},
  customStyleCodeWrapperFocus = {},
  placeholder = '',
  customStylePlaceholder = {},
}) => {
  const DEFAULT_CODES = useMemo(() => [...Array(codeLength).keys()], [codeLength]);
  const [code, setCode] = useState<string>(value);
  const [pressKey, setPressKey] = useState({ key: undefined });
  const [isFocus, setIsFocus] = useState(false);
  const $wrapperRef = useRef(null);
  const $component = useRef(null);
  const $inputRef = useRef(null);
  const isInitial = useRef(true);
  const [curItemIndex, setCurItemIndex] = useState(0);
  const inputId = useMemo(() => id || getRandomId(), [id]);
  useEffect(() => {
    if (isAndroid()) {
      const textInput = (e: any) => {
        const key = e.data.toLowerCase();
        if (key.match(/^[a-zA-Z0-9_]*$/gi)) {
          setPressKey({ key });
        }
      };
      $inputRef.current.addEventListener('textInput', textInput);
      return () => {
        if ($inputRef.current) {
          $inputRef.current.removeEventListener('textInput', textInput);
        }
      };
    }
  }, []);
  useEffect(() => {
    if (initialFocus) {
      document.getElementById(`${inputId}${0}`).click();
    }
  }, []);
  const onKeyDown = useCallback(
    (key: string) => {
      if (!IS_MOBILE()) {
        if (key === ARROW_LEFT) {
          const left = curItemIndex - 1;
          setCurItemIndex(left < 0 ? 0 : left);
          return;
        }
        if (key === ARROW_RIGHT) {
          if (code === '') {
            return;
          }
          const right = Math.min(curItemIndex + 1, DEFAULT_CODES.length - 1);
          if (typeof code[right] === 'undefined') {
            setCurItemIndex(code.length);
            return;
          }
          setCurItemIndex(right);
          return;
        }
      }
      handleOnCodeChange(key);
    },
    [type, code, curItemIndex],
  );
  useEffect(() => {
    if (pressKey.key) {
      onKeyDown(pressKey.key);
    }
  }, [pressKey]);
  useEffect(() => {
    if (curItemIndex >= DEFAULT_CODES.length) {
      setCurItemIndex(DEFAULT_CODES.length - 1);
      return;
    }
    $inputRef.current.setSelectionRange(curItemIndex, curItemIndex);
  }, [curItemIndex, DEFAULT_CODES]);
  useEffect(() => {
    const code = getCased(value, letterCase);
    setCode(code);
    if (isInitial.current) {
      $inputRef.current.value = code;
      setCurItemIndex(code.length);
      isInitial.current = false;
    }
  }, [value, letterCase]);
  const handleOnCodeChange = useCallback(
    pressedKey => {
      const codeSplits = code.split('');
      if (pressedKey === BACKSPACE) {
        // BACKSPACE case: set current code item empty and setCurItemIndex
        let index = curItemIndex;
        if (curItemIndex === DEFAULT_CODES.length - 1) {
          if (code.length === DEFAULT_CODES.length) {
            codeSplits[index] = '';
            const newCode = codeSplits.join('');
            handleSetCode(index, newCode, onChange);
            return;
          } else {
            index -= 1;
            codeSplits[index] = '';
            const newCode = codeSplits.join('');
            handleSetCode(index, newCode, onChange);
            return;
          }
        }
        if (curItemIndex === code.length) {
          index -= 1;
          codeSplits[index] = '';
          const newCode = codeSplits.join('');
          handleSetCode(index, newCode, onChange);
          return;
        }
        codeSplits[index] = '';
        const newCode = codeSplits.join('');
        handleSetCode(Math.max(index - 1, 0), newCode, onChange);
        return;
      }
      if (pressedKey === DELETE) {
        // BACKSPACE case: set current code item empty and setCurItemIndex
        let index = curItemIndex;
        if (typeof codeSplits[curItemIndex] === 'undefined') {
          index += 1;
        }
        index = Math.min(index, code.length);
        codeSplits[index] = '';
        const newCode = codeSplits.join('');
        handleSetCode(index, newCode, onChange);
        return;
      }
      if (ALPHABETNUMERICS.includes(pressedKey)) {
        let v = '';
        switch (type) {
          case DEFAULT_TYPES.ALPHANUMERTIC:
            v = getAlphanumeric(pressedKey);
            break;
          case DEFAULT_TYPES.ALPHA:
            v = getAlpha(pressedKey);
            break;
          case DEFAULT_TYPES.NUMBER:
            v = getNumeric(pressedKey);
            break;
          default:
            v = getAlphanumeric(pressedKey);
            break;
        }
        v = getCased(v, letterCase);
        if (code === '') {
          // initial case: just setCode(v)
          const newCode = v;
          handleSetCode(newCode.length, newCode, onChange);
          return;
        }
        if (curItemIndex === code.length) {
          // typing case: appending. setCode with the value just typed and setCurItemIndex with newCode.length
          if (codeSplits.length < DEFAULT_CODES.length) {
            codeSplits.push(v);
            const newCode = codeSplits.join('');
            let index = newCode.length;
            if (newCode.length >= DEFAULT_CODES.length) {
              index -= 1;
            }
            handleSetCode(index, newCode, onChange);
            return;
          }
        } else {
          if (IS_MOBILE()) {
            // mobile devices don't have arrow key
            // typing case: appending. setCode with the value just typed and setCurItemIndex with newCode.length
            if (codeSplits.length < DEFAULT_CODES.length) {
              codeSplits.push(v);
              const newCode = codeSplits.join('');
              let index = newCode.length;
              if (newCode.length >= DEFAULT_CODES.length) {
                index -= 1;
              }
              handleSetCode(index, newCode, onChange);
              return;
            }
          } else {
            // typing case: replacing. setCode with the value just typed and do not setCurItemIndex
            codeSplits[curItemIndex] = v;
            const newCode = codeSplits.join('');
            handleSetCode(typeof codeSplits[curItemIndex + 1] === 'undefined' ? curItemIndex + 1 : null, newCode, onChange);
            return;
          }
        }
      }
    },
    [type, letterCase, DEFAULT_CODES, code, curItemIndex],
  );
  const handleSetCode = useCallback((selectionIndex, code, onChange) => {
    setCode(code);
    if (selectionIndex !== null) {
      setCurItemIndex(selectionIndex);
    }
    $inputRef.current.value = code;
    if (typeof onChange === 'function') {
      onChange(code);
    }
  }, []);
  const handleOnCodeFocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const handleOnCodeBlur = useCallback(() => {
    setIsFocus(false);
  }, []);
  const attributes = useMemo(() => {
    const res: AttibutesObj = {};
    switch (type) {
      case DEFAULT_TYPES.NUMBER:
        res['type'] = IS_MOBILE() ? 'tel' : HIDDEN_INPUT_TYPE;
        res['pattern'] = `[0-9]{${DEFAULT_CODES.length},}`;
        break;
      case DEFAULT_TYPES.ALPHA:
        res['type'] = HIDDEN_INPUT_TYPE;
        res['pattern'] = `[A-Za-z]{${DEFAULT_CODES.length},}`;
        break;
      case DEFAULT_TYPES.ALPHANUMERTIC:
        res['type'] = HIDDEN_INPUT_TYPE;
        res['pattern'] = `[0-9A-Za-z]{${DEFAULT_CODES.length},}`;
        break;
    }
    return res;
  }, [type]);
  return (
    <div
      ref={$component}
      className={cx(CSS['component'], getClassName('component'), disabled && CSS['disabled'], disabled && getClassName('disabled'), classNameComponent)}
      style={customStyleComponent}
    >
      <div ref={wrapperRef || $wrapperRef} className={cx(CSS['wrapper'], getClassName('wrapper'), classNameWrapper)} style={customStyleWrapper}>
        {DEFAULT_CODES.map((i, k) => {
          const isLastItem = k === DEFAULT_CODES.length - 1 ? true : false;
          const isEntered = typeof code[k] === 'undefined' ? false : true;
          let isActive = false;
          const focusStyle: React.CSSProperties = {};
          if (isFocus) {
            isActive = curItemIndex === k;
          }
          if (isActive) {
            focusStyle['border'] = `1px solid ${focusColor}`;
            focusStyle['boxShadow'] = `0px 0px 5px 0px ${focusColor}`;
          }
          return (
            <div
              key={k}
              id={`${inputId}${k}`}
              onClick={() => {
                let focusedIndex = -1;
                for (let index = 0; index < DEFAULT_CODES.length; index += 1) {
                  if (typeof code[index] === 'undefined') {
                    document.getElementById(`${inputId}${index}`).click();
                    focusedIndex = index;
                    break;
                  }
                }
                document.getElementById(inputId).focus();
              }}
              className={cx(
                CSS['code-wrapper'],
                getClassName('code-wrapper'),
                classNameCodeWrapper,
                isActive && CSS['active'],
                isActive && getClassName('active'),
                isEntered && CSS['entered'],
                isEntered && getClassName('entered'),
              )}
              style={customStyleCodeWrapper}
            >
              <div
                className={cx(CSS['entered-value'], getClassName('entered-value'), classNameEnteredValue, hide && isEntered && CSS['hide'], hide && isEntered && getClassName('hide'))}
                style={customStyleEnteredValue}
              >
                {typeof code[k] === 'undefined' && <span style={{ color: '#ddd', ...customStylePlaceholder }}>{placeholder.split('')[k]}</span>} {hide ? '' : code[k]}
              </div>
              <div className={cx(CSS['code'], getClassName('code'), classNameCode)} style={customStyleCode}>
                <div className={cx(CSS['code-wrapper--focus'], getClassName('code-wrapper--focus'), classNameCodeWrapperFocus)} style={{ ...focusStyle, ...customStyleCodeWrapperFocus }} />
              </div>
            </div>
          );
        })}
      </div>
      <input
        ref={$inputRef}
        id={inputId}
        autoComplete="off"
        disabled={disabled}
        maxLength={DEFAULT_CODES.length}
        required
        onFocus={handleOnCodeFocus}
        onBlur={handleOnCodeBlur}
        onKeyDown={e => {
          let key = e.key.toLowerCase();
          if (isAndroid()) {
            if (key === BACKSPACE) {
              setPressKey({ key });
            }
            return false;
          }
          if (key)
            if (key !== ENTER && key !== TAB) {
              e.preventDefault();
            }
          if (key === TAB) {
            if (!(code.length < 0 || code.length > DEFAULT_CODES.length)) {
              if (e.shiftKey) {
                if (curItemIndex !== 0) {
                  key = ARROW_LEFT;
                  e.preventDefault();
                }
              } else {
                if (!(curItemIndex === DEFAULT_CODES.length - 1 && code.length === DEFAULT_CODES.length)) {
                  // right bound
                  key = ARROW_RIGHT;
                  e.preventDefault();
                }
              }
            }
          } else {
            if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
              return;
            }
          }
          const validKey = isValidKey(key, type, code);
          if (validKey === INVALID_KEY) {
            return;
          }
          setPressKey({ key: validKey });
        }}
        style={{
          position: 'absolute',
          opacity: '0',
          marginLeft: '-9999999px',
        }}
        {...attributes}
      />
    </div>
  );
};

export default ReactCodesInput;
