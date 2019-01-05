"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\TimeTravelSlider.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TimeTravelSlider extends _react.default.Component {
  render() {
    const {
      transitions,
      currentTransition
    } = this.props; //if (!transitions.length) return null;

    return _react.default.createElement("div", {
      className: styles.sliderWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react.default.createElement("div", {
      className: styles.sliderRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, transitions && transitions.map((transition, i) => _react.default.createElement("div", {
      className: styles.silderBox,
      key: `${i}-transition`,
      onMouseEnter: this.props.selectTransition(transition),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, i == 0 ? "Original" : i))), _react.default.createElement(StatusBar, {
      pluginAlias: currentTransition.pluginAlias,
      visitorType: currentTransition.visitorType,
      currentNode: currentTransition.currentNode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }));
  }

}

const StatusBar = ({
  pluginAlias = "",
  visitorType = "",
  currentNode = ""
}) => {
  return _react.default.createElement("div", {
    className: styles.statusBar,
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react.default.createElement("div", {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Current Plugin:", _react.default.createElement("span", {
    className: styles.option,
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, `${pluginAlias}`)), _react.default.createElement("div", {
    className: styles.info,
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Current Visitor:", _react.default.createElement("span", {
    className: styles.option,
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, `${currentNode} ${visitorType}`)));
};

var _default = TimeTravelSlider;
exports.default = _default;
const styles = {
  sliderWrapper: (0, _emotion.css)({
    height: "15%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: _styles.colors.inverseBackgroundDark
  }),
  sliderRow: (0, _emotion.css)({
    display: "flex",
    flex: "1 auto",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "stretch",
    width: "100%",
    position: "relative",
    background: _styles.colors.inverseBackground,
    padding: "0 0.25rem"
  }),
  silderBox: (0, _emotion.css)({
    flex: 1,
    width: 0,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "0.5rem 0.25rem",
    background: _styles.colors.inverseBackgroundLight,
    color: _styles.colors.inverseForegroundLight,
    fontSize: "0.65rem",
    transition: "background-color 250ms ease-in-out, color 250ms ease-in-out",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: _styles.colors.inverseBackgroundDark
    }
  }),
  info: (0, _emotion.css)({
    marginLeft: "30px"
  }),
  statusBar: (0, _emotion.css)({
    display: "flex",
    flexDirection: "row",
    padding: "0.625rem 0.9375rem",
    justifyContent: "flex-start",
    margin: 0,
    fontFamily: "monospace",
    fontSize: "0.75rem",
    fontWeight: "normal",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    backgroundColor: _styles.colors.inverseBackgroundDark,
    color: _styles.colors.inverseForegroundLight
  }),
  option: (0, _emotion.css)({
    color: _styles.colors.infoBorder,
    paddingLeft: "10px"
  })
};