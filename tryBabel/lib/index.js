"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Repl = _interopRequireDefault(require("./Repl"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_Repl.default, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}), document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}