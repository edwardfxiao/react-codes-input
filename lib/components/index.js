"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CSS = {
  "component": "react-codes-input__component___29cLK",
  "disabled": "react-codes-input__disabled___2xM3t",
  "code": "react-codes-input__code___pEiUJ",
  "wrapper": "react-codes-input__wrapper___mwAv1",
  "code-wrapper": "react-codes-input__code-wrapper___3gxOo",
  "entered-value": "react-codes-input__entered-value___1Jm5I",
  "hide": "react-codes-input__hide___Dw9Xd",
  "active": "react-codes-input__active___3q51s",
  "code-wrapper--focus": "react-codes-input__code-wrapper--focus___2NfQi",
  "entered": "react-codes-input__entered___331JN",
  "blink-empty": "react-codes-input__blink-empty___2Vexm"
};

if (!('classList' in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function get() {
      var self = this;

      function update(fn) {
        return function (value) {
          var classes = self.className.split(/\s+/g);
          var index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(' ');
        };
      }

      return {
        add: update(function (classes, index, value) {
          if (!~index) classes.push(value);
        }),
        remove: update(function (classes, index) {
          if (~index) classes.splice(index, 1);
        }),
        toggle: update(function (classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function contains(value) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },
        item: function item(i) {
          return self.className.split(/\s+/g)[i] || null;
        }
      };
    }
  });
}

var DEFAULT_ID = (0, _utils.getRandomId)();
var DEFAULT_CODE_LENGTH = 6;
var DEFAULT_TYPES = ['alphanumeric', 'alpha', 'number'];

var Index = function Index(_ref) {
  var _ref$initialFocus = _ref.initialFocus,
      initialFocus = _ref$initialFocus === void 0 ? false : _ref$initialFocus,
      wrapperRef = _ref.wrapperRef,
      _ref$codeLength = _ref.codeLength,
      codeLength = _ref$codeLength === void 0 ? DEFAULT_CODE_LENGTH : _ref$codeLength,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? DEFAULT_ID : _ref$id,
      onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? DEFAULT_TYPES[0] : _ref$type,
      _ref$letterCase = _ref.letterCase,
      letterCase = _ref$letterCase === void 0 ? _utils.CASE_TYPES[0] : _ref$letterCase,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      _ref$focusColor = _ref.focusColor,
      focusColor = _ref$focusColor === void 0 ? '#007bff' : _ref$focusColor,
      _ref$classNameCompone = _ref.classNameComponent,
      classNameComponent = _ref$classNameCompone === void 0 ? '' : _ref$classNameCompone,
      _ref$classNameWrapper = _ref.classNameWrapper,
      classNameWrapper = _ref$classNameWrapper === void 0 ? '' : _ref$classNameWrapper,
      _ref$classNameCodeWra = _ref.classNameCodeWrapper,
      classNameCodeWrapper = _ref$classNameCodeWra === void 0 ? '' : _ref$classNameCodeWra,
      _ref$classNameEntered = _ref.classNameEnteredValue,
      classNameEnteredValue = _ref$classNameEntered === void 0 ? '' : _ref$classNameEntered,
      _ref$classNameCode = _ref.classNameCode,
      classNameCode = _ref$classNameCode === void 0 ? '' : _ref$classNameCode,
      _ref$classNameCodeWra2 = _ref.classNameCodeWrapperFocus,
      classNameCodeWrapperFocus = _ref$classNameCodeWra2 === void 0 ? '' : _ref$classNameCodeWra2,
      _ref$customStyleCompo = _ref.customStyleComponent,
      customStyleComponent = _ref$customStyleCompo === void 0 ? {} : _ref$customStyleCompo,
      _ref$customStyleWrapp = _ref.customStyleWrapper,
      customStyleWrapper = _ref$customStyleWrapp === void 0 ? {} : _ref$customStyleWrapp,
      _ref$customStyleCodeW = _ref.customStyleCodeWrapper,
      customStyleCodeWrapper = _ref$customStyleCodeW === void 0 ? {} : _ref$customStyleCodeW,
      _ref$customStyleEnter = _ref.customStyleEnteredValue,
      customStyleEnteredValue = _ref$customStyleEnter === void 0 ? {} : _ref$customStyleEnter,
      _ref$customStyleCode = _ref.customStyleCode,
      customStyleCode = _ref$customStyleCode === void 0 ? {} : _ref$customStyleCode,
      _ref$customStyleCodeW2 = _ref.customStyleCodeWrapperFocus,
      customStyleCodeWrapperFocus = _ref$customStyleCodeW2 === void 0 ? {} : _ref$customStyleCodeW2;
  var DEFAULT_CODES = (0, _react.useMemo)(function () {
    return _toConsumableArray(Array(codeLength).keys());
  }, []);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocus = _useState4[0],
      setIsFocus = _useState4[1];

  var $component = (0, _react.useRef)(null);
  var pageClick = (0, _react.useCallback)(function (e) {
    if ($component.current.contains(e.target)) {
      return;
    }

    for (var index = 0; index < DEFAULT_CODES.length; index += 1) {
      document.getElementById("".concat(id).concat(index)).classList.remove(CSS['active']);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (initialFocus) {
      document.getElementById("".concat(id, 0)).click();
    }

    window.addEventListener('mousedown', pageClick);
    window.addEventListener('touchstart', pageClick);
    return function () {
      window.removeEventListener('mousedown', pageClick);
      window.removeEventListener('touchstart', pageClick);
    };
  }, []);
  var keypressHandler = (0, _react.useCallback)(function (e) {
    var keyCode = e.keyCode;
    var keyCodeArrowLeft = 37;
    var keyCodeArrowUp = 38;
    var keyCodeArrowRight = 39;
    var keyCodeArrowDown = 40;
    var FILTERS = [keyCodeArrowLeft, keyCodeArrowUp, keyCodeArrowRight, keyCodeArrowDown];

    if (FILTERS.indexOf(keyCode) >= 0) {
      e.preventDefault();
      return;
    }
  }, []);
  (0, _react.useEffect)(function () {
    $component.current.addEventListener('keydown', keypressHandler, false);
    $component.current.addEventListener('keypress', keypressHandler, false);
    return function () {
      $component.current.removeEventListener('keydown', keypressHandler);
      $component.current.removeEventListener('keypress', keypressHandler);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setCode((0, _utils.getCased)(value, letterCase));
  }, [value]);
  var handleOnCodeChange = (0, _react.useCallback)(function () {
    var res = document.getElementById(id).value;
    var v = '';

    switch (type) {
      case DEFAULT_TYPES[0]:
        v = (0, _utils.getAlphanumeric)(res);
        break;

      case DEFAULT_TYPES[1]:
        v = (0, _utils.getAlpha)(res);
        break;

      case DEFAULT_TYPES[2]:
        v = (0, _utils.getNumeric)(res);
        break;

      default:
        v = (0, _utils.getAlphanumeric)(res);
        break;
    }

    v = (0, _utils.getCased)(v, letterCase);
    setCode(v);
    onChange && onChange(v);
  }, []);
  var handleOnCodeFocus = (0, _react.useCallback)(function (e) {
    var $el = e.target;
    $el.selectionStart = $el.value.length;
    setIsFocus(true);
  }, []);
  var handleOnCodeBlur = (0, _react.useCallback)(function () {
    setIsFocus(false);
  }, []);
  return _react["default"].createElement("div", {
    ref: $component,
    className: (0, _utils.cx)(CSS['component'], disabled && CSS['disabled'], classNameComponent),
    style: customStyleComponent
  }, _react["default"].createElement("div", {
    ref: wrapperRef,
    className: (0, _utils.cx)(CSS['wrapper'], classNameWrapper),
    style: customStyleWrapper
  }, DEFAULT_CODES.map(function (i, k) {
    var isLastItem = k === DEFAULT_CODES.length - 1 ? true : false;
    var isEntered = typeof code[k] === 'undefined' ? false : true;
    var isActive = false;
    var focusStyle = {};

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
      focusStyle['border'] = "1px solid ".concat(focusColor);
      focusStyle['boxShadow'] = "0px 0px 5px 0px ".concat(focusColor);
    }

    return _react["default"].createElement("div", {
      key: k,
      id: "".concat(id).concat(k),
      onClick: function onClick() {
        for (var index = 0; index < DEFAULT_CODES.length; index += 1) {
          console.log("".concat(id).concat(index));
          console.log(document.getElementById);
          console.log(document.getElementById("".concat(id).concat(index)));
          document.getElementById("".concat(id).concat(index)).classList.remove(CSS['active']);
        }

        var focusedIndex = -1;

        for (var _index = 0; _index < DEFAULT_CODES.length; _index += 1) {
          if (typeof code[_index] === 'undefined') {
            document.getElementById("".concat(id).concat(_index)).click();
            focusedIndex = _index;
            break;
          }
        }

        if (document.getElementById("".concat(id).concat(focusedIndex))) {
          document.getElementById("".concat(id).concat(focusedIndex)).classList.add(CSS['active']);
        } else {
          document.getElementById("".concat(id).concat(DEFAULT_CODES.length - 1)).classList.add(CSS['active']);
        }

        document.getElementById(id).focus();
      },
      className: (0, _utils.cx)(CSS['code-wrapper'], classNameCodeWrapper, isActive && CSS['active'], isEntered && CSS['entered']),
      style: customStyleCodeWrapper
    }, _react["default"].createElement("div", {
      className: (0, _utils.cx)(CSS['entered-value'], classNameEnteredValue, hide && isEntered && CSS['hide']),
      style: customStyleEnteredValue
    }, hide ? '' : code[k]), _react["default"].createElement("div", {
      className: (0, _utils.cx)(CSS['code'], classNameCode),
      style: customStyleCode
    }, _react["default"].createElement("div", {
      className: (0, _utils.cx)(CSS['code-wrapper--focus'], classNameCodeWrapperFocus),
      style: _objectSpread({}, focusStyle, customStyleCodeWrapperFocus)
    })));
  })), _react["default"].createElement("input", {
    id: id,
    autoComplete: "off",
    type: "password",
    value: code,
    disabled: disabled,
    maxLength: DEFAULT_CODES.length,
    onChange: handleOnCodeChange,
    onFocus: handleOnCodeFocus,
    onBlur: handleOnCodeBlur,
    style: {
      position: 'absolute',
      opacity: '0',
      marginLeft: '-999px'
    }
  }));
};

var _default = Index;
exports["default"] = _default;