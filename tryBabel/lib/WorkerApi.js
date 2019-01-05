"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scopedEval = _interopRequireDefault(require("./scopedEval"));

var _WorkerUtils = require("./WorkerUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Interfaces with a web worker to lazy-loads plugins and compile code.
 */
class WorkerApi {
  constructor() {
    _defineProperty(this, "_worker", (0, _WorkerUtils.registerPromiseWorkerApi)(new Worker("./Worker.js")));
  }

  compile(code, config) {
    return this._worker.postMessage({
      code,
      method: "compile",
      config
    }).then(({
      compiled,
      compileErrorMessage,
      envPresetDebugInfo,
      meta,
      sourceMap,
      transitions
    }) => {
      let evalErrorMessage = null; // Compilation is done in a web worker for performance reasons,
      // But eval requires the UI thread so code can access globals like window.

      if (config.evaluate) {
        try {
          _scopedEval.default.execute(compiled, sourceMap);
        } catch (error) {
          evalErrorMessage = error.message;
        }
      }

      return {
        compiled,
        compileErrorMessage,
        envPresetDebugInfo,
        evalErrorMessage,
        meta,
        sourceMap,
        transitions
      };
    });
  }

  getBabelVersion() {
    return this._worker.postMessage({
      method: "getBabelVersion"
    });
  }

  loadExternalPlugin(url) {
    return this.loadScript(url);
  }

  getBundleVersion(name) {
    return this._worker.postMessage({
      method: "getBundleVersion",
      name
    });
  }

  getAvailablePresets() {
    return this._worker.postMessage({
      method: "getAvailablePresets"
    });
  }

  getAvailablePlugins() {
    return this._worker.postMessage({
      method: "getAvailablePlugins"
    });
  }

  loadPlugin(state) {
    const {
      config
    } = state;
    const base = config.baseUrl || "https://bundle.run";
    const url = `${base}/${config.package}@${config.version || ""}`;
    state.isLoading = true;
    const loadPromise = !config.files ? this.loadScript(url) : Promise.all(config.files.map(file => this.loadScript(`${url}/${file}`)));
    return loadPromise.then(success => {
      if (success) {
        state.isLoaded = true;
        state.isLoading = false;
      } else {
        state.didError = true;
        state.isLoading = false;
      }

      return success;
    });
  }

  loadScript(url) {
    return this._worker.postMessage({
      method: "loadScript",
      url
    });
  }

  registerEnvPreset() {
    return this._worker.postMessage({
      method: "registerEnvPreset"
    });
  }

  registerPlugins(plugins) {
    return this._worker.postMessage({
      method: "registerPlugins",
      plugins
    });
  }

}

exports.default = WorkerApi;