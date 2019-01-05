"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxFileName = "H:\\multi\\tryBabel\\src\\index_local.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = require('fs');

const path = require('path');

function fileExist(p) {
  if (fs.existsSync(p)) {
    return true;
  }

  return false;
}

function link(where, module_name) {
  // body...
  var thelink = document.createElement('link');
  thelink.setAttribute("rel", "stylesheet");
  var file1 = path.join(where, module_name);
  thelink.setAttribute("href", file1);
  document.head.appendChild(thelink);
}

function getWhere() {
  let path = window.require('electron').ipcRenderer.sendSync('getpath');

  let where;

  if (path === ".") {
    where = "..";
  } else {
    where = "../..";
  }

  return where;
}

let module_name;
let where = getWhere();
let App; // module_name="./AppRoutes";  

module_name = "./Repl"; //"./word";
// if (module_name=="./wordW"){
//   link(where,'node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css');
// }
// else if(module_name=="./word"){
//    link("./",'quill.snow.css');
// }
// link("./","animate.min.css");

App = require(module_name).default;

_reactDom.default.render(_react.default.createElement(App, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  }
}), document.getElementById('root'));