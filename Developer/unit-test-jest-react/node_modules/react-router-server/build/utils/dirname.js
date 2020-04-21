'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (path) {
  var indexOfSlash = __dirname.indexOf('/');
  var indexOfBackslash = __dirname.indexOf('\\');
  var separator = void 0;
  if (indexOfBackslash === -1 || indexOfSlash > indexOfBackslash) {
    separator = '/';
  } else {
    separator = '\\';
  }
  var parts = path.split(separator);
  parts.pop();
  return parts.join(separator);
};