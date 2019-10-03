import React from 'react';
import sprintf from 'sprintf';
import ReactQuill from 'react-quill';
const toolbar_h=70;
let fs,path,ipcRenderer,electron;
if(window.require){
  fs=window.require("fs");
  path=window.require("path");
  ipcRenderer = window.require('electron').ipcRenderer; //
  electron = window.require('electron');
}
const CustomButton = () => <label>star</label>;
//  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//         ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
//         [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//         [{ 'script': 'sub'}, { 'script': 'super' }],
//         [{ 'direction': 'rtl' }], 
//         ['link', 'image'],
//         [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//         [{ 'font': [] }],
//         [{ 'align': [] }],
//         ['clean']   
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2">
      </option>
      <option ></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option ></option>
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '',filename:"" } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.modules={
      toolbar:{
        container: "#toolbar",
        handlers: {
          "insertStar": this.insertStar,
        }
      }
    };
  }
insertStar=()=>{
  console.log(this);
  console.log(arguments);
  const cursorPosition = this.refs.quill.getEditor().getSelection().index
  this.refs.quill.getEditor().insertText(cursorPosition, "★")
  this.refs.quill.getEditor().setSelection(cursorPosition + 1)
}
  handleChange(value) {
    console.log(value);
    this.setState({ text: value })
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
            fs.writeFileSync(res, this.state.text);
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
          // let $ = cheerio.load(content,{
          //    xmlMode: true,
          //    lowerCaseTags: false
          // });
          // this.setState({css:$("body style").text()});
          // this.setState({head:$("head").html()});
          // $("body style").remove();
          // this.setState({html:$("body").html(),showPreview:"flex"});
          this.setState({text: content});
      })
 };
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
      <CustomToolbar />
      <ReactQuill theme="snow" ref="quill"
                    modules={this.modules}
                    value={this.state.text}
                  onChange={this.handleChange} />
{                  
      // <div className="A4">
      //   <div className="sheet"
      //       dangerouslySetInnerHTML={{
      //            __html: `${this.state.text}`,
      //          }}>
      //   </div>
      // </div>
}      
        <style jsx="true">
{`
.line_input{
 border:none;
 border-bottom:1px solid #000;
}
@page { margin: 0 }
body { margin: 0 }
.sheet {
  margin: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  page-break-after: always;
}

/** Paper sizes **/
.A3               .sheet { width: 297mm; height: 419mm }
.A3.landscape     .sheet { width: 420mm; height: 296mm }
.A4               .sheet { width: 210mm; height: 296mm }
.A4.landscape     .sheet { width: 297mm; height: 209mm }
.A5               .sheet { width: 148mm; height: 209mm }
.A5.landscape     .sheet { width: 210mm; height: 147mm }
.letter           .sheet { width: 216mm; height: 279mm }
.letter.landscape .sheet { width: 280mm; height: 215mm }
.legal            .sheet { width: 216mm; height: 356mm }
.legal.landscape  .sheet { width: 357mm; height: 215mm }
.ql-editor{
  width:210mm;
}
/** Padding area **/
.sheet.padding-10mm { padding: 10mm }
.sheet.padding-15mm { padding: 15mm }
.sheet.padding-20mm { padding: 20mm }
.sheet.padding-25mm { padding: 25mm }

/** For screen preview **/
@media screen {
  body { background: #e0e0e0 }
  .sheet{
    background: white;
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    margin: 5mm auto;
  }
  .ql-editor {
    background: white;
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    margin: 5mm auto;
  }

}

/** Fix for Chrome issue #273306 **/
@media print {
  .only_screen{display: none}
           .A3.landscape { width: 420mm }
  .A3, .A4.landscape { width: 297mm }
  .A4, .A5.landscape { width: 210mm }
  .A5                    { width: 148mm }
  .letter, .legal    { width: 216mm }
  .letter.landscape      { width: 280mm }
  .legal.landscape       { width: 357mm }
}
`}
  </style>
    </div>
    )
  }
}
class Word extends React.Component{
  constructor() {
    super();
    if(window.require){
      this.initpath=window.require('electron').ipcRenderer.sendSync('getpath');
    }
    let cfg=this.getconfig();
    if(!cfg.start) cfg.start=1;
    if(!cfg.num) cfg.num=1;
    if(!cfg.year) {
      let d=new Date();
      let y=d.getFullYear();
      cfg.year=y-2000;
    }
    this.state=cfg;
    if(ipcRenderer){
      ipcRenderer.on("request_close",()=>{
        this.saveconfig(this.state);
        ipcRenderer.send("close");
      })
    }
  }
  getconfig=()=>{
    if(window.require){
      try{
        const configName = 'config.json';
        let configPath = path.join(this.initpath, configName);
        let data=fs.readFileSync(configPath, { enconding: 'utf-8' });
        return JSON.parse(data);
      }
      catch(e){
        return {};
      }
    }
    else{
      let todos=localStorage.getItem("a4_print");
      let initialState={};
      if (todos) {
        try{
          initialState=JSON.parse(todos);
        }
        catch(SyntaxError){
          initialState={};
        }
      }
      return initialState
    }
  }
  componentWillUnmount=()=>{
    this.saveconfig();
  }

  saveconfig=(data)=>{
    if(window.require){
      const configName = 'config.json';
      let configPath = path.join(this.initpath, configName);
      fs.writeFileSync(configPath, JSON.stringify(data));
    }
    else{
      localStorage.setItem("a4_print",JSON.stringify(data));
    }
  }
  onClick=()=>{
    if(ipcRenderer){
      ipcRenderer.send('print', {});
    }
  }
  onChange=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({start:start},()=>{
      if(!window.require){
        localStorage.setItem("a4_print",JSON.stringify(this.state));
      }
    });
  }
  onChange_num=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({num:start},()=>{
      if(!window.require){
        localStorage.setItem("a4_print",JSON.stringify(this.state));
      }

    });
  }
  onChange_year=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({year:start},()=>{
      if(!window.require){
        localStorage.setItem("a4_print",JSON.stringify(this.state));
      }
    });
  }
  render(){
	return (
<div>

  <div className="only_screen">
    <div style={{display:"flex", justifyContent:"space-between"}}>
     <div>
      <label>起始号码</label><input value={this.state.start} onChange={this.onChange}></input>
      <label>页数</label><input value={this.state.num} onChange={this.onChange_num}></input>
      <button  onClick={this.onClick}>打印</button>
     </div>
     <div>
      <label>year</label><input value={this.state.year} onChange={this.onChange_year}></input>
     </div>
    </div>
  </div>
  <div className="A4">
  <div className="sheet">
    <div style={{ width:"210mm",height:"10mm",border:"solid 1px"}}>A4 paper</div>
    <div style={{ width:"200mm",height:"10mm",border:"solid 1px"}}>A4 paper</div>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p><p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p><p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p><p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p><p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p><p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p> <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
</p>
   <p>jQuery Tooltips - 开源软件库 - 开源中国社区
站务/建议 支付宝专区 MoPaaS专区 开源硬件专区动弹 博客 翻译 资讯 专题 源创会 高手问答 访谈 周刊 乱弹 公司开源导航页 Android开发专区 iOS开发专区 iOS...
  </p>
</div>
  </div>
  <style jsx="true">
{`
.line_input{
 border:none;
 border-bottom:1px solid #000;
}
@page { margin: 0 }
body { margin: 0 }
.sheet {
  margin: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  page-break-after: always;
}

/** Paper sizes **/
.A3               .sheet { width: 297mm; height: 419mm }
.A3.landscape     .sheet { width: 420mm; height: 296mm }
.A4               .sheet { width: 210mm; height: 296mm }
.A4.landscape     .sheet { width: 297mm; height: 209mm }
.A5               .sheet { width: 148mm; height: 209mm }
.A5.landscape     .sheet { width: 210mm; height: 147mm }
.letter           .sheet { width: 216mm; height: 279mm }
.letter.landscape .sheet { width: 280mm; height: 215mm }
.legal            .sheet { width: 216mm; height: 356mm }
.legal.landscape  .sheet { width: 357mm; height: 215mm }

/** Padding area **/
.sheet.padding-10mm { padding: 10mm }
.sheet.padding-15mm { padding: 15mm }
.sheet.padding-20mm { padding: 20mm }
.sheet.padding-25mm { padding: 25mm }

/** For screen preview **/
@media screen {
  body { background: #e0e0e0 }
  .sheet {
    background: white;
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    margin: 5mm auto;
  }
}

/** Fix for Chrome issue #273306 **/
@media print {
  .only_screen{display: none}
           .A3.landscape { width: 420mm }
  .A3, .A4.landscape { width: 297mm }
  .A4, .A5.landscape { width: 210mm }
  .A5                    { width: 148mm }
  .letter, .legal    { width: 216mm }
  .letter.landscape      { width: 280mm }
  .legal.landscape       { width: 357mm }
}
`}
  </style>
</div>);
    }
}
export default MyComponent;