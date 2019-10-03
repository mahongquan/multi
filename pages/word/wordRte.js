import React from 'react';
import sprintf from 'sprintf';
// import Quill1 from './Quill2';
import Quill1 from './W1';
import RichTextEditor from 'react-rte';

const toolbar_h=70;
let fs,path,ipcRenderer,electron;
if(window.require){
  fs=window.require("fs");
  path=window.require("path");
  ipcRenderer = window.require('electron').ipcRenderer; //
  electron = window.require('electron');
}
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '',filename:"" } // You can also pass a Quill Delta here
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
              { name: '*.html', extensions: ['html'] },
          ]
      },(res)=>{
          if(res){
            this.anim();
            this.setState({filename:res});
            fs.writeFileSync(res, this.state.text.toString("html"));
          }
      })
}
  save_click = () => {
      if(this.state.filename!=""){
          this.anim();
          fs.writeFileSync(this.state.filename, this.state.text);        
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
              { name: '*.html', extensions: ['html'] },
          ]
      },(res)=>{
          if(!res) return;
          // const cheerio = require('cheerio');
          this.setState({filename:res[0]});
          let content=fs.readFileSync(res[0], {encoding:"utf-8",flag:"r"});
          let rich=RichTextEditor.createValueFromString(content,"html");
          this.setState({text: content});
      })
 };
  handleChange=(value)=>{
    this.setState({ text: value })
  }
  render() {
    return (
    <div>
      <div>
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
              <button onClick={this.anim}>anim</button>
              <div>{this.state.filename}</div>
            </div>

      </div>
      <Quill1 text={this.state.text} handleChange={this.handleChange} />
    </div>
    )
  }
}
