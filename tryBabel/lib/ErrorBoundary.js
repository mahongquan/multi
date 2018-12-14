"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _emotion = require("emotion");

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\ErrorBoundary.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ErrorBoundary extends _react.default.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    if (this.state.error) {
      return _react.default.createElement("div", {
        className: styles.errorBoundary,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "An unexpected error occurred. :(");
    }

    return this.props.children;
  }

}

exports.default = ErrorBoundary;
const styles = {
  errorBoundary: (0, _emotion.css)({
    alignItems: "center",
    background: _styles.colors.inverseBackgroundDark,
    color: _styles.colors.inverseForegroundLight,
    display: "flex",
    height: "100vh",
    justifyContent: "center"
  })
};