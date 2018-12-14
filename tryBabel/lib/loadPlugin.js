"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadPlugin;

var _loadScript = _interopRequireDefault(require("./loadScript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPlugin(state, callback, target) {
  if (state.isLoading) {
    return;
  }

  state.isLoading = true;
  const {
    config
  } = state;
  const base = config.baseUrl || "https://bundle.run";
  const url = `${base}/${config.package}@${config.version || ""}`;
  (0, _loadScript.default)(url, success => {
    if (success) {
      state.isLoaded = true;
      state.isLoading = false;
    } else {
      state.didError = true;
      state.isLoading = false;
    }

    callback(success);
  }, target);
}