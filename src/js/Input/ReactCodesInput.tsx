import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { cx, getRandomId, getAlphanumeric, getAlpha, getNumeric, getCased, CASE_TYPES, getClassName } from './utils';
import CSS from './react-codes-input.css';
if (!('classList' in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function () {
      var self = this;
      function update(fn: Function) {
        return function (value: string) {
          var classes = self.className.split(/\s+/g);
          var index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(' ');
        };
      }
      return {
        add: update(function (classes: Array<string>, index: number, value: string) {
          if (!~index) classes.push(value);
        }),
        remove: update(function (classes: Array<string>, index: number) {
          if (~index) classes.splice(index, 1);
        }),
        toggle: update(function (classes: Array<string>, index: number, value: string) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function (value: string) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },
        item: function (i: number) {
          return self.className.split(/\s+/g)[i] || null;
        },
      };
    },
  });
}
const DEFAULT_ID = getRandomId();
const DEFAULT_CODE_LENGTH = 6;
export enum DEFAULT_TYPES {
  ALPHANUMERTIC = 'alphanumeric',
  ALPHA = 'alpha',
  NUMBER = 'number',
}
interface AttibutesObj {
  type?: string;
  pattern?: string;
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
  id = DEFAULT_ID,
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
  const $component = useRef(null);
  const pageClick = useCallback(e => {
    if ($component.current.contains(e.target)) {
      return;
    }
    for (let index = 0; index < DEFAULT_CODES.length; index += 1) {
      document.getElementById(`${id}${index}`).classList.remove(CSS['active']);
    }
  }, []);
  useEffect(() => {
    if (initialFocus) {
      document.getElementById(`${id}${0}`).click();
    }
    window.addEventListener('mousedown', pageClick);
    window.addEventListener('touchstart', pageClick);
    return () => {
      window.removeEventListener('mousedown', pageClick);
      window.removeEventListener('touchstart', pageClick);
    };
  }, []);
  const onKeyDown = useCallback(
    (key: string) => {
      const FILTERS = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
      if (FILTERS.indexOf(key) >= 0) {
        return;
      }
      if (type === DEFAULT_TYPES.NUMBER && key.toLowerCase() === 'e') {
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
  // useEffect(() => {
  //   $component.current.addEventListener('keydown', keypressHandler, false);
  //   $component.current.addEventListener('keypress', keypressHandler, false);
  //   return () => {
  //     $component.current.removeEventListener('keydown', keypressHandler);
  //     $component.current.removeEventListener('keypress', keypressHandler);
  //   };
  // }, [type]);
  useEffect(() => {
    setCode(getCased(value, letterCase));
  }, [value, letterCase]);
  useEffect(() => {
    document.getElementById(id).removeAttribute('value');
  });
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
      const newCode = res === 'Backspace' ? code.substring(0, code.length - 1) : `${code}${v}`;
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
    if (type === DEFAULT_TYPES.NUMBER) {
      res['type'] = 'number';
      res['pattern'] = '[0-9]*';
    }
    return res;
  }, [type]);
  return (
    <div
      ref={$component}
      className={cx(CSS['component'], getClassName('component'), disabled && CSS['disabled'], disabled && getClassName('disabled'), classNameComponent)}
      style={customStyleComponent}
    >
      <div ref={wrapperRef} className={cx(CSS['wrapper'], getClassName('wrapper'), classNameWrapper)} style={customStyleWrapper}>
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
                for (let index = 0; index < DEFAULT_CODES.length; index += 1) {
                  document.getElementById(`${id}${index}`).classList.remove(CSS['active']);
                }
                let focusedIndex = -1;
                for (let index = 0; index < DEFAULT_CODES.length; index += 1) {
                  if (typeof code[index] === 'undefined') {
                    document.getElementById(`${id}${index}`).click();
                    focusedIndex = index;
                    break;
                  }
                }
                if (document.getElementById(`${id}${focusedIndex}`)) {
                  document.getElementById(`${id}${focusedIndex}`).classList.add(CSS['active']);
                } else {
                  document.getElementById(`${id}${DEFAULT_CODES.length - 1}`).classList.add(CSS['active']);
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
        type="password"
        value={code}
        disabled={disabled}
        maxLength={DEFAULT_CODES.length}
        onChange={() => {}}
        onFocus={handleOnCodeFocus}
        onBlur={handleOnCodeBlur}
        onKeyDown={e => {
          setPressKey({ key: e.key });
        }}
        style={{
          position: 'absolute',
          opacity: '0',
          marginLeft: '-999px',
        }}
        {...attributes}
      />
    </div>
  );
};

export default ReactCodesInput;
