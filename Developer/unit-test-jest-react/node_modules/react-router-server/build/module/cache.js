'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.all = exports.exists = exports.fetch = exports.add = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _info = require('./info');

var _utils = require('../utils');

var pool = {};
var signature = function signature(module, systemImport) {
  var loadFunc = systemImport.toString();
  if ((0, _info.isWebpack)(loadFunc) && (0, _info.isSystemImportTransformer)(loadFunc)) {
    var parent = (0, _utils.dirname)((0, _utils.caller)()[0].getFileName());
    var id = (0, _info.getWebpackId)(loadFunc);
    return parent + '_' + id;
  } else if ((0, _info.isWebpack)(loadFunc)) {
    return (0, _info.getWebpackId)(loadFunc);
  }
  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.parent) === 'object' && typeof module.parent.id !== 'undefined') {
    return (module.parent.id + '_' + systemImport.toString()).replace(/[\(\)]/g, '_').replace(/[^0-9a-zA-Z\/_\\]/g, '');
  }
  return null;
};
var add = exports.add = function add(module, systemImport, result) {
  var key = signature(module, systemImport);
  if (key !== null) pool[key] = result;
};
var fetch = exports.fetch = function fetch(module, systemImport) {
  var key = signature(module, systemImport);
  if (key !== null && typeof pool[key] !== 'undefined') return pool[key];
  return null;
};
var exists = exports.exists = function exists(module, systemImport) {
  var key = signature(module, systemImport);
  return key !== null && typeof pool[key] !== 'undefined';
};
var all = exports.all = function all() {
  return pool;
};
var clear = exports.clear = function clear() {
  for (var prop in pool) {
    if (pool.hasOwnProperty(prop)) {
      delete pool[prop];
    }
  }
};