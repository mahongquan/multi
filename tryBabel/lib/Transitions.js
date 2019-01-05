"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelGenerator = _interopRequireDefault(require("babel-generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Transitions {
  constructor() {
    _defineProperty(this, "_transitions", []);

    _defineProperty(this, "_getProgramParent", path => {
      let parent = path;

      do {
        if (parent.isProgram()) return parent;
      } while (parent = parent.parentPath);
    });

    _defineProperty(this, "getValue", () => {
      return this._transitions;
    });

    _defineProperty(this, "addExitTransition", code => {
      this._transitions.push({
        code,
        pluginAlias: "output",
        visitorType: "exit",
        size: new Blob([code], {
          type: "text/plain"
        }).size
      });
    });

    _defineProperty(this, "wrapPluginVisitorMethod", (pluginAlias, visitorType, callback) => {
      return (...args) => {
        // $FlowFixMe
        const {
          code
        } = (0, _babelGenerator.default)(this._getProgramParent(args[0]).node);

        if (this._transitions.length === 0 || this._transitions[this._transitions.length - 1].code !== code) {
          this._transitions.push({
            code,
            pluginAlias,
            visitorType,
            currentNode: args[0].node.type,
            size: new Blob([code], {
              type: "text/plain"
            }).size
          });
        }

        callback.call(this, ...args);
      };
    });
  }

}

exports.default = Transitions;