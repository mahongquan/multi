"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchBox = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _connectors = require("react-instantsearch/es/connectors");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\ExternalPluginsSearchBox.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SearchBox extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", event => {
      this.props.refine(event.target.value);
    });
  }

  render() {
    return _react.default.createElement("input", {
      className: style,
      onChange: this.handleChange,
      placeholder: "Type in a package name (ex. babel-plugin-lodash)",
      ref: this.props.inputRef,
      type: "text",
      value: this.props.currentRefinement,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    });
  }

}

exports.SearchBox = SearchBox;
const style = _emotion.css`
  background: #191a1f;
  border: 0;
  color: #fff;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;

  &::placeholder {
    color: #9ea5b3;
    opacity: 0.5;
  }
`;
const ConnectedSearchBox = (0, _connectors.connectSearchBox)(SearchBox);
var _default = ConnectedSearchBox;
exports.default = _default;