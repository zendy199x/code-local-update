'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (currentModule, load) {
  var nextInfo = (0, _info2.default)(currentModule, load);
  return function (load) {
    return load.then(function (loadedModule) {
      var info = nextInfo();
      return { info: info, module: loadedModule };
    });
  };
};