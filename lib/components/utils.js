"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCased = exports.getNumeric = exports.getAlpha = exports.getAlphanumeric = exports.getRandomId = exports.cx = exports.CASE_TYPES = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CASE_TYPES = ['upper', 'lower'];
exports.CASE_TYPES = CASE_TYPES;

var cx = function cx() {
  var classes = [];

  for (var i = 0; i < arguments.length; i += 1) {
    var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!arg) continue;

    var argType = _typeof(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = cx.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};

exports.cx = cx;

var getRandomId = function getRandomId() {
  return Math.random().toString(36).slice(-8);
};

exports.getRandomId = getRandomId;

var getAlphanumeric = function getAlphanumeric(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 122) {
      res += i;
    }
  });
  return res;
};

exports.getAlphanumeric = getAlphanumeric;

var getAlpha = function getAlpha(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
      res += i;
    }
  });
  return res;
};

exports.getAlpha = getAlpha;

var getNumeric = function getNumeric(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
      res += i;
    }
  });
  return res;
};

exports.getNumeric = getNumeric;

var getCased = function getCased(v, type) {
  var index = CASE_TYPES.indexOf(type);

  if (index >= 0) {
    switch (index) {
      case 0:
        return String(v).toUpperCase();

      case 1:
        return String(v).toLowerCase();
    }
  } else {
    return String(v).toUpperCase();
  }
};

exports.getCased = getCased;