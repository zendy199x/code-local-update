'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateStats = require('../utils/validateStats');

var _validateStats2 = _interopRequireDefault(_validateStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseWebpack(module, publicPath) {
  return {
    id: module.id,
    files: module.files.map(function (item) {
      return publicPath + item;
    })
  };
}
function parseSystemImportTransformer(module, publicPath) {
  return {
    id: module.id,
    files: [publicPath + module.name]
  };
}

function findModule(module, chunks) {
  var match = chunks.find(function (chunk) {
    return module.info.id == chunk.id;
  });
  if (match) return match;
  for (var i = 0, len = chunks.length; i < len; ++i) {
    if (chunks[i].modules) {
      var _match = findModule(module, chunks[i].modules);
      if (_match) return _match;
    }
  }
  return null;
}

function extractModule(module, stats) {
  if (module.info.type === 'webpack') {
    var match = findModule(module, stats.chunks);
    return match ? parseWebpack(match, stats.publicPath || '') : match;
  } else if (module.info.type === 'systemImportTransformer') {
    var _match2 = findModule(module, stats.chunks);
    return _match2 ? parseSystemImportTransformer(_match2, stats.publicPath || '') : _match2;
  }
}

exports.default = function (modules, stats) {
  (0, _validateStats2.default)(stats);
  if (modules && Object.prototype.toString.call(modules) === '[object Array]') {
    return modules.map(function (module) {
      return extractModule(module, stats);
    });
  }
  return [];
};