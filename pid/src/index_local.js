import ReactDOM from 'react-dom';
import React from 'react';
const fs = require('fs');
const path = require('path');
function fileExist(p) {
  if (fs.existsSync(p)) {
    return true;
  }
  return false;
}
function link(where, module_name) {
  var thelink = document.createElement('link');
  thelink.setAttribute('rel', 'stylesheet');
  var file1 = path.join(where, module_name);
  thelink.setAttribute('href', file1);
  document.head.appendChild(thelink);
}
function getWhere() {
  let path = window.require('electron').ipcRenderer.sendSync('getpath');
  let where;
  if (path === '.') {
    where = '..';
  } else {
    where = '../..';
  }
  return where;
}
let where = getWhere();
let App = require('./PidSimulate.js').default;
ReactDOM.render(
  <App
    data={[{ letter: '一', frequency: 0.1 }, { letter: '二', frequency: 0.2 }]}
  />,
  document.getElementById('root')
);
