import React from 'react';
import sprintf from 'sprintf';
import Quill1 from './Quill1';
// import Quill1 from './W1';
const toolbar_h=70;
let fs,path,ipcRenderer,electron,cheerio;
if(window.require){
  cheerio = require('cheerio');
  fs=window.require("fs");
  path=window.require("path");
  ipcRenderer = window.require('electron').ipcRenderer; //
  electron = window.require('electron');
}
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '',filename:"" } // You can also pass a Quill Delta here
    if(ipcRenderer){
      ipcRenderer.on("request_close",()=>{
        // this.saveconfig(this.state);
        ipcRenderer.send("close");
      })
    }
  }
  check=()=>{
  if(this.animationEnd(this.refs.contactedit)){
    // console.log("end");
    this.setState({selectValue:""})
  }
  else{
      setTimeout(this.check,1000);
  }
}
 animationEnd = (el)=> {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
  return 
}
  anim=()=>{
    //console.log(e.target.value);
    this.setState({
      selectValue: 'flipInX animated',
    },()=>{
      setTimeout(this.check,1000);
    });
}
  newfile=()=>{
    this.setState({filename:"",text:""});
  }
  save_as_click = () => {
      var dialog = electron.remote.dialog;
      dialog.showSaveDialog({
          defaultPath :path.resolve("./css_examples"),
          properties: [
              'saveFile',
          ],
          filters: [
              { name: '*.quill.html', extensions: ['quill.html'] },
              {name: '*.txt', extensions: ['txt'] }
          ]
      },(res)=>{
          if(res){
            this.save_filename(res);
          }
      })
}
  save_filename=(filename)=>{
            this.anim();
            this.setState({filename:filename});
            let style=fs.readFileSync(path.join(__dirname,'./quill.snow.css'), {encoding:"utf-8",flag:"r"});
            let content=`<!DOCTYPE  html>
<html>
<head>
<meta charset="utf-8"/>
<style>${style}</style>
</head><body>
<div class="ql-container ql-snow">
<div class="ql-editor" data-gramm="false" contenteditable="false">
${this.state.text}</div></div>
</body>`;
            fs.writeFileSync(filename, content);

  }
  save_click = () => {
      if(this.state.filename!=""){
          this.save_filename(this.state.filename);
      }
      else{
        this.save_as_click();
      }
  };
  open_click = () => {
      var dialog = electron.remote.dialog;
      dialog.showOpenDialog({
          defaultPath :path.resolve("./css_examples"),
          properties: [
              'openFile',
          ],
          filters: [
              { name: '*.quill.html', extensions: ['quill.html'] },
              { name: '*.txt', extensions: ['txt'] }
          ]
      },(res)=>{
          if(!res) return;
          this.setState({filename:res[0]});
          let content=fs.readFileSync(res[0], {encoding:"utf-8",flag:"r"});
          let $ = cheerio.load(content,{
             xmlMode: true,
             lowerCaseTags: false
          });
          let body=$("div.ql-editor").html();
          this.setState({text: body});
      })
 };
  handleChange=(value)=>{
    console.log(value);
    this.setState({ text: value })
  }
 onClick=()=>{
    if(ipcRenderer){
      ipcRenderer.send('print', {});
    }
  }
  render() {
    return (
    <div>
      <div className="only_screen" style={{top:0}}>
            <div style={{ height: toolbar_h,backgroundColor:"#ccc"}}>
              <button style={{margin:"10px 10px 10px 10px"}} 
                onClick={this.open_click}>open
              </button>
            <span style={{display:"inline-block",border:"solid gray 2px",margin:"2px 2px 2px 2px"}} ref="contactedit" className={this.state.selectValue}>
              <button 
                  style={{margin:"10px 10px 10px 10px"}} 
                  onClick={this.save_click}>save
              </button>
              <button  style={{margin:"10px 10px 10px 10px"}} 
                  onClick={this.save_as_click}>
                  save as
              </button>
            </span>
              <button onClick={this.newfile}  style={{margin:"10px 10px 10px 10px"}}>New</button>
              <button onClick={this.anim}   style={{margin:"10px 10px 10px 10px"}}>anim</button>
              <button  onClick={this.onClick}>print</button>
              <div>{this.state.filename}</div>
            </div>

      </div>
      <Quill1 text={this.state.text} handleChange={this.handleChange} />
        <style jsx="true">
{`
.only_screen{
  position:fixed;
  z-index:100;
}
@media print {
  .only_screen{display: none}
}
`}
  </style>
    </div>
    )
  }
}
