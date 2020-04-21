'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var stack = [];
  return array.filter(function (item) {
    if (item.info.type === 'webpack') {
      var result = stack.indexOf(item.info.id);
      if (result === -1) {
        stack.push(item.info.id);
        return true;
      }
    } else {
      var _result = stack.indexOf(item.info.filename);
      if (_result === -1) {
        stack.push(item.info.filename);
        return true;
      }
    }
    return false;
  });
};