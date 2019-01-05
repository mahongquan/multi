"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let iframe = null;

function getIframe() {
  if (iframe === null) {
    iframe = document.createElement("iframe");
    iframe.style.display = "none"; // $FlowFixMe

    document.body.append(iframe);
  }

  return iframe;
}

function scopedEval(code, sourceMap) {
  // Append source map footer so errors map to pre-compiled code.
  if (sourceMap) {
    code = `${code}\n
      unescape(encodeURIComponent(sourceMap))
    )}`;
  } // Eval code within an iframe so that it can't eg unmount the REPL.


  getIframe().contentWindow.eval(code);
}

var _default = {
  execute: scopedEval,
  getIframe
};
exports.default = _default;