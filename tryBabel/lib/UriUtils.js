"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lzString = _interopRequireDefault(require("lz-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const URL_KEYS = ["babili", "browsers", "build", "builtIns", "spec", "loose", "code", "debug", "forceAllTransforms", "shippedProposals", "circleciRepo", "evaluate", "fileSize", "timeTravel", "sourceType", "lineWrap", "presets", "prettier", "targets", "version", "envVersion"];

const compress = string => _lzString.default.compressToBase64(string).replace(/\+/g, "-") // Convert '+' to '-'
.replace(/\//g, "_") // Convert '/' to '_'
.replace(/=+$/, ""); // Remove ending '='


const decompress = string => _lzString.default.decompressFromBase64(string.replace(/-/g, "+") // Convert '-' to '+'
.replace(/_/g, "/") // Convert '_' to '/'
);

const encode = value => window.encodeURIComponent(value);

const decode = value => {
  try {
    return window.decodeURIComponent("" + value);
  } catch (err) {
    return value;
  }
};

const mergeDefinedKeys = (raw, keys, target) => {
  keys.forEach(key => {
    if (raw[key] != null) {
      target[key] = raw[key];
    }
  });
};

const parseQuery = () => {
  const raw = document.location.hash.replace(/^#\?/, "").split("&").reduce((reduced, pair) => {
    const pieces = pair.split("=");
    const name = decodeURIComponent("" + pieces[0]);
    let value = decodeURIComponent("" + pieces[1]);

    if (value === "true" || value === "false") {
      value = value === "true";
    }

    reduced[name] = value;
    return reduced;
  }, {});
  const state = {};
  mergeDefinedKeys(raw, URL_KEYS, state);

  if (raw.code_lz != null) {
    state.code = decompress(raw.code_lz || "");
  }

  return state;
};

const updateQuery = state => {
  const query = URL_KEYS.map(key => {
    if (state[key] == null) {
      return null;
    } else if (key === "code") {
      return `${key}_lz=` + compress(state.code);
    } else {
      return key + "=" + encode(state[key]);
    }
  }).filter(value => value).join("&");
  window.location.hash = "?" + query;
};

var _default = {
  compress,
  decode,
  decompress,
  encode,
  parseQuery,
  updateQuery
};
exports.default = _default;