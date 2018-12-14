"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadScript;

function loadScript(url, callback, maybeTarget) {
  if (maybeTarget != null) {
    const target = maybeTarget; // If we're loading this script into an iframe, wait for it to load,
    // Otherwise the script tag we insert will be removed on-load.

    if (target.contentDocument.readyState !== "complete") {
      target.addEventListener("load", () => {
        // Use the newly-loaded document.
        loadScriptIntoDocument(url, callback, target.contentDocument);
      });
    } else {
      loadScriptIntoDocument(url, callback, target.contentDocument);
    }
  } else {
    loadScriptIntoDocument(url, callback, document);
  }
}

function loadScriptIntoDocument(url, callback, targetDocument) {
  const script = targetDocument.createElement("script");
  script.async = true;
  script.src = url;

  script.onerror = () => {
    callback(false);
  };

  script.onload = () => {
    callback(true);
  }; // $FlowFixMe


  targetDocument.head.appendChild(script);
}