import React from 'react';
import sprintf from 'sprintf';
import Card from './Card';
import Button from '@material-ui/core/Button';
let _=require("lodash");
let fs,path,ipcRenderer,remote;
class A4Lian extends React.Component{
  constructor() {
    super();
    let cfg={};
    if(!cfg.start) cfg.start=1;
    if(!cfg.num) cfg.num=1;
    if(!cfg.year) {
      let d=new Date();
      let y=d.getFullYear();
      cfg.year=y-2000;
    }
    this.state=cfg;
    // if(ipcRenderer){
    //   ipcRenderer.on("request_close",()=>{
    //     this.saveconfig(this.state);
    //     ipcRenderer.send("close");
    //   })
    // }
  }
  getconfig=()=>{
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
  componentWillUnmount=()=>{
    this.saveconfig();
  }

  saveconfig=(data)=>{
      localStorage.setItem("a4_print",JSON.stringify(data));
  }
  onClick=()=>{
    if(remote) remote.getCurrentWebContents().print();
  }
  onChange=(event)=>{
    let start=parseInt(event.target.value,10);
    if(_.isNaN(start)) {
        start=0;
    }
    this.setState({start:start},()=>{
    });
  }
  onChange_num=(event)=>{
    let start=parseInt(event.target.value,10);
    if(_.isNaN(start)) {
        start=0;
    }
      this.setState({num:start},()=>{
      });
    
  }
  onChange_year=(event)=>{
    let start=parseInt(event.target.value,10);
    if(_.isNaN(start)) {
        start=0;
    }
      this.setState({year:start},()=>{
      });
    
  }
  render(){
    let start=this.state.start;
    let pages=[];
    for(var i=0;i<this.state.num;i++){
        let str_start=sprintf("%04d%04d",this.state.year,start);
        pages.push(<div key={i} className="sheet">
        <Card start={str_start} lian="第一联　存根联" />
        <Card start={str_start} lian="第二联　交款方收执" />
    </div>);
        start+=1;
    }
	return (
<div style={{position:"relative"}}>
  <div className="only_screen">
    <div style={{display:"flex", justifyContent:"space-between"}}>
     <div>
      <label>起始号码</label><input value={this.state.start} onChange={this.onChange}></input>
      <label>页数</label><input value={this.state.num} onChange={this.onChange_num}></input>
      <Button  variant="outlined" color="primary" onClick={this.onClick}>打印</Button>
     </div>
     <div>
      <label>year</label><input value={this.state.year} onChange={this.onChange_year}></input>
     </div>
    </div>
  </div>
  <div className="A4">
    {pages}
  </div>
  <style jsx="true">
{`
  .only_screen{
    width:100%;
    position:fixed;
    top:0px;
    left:0px;
    z-index:1;
    background-color:#aaa;
  }
.line_input{
 border:none;
 border-bottom:1px solid #000;
}
@page { margin: 0 }
body { margin: 0px 0px 0px 0px;}
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
export default A4Lian;