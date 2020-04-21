'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoFromSystemImportTransformer = exports.infoFromWebpack = exports.getWebpackId = exports.isSystemImportTransformer = exports.isWebpack = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dirname = require('../utils/dirname');

var _dirname2 = _interopRequireDefault(_dirname);

var _join = require('../utils/join');

var _join2 = _interopRequireDefault(_join);

var _caller = require('../utils/caller');

var _caller2 = _interopRequireDefault(_caller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWebpack = exports.isWebpack = function isWebpack(loadFunc) {
  return loadFunc.match(/\/\* System\.import \*\/\(([^\)]*)\)/) ||
  // webpack minimized
  loadFunc.match(/function[^}]*return[^}]*[a-zA-Z]\.[a-zA-Z]\([0-9]*\)\.then\([a-zA-Z]\.bind\(null, ?[0-9]*\)/) ||
  // webpack minimized - arrow function
  loadFunc.match(/\(\)=>[a-zA-Z]\.[a-zA-Z]\([0-9]*\)\.then\([a-zA-Z]\.bind\(null, ?[0-9]*\)/) ||
  // webpack normal
  loadFunc.match(/__webpack_require__/) ||
  // webpack normal
  loadFunc.match(/r\.require\.loader/) ? true : false;
};

var isSystemImportTransformer = exports.isSystemImportTransformer = function isSystemImportTransformer(loadFunc) {
  return loadFunc.match(/ImportTransformer/) ? true : false;
};

var getWebpackId = exports.getWebpackId = function getWebpackId(loadFunc) {
  var matches = loadFunc.match(/\/\* System\.import \*\/\(([^\)]*)\)/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  // webpack minimized
  matches = loadFunc.match(/function[^}]*return[^}]*[a-zA-Z]\.[a-zA-Z]\(([0-9]*)\)\.then\([a-zA-Z]\.bind\(null, ?[0-9]*\)/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  // webpack normal
  matches = loadFunc.match(/function[^}]*return[^}]*\(([0-9]*)\).then/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  // webpack normal - arrow function
  matches = loadFunc.match(/\(\)\s=>\s.*\(([0-9]*)\).then/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  // system import
  matches = loadFunc.match(/__webpack_require__\(\(?([0-9]*)\)?\)\)/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  // system import minimized
  matches = loadFunc.match(/Promise\.resolve\(n\(([0-9]*)\)\)/);
  if ((typeof matches === 'undefined' ? 'undefined' : _typeof(matches)) === 'object' && matches !== null && typeof matches[1] !== 'undefined') {
    return matches[1];
  }
  return null;
};

var infoFromWebpack = exports.infoFromWebpack = function infoFromWebpack(loadFunc) {
  return {
    id: getWebpackId(loadFunc)
  };
};

var infoFromSystemImportTransformer = exports.infoFromSystemImportTransformer = function infoFromSystemImportTransformer(loadFunc, module) {
  var matches = loadFunc.match(/require\(([^)\]]*)/);
  var file = matches[1].replace(/[\[\('"\\]*/g, '');
  var parent = void 0;
  try {
    parent = (0, _caller2.default)()[0].getFileName();
  } catch (err) {}
  if (!parent && module && typeof module.parent !== 'undefined' && typeof module.parent.filename !== 'undefined') {
    parent = module.parent.filename;
  }
  return {
    filename: (0, _join2.default)((0, _dirname2.default)(parent), file),
    id: getWebpackId(loadFunc)
  };
};

exports.default = function (currentModule, loadFunc) {
  loadFunc = loadFunc.toString();
  var finalModule = {};
  if (isSystemImportTransformer(loadFunc)) {
    finalModule = _extends({
      type: 'systemImportTransformer'
    }, finalModule, infoFromSystemImportTransformer(loadFunc, currentModule));
  } else if (isWebpack(loadFunc)) {
    finalModule = _extends({
      type: 'webpack'
    }, finalModule, infoFromWebpack(loadFunc));
  }

  return function () {
    return finalModule;
  };
};