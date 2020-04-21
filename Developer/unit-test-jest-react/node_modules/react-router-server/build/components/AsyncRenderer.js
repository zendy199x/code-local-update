'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncRenderer = (_temp = _class = function (_Component) {
  _inherits(AsyncRenderer, _Component);

  function AsyncRenderer(props) {
    _classCallCheck(this, AsyncRenderer);

    var _this = _possibleConstructorReturn(this, (AsyncRenderer.__proto__ || Object.getPrototypeOf(AsyncRenderer)).call(this));

    _this.fetchStateResults = {};
    _this.fetchStateHasFinished = {};
    _this.finishedLoadingModules = true;

    _this.getChildContext = function () {
      return {
        reactRouterServerAsyncRenderer: _this
      };
    };

    _this.fetchStateIndex = 0;
    _this.fetchStateIndexes = {};

    _this.getFetchStateIndex = function (parentIndex) {
      if (typeof parentIndex !== 'undefined' && parentIndex !== undefined && parentIndex !== null) {
        if (!_this.fetchStateIndexes[parentIndex]) _this.fetchStateIndexes[parentIndex] = 1;else _this.fetchStateIndexes[parentIndex]++;
        return parentIndex + '.' + _this.fetchStateIndexes[parentIndex];
      }
      _this.fetchStateIndex++;
      return _this.fetchStateIndex + '';
    };

    _this.hasFetchStateResult = function (index) {
      return _this.fetchStateHasFinished[index] === true;
    };

    _this.getFetchStateResult = function (index) {
      return _this.fetchStateResults[index];
    };

    _this.startFetchState = function () {
      _this.props.context.hasStates = true;
      if (_this.props.context.fetchingStates === undefined) _this.props.context.fetchingStates = 1;else _this.props.context.fetchingStates++;
    };

    _this.finishFetchState = function (index, result) {
      _this.fetchStateHasFinished[index] = true;
      _this.fetchStateResults[index] = result;

      _this.props.context.fetchingStates--;
      if (_this.props.context.fetchingStates <= 0 && _this.props.context.modulesLoading <= 0 && (!_this.props.context.hasModules || _this.props.context.statesRenderPass)) {
        _this.props.context.fetchStateResults = _this.fetchStateResults;
        _this.props.context.callback();
      }
    };

    _this.startLoadingModule = function () {
      _this.props.context.hasModules = true;
      _this.props.context.finishedLoadingModules = false;
      if (_this.props.context.modulesLoading === undefined) _this.props.context.modulesLoading = 1;else _this.props.context.modulesLoading++;
    };

    _this.finishLoadingModule = function (info, module) {
      _this.props.context.modulesLoading--;
      if (_this.props.context.modules === undefined) _this.props.context.modules = [];
      _this.props.context.modules.push({ info: info, module: module });

      if (_this.props.context.modulesLoading <= 0 && !_this.props.context.finishedLoadingModules) {
        _this.props.context.finishedLoadingModules = true;
        _this.props.context.callback();
      }
    };

    if (props.context.fetchStateResults) {
      _this.fetchStateResults = _extends({}, props.context.fetchStateResults);
      for (var prop in _this.fetchStateResults) {
        if (_this.fetchStateResults.hasOwnProperty(prop)) {
          _this.fetchStateHasFinished[prop] = true;
        }
      }
    }
    return _this;
  }

  _createClass(AsyncRenderer, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AsyncRenderer;
}(_react.Component), _class.propTypes = {
  context: function context() {
    return null;
  }
}, _class.childContextTypes = {
  reactRouterServerAsyncRenderer: function reactRouterServerAsyncRenderer() {
    return null;
  }
}, _temp);
exports.default = AsyncRenderer;