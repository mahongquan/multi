"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\Svg.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Svg = ({
  className,
  path,
  ...rest
}) => _react.default.createElement("svg", _extends({
  className: `${styles.svg} ${className}`,
  viewBox: "0 0 24 24"
}, rest, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}), _react.default.createElement("path", {
  className: styles.path,
  d: path,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}));

const styles = {
  svg: (0, _emotion.css)({
    height: "1rem",
    width: "1rem"
  }),
  path: (0, _emotion.css)({
    fill: "currentColor"
  })
};
var _default = Svg;
exports.default = _default;