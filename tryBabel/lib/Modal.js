"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\Modal.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Modal extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_node", void 0);

    _defineProperty(this, "_content", void 0);

    _defineProperty(this, "handleKeydown", e => {
      if (e.keyCode ===
      /* esc */
      27) {
        this.props.onClose();
      }
    });

    _defineProperty(this, "handleContentClick", e => {
      if (e.target !== this._content) return;
      this.props.onClose();
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    if (!document.body) return;
    const width = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.width = `${width}px`;
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);

    if (document.body) {
      document.body.style.overflow = "";
      document.body.style.width = "";
    }

    if (this._node && document.body) {
      document.body.removeChild(this._node);
    }

    this._node = null;
    this.props.onClose();
  }

  render() {
    if (!this._node) {
      this._node = document.createElement("div");

      if (document.body) {
        document.body.appendChild(this._node);
      }
    } // eslint-disable-next-line no-unused-vars


    const {
      children,
      onClick,
      onClose,
      ...props
    } = this.props;

    const result = _react.default.createElement(_react.default.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }, _react.default.createElement("div", {
      className: styles.overlay,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }), _react.default.createElement("div", _extends({
      className: styles.content,
      onClick: this.handleContentClick,
      ref: x => this._content = x
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }), children));

    return _reactDom.default.createPortal(result, this._node);
  }

} // STYLES


exports.default = Modal;

_defineProperty(Modal, "defaultProps", {
  onClose: () => {}
});

const modalFadeIn = _emotion.keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const styles = {
  overlay: _emotion.css`
    animation: ${modalFadeIn} 175ms ease 1 forwards;
    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
  `,
  content: _emotion.css`
    animation: ${modalFadeIn} 175ms ease 1 forwards;
    background: transparent;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 10001;
  `
};