'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cache = require('../module/cache');

var _preload = require('../module/preload');

var _load = require('../module/load');

var _load2 = _interopRequireDefault(_load);

var _isNode = require('../utils/isNode');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Module = (_temp2 = _class = function (_Component) {
  _inherits(Module, _Component);

  function Module() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Module);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Module.__proto__ || Object.getPrototypeOf(Module)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      module: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Module, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var reactRouterServerAsyncRenderer = this.context.reactRouterServerAsyncRenderer;

      this._componentIsMounted = true;

      if ((0, _isNode2.default)()) {
        // running on server
        if ((0, _cache.exists)(module, this.props.module)) {
          var _fetch = (0, _cache.fetch)(module, this.props.module),
              info = _fetch.info,
              loadedModule = _fetch.loadedModule;

          if (reactRouterServerAsyncRenderer) reactRouterServerAsyncRenderer.finishLoadingModule(info, loadedModule);
          this.setState({ module: loadedModule });
        } else {
          if (reactRouterServerAsyncRenderer) reactRouterServerAsyncRenderer.startLoadingModule();
          (0, _load2.default)(module, this.props.module)(this.props.module()).then(function (_ref2) {
            var info = _ref2.info,
                loadedModule = _ref2.module;

            (0, _cache.add)(module, _this2.props.module, { info: info, loadedModule: loadedModule });
            if (reactRouterServerAsyncRenderer) reactRouterServerAsyncRenderer.finishLoadingModule(info, loadedModule);
          });
        }
      } else {
        // running on client
        if ((0, _preload.exists)(module, this.props.module)) {
          if (this._componentIsMounted) {
            this.setState({ module: (0, _preload.fetch)(module, this.props.module) });
          }
        } else {
          (0, _load2.default)(module, this.props.module)(this.props.module()).then(function (_ref3) {
            var info = _ref3.info,
                loadedModule = _ref3.module;

            (0, _cache.add)(module, _this2.props.module, { info: info, loadedModule: loadedModule });
            if (_this2._componentIsMounted) {
              _this2.setState({ module: loadedModule });
            }
          });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._componentIsMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var module = this.state.module;

      return children(module);
    }
  }]);

  return Module;
}(_react.Component), _class.propTypes = {
  module: function module() {
    return null;
  },
  children: function children() {
    return null;
  }
}, _class.contextTypes = {
  reactRouterServerAsyncRenderer: function reactRouterServerAsyncRenderer() {
    return null;
  }
}, _temp2);
exports.default = Module;