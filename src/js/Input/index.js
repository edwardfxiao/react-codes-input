import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { cx, getRandomId, getAlphanumeric, getAlpha, getNumeric, getCased, CASE_TYPES } from './utils.js';
import CSS from './react-codes-input.css';
if (!('classList' in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function() {
      var self = this;
      function update(fn) {
        return function(value) {
          var classes = self.className.split(/\s+/g);
          var index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(' ');
        };
      }
      return {
        add: update(function(classes, index, value) {
          if (!~index) classes.push(value);
        }),
        remove: update(function(classes, index) {
          if (~index) classes.splice(index, 1);
        }),
        toggle: update(function(classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function(value) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },
        item: function(i) {
          return self.className.split(/\s+/g)[i] || null;
        },
      };
    },
  });
}
const DEFAULT_ID = getRandomId();
const DEFAULT_CODE_LENGTH = 6;
const DEFAULT_TYPES = ['alphanumeric', 'alpha', 'number'];
const Index = ({
  initialFocus = false,
  wrapperRef,
  codeLength = DEFAULT_CODE_LENGTH,
  id = DEFAULT_ID,
  onChange,
  type = DEFAULT_TYPES[0],
  letterCase = CASE_TYPES[0],
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
}) => {
  const DEFAULT_CODES = useMemo(() => [...Array(codeLength).keys()], []);
  const [code, setCode] = useState(value);
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
  const keypressHandler = useCallback(e => {
    const { keyCode } = e;
    const keyCodeArrowLeft = 37;
    const keyCodeArrowUp = 38;
    const keyCodeArrowRight = 39;
    const keyCodeArrowDown = 40;
    const FILTERS = [keyCodeArrowLeft, keyCodeArrowUp, keyCodeArrowRight, keyCodeArrowDown];
    if (FILTERS.indexOf(keyCode) >= 0) {
      e.preventDefault();
      return;
    }
  }, []);
  useEffect(() => {
    $component.current.addEventListener('keydown', keypressHandler, false);
    $component.current.addEventListener('keypress', keypressHandler, false);
    return () => {
      $component.current.removeEventListener('keydown', keypressHandler);
      $component.current.removeEventListener('keypress', keypressHandler);
    };
  }, []);
  useEffect(
    () => {
      setCode(getCased(value, letterCase));
    },
    [value],
  );
  const handleOnCodeChange = useCallback(() => {
    const res = document.getElementById(id).value;
    let v = '';
    switch (type) {
      case DEFAULT_TYPES[0]:
        v = getAlphanumeric(res);
        break;
      case DEFAULT_TYPES[1]:
        v = getAlpha(res);
        break;
      case DEFAULT_TYPES[2]:
        v = getNumeric(res);
        break;
      default:
        v = getAlphanumeric(res);
        break;
    }
    v = getCased(v, letterCase);
    setCode(v);
    onChange && onChange(v);
  }, []);
  const handleOnCodeFocus = useCallback(e => {
    const $el = e.target;
    $el.selectionStart = $el.value.length;
    setIsFocus(true);
  }, []);
  const handleOnCodeBlur = useCallback(() => {
    setIsFocus(false);
  }, []);
  return (
    <div ref={$component} className={cx(CSS['component'], disabled && CSS['disabled'], classNameComponent)} style={customStyleComponent}>
      <div ref={wrapperRef} className={cx(CSS['wrapper'], classNameWrapper)} style={customStyleWrapper}>
        {DEFAULT_CODES.map((i, k) => {
          const isLastItem = k === DEFAULT_CODES.length - 1 ? true : false;
          const isEntered = typeof code[k] === 'undefined' ? false : true;
          let isActive = false;
          const focusStyle = {};
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
              className={cx(CSS['code-wrapper'], classNameCodeWrapper, isActive && CSS['active'], isEntered && CSS['entered'])}
              style={customStyleCodeWrapper}
            >
              <div className={cx(CSS['entered-value'], classNameEnteredValue, hide && isEntered && CSS['hide'])} style={customStyleEnteredValue}>
                {hide ? '' : code[k]}
              </div>
              <div className={cx(CSS['code'], classNameCode)} style={customStyleCode}>
                <div className={cx(CSS['code-wrapper--focus'], classNameCodeWrapperFocus)} style={{ ...focusStyle, ...customStyleCodeWrapperFocus }} />
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
        onChange={handleOnCodeChange}
        onFocus={handleOnCodeFocus}
        onBlur={handleOnCodeBlur}
        style={{
          position: 'absolute',
          opacity: '0',
          marginLeft: '-999px',
        }}
      />
    </div>
  );
};

export default Index;
