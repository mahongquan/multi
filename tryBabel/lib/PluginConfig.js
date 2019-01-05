"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replDefaults = exports.runtimePolyfillConfig = exports.pluginConfigs = exports.envPresetFeaturesSupport = exports.envPresetDefaults = exports.shippedProposalsConfig = exports.envPresetConfig = exports.babelConfig = void 0;

var _lodash = _interopRequireDefault(require("lodash.camelcase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const normalizePluginName = pluginName => `_babel_${(0, _lodash.default)(`plugin-${pluginName}`)}`;

const babelConfig = {
  label: "Babel",
  package: "babel-standalone",
  version: "6",
  baseUrl: "https://unpkg.com",
  instanceName: "Babel"
};
exports.babelConfig = babelConfig;
const envPresetConfig = {
  label: "Env Preset",
  package: "babel-preset-env-standalone",
  version: "1.6.2",
  baseUrl: "https://unpkg.com",
  versionKey: "envVersion",
  instanceName: "babelPresetEnv"
};
/* Some of stage-3 plugins've been added to babel-standalone gradually. For example,
  proposal-async-generator-functions wasn't available before 7.0.0-beta.36 was released.
  Also, using this flow, we can handle not registered yet stage-3 plugins in the future.
*/

exports.envPresetConfig = envPresetConfig;
const stage3Plugins = ["proposal-async-generator-functions"].map(pluginName => {
  const packageName = `@babel/plugin-${pluginName}`;
  return {
    label: pluginName,
    package: packageName,
    version: "7.0.0-beta.34",
    baseUrl: "https://bundle.run",
    instanceName: normalizePluginName(pluginName)
  };
});
const shippedProposalsConfig = {
  baseUrl: "https://bundle.run",
  label: "Shipped Proposals",
  packages: stage3Plugins,
  package: "",
  version: "7"
};
exports.shippedProposalsConfig = shippedProposalsConfig;
const envPresetFeaturesSupport = {
  debug: [0, 1],
  builtInsUsage: [2, 7],
  forceAllTransforms: [2, 7],
  shippedProposals: [2, 7],
  stringifiedVersion: [2, 7]
};
exports.envPresetFeaturesSupport = envPresetFeaturesSupport;
const envPresetDefaults = {
  browsers: {
    placeholder: "> 2%, ie 11, safari > 9"
  },
  electron: {
    min: 0.3,
    default: "1.8",
    step: 0.1
  },
  node: {
    min: 0.1,
    default: "8.9",
    step: 0.1
  },
  builtIns: {
    default: "usage"
  }
};
exports.envPresetDefaults = envPresetDefaults;
const runtimePolyfillConfig = {
  label: "Runtime Polyfill",
  package: "babel-polyfill",
  version: "6"
};
exports.runtimePolyfillConfig = runtimePolyfillConfig;
const pluginConfigs = [{
  baseUrl: "https://unpkg.com",
  label: "Minify",
  package: "babili-standalone",
  // TODO Switch to babel-minify-standalone
  version: "0"
}, {
  baseUrl: "https://unpkg.com",
  label: "Prettify",
  package: "prettier",
  version: "1.13.0",
  files: ["standalone.js", "parser-babylon.js"]
}];
exports.pluginConfigs = pluginConfigs;
const replDefaults = {
  babili: false,
  browsers: "",
  build: "",
  builtIns: false,
  spec: false,
  loose: false,
  circleciRepo: "",
  code: "",
  debug: false,
  evaluate: false,
  fileSize: false,
  timeTravel: false,
  sourceType: "module",
  forceAllTransforms: false,
  isEnvPresetTabExpanded: false,
  isPluginsExpanded: false,
  isPresetsTabExpanded: false,
  isSettingsTabExpanded: true,
  lineWrap: true,
  meta: {
    compiledSize: 0,
    rawSize: 0
  },
  presets: "es2015,react,stage-2",
  prettier: false,
  showSidebar: true,
  shippedProposals: false,
  targets: "",
  version: "",
  envVersion: ""
};
exports.replDefaults = replDefaults;