'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _AsyncRenderer = require('../components/AsyncRenderer');

var _AsyncRenderer2 = _interopRequireDefault(_AsyncRenderer);

var _removeDuplicateModules = require('../utils/removeDuplicateModules');

var _removeDuplicateModules2 = _interopRequireDefault(_removeDuplicateModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPass = function renderPass(context, element) {
  var staticMarkup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  context.callback = function () {
    if (context.finishedLoadingModules && !context.statesRenderPass) {
      context.statesRenderPass = true;
      context.renderResult = renderPass(context, element, staticMarkup);
      if (context.fetchingStates <= 0 && context.modulesLoading <= 0) {
        context.resolve({
          html: context.renderResult,
          state: context.fetchStateResults === undefined ? null : context.fetchStateResults,
          modules: context.modules === undefined ? null : (0, _removeDuplicateModules2.default)(context.modules)
        });
      }
    } else if (context.finishedLoadingModules && context.statesRenderPass || !context.hasModules) {
      context.renderResult = renderPass(context, element, staticMarkup);
      if (context.fetchingStates <= 0 && context.modulesLoading <= 0) {
        context.resolve({
          html: context.renderResult,
          state: context.fetchStateResults === undefined ? null : context.fetchStateResults,
          modules: context.modules === undefined ? null : (0, _removeDuplicateModules2.default)(context.modules)
        });
      }
    }
  };

  var component = _react2.default.createElement(
    _AsyncRenderer2.default,
    { context: context },
    element
  );

  var result = void 0;
  try {
    if (staticMarkup) {
      result = (0, _server.renderToStaticMarkup)(component);
    } else {
      result = (0, _server.renderToString)(component);
    }
  } catch (e) {
    return context.reject(e);
  }

  if (!context.hasModules && !context.hasStates) {
    context.resolve({
      html: result,
      state: context.fetchStateResults === undefined ? null : context.fetchStateResults,
      modules: context.modules === undefined ? null : (0, _removeDuplicateModules2.default)(context.modules)
    });
  }
  return result;
};

exports.default = renderPass;