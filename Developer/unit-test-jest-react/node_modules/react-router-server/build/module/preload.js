'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exports.fetch = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _info = require('./info');

var pool = {};

var signature = function signature(module, systemImport) {
  return (0, _info.getWebpackId)(systemImport.toString());
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

var loadScript = function loadScript(url) {
  return new Promise(function (resolve) {
    if (!url.match(/\.map$/)) {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/' + url.replace(/^\//, '');
      script.onreadystatechange = resolve(script);
      script.onload = resolve(script);
      head.appendChild(script);
    } else {
      resolve(null);
    }
  });
};

var fetchModuleInformation = function fetchModuleInformation(modules) {
  return new Promise(function (resolve) {
    var prevWebpackJsonp = webpackJsonp;
    var finalModules = {};
    var fileLoading = 0;
    var scripts = [];

    var finish = function finish() {
      scripts.forEach(function (script) {
        return script.parentElement.removeChild(script);
      });
      webpackJsonp = prevWebpackJsonp;
      resolve(finalModules);
    };

    webpackJsonp = function webpackJsonp(ids, modules) {
      var index = -1;
      for (var prop in modules) {
        if (modules.hasOwnProperty(prop)) {
          index++;
          if (typeof ids[index] !== 'undefined') {
            finalModules[ids[index]] = prop;
          }
        }
      }
      if (fileLoading === 0) {
        finish();
      }
    };

    modules.forEach(function (module) {
      module.files.forEach(function (file) {
        fileLoading++;
        loadScript(file).then(function (script) {
          fileLoading--;
          if (script) scripts.push(script);
        });
      });
    });
  });
};

var loadWebpackModules = function loadWebpackModules(modules) {
  return new Promise(function (resolve) {
    var moduleLoading = 0;

    var _loop = function _loop(prop) {
      if (modules.hasOwnProperty(prop)) {
        moduleLoading++;
        __webpack_require__.e(prop).then(__webpack_require__.bind(null, modules[prop])).then(function (m) {
          moduleLoading--;
          pool[prop] = m;
          if (moduleLoading === 0) {
            resolve(pool);
          }
        });
      }
    };

    for (var prop in modules) {
      _loop(prop);
    }
  });
};

exports.default = function (modules) {
  return new Promise(function (resolve) {
    if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) !== 'object' || Object.prototype.toString.call(modules) !== '[object Array]' || modules.length < 1) {
      return resolve([]);
    }

    fetchModuleInformation(modules).then(loadWebpackModules).then(resolve);
  });
};