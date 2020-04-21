'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var indexOfSlash = __dirname.indexOf('/');
  var indexOfBackslash = __dirname.indexOf('\\');
  var separator = void 0;
  if (indexOfBackslash === -1 || indexOfSlash > indexOfBackslash) {
    separator = '/';
    paths = paths.map(function (path) {
      return path.replace(/^\.\//, '/').replace(/\/$/, '').replace(/^\//, '');
    });
  } else {
    separator = '\\';
    paths = paths.map(function (path) {
      return path.replace(/^\.\\/, '\\').replace(/\\$/, '').replace(/^\\/, '');
    });
  }
  return separator + paths.join(separator);
};