"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var React = _interopRequireWildcard(require("react"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\PresetLoadingAnimation.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const PresetLoadingAnimation = ({
  className = "",
  size = 2
}) => React.createElement("div", {
  className: `${className} ${styles.loadingAnimation} ${(0, _emotion.css)({
    height: `${size}rem`
  })}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, React.createElement("div", {
  className: `${styles.loadingTick} ${styles.loadingTick1}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}), React.createElement("div", {
  className: `${styles.loadingTick} ${styles.loadingTick2}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
}), React.createElement("div", {
  className: `${styles.loadingTick} ${styles.loadingTick3}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}), React.createElement("div", {
  className: `${styles.loadingTick} ${styles.loadingTick4}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
}), React.createElement("div", {
  className: `${styles.loadingTick} ${styles.loadingTick5}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  }
}));

var _default = PresetLoadingAnimation;
exports.default = _default;
const bounce = (0, _emotion.keyframes)({
  "0%": {
    transform: "scaleY(0.25)"
  },
  "40%": {
    transform: "scaleY(0.75)"
  },
  "80%": {
    transform: "scaleY(0.25)"
  },
  "100%": {
    transform: "scaleY(0.25)"
  }
});
const styles = {
  loadingAnimation: (0, _emotion.css)({
    display: "flex",
    alignItems: "center",
    marginLeft: "0.5rem"
  }),
  loadingTick: (0, _emotion.css)({
    width: "4px",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.25)",
    display: "inline-block",
    animationName: bounce,
    animationDuration: "1.4s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    marginLeft: "6px"
  }),
  loadingTick1: (0, _emotion.css)({
    animationDelay: 0,
    marginLeft: 0
  }),
  loadingTick2: (0, _emotion.css)({
    animationDelay: "-1.1s"
  }),
  loadingTick3: (0, _emotion.css)({
    animationDelay: "-1.0s"
  }),
  loadingTick4: (0, _emotion.css)({
    animationDelay: "-0.9s"
  }),
  loadingTick5: (0, _emotion.css)({
    animationDelay: "-0.8s"
  })
};