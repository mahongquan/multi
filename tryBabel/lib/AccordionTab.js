"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var React = _interopRequireWildcard(require("react"));

var _Svg = _interopRequireDefault(require("./Svg"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\AccordionTab.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AccordionTab extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleToggle", () => {
      this.props.onToggleExpanded(this.props.tabKey);
    });
  }

  render() {
    const {
      children,
      className,
      isExpanded,
      label
    } = this.props;
    return React.createElement("div", {
      className: `${styles.AccordionTab} ${className || ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, React.createElement("div", {
      className: styles.HeaderRow,
      onClick: this.handleToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, React.createElement(_Svg.default, {
      className: `${styles.Arrow} ${isExpanded ? styles.ArrowExpanded : ""}`,
      path: "\r M15.41,16.58\r L10.83,12\r L15.41,7.41\r L14,6\r L8,12\r L14,18\r L15.41,16.58\r Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }), React.createElement("div", {
      className: styles.Label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, label)), isExpanded && React.createElement("div", {
      className: styles.Content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, children));
  }

}

exports.default = AccordionTab;
const styles = {
  AccordionTab: (0, _emotion.css)({
    flex: "1 0 1.5rem",
    cursor: "default",
    borderBottom: `1px solid ${_styles.colors.inverseBackgroundDark}`,
    userSelect: "none",
    [_styles.media.medium]: {
      borderRight: `1px solid ${_styles.colors.inverseBackgroundDark}`
    }
  }),
  HeaderRow: (0, _emotion.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0.625rem 0.9375rem",
    transition: "background-color 250ms ease-in-out, color 250ms ease-in-out",
    color: _styles.colors.inverseForegroundLight,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: _styles.colors.inverseBackgroundLight,
      color: _styles.colors.inverseForeground
    }
  }),
  Label: (0, _emotion.css)({
    flex: "1",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase"
  }),
  Arrow: (0, _emotion.css)({
    height: "1rem",
    margin: "0 0.33rem 0 0",
    transform: "rotateZ(180deg)",
    transition: "transform 250ms ease-in-out",
    width: "1rem"
  }),
  ArrowExpanded: (0, _emotion.css)({
    transform: "rotateZ(270deg)"
  }),
  Content: (0, _emotion.css)({
    display: "flex",
    flexDirection: "column",
    padding: "0rem 0.5rem 0.5rem"
  })
};