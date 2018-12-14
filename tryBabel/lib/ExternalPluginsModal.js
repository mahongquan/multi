"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _dom = require("react-instantsearch/es/dom");

var _ExternalPluginsSearchBox = _interopRequireDefault(require("./ExternalPluginsSearchBox"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\ExternalPluginsModal.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const config = {
  apiKey: "1f0cc4b7da241f62651b85531d788fbd",
  appId: "OFCNCOG2CU",
  indexName: "npm-search"
};

class ExternalPluginsModal extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      officialOnly: false
    });

    _defineProperty(this, "_input", void 0);

    _defineProperty(this, "handleSelectPlugin", hit => {
      this.props.onPluginSelect(hit);
      this.props.onClose();
    });

    _defineProperty(this, "handleOfficialOnlyToggle", () => {
      this.setState(({
        officialOnly
      }) => ({
        officialOnly: !officialOnly
      }));
    });

    _defineProperty(this, "renderHit", ({
      hit
    }) => {
      return _react.default.createElement("div", {
        className: styles.item,
        key: hit.name,
        onClick: () => this.handleSelectPlugin(hit),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react.default.createElement("div", {
        className: styles.itemName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react.default.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, hit.name, _react.default.createElement("span", {
        className: styles.itemMeta,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "v", hit.version)), _react.default.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, hit.description), _react.default.createElement("div", {
        className: styles.itemOwner,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement("img", {
        src: hit.owner.avatar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), hit.owner.name)));
    });
  }

  componentDidMount() {
    if (this._input) {
      this._input.focus();
    }
  }

  render() {
    const {
      onClose,
      plugins
    } = this.props;
    const {
      officialOnly
    } = this.state;
    let filters = "computedKeywords:babel-plugin";

    if (officialOnly) {
      filters += " AND owner.name:babel";
    }

    if (plugins.length) {
      plugins.forEach(p => filters += ` AND NOT objectID:${p}`);
    }

    return _react.default.createElement(_Modal.default, {
      onClose: onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }, _react.default.createElement("div", {
      className: styles.modalContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    }, _react.default.createElement(_dom.InstantSearch, {
      apiKey: config.apiKey,
      appId: config.appId,
      indexName: config.indexName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      }
    }, _react.default.createElement(_dom.Configure, {
      hitsPerPage: 5,
      attributesToRetrieve: ["name", "version", "description", "owner"],
      attributesToHighlight: ["name"],
      filters: filters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      }
    }), _react.default.createElement("div", {
      className: styles.modalSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      }
    }, _react.default.createElement(_ExternalPluginsSearchBox.default, {
      inputRef: x => this._input = x,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      }
    }), _react.default.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      }
    }, _react.default.createElement("input", {
      checked: officialOnly,
      onChange: this.handleOfficialOnlyToggle,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      }
    }), "Only official plugins")), _react.default.createElement(_dom.Pagination, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      }
    }), _react.default.createElement(_dom.Hits, {
      hitComponent: this.renderHit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      }
    }), _react.default.createElement("div", {
      className: styles.modalFooter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      }
    }, _react.default.createElement(_dom.PoweredBy, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    })))));
  }

}

exports.default = ExternalPluginsModal;
const styles = {
  modalContent: _emotion.css`
    background: #22252b;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 50px;
    color: #9ea5b3;
    margin: 0;
    width: auto;

    ${_styles.media.mediumAndUp} {
      margin: 40px auto;
      width: 650px;
    }

    .ais-Pagination {
      background: ${_styles.colors.inverseBackgroundLight};
      color: #9ea5b3;
      display: flex;
      padding: 0.5rem 0;
      text-align: center;
    }

    .ais-Pagination-list {
      display: flex;
      margin: 0 auto;
    }

    .ais-Pagination-item--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .ais-Pagination-item {
      display: inline-block;
      border-radius: 4px;
      font-size: 0.875rem;
      padding: 3px;
      text-align: center;
      transition: all 0.3s ease;
      width: 28px;

      a {
        color: ${_styles.colors.inverseForegroundLight};
      }
    }

    .ais-Pagination-item--selected {
      background: #f1da6b;
      font-weight: 400;

      a {
        color: ${_styles.colors.inverseBackgroundDark};
      }
    }
  `,
  modalFooter: _emotion.css`
    background: ${_styles.colors.inverseBackgroundDark};
    display: flex;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;

    .ais-PoweredBy {
      align-items: center;
      display: flex;
      margin-left: auto;
    }

    .ais-PoweredBy-link {
      align-items: center;
      display: flex;
      margin-left: 0.5rem;
    }

    .ais-PoweredBy-logo {
      height: 20px;
      width: 74px;

      path:last-child {
        fill: #fff !important;
      }
    }
  `,
  modalSearch: _emotion.css`
    align-items: center;
    display: flex;

    label {
      align-items: center;
      display: flex;
      flex: 0 0 165px;
      font-size: 0.875rem;
      padding-left: 1rem;
      user-select: none;

      input {
        margin: 0 0.5rem 0 0;
      }
    }
  `,
  item: (0, _emotion.css)({
    alignItems: "center",
    borderBottom: `1px solid ${_styles.colors.inverseBackgroundDark}`,
    cursor: "pointer",
    display: "flex",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    transition: "all 0.25s ease-out",
    "&:hover": {
      backgroundColor: "#455569"
    }
  }),
  itemName: _emotion.css`
    flex: 1;

    strong {
      color: #fff;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.5;
      margin-top: 0.5rem;
      padding-right: 2rem;
    }
  `,
  itemMeta: _emotion.css`
    align-items: center;
    background: #2b2d34;
    border-radius: 0.5rem;
    color: #9ea5b3;
    display: inline-flex;
    flex: 0 0 65px;
    font-size: 0.65rem;
    justify-content: center;
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem;
    text-align: center;
  `,
  itemOwner: _emotion.css`
    align-items: center;
    display: flex;
    font-size: 0.7rem;
    margin-top: 0.5rem;

    img {
      height: 30px;
      margin-right: 0.5rem;
    }
  `
};