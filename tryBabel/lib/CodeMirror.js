"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _codemirror = _interopRequireDefault(require("codemirror"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\CodeMirror.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_CODE_MIRROR_OPTIONS = {
  autoCloseBrackets: true,
  keyMap: "sublime",
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/jsx",
  showCursorWhenSelecting: true,
  styleActiveLine: true,
  tabWidth: 2
};

class ReactCodeMirror extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocused: false
    });

    _defineProperty(this, "_codeMirror", void 0);

    _defineProperty(this, "_textAreaRef", void 0);

    _defineProperty(this, "_onChange", (doc, change) => {
      if (change.origin !== "setValue") {
        this.props.onChange(doc.getValue());
      }
    });

    _defineProperty(this, "_setTextAreaRef", ref => {
      this._textAreaRef = ref;
    });
  }

  componentDidMount() {
    this._codeMirror = _codemirror.default.fromTextArea(this._textAreaRef, { ...DEFAULT_CODE_MIRROR_OPTIONS,
      ...this.props.options
    });

    this._codeMirror.on("change", this._onChange);

    this._codeMirror.setValue(this.props.value || "");
  }

  componentWillUnmount() {
    // is there a lighter-weight way to remove the cm instance?
    if (this._codeMirror) {
      this._codeMirror.toTextArea();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value && this._codeMirror.getValue() !== nextProps.value) {
      if (nextProps.preserveScrollPosition) {
        const prevScrollPosition = this._codeMirror.getScrollInfo();

        this._codeMirror.setValue(nextProps.value);

        this._codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
      } else {
        this._codeMirror.setValue(nextProps.value);
      }
    } else if (!nextProps.value) {
      this._codeMirror.setValue("");
    }

    if (typeof nextProps.options === "object") {
      for (const optionName in nextProps.options) {
        if (nextProps.options.hasOwnProperty(optionName)) {
          this._updateOption(optionName, nextProps.options[optionName]);
        }
      }
    }
  }

  focus() {
    if (this._codeMirror) {
      this._codeMirror.focus();
    }
  }

  render() {
    return _react.default.createElement("textarea", {
      autoComplete: "off",
      autoFocus: this.props.autoFocus,
      defaultValue: this.props.value,
      ref: this._setTextAreaRef,
      placeholder: this.props.placeholder,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    });
  }

  _updateOption(optionName, newValue) {
    const oldValue = this._codeMirror.getOption(optionName);

    if (oldValue !== newValue) {
      this._codeMirror.setOption(optionName, newValue);
    }
  }

}

exports.default = ReactCodeMirror;

_defineProperty(ReactCodeMirror, "defaultProps", {
  autoFocus: false,
  preserveScrollPosition: false,
  // eslint-disable-next-line no-unused-vars
  onChange: value => {}
});

(0, _emotion.injectGlobal)({
  ".CodeMirror": {
    height: "100% !important",
    width: "100% !important",
    "-webkit-overflow-scrolling": "touch"
  },
  ".CodeMirror-lines pre.CodeMirror-placeholder": {
    color: _styles.colors.foregroundLight
  }
});