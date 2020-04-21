'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerStateProvider = (_temp2 = _class = function (_Component) {
  _inherits(ServerStateProvider, _Component);

  function ServerStateProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ServerStateProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ServerStateProvider.__proto__ || Object.getPrototypeOf(ServerStateProvider)).call.apply(_ref, [this].concat(args))), _this), _this.fetchStateIndex = 0, _this.fetchStateChildrenIndex = {}, _this.getState = function (index) {
      if (_this.props.state && _this.props.state[index]) {
        var state = _this.props.state[index];
        delete _this.props.state[index];
        return state;
      }
      return {};
    }, _this.getFetchStateIndex = function (parentIndex) {
      if (typeof parentIndex !== 'undefined' && parentIndex !== undefined && parentIndex !== null) {
        if (!_this.fetchStateChildrenIndex[parentIndex]) _this.fetchStateChildrenIndex[parentIndex] = 1;else _this.fetchStateChildrenIndex[parentIndex] = _this.fetchStateChildrenIndex[parentIndex] + 1;
        return parentIndex + '.' + _this.fetchStateChildrenIndex[parentIndex];
      }
      _this.fetchStateIndex = _this.fetchStateIndex + 1;
      return _this.fetchStateIndex + '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ServerStateProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        reactRouterServerServerState: {
          getState: this.getState,
          getFetchStateIndex: this.getFetchStateIndex
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ServerStateProvider;
}(_react.Component), _class.propTypes = {
  state: function state() {
    return null;
  },
  children: function children() {
    return null;
  }
}, _class.childContextTypes = {
  reactRouterServerServerState: function reactRouterServerServerState() {
    return null;
  }
}, _temp2);
exports.default = ServerStateProvider;