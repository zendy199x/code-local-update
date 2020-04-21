'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderPass = require('./renderPass');

var _renderPass2 = _interopRequireDefault(_renderPass);

var _cache = require('../module/cache');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element) {
  return new Promise(function (resolve, reject) {
    (0, _cache.clear)();
    var context = {
      resolve: resolve, reject: reject,
      modulesLoading: 0,
      fetchingStates: 0
    };
    (0, _renderPass2.default)(context, element);
  });
};