"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Long term storage for persistence of state/etc
 */
const StorageService = {
  get(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {// Noop
    }
  },

  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {// Noop
    }
  }

};
var _default = StorageService;
exports.default = _default;