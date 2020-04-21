'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
  return (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && Object.prototype.toString.call(process) === '[object process]';
};