import React from './react-me';
import ReactDOM from './react-dom-me';
var electron=require('electron');
const fs= require('fs');
const path=require('path');
function fileExist(p){
    if(fs.existsSync(p)){
      return true;
    }
    return false;
}
function link(where,module_name) {
  // body...
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
let module_name;
let where=getWhere();
let App;
// module_name="./AppRoutes";  
module_name="./A4Lian";
link("./","paper.css");
App=require(module_name).default;
let app=new App();
ReactDOM.render(app, document.getElementById('root'));
