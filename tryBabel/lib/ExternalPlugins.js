"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var React = _interopRequireWildcard(require("react"));

var _AccordionTab = _interopRequireDefault(require("./AccordionTab"));

var _ExternalPluginsModal = _interopRequireDefault(require("./ExternalPluginsModal"));

var _PresetLoadingAnimation = _interopRequireDefault(require("./PresetLoadingAnimation"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\ExternalPlugins.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ExternalPlugins extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modalOpen: false
    });

    _defineProperty(this, "handleOpenModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    _defineProperty(this, "handleCloseModal", () => {
      this.setState({
        modalOpen: false
      });
    });
  }

  renderButton() {
    const {
      isLoading
    } = this.props;
    return React.createElement("button", {
      className: currentStyles.modalButton,
      disbled: isLoading,
      onClick: this.handleOpenModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, isLoading ? "Loading Plugin..." : "Add Plugin");
  }

  renderPlugins() {
    const {
      onRemove,
      plugins
    } = this.props;

    if (plugins.length === 0) {
      return React.createElement("span", {
        class: currentStyles.empty,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "None added");
    }

    return React.createElement("ul", {
      className: currentStyles.pluginList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, plugins.map(p => React.createElement("li", {
      key: p,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }, p, React.createElement("div", {
      className: currentStyles.pluginActions,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      }
    }, React.createElement("a", {
      onClick: () => onRemove(p),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, "\u2715")))));
  }

  render() {
    const {
      _pluginChanged,
      isExpanded,
      onToggleExpanded,
      plugins,
      styles
    } = this.props;
    return React.createElement(_AccordionTab.default, {
      className: `${styles.section} ${styles.sectionEnv}`,
      isExpanded: isExpanded,
      label: React.createElement("span", {
        className: styles.pluginsHeader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Plugins", false && React.createElement(_PresetLoadingAnimation.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })),
      onToggleExpanded: onToggleExpanded,
      tabKey: "plugins",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, this.renderPlugins(), this.renderButton(), this.state.modalOpen && React.createElement(_ExternalPluginsModal.default, {
      onClose: this.handleCloseModal,
      onPluginSelect: _pluginChanged,
      plugins: plugins,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    }));
  }

}

exports.default = ExternalPlugins;

_defineProperty(ExternalPlugins, "defaultProps", {
  isLoading: false,
  plugins: []
});

const currentStyles = {
  modalButton: _emotion.css`
    background: #f1da6b;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 0.5rem;
    padding: 0.5rem 0;
  `,
  pluginList: _emotion.css`
    font-size: 0.75rem;
    margin: 0.5rem -0.5rem 1rem;

    > li {
      align-items: center;
      border-left: 2px solid transparent;
      display: flex;
      line-height: 1.1;
      padding: 0.25rem 0.75rem;
      position: relative;
      transition: all 0.25s ease-out;

      &:hover {
        border-left-color: #eeda7b;
      }

      &:not(:first-child) {
        margin-top: 0.5rem;
      }
    }
  `,
  empty: _emotion.css`
    color: #61656e;
    font-size: 0.875rem;
    margin: 0.5rem 0.5rem 1rem;
  `,
  pluginActions: _emotion.css`
    align-items: center;
    background: #23252b;
    bottom: 0;
    display: flex;
    padding-left: 1rem;
    position: absolute;
    right: 1rem;
    top: 0;

    a,
    a:visited {
      color: #fff;
      cursor: poitner;
    }
  `
};