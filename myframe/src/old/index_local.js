import ReactDOM from './react-dom-me';
import React from './react-me';
const fs= require('fs');
const path=require('path');
function fileExist(p){
    if(fs.existsSync(p)){
      return true;
    }
    return false;
}
function link(where,module_name) {
  var thelink=document.createElement('link');
  thelink.setAttribute("rel","stylesheet");
  var file1=path.join(where,module_name)
  thelink.setAttribute("href",file1);
  document.head.appendChild(thelink);
}
function getWhere(){
  let path=window.require('electron').ipcRenderer.sendSync('getpath');
  let where;
  if(path==="."){
     where=".."; 
  }
  else{
    where="../.."
  }
  return where;
}
let where=getWhere();
link(where,"/node_modules/bootstrap/dist/css/bootstrap.min.css");
link(where,"node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
let App=require("./AppD3.js").default;
let app=new App();
ReactDOM.render(
  app,  document.getElementById('root')
);
