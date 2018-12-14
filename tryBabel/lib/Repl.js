"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReplWithErrorBoundary;

require("regenerator-runtime/runtime");

var _emotion = require("emotion");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _react = _interopRequireDefault(require("react"));

var _Utils = require("./Utils");

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _CodeMirrorPanel = _interopRequireDefault(require("./CodeMirrorPanel"));

var _ReplOptions = _interopRequireDefault(require("./ReplOptions"));

var _StorageService = _interopRequireDefault(require("./StorageService"));

var _UriUtils = _interopRequireDefault(require("./UriUtils"));

var _loadBundle = _interopRequireDefault(require("./loadBundle"));

var _loadPlugin = _interopRequireDefault(require("./loadPlugin"));

var _PresetLoadingAnimation = _interopRequireDefault(require("./PresetLoadingAnimation"));

var _TimeTravelSlider = _interopRequireDefault(require("./TimeTravelSlider"));

var _PluginConfig = require("./PluginConfig");

var _replUtils = require("./replUtils");

var _WorkerApi = _interopRequireDefault(require("./WorkerApi"));

var _scopedEval = _interopRequireDefault(require("./scopedEval"));

var _styles = require("./styles");

var _jsxFileName = "H:\\multi\\tryBabel\\src\\Repl.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEBOUNCE_DELAY = 500;

function toCamelCase(str) {
  return str.replace(/-/g, " ").replace(/\//g, "_").replace(/@/g, "_").replace(/\s(.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/\s/g, "").replace(/^(.)/, function ($1) {
    return $1.toLowerCase();
  });
}

class Repl extends _react.default.Component {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "_numLoadingPlugins", 0);

    _defineProperty(this, "_workerApi", new _WorkerApi.default());

    _defineProperty(this, "_pluginSearch", value => this.setState({
      pluginSearch: value
    }));

    _defineProperty(this, "_pluginChange", plugin => {
      const pluginExists = this.state.externalPlugins.includes(plugin.name);
      this.setState({
        loadingExternalPlugins: true
      });
      const bundledUrl = `https://bundle.run/${plugin.name}@${plugin.version}`;

      this._workerApi.loadExternalPlugin(bundledUrl).then(loaded => {
        if (loaded === false) {
          this.setState({
            compileErrorMessage: `Plugin ${plugin.name} could not be loaded`,
            loadingExternalPlugins: false
          });
          return;
        }

        this._workerApi.registerPlugins([{
          instanceName: toCamelCase(plugin.name),
          pluginName: plugin.name
        }]).then(() => {
          this.setState({
            loadingExternalPlugins: false
          });
        });

        if (!pluginExists) {
          this.setState(state => ({
            externalPlugins: [...state.externalPlugins, plugin.name]
          }), this._pluginsUpdatedSetStateCallback);
        } else {
          this.handleRemoveExternalPlugin(plugin.name);
        }
      });
    });

    _defineProperty(this, "_showOfficialExternalPluginsChanged", () => this.setState(state => ({
      showOfficialExternalPlugins: !state.showOfficialExternalPlugins
    })));

    _defineProperty(this, "_compile", (code, setStateCallback) => {
      const {
        state
      } = this;
      const {
        runtimePolyfillState
      } = state;

      const presetsArray = this._presetsToArray(state);

      const babili = state.plugins["babili-standalone"];

      if (babili.isEnabled && babili.isLoaded) {
        presetsArray.push("babili");
      }

      this._workerApi.compile(code, {
        plugins: state.externalPlugins,
        debugEnvPreset: state.debugEnvPreset,
        envConfig: state.envPresetState.isLoaded ? state.envConfig : null,
        evaluate: runtimePolyfillState.isEnabled && runtimePolyfillState.isLoaded,
        presets: presetsArray,
        prettify: state.plugins.prettier.isEnabled,
        sourceMap: runtimePolyfillState.isEnabled,
        sourceType: state.sourceType,
        getTransitions: state.timeTravel
      }).then(result => {
        result.meta.compiledSize = (0, _Utils.prettySize)(result.meta.compiledSize);
        result.meta.rawSize = (0, _Utils.prettySize)(result.meta.rawSize);
        this.setState(result, setStateCallback);
      });
    });

    _defineProperty(this, "_compileToState", (0, _lodash.default)(code => this._compile(code, this._persistState), DEBOUNCE_DELAY));

    _defineProperty(this, "_onEnvPresetSettingChange", (name, value) => {
      this.setState(state => ({
        envConfig: { ...state.envConfig,
          [name]: value
        }
      }), this._pluginsUpdatedSetStateCallback);
    });

    _defineProperty(this, "_onIsSidebarExpandedChange", isExpanded => {
      this.setState({
        isSidebarExpanded: isExpanded
      }, this._persistState);
    });

    _defineProperty(this, "_onSettingChange", (name, value) => {
      this.setState(state => {
        const {
          plugins,
          presets,
          runtimePolyfillState
        } = state;

        if (name === "babel-polyfill") {
          runtimePolyfillState.isEnabled = !!value;
          return {
            runtimePolyfillState
          };
        } else if (state.hasOwnProperty(name)) {
          return {
            [name]: value
          };
        } else if (plugins.hasOwnProperty(name)) {
          plugins[name].isEnabled = !!value;
          return {
            plugins
          };
        } else if (presets.hasOwnProperty(name)) {
          presets[name].isEnabled = !!value;
          return {
            presets
          };
        }
      }, this._pluginsUpdatedSetStateCallback);
    });

    _defineProperty(this, "_persistState", () => {
      const {
        state
      } = this;
      const {
        envConfig,
        plugins
      } = state;

      const presetsArray = this._presetsToArray();

      const babili = state.plugins["babili-standalone"];

      if (babili.isEnabled) {
        presetsArray.push("babili");
      }

      if (envConfig.isEnvPresetEnabled) {
        presetsArray.push("env");
      }

      const builtIns = envConfig.isBuiltInsEnabled && envConfig.builtIns;
      const payload = {
        babili: plugins["babili-standalone"].isEnabled,
        browsers: envConfig.browsers,
        build: state.babel.build,
        builtIns: builtIns,
        spec: envConfig.isSpecEnabled,
        loose: envConfig.isLooseEnabled,
        circleciRepo: state.babel.circleciRepo,
        code: state.code,
        debug: state.debugEnvPreset,
        forceAllTransforms: envConfig.forceAllTransforms,
        shippedProposals: envConfig.shippedProposals,
        evaluate: state.runtimePolyfillState.isEnabled,
        fileSize: state.fileSize,
        timeTravel: state.timeTravel,
        sourceType: state.sourceType,
        lineWrap: state.lineWrap,
        presets: presetsArray.join(","),
        prettier: plugins.prettier.isEnabled,
        showSidebar: state.isSidebarExpanded,
        targets: (0, _replUtils.envConfigToTargetsString)(envConfig),
        version: state.babel.version,
        envVersion: state.envPresetState.version
      };

      _StorageService.default.set("replState", payload);

      _UriUtils.default.updateQuery(payload);
    });

    _defineProperty(this, "_pluginsUpdatedSetStateCallback", () => {
      this._checkForUnloadedPlugins();

      this._updateCode(this.state.code);
    });

    _defineProperty(this, "_updateCode", code => {
      this.setState({
        code
      }); // Update state with compiled code, errors, etc after a small delay.
      // This prevents frequent updates while a user is typing.

      this._compileToState(code);
    });

    _defineProperty(this, "selectTransition", transition => () => {
      const transitionSize = (0, _Utils.prettySize)(transition.size);
      this.setState(prevState => ({ ...prevState,
        currentTransition: transition,
        compiled: transition.code,
        meta: {
          compiledSize: transitionSize,
          rawSize: this.state.meta.rawSize
        }
      }));
    });

    _defineProperty(this, "handleRemoveExternalPlugin", pluginName => {
      this.setState(state => ({
        externalPlugins: state.externalPlugins.filter(p => p !== pluginName)
      }), this._pluginsUpdatedSetStateCallback);
    });

    const persistedState = (0, _replUtils.replState)();
    const defaultPlugins = {
      "babili-standalone": persistedState.babili,
      prettier: persistedState.prettier
    };

    const _presets = persistedState.presets ? persistedState.presets.split(",") : [];

    const defaultPresets = _presets.reduce((reduced, key) => {
      if (key) reduced[key] = true;
      return reduced;
    }, {});

    const _envConfig = (0, _replUtils.persistedStateToEnvConfig)(persistedState); // const isPresetsTabExpanded = !!presets.filter(preset => preset !== "env")
    //   .length;
    // A partial State is defined first b'c this._compile needs it.
    // The compile helper will then populate the missing State values.


    this.state = {
      babel: (0, _replUtils.persistedStateToBabelState)(persistedState, _PluginConfig.babelConfig),
      code: persistedState.code,
      compiled: null,
      pluginSearch: "",
      compileErrorMessage: null,
      debugEnvPreset: persistedState.debug,
      envConfig: _envConfig,
      envPresetDebugInfo: null,
      envPresetState: (0, _replUtils.persistedStateToEnvState)(persistedState, _PluginConfig.envPresetConfig, _envConfig.isEnvPresetEnabled),
      shippedProposalsState: (0, _replUtils.persistedStateToShippedProposalsState)(persistedState, _PluginConfig.shippedProposalsConfig, _envConfig.isEnvPresetEnabled && _envConfig.shippedProposals),
      evalErrorMessage: null,
      fileSize: persistedState.fileSize,
      timeTravel: persistedState.timeTravel,
      sourceType: persistedState.sourceType,
      isSidebarExpanded: persistedState.showSidebar,
      lineWrap: persistedState.lineWrap,
      meta: {
        compiledSize: 0,
        rawSize: 0
      },
      plugins: (0, _replUtils.configArrayToStateMap)(_PluginConfig.pluginConfigs, defaultPlugins),
      // Filled in after Babel is loaded
      presets: {},
      runtimePolyfillState: (0, _replUtils.configToState)(_PluginConfig.runtimePolyfillConfig, persistedState.evaluate),
      sourceMap: null,
      showOfficialExternalPlugins: false,
      externalPlugins: [],
      loadingExternalPlugins: false,
      transitions: [],
      currentTransition: {}
    };

    this._setupBabel(defaultPresets);
  }

  render() {
    const state = this.state;

    if (!state.babel.isLoaded) {
      let message = "Loading Babel...";

      if (state.babel.didError) {
        message = state.babel.errorMessage || "An error occurred while loading Babel :(";
      }

      return _react.default.createElement("div", {
        className: styles.loader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react.default.createElement("div", {
        className: styles.loaderContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, message, state.babel.isLoading && _react.default.createElement(_PresetLoadingAnimation.default, {
        className: styles.loadingAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      })));
    }

    const options = {
      fileSize: state.fileSize,
      lineWrapping: state.lineWrap
    };
    return _react.default.createElement("div", {
      className: styles.repl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      }
    }, _react.default.createElement(_ReplOptions.default, {
      babelVersion: state.babel.version,
      className: styles.optionsColumn,
      debugEnvPreset: state.debugEnvPreset,
      envConfig: state.envConfig,
      envPresetState: state.envPresetState,
      shippedProposalsState: state.shippedProposalsState,
      fileSize: state.fileSize,
      timeTravel: state.timeTravel,
      sourceType: state.sourceType,
      isExpanded: state.isSidebarExpanded,
      lineWrap: state.lineWrap,
      onEnvPresetSettingChange: this._onEnvPresetSettingChange,
      onExternalPluginRemove: this.handleRemoveExternalPlugin,
      onIsExpandedChange: this._onIsSidebarExpandedChange,
      onSettingChange: this._onSettingChange,
      pluginState: state.plugins,
      presetState: state.presets,
      runtimePolyfillConfig: _PluginConfig.runtimePolyfillConfig,
      runtimePolyfillState: state.runtimePolyfillState,
      externalPlugins: state.externalPlugins,
      pluginsLoading: true,
      pluginChange: this._pluginChange,
      pluginSearch: this._pluginSearch,
      pluginValue: state.pluginSearch,
      showOfficialExternalPluginsChanged: this._showOfficialExternalPluginsChanged,
      showOfficialExternalPlugins: state.showOfficialExternalPlugins,
      loadingExternalPlugins: state.loadingExternalPlugins,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      }
    }), _react.default.createElement("div", {
      className: styles.wrapperPanels,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      }
    }, _react.default.createElement("div", {
      className: (0, _emotion.cx)(styles.panels, !state.timeTravel && styles.panelsMax),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      }
    }, _react.default.createElement(_CodeMirrorPanel.default, {
      className: styles.codeMirrorPanel,
      code: state.code,
      errorMessage: state.compileErrorMessage,
      fileSize: state.meta.rawSize,
      onChange: this._updateCode,
      options: options,
      placeholder: "Write code here",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      }
    }), _react.default.createElement(_CodeMirrorPanel.default, {
      className: styles.codeMirrorPanel,
      code: state.compiled,
      errorMessage: state.evalErrorMessage,
      fileSize: state.meta.compiledSize,
      info: state.debugEnvPreset ? state.envPresetDebugInfo : null,
      options: options,
      placeholder: "Compiled output will be shown here",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      }
    })), state.timeTravel && _react.default.createElement(_TimeTravelSlider.default, {
      className: styles.sliders,
      currentTransition: state.currentTransition,
      transitions: state.transitions,
      selectTransition: this.selectTransition,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      }
    })));
  }

  async _setupBabel(defaultPresets) {
    const babelState = await (0, _loadBundle.default)(this.state.babel, this._workerApi);
    const {
      envPresetState
    } = this.state;
    this.setState({
      babel: babelState,
      presets: (0, _replUtils.configArrayToStateMap)(babelState.availablePresets, defaultPresets)
    });

    if (babelState.isLoaded) {
      if (!envPresetState.isLoading) {
        return this._compile(this.state.code, this._checkForUnloadedPlugins);
      }

      this._checkForUnloadedPlugins();
    }
  }

  async _checkForUnloadedPlugins() {
    const {
      envConfig,
      envPresetState,
      shippedProposalsState,
      plugins,
      runtimePolyfillState
    } = this.state; // Assume all default presets are baked into babel-standalone.
    // We really only need to worry about plugins.

    for (const key in plugins) {
      const plugin = plugins[key];

      if (plugin.isEnabled && !plugin.isLoaded && !plugin.isLoading) {
        this._numLoadingPlugins++;

        this._workerApi.loadPlugin(plugin).then(success => {
          this._numLoadingPlugins--; // If a plugin has failed to load, re-render to show a loading error.

          if (!success) {
            this.setState({
              plugins
            });
          } // Once all plugins have been loaded, re-compile code.


          if (this._numLoadingPlugins === 0) {
            this._updateCode(this.state.code);
          }
        });
      }
    } // Babel (runtime) polyfill is large;
    // It's only needed if we're actually executing the compiled code.
    // Defer loading it unless "evaluate" is enabled.


    if (runtimePolyfillState.isEnabled && !runtimePolyfillState.isLoaded) {
      // Compilation is done in a web worker for performance reasons,
      // But eval requires the UI thread so code can access globals like window.
      // Because of this, the runtime polyfill must be loaded on the UI thread.
      // We also eval in an iframe so the polyfills need to be accessible there.
      // We could copy them from window to frame.contentWindow,
      // But it's less error-prone to just load the polyfills into the iframe.
      (0, _loadPlugin.default)(runtimePolyfillState, () => {
        let evalErrorMessage = null;

        if (!this.state.compiled) {
          return;
        } // No need to recompile at this point;
        // Just evaluate the most recently compiled code.


        try {
          // eslint-disable-next-line
          _scopedEval.default.execute(this.state.compiled, this.state.sourceMap);
        } catch (error) {
          evalErrorMessage = error.message;
        } // Re-render (even if no error) to update the label loading-state.


        this.setState({
          evalErrorMessage
        });
      }, _scopedEval.default.getIframe());
    } // Babel 'env' preset is large;
    // Only load it if it's been requested.


    if (envConfig.isEnvPresetEnabled && !envPresetState.isLoaded) {
      envPresetState.isLoading = true;
      (0, _loadBundle.default)(envPresetState, this._workerApi).then(() => {
        // This preset is not built into Babel standalone due to its size.
        // Before we can use it we need to explicitly register it.
        // Because it's loaded in a worker, we need to configure it there as well.
        this._workerApi.registerEnvPreset().then(() => this._updateCode(this.state.code));
      });
    }

    if (envConfig.isEnvPresetEnabled && envConfig.shippedProposals && !shippedProposalsState.isLoaded) {
      const availablePlugins = await this._workerApi.getAvailablePlugins();
      const availablePluginsNames = availablePlugins.map(({
        label
      }) => label);
      const notRegisteredPackages = shippedProposalsState.config.packages.filter(packageState => !availablePluginsNames.includes(packageState.label)).map(config => (0, _replUtils.configToState)({ ...config,
        version: this.state.babel.version
      }, true));

      if (notRegisteredPackages.length) {
        shippedProposalsState.isLoading = true;
        const plugins = await Promise.all(notRegisteredPackages.map(state => (0, _loadBundle.default)(state, this._workerApi)));
        const allPluginsAreLoaded = plugins.every(({
          isLoaded
        }) => isLoaded);

        if (allPluginsAreLoaded) {
          await this._workerApi.registerPlugins(plugins.map(({
            config
          }) => ({
            instanceName: config.instanceName,
            pluginName: config.label
          })));
          shippedProposalsState.isLoaded = true;

          this._updateCode(this.state.code);
        } else {
          shippedProposalsState.didError = true;
        }

        shippedProposalsState.isLoading = false;
      }
    }
  }

  _presetsToArray(state = this.state) {
    const {
      presets
    } = state;
    return Object.keys(presets).filter(key => presets[key].isEnabled && presets[key].isLoaded).map(key => presets[key].config.label);
  }

}

function ReplWithErrorBoundary() {
  return _react.default.createElement(_ErrorBoundary.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    }
  }, _react.default.createElement(Repl, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    }
  }));
}

const styles = {
  loader: (0, _emotion.css)({
    alignItems: "center",
    background: _styles.colors.inverseBackgroundDark,
    color: _styles.colors.inverseForegroundLight,
    display: "flex",
    height: "100vh",
    justifyContent: "center"
  }),
  loadingAnimation: (0, _emotion.css)({
    justifyContent: "center",
    margin: "2rem 0 0 0"
  }),
  loaderContent: (0, _emotion.css)({
    margin: "auto",
    textAlign: "center"
  }),
  codeMirrorPanel: (0, _emotion.css)({
    flex: "0 0 50%"
  }),
  optionsColumn: (0, _emotion.css)({
    flex: "0 0 auto"
  }),
  repl: _emotion.css`
    height: 100%;
    height: calc(100vh - 50px); /* 50px is the header's height */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    overflow: auto;
    font-size: 0.875rem;
    ${_styles.media.mediumAndDown} {
      flex-direction: column;
    }
  `,
  wrapperPanels: (0, _emotion.css)({
    height: "100%",
    width: "100%",
    justifyContent: "stretch",
    overflow: "hidden"
  }),
  panels: (0, _emotion.css)({
    height: "85%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    overflow: "auto",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }),
  panelsMax: (0, _emotion.css)({
    height: "100% !important"
  }),
  sliders: (0, _emotion.css)({
    height: "20%",
    margin: 0
  })
};