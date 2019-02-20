import React from 'react';
import ReactDOM from 'react-dom';
// const fs = require('fs');
const path = require('path');
// function fileExist(p) {
//   if (fs.existsSync(p)) {
//     return true;
//   }
//   return false;
// }
function link(where, module_name) {
  // body...
  var thelink = document.createElement('link');
  thelink.setAttribute('rel', 'stylesheet');
  var file1 = path.join(where, module_name);
  thelink.setAttribute('href', file1);
  document.head.appendChild(thelink);
}
// function getWhere() {
//   return window.require('electron').ipcRenderer.sendSync('getpath');
// }
let where = __dirname;
// module_name="./AppRoutes";
link(where, '../../node_modules/bootstrap/dist/css/bootstrap.min.css');
link(where, '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
// link('./', 'animate.min.css');
let App = require('./Browser').default;
ReactDOM.render(<App />, document.getElementById('root'));
