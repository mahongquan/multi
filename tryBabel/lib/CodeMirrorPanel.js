"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CodeMirrorPanel;

var _emotion = require("emotion");

var _CodeMirror = _interopRequireDefault(require("./CodeMirror"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\CodeMirrorPanel.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeMirrorPanel(props) {
  const {
    className = "",
    errorMessage,
    fileSize,
    info,
    onChange,
    options
  } = props;
  return _react.default.createElement("div", {
    className: `${styles.panel} ${className}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react.default.createElement("div", {
    className: styles.codeMirror,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react.default.createElement(_CodeMirror.default, {
    onChange: onChange,
    options: { ...props.options,
      readOnly: onChange == null
    },
    placeholder: props.placeholder,
    preserveScrollPosition: onChange == null,
    value: props.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), options.fileSize && _react.default.createElement("div", {
    className: styles.fileSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, fileSize)), info && _react.default.createElement("pre", {
    className: styles.info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, info), errorMessage && _react.default.createElement("pre", {
    className: styles.error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, errorMessage));
}

const sharedBoxStyles = {
  flex: "0 0 auto",
  maxHeight: "33%",
  overflow: "auto",
  margin: 0,
  padding: "0.5rem 0.75rem",
  fontFamily: "monospace",
  whiteSpace: "pre-wrap",
  "-webkit-overflow-scrolling": "touch"
};
const styles = {
  codeMirror: (0, _emotion.css)({
    display: "block",
    height: "100%",
    width: "100%",
    overflow: "auto",
    position: "relative"
  }),
  error: (0, _emotion.css)({
    order: 2,
    backgroundColor: _styles.colors.errorBackground,
    borderTop: `1px solid ${_styles.colors.errorBorder}`,
    color: _styles.colors.errorForeground,
    ...sharedBoxStyles
  }),
  info: (0, _emotion.css)({
    order: 1,
    backgroundColor: _styles.colors.infoBackground,
    borderTop: `1px solid ${_styles.colors.infoBorder}`,
    color: _styles.colors.infoForeground,
    ...sharedBoxStyles
  }),
  panel: (0, _emotion.css)({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    overflow: "auto"
  }),
  fileSize: (0, _emotion.css)({
    position: "absolute",
    bottom: "1rem",
    right: "2rem",
    zIndex: 2,
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "rgba(225, 225, 225, 0.75)",
    color: "rgba(0, 0, 0, 0.5)",
    border: "0"
  })
};