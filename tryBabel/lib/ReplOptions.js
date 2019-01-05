"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReplOptions;

var _emotion = require("emotion");

var _react = _interopRequireWildcard(require("react"));

var _PluginConfig = require("./PluginConfig");

var _replUtils = require("./replUtils");

var _AccordionTab = _interopRequireDefault(require("./AccordionTab"));

var _PresetLoadingAnimation = _interopRequireDefault(require("./PresetLoadingAnimation"));

var _Svg = _interopRequireDefault(require("./Svg"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\ReplOptions.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PRESET_ORDER = ["es2015", "es2015-loose", "es2016", "es2017", "stage-0", "stage-1", "stage-2", "stage-3", "react", "flow", "typescript"];

const LinkToDocs = ({
  className,
  children,
  section
}) => _react.default.createElement("a", {
  className: className,
  target: "_blank",
  href: `https://github.com/babel/babel/tree/master/packages/babel-preset-env#${section}`,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  }
}, children);

function ReplOptions(props) {
  return _react.default.createElement("div", {
    className: `${styles.wrapper} ${props.className}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, props.isExpanded ? _react.default.createElement(ExpandedContainer, _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  })) : _react.default.createElement(CollapsedContainer, _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  })));
}

// The choice of Component over PureComponent is intentional here.
// It simplifies the re-use of PluginState objects,
// Without requiring gratuitous use of Object-spread.
class ExpandedContainer extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleToggleTabExpanded", tab => {
      const parsedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
      const key = `is${parsedTab}TabExpanded`;
      this.setState(state => ({
        [key]: !state[key]
      }));
    });

    _defineProperty(this, "_onEnvPresetSettingChange", type => event => {
      this.props.onEnvPresetSettingChange(type, event.target.value);
    });

    _defineProperty(this, "_onEnvPresetSettingCheck", type => event => {
      this.props.onEnvPresetSettingChange(type, event.target.checked);
    });

    _defineProperty(this, "_onSettingCheck", type => event => {
      this.props.onSettingChange(type, event.target.checked);
    });

    _defineProperty(this, "_pluginNameChanged", value => {
      this.props.pluginSearch(value);
    });

    _defineProperty(this, "_onshowOfficialExternalPluginsChanged", value => {
      this.props.showOfficialExternalPluginsChanged(value);
    });

    _defineProperty(this, "_pluginChanged", (e, plugin) => {
      const on = e.target.value === "on";
      const externalPlugins = this.props.externalPlugins;

      if (!externalPlugins[plugin.name] && on) {
        this.props.pluginChange(plugin);
      }
    });

    this.state = {
      isEnvTabExpanded: props.envConfig.isEnvPresetEnabled,
      isPluginsTabExpanded: props.externalPlugins.length > 0,
      isPresetsTabExpanded: Object.keys(props.presetState).some(p => props.presetState[p].isEnabled),
      isSettingsTabExpanded: true // TODO

    };
  }

  render() {
    const {
      babelVersion,
      debugEnvPreset,
      envConfig,
      envPresetState,
      shippedProposalsState,
      fileSize,
      timeTravel,
      sourceType,
      lineWrap,
      onIsExpandedChange,
      onExternalPluginRemove,
      onSettingChange,
      pluginState,
      presetState,
      runtimePolyfillConfig,
      runtimePolyfillState,
      pluginsLoading,
      pluginValue,
      showOfficialExternalPlugins,
      loadingExternalPlugins
    } = this.props;
    const {
      isEnvTabExpanded,
      isPluginsTabExpanded,
      isPresetsTabExpanded,
      isSettingsTabExpanded
    } = this.state;
    const disableEnvSettings = !envPresetState.isLoaded || !envConfig.isEnvPresetEnabled || shippedProposalsState.isLoading;
    return _react.default.createElement("div", {
      className: styles.expandedContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    }, _react.default.createElement("div", {
      className: styles.sectionsWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }, _react.default.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      }
    }, _react.default.createElement(_AccordionTab.default, {
      className: styles.section,
      isExpanded: isSettingsTabExpanded,
      label: "Settings",
      onToggleExpanded: this.handleToggleTabExpanded,
      tabKey: "settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      }
    }, _react.default.createElement(PluginToggle, {
      config: runtimePolyfillConfig,
      label: "Evaluate",
      onSettingChange: onSettingChange,
      state: runtimePolyfillState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      }
    }), _react.default.createElement("label", {
      className: styles.settingsLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      }
    }, _react.default.createElement("input", {
      checked: lineWrap,
      onChange: this._onSettingCheck("lineWrap"),
      className: styles.inputCheckboxLeft,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      }
    }), "Line Wrap"), _PluginConfig.pluginConfigs.map(config => _react.default.createElement(PluginToggle, {
      config: config,
      key: config.package,
      onSettingChange: onSettingChange,
      state: pluginState[config.package],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      }
    })), _react.default.createElement("label", {
      className: styles.settingsLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      }
    }, _react.default.createElement("input", {
      checked: fileSize,
      onChange: this._onSettingCheck("fileSize"),
      className: styles.inputCheckboxLeft,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      }
    }), "File Size"), _react.default.createElement("label", {
      className: styles.settingsLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      }
    }, _react.default.createElement("input", {
      checked: timeTravel,
      onChange: this._onSettingCheck("timeTravel"),
      className: styles.inputCheckboxLeft,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      }
    }), "Time Travel"), _react.default.createElement("label", {
      className: `${styles.settingsLabel} ${styles.selectLabel}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      }
    }, "Source Type", _react.default.createElement("select", {
      value: sourceType,
      onChange: event => onSettingChange("sourceType", event.target.value),
      className: styles.sourceTypeSelect,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      }
    }, _react.default.createElement("option", {
      value: "module",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      }
    }, "Module"), _react.default.createElement("option", {
      value: "script",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      }
    }, "Script"), _react.default.createElement("option", {
      value: "unambiguous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      }
    }, "Unambiguous")))), _react.default.createElement(_AccordionTab.default, {
      className: styles.section,
      isExpanded: isPresetsTabExpanded,
      label: "Presets",
      onToggleExpanded: this.handleToggleTabExpanded,
      tabKey: "presets",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      }
    }, PRESET_ORDER.map(preset => {
      const state = presetState[preset];
      if (!state) return null;
      return _react.default.createElement(PluginToggle, {
        config: state.config,
        key: preset,
        onSettingChange: onSettingChange,
        state: state,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      });
    })), _react.default.createElement(_AccordionTab.default, {
      className: `${styles.section} ${styles.sectionEnv}`,
      isExpanded: isEnvTabExpanded,
      label: _react.default.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "Env Preset", " ", _react.default.createElement("small", {
        className: styles.accordionLabelVersion,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, envPresetState.version)),
      onToggleExpanded: this.handleToggleTabExpanded,
      tabKey: "env",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      }
    }, _react.default.createElement("label", {
      className: styles.settingsLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    }, _react.default.createElement("input", {
      checked: envConfig.isEnvPresetEnabled,
      className: styles.inputCheckboxLeft,
      type: "checkbox",
      onChange: this._onEnvPresetSettingCheck("isEnvPresetEnabled"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      }
    }), envPresetState.isLoading ? _react.default.createElement(_PresetLoadingAnimation.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      }
    }) : "Enabled"), _react.default.createElement("div", {
      className: styles.envPresetColumn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetColumnLabel} ${styles.envPresetLabel} ${styles.highlight}`,
      section: "browserslist-support",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      }
    }, "Browsers"), _react.default.createElement("textarea", {
      disabled: disableEnvSettings,
      className: `${styles.envPresetInput} ${styles.envPresetTextarea}`,
      onChange: this._onEnvPresetSettingChange("browsers"),
      placeholder: _PluginConfig.envPresetDefaults.browsers.placeholder,
      value: envConfig.browsers,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      }
    })), _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "targets",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      }
    }, "Electron"), _react.default.createElement("input", {
      className: `${styles.envPresetNumber} ${styles.envPresetInput}`,
      disabled: !envPresetState.isLoaded || !envConfig.isEnvPresetEnabled || !envConfig.isElectronEnabled,
      type: "number",
      min: _PluginConfig.envPresetDefaults.electron.min,
      max: 999,
      step: _PluginConfig.envPresetDefaults.electron.step,
      onChange: this._onEnvPresetSettingChange("electron"),
      value: envConfig.electron,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      }
    }), _react.default.createElement("input", {
      checked: envConfig.isElectronEnabled,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("isElectronEnabled"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      }
    })), _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "targetsnode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      }
    }, "Node"), _react.default.createElement("input", {
      className: `${styles.envPresetNumber} ${styles.envPresetInput}`,
      disabled: !envPresetState.isLoaded || !envConfig.isEnvPresetEnabled || !envConfig.isNodeEnabled,
      type: "number",
      min: _PluginConfig.envPresetDefaults.node.min,
      max: 999,
      step: _PluginConfig.envPresetDefaults.node.step,
      onChange: this._onEnvPresetSettingChange("node"),
      value: envConfig.node,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      }
    }), _react.default.createElement("input", {
      checked: envConfig.isNodeEnabled,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("isNodeEnabled"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      }
    })), _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "usebuiltins",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      }
    }, "Built-ins"), (0, _replUtils.isEnvFeatureSupported)(envConfig.version, "builtInsUsage") && _react.default.createElement("select", {
      value: envConfig.builtIns,
      className: styles.envPresetSelect,
      onChange: this._onEnvPresetSettingChange("builtIns"),
      disabled: !envPresetState.isLoaded || !envConfig.isEnvPresetEnabled || !envConfig.isBuiltInsEnabled || runtimePolyfillState.isEnabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      }
    }, _react.default.createElement("option", {
      value: "entry",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      }
    }, "Entry"), _react.default.createElement("option", {
      value: "usage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      }
    }, "Usage")), _react.default.createElement("input", {
      checked: envConfig.isBuiltInsEnabled,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("isBuiltInsEnabled"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      }
    })), _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "spec",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      }
    }, "Spec"), _react.default.createElement("input", {
      checked: envConfig.isSpecEnabled,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("isSpecEnabled"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      }
    })), _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "loose",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      }
    }, "Loose"), _react.default.createElement("input", {
      checked: envConfig.isLooseEnabled,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("isLooseEnabled"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      }
    })), (0, _replUtils.isEnvFeatureSupported)(envConfig.version, "shippedProposals") && _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      }
    }, shippedProposalsState.isLoading ? _react.default.createElement("span", {
      className: styles.envPresetLoaderWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      }
    }, _react.default.createElement(_PresetLoadingAnimation.default, {
      size: 1.6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      }
    })) : _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "shippedProposals",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      }
    }, "Shipped Proposals"), _react.default.createElement("input", {
      checked: envConfig.shippedProposals,
      className: styles.envPresetCheckbox // TODO
      ,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("shippedProposals"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      }
    })), (0, _replUtils.isEnvFeatureSupported)(envConfig.version, "forceAllTransforms") && _react.default.createElement("label", {
      className: styles.envPresetRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466
      }
    }, _react.default.createElement(LinkToDocs, {
      className: `${styles.envPresetLabel} ${styles.highlight}`,
      section: "forcealltransforms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      }
    }, "Force All Transforms"), _react.default.createElement("input", {
      checked: envConfig.forceAllTransforms,
      className: styles.envPresetCheckbox,
      disabled: disableEnvSettings,
      onChange: this._onEnvPresetSettingCheck("forceAllTransforms"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      }
    })), (0, _replUtils.isEnvFeatureSupported)(envConfig.version, "debug") && _react.default.createElement("label", {
      className: styles.settingsLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485
      }
    }, _react.default.createElement("input", {
      checked: debugEnvPreset,
      className: styles.inputCheckboxLeft,
      disabled: disableEnvSettings || runtimePolyfillState.isEnabled,
      onChange: this._onSettingCheck("debugEnvPreset"),
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      }
    }), "Debug")))), babelVersion && _react.default.createElement("div", {
      className: styles.versionRow,
      title: `v${babelVersion}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      }
    }, "v", babelVersion), _react.default.createElement("div", {
      className: `${styles.closeButton} ${nestedCloseButton}`,
      onClick: () => onIsExpandedChange(false),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
      }
    }, _react.default.createElement(_Svg.default, {
      className: styles.closeButtonIcon,
      path: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      }
    })));
  }

}

_defineProperty(ExpandedContainer, "defaultProps", {
  className: ""
});

const CollapsedContainer = ({
  onIsExpandedChange
}) => _react.default.createElement("div", {
  className: styles.collapsedContainer,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 578
  }
}, _react.default.createElement("div", {
  className: `${styles.closeButton} ${nestedCloseButton}`,
  onClick: () => onIsExpandedChange(true),
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 579
  }
}, _react.default.createElement(_Svg.default, {
  className: styles.closeButtonIcon,
  path: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 583
  }
})));

const PluginToggle = ({
  config,
  label,
  state,
  onSettingChange
}) => _react.default.createElement("label", {
  key: config.label,
  className: styles.settingsLabel,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 604
  }
}, _react.default.createElement("input", {
  checked: state.isEnabled && !state.didError,
  className: styles.inputCheckboxLeft,
  disabled: state.isLoading || state.didError,
  onChange: event => onSettingChange(config.package || config.label, event.target.checked),
  type: "checkbox",
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 605
  }
}), state.isLoading ? _react.default.createElement(_PresetLoadingAnimation.default, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 614
  }
}) : label || config.label); // Defined separately from styles due to nesting.


const nestedCloseButton = (0, _emotion.css)({});
const styles = {
  wrapper: (0, _emotion.css)({
    position: "relative",
    overflow: "visible",
    zIndex: 6,
    backgroundColor: _styles.colors.inverseBackground,
    color: _styles.colors.inverseForegroundLight,
    transition: "transform 0.25s ease-in-out",
    [_styles.media.large]: {
      height: "100%" // Safari fix for scrolling/overflow

    }
  }),
  collapsedContainer: (0, _emotion.css)({
    backgroundColor: _styles.colors.inverseBackground,
    [_styles.media.large]: {
      width: "0.5rem",
      height: "100%"
    },
    [_styles.media.mediumAndDown]: {
      height: "0.5rem",
      width: "100%"
    },
    [`& .${nestedCloseButton}`]: {
      [_styles.media.mediumAndDown]: {
        transition: "top 0.25s ease-in-out",
        top: "-0.5rem"
      },
      [_styles.media.large]: {
        transition: "left 0.25s ease-in-out",
        left: "-0.5rem"
      }
    },
    "&:hover": {
      [`& .${nestedCloseButton}`]: {
        [_styles.media.mediumAndDown]: {
          top: 0
        },
        [_styles.media.large]: {
          left: 0
        }
      }
    }
  }),
  expandedContainer: (0, _emotion.css)({
    overflow: "auto",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.24) 0px 1px 4px",
    [_styles.media.large]: {
      height: "calc(100% - 38px)",
      // 38px is babel-version tab's height
      width: "18rem",
      [`& .${nestedCloseButton}`]: {
        right: "-2rem"
      }
    },
    [_styles.media.mediumAndDown]: {
      [`& .${nestedCloseButton}`]: {
        bottom: "-1.5rem"
      }
    }
  }),
  closeButton: (0, _emotion.css)({
    position: "absolute",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: _styles.colors.inverseBackground,
    color: _styles.colors.inverseForegroundLight,
    [_styles.media.large]: {
      height: "5rem",
      width: "3rem",
      top: "calc(50% - 3rem)",
      borderTopRightRadius: "5rem",
      borderBottomRightRadius: "5rem"
    },
    [_styles.media.mediumAndDown]: {
      height: "3rem",
      width: "5rem",
      left: "calc(50% - 3rem)",
      borderBottomLeftRadius: "5rem",
      borderBottomRightRadius: "5rem"
    }
  }),
  closeButtonIcon: (0, _emotion.css)({
    width: "2rem",
    height: "2rem",
    [_styles.media.mediumAndDown]: {
      transform: "rotate(90deg)"
    }
  }),
  sectionsWrapper: (0, _emotion.css)({
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "100%",
    [_styles.media.large]: {},
    [_styles.media.small]: {
      maxHeight: "300px",
      display: "block",
      overflow: "auto",
      "-webkit-overflow-scrolling": "touch"
    }
  }),
  section: (0, _emotion.css)({
    position: "relative",
    zIndex: 7,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: "0 0 auto",
    maxHeight: "100%",
    [_styles.media.mediumAndDown]: {
      flex: "1 0 100px",
      maxHeight: "100%",
      overflow: "auto"
    }
  }),
  sectionEnv: (0, _emotion.css)({
    borderRight: "none",
    [_styles.media.mediumAndDown]: {
      flex: "1 0 150px"
    }
  }),
  pluginRow: (0, _emotion.css)({
    display: "block"
  }),
  pluginContainer: (0, _emotion.css)({
    display: "block",
    maxHeight: 300,
    overflow: "auto",
    overflowX: "hidden"
  }),
  pluginsHeader: (0, _emotion.css)({
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 5
  }),
  accordionLabelVersion: (0, _emotion.css)({
    fontSize: "1rem",
    fontWeight: 400,
    marginLeft: "2px"
  }),
  inputCheckboxLeft: (0, _emotion.css)({
    margin: "0 0.75rem 0 0 !important",
    // TODO (bvaughn) Override input[type="checkbox"] style in main.css
    "&:disabled": {
      opacity: 0.5
    }
  }),
  highlight: (0, _emotion.css)({
    textTransform: "uppercase",
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: _styles.colors.inverseForeground
  }),
  settingsLabel: (0, _emotion.css)({
    alignItems: "center",
    display: "flex",
    flex: "0 0 1.5rem",
    flexDirection: "row",
    fontSize: "0.875rem",
    fontWeight: "normal",
    margin: "0 -0.5rem",
    padding: "0 1rem",
    transition: "background-color 250ms ease-in-out, color 250ms ease-in-out",
    "&:hover": {
      backgroundColor: _styles.colors.inverseBackgroundDark,
      color: _styles.colors.inverseForeground
    }
  }),
  selectLabel: (0, _emotion.css)({
    alignItems: "flex-start",
    flexDirection: "column",
    flexBasis: "4rem",
    margin: "1rem 0 0 0",
    padding: "0 0.5rem"
  }),
  sourceTypeSelect: (0, _emotion.css)({
    appearance: "none",
    backgroundColor: "#2D3035",
    // eslint-disable-next-line
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='${_styles.colors.inverseForegroundLight}'><polygon points='0,0 100,0 50,50'/></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "8px",
    backgroundPosition: "calc(100% - 1rem) calc(100% - 8px)",
    border: 0,
    color: _styles.colors.inverseForegroundLight,
    height: "30px",
    margin: "0.25rem 0 0 0",
    padding: "0 0.5rem",
    transition: "all 0.25s ease-in",
    width: "100%",
    "&:hover": {
      backgroundColor: "#32353A"
    },
    "&::-ms-expand": {
      display: "none"
    }
  }),
  envPresetColumn: (0, _emotion.css)({
    display: "flex",
    flexDirection: "column",
    margin: "0.5rem",
    flex: "0 0 auto"
  }),
  envPresetColumnLabel: (0, _emotion.css)({
    marginBottom: "0.75rem"
  }),
  envPresetRow: (0, _emotion.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "0 0 auto",
    margin: "0.5rem"
  }),
  envPresetNumber: (0, _emotion.css)({
    flex: "0 0 4rem",
    maxWidth: "4rem",
    paddingLeft: "0.75rem"
  }),
  pluginName: (0, _emotion.css)({
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem"
  }),
  envPresetCheckbox: (0, _emotion.css)({
    flex: "0 0 auto",
    margin: "0 0 0 0.75rem !important" // TODO (bvaughn) Override input[type="checkbox"] style in main.css

  }),
  envPresetLabel: (0, _emotion.css)({
    flex: 1,
    color: "#FFF",
    ":hover": {
      textDecoration: "none",
      color: "#FFF"
    }
  }),
  envPresetSelect: (0, _emotion.css)({
    maxWidth: "7rem",
    fontWeight: 400,
    color: _styles.colors.textareaForeground,
    "&:disabled": {
      opacity: 0.5
    }
  }),
  envPresetTextarea: (0, _emotion.css)({
    resize: "vertical"
  }),
  envPresetInput: (0, _emotion.css)({
    WebkitAppearance: "none",
    border: "none",
    fontWeight: 400,
    borderRadius: "0.25rem",
    color: _styles.colors.textareaForeground,
    "&:disabled": {
      opacity: 0.5
    }
  }),
  pluginsSearch: (0, _emotion.css)({
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: `1px solid ${_styles.colors.inverseBackgroundDark}`
  }),
  envPresetLoaderWrapper: (0, _emotion.css)({
    display: "flex",
    flex: "1 1 auto"
  }),
  versionRow: (0, _emotion.css)({
    display: "flex",
    fontFamily: "monospace",
    fontSize: "0.75rem",
    justifyContent: "flex-end",
    overflow: "hidden",
    padding: "0 1.5rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    [_styles.media.large]: {
      backgroundColor: _styles.colors.inverseBackgroundDark,
      position: "absolute",
      width: "100%",
      bottom: 0,
      zIndex: 9,
      margin: 0,
      padding: "0.625rem 0.9375rem"
    }
  }),
  checkboxOfficial: (0, _emotion.css)({
    marginTop: 10,
    marginBottom: 10
  })
};