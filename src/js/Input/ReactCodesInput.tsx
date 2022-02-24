import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { cx, getRandomId, getAlphanumeric, getAlpha, getNumeric, getCased, CASE_TYPES, getClassName } from './utils';
import CSS from './react-codes-input.css';
const DEFAULT_CODE_LENGTH = 6;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const ALPHABETNUMERICS = ALPHABETS + NUMBERS;
const ENTER = 'enter';
const BACKSPACE = 'backspace';
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
  id = getRandomId(),
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
  const DEFAULT_CODES = useMemo(() => [...Array(codeLength).keys()], []);
  const [code, setCode] = useState<string>(value);
  const [pressKey, setPressKey] = useState({ key: undefined });
  const [isFocus, setIsFocus] = useState(false);
  const $wrapperRef = useRef(null);
  const $component = useRef(null);
  useEffect(() => {
    if (initialFocus) {
      document.getElementById(`${id}${0}`).click();
    }
  }, []);
  const onKeyDown = useCallback(
    (key: string) => {
      const filter = [...ALPHABETNUMERICS.split(''), BACKSPACE];
      if (filter.indexOf(key) < 0) {
        return;
      }
      handleOnCodeChange(key);
    },
    [type, code],
  );
  useEffect(() => {
    if (pressKey.key) {
      onKeyDown(pressKey.key);
    }
  }, [pressKey]);
  useEffect(() => {
    setCode(getCased(value, letterCase));
  }, [value, letterCase]);
  const handleOnCodeChange = useCallback(
    res => {
      let v = '';
      switch (type) {
        case DEFAULT_TYPES.ALPHANUMERTIC:
          v = getAlphanumeric(res);
          break;
        case DEFAULT_TYPES.ALPHA:
          v = getAlpha(res);
          break;
        case DEFAULT_TYPES.NUMBER:
          v = getNumeric(res);
          break;
        default:
          v = getAlphanumeric(res);
          break;
      }
      v = getCased(v, letterCase);
      const newCode = res === BACKSPACE ? code.substring(0, code.length - 1) : `${code}${v}`;
      if (newCode.length > DEFAULT_CODES.length) {
        return;
      }
      setCode(newCode);
      if (typeof onChange === 'function') {
        onChange(newCode);
      }
    },
    [type, letterCase, DEFAULT_CODES, code],
  );
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
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        res['type'] = isMobile ? 'tel' : 'password';
        res['pattern'] = `[0-9]{${DEFAULT_CODES.length},}`;
        break;
      case DEFAULT_TYPES.ALPHA:
        res['type'] = 'password';
        res['pattern'] = `[A-Za-z]{${DEFAULT_CODES.length},}`;
        break;
      case DEFAULT_TYPES.ALPHANUMERTIC:
        res['type'] = 'password';
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
            if (code.length === k) {
              isActive = true;
            }
            if (isLastItem) {
              if (code.length - 1 === k) {
                isActive = true;
              }
            }
          }
          if (isActive) {
            focusStyle['border'] = `1px solid ${focusColor}`;
            focusStyle['boxShadow'] = `0px 0px 5px 0px ${focusColor}`;
          }
          return (
            <div
              key={k}
              id={`${id}${k}`}
              onClick={() => {
                let focusedIndex = -1;
                for (let index = 0; index < DEFAULT_CODES.length; index += 1) {
                  if (typeof code[index] === 'undefined') {
                    document.getElementById(`${id}${index}`).click();
                    focusedIndex = index;
                    break;
                  }
                }
                document.getElementById(id).focus();
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
        id={id}
        autoComplete="off"
        disabled={disabled}
        maxLength={DEFAULT_CODES.length}
        required
        onFocus={handleOnCodeFocus}
        onBlur={handleOnCodeBlur}
        onKeyDown={e => {
          const key = e.key.toLowerCase();
          if (key === BACKSPACE) {
            if (code === '') {
              e.preventDefault();
              return;
            }
          }
          if (type === DEFAULT_TYPES.NUMBER) {
            const allowedKeys = [...NUMBERS.split(''), ENTER, BACKSPACE];
            if (allowedKeys.indexOf(key) < 0) {
              e.preventDefault();
              return;
            }
          }
          if (type === DEFAULT_TYPES.ALPHA) {
            const allowedKeys = [...ALPHABETS.split(''), ENTER, BACKSPACE];
            if (allowedKeys.indexOf(key) < 0) {
              e.preventDefault();
              return;
            }
          }
          if (type === DEFAULT_TYPES.ALPHANUMERTIC) {
            const allowedKeys = [...ALPHABETNUMERICS.split(''), ENTER, BACKSPACE];
            if (allowedKeys.indexOf(key) < 0) {
              e.preventDefault();
              return;
            }
          }
          setPressKey({ key: key });
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
