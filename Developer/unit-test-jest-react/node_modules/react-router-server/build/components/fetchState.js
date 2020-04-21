'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDone = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNode = require('../utils/isNode');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetchState = function fetchState(mapStateToProps, mapActionsToProps) {
  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(_class, _Component);

      _createClass(_class, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            reactRouterServerFetchStateParentIndex: this.index
          };
        }
      }]);

      function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.actions = function () {
          return {
            done: _this.handleDone
          };
        };

        _this.handleDone = function (data) {
          if ((0, _isNode2.default)()) {
            var asyncRenderer = _this.context.reactRouterServerAsyncRenderer;

            if (asyncRenderer) {
              if (!asyncRenderer.hasFetchStateResult(_this.index)) {
                asyncRenderer.finishFetchState(_this.index, data);
              }
            }
          } else if (_this._componentIsMounted) {
            _this.setState(_extends({}, data));
          }
        };

        _this.state = {};
        return _this;
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this._componentIsMounted = true;
          var _context = this.context,
              asyncRenderer = _context.reactRouterServerAsyncRenderer,
              serverState = _context.reactRouterServerServerState,
              parentIndex = _context.reactRouterServerFetchStateParentIndex;


          if (asyncRenderer) {
            this.index = asyncRenderer.getFetchStateIndex(parentIndex);
            if (!asyncRenderer.hasFetchStateResult(this.index)) {
              asyncRenderer.startFetchState();
            } else {
              this.setState(_extends({}, asyncRenderer.getFetchStateResult(this.index)));
            }
          } else if (serverState) {
            this.index = serverState.getFetchStateIndex(parentIndex);
            var state = serverState.getState(this.index);
            if (state) {
              if (this._componentIsMounted) {
                this.setState(_extends({}, state));
              }
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
          var nextProps = _extends({}, this.props);
          if (mapStateToProps) nextProps = _extends({}, nextProps, mapStateToProps(this.state));
          if (mapActionsToProps) nextProps = _extends({}, nextProps, mapActionsToProps(this.actions()));
          return _react2.default.createElement(WrappedComponent, nextProps);
        }
      }]);

      return _class;
    }(_react.Component), _class.contextTypes = {
      reactRouterServerAsyncRenderer: function reactRouterServerAsyncRenderer() {
        return null;
      },
      reactRouterServerServerState: function reactRouterServerServerState() {
        return null;
      },
      reactRouterServerFetchStateParentIndex: function reactRouterServerFetchStateParentIndex() {
        return null;
      }
    }, _class.childContextTypes = {
      reactRouterServerFetchStateParentIndex: function reactRouterServerFetchStateParentIndex() {
        return null;
      }
    }, _temp;
  };
};

var withDone = exports.withDone = fetchState(null, function (_ref) {
  var done = _ref.done;
  return { done: done };
});

exports.default = fetchState;