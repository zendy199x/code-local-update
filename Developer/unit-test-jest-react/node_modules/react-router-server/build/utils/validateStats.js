'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (stats) {
  if (typeof stats === 'undefined' || !stats || !stats.modules || Object.prototype.toString.call(stats.modules) !== '[object Array]' || !stats.chunks || Object.prototype.toString.call(stats.chunks) !== '[object Array]' || !stats.entrypoints || _typeof(stats.entrypoints) !== 'object') throw new Error('Stats is malformed.');
};