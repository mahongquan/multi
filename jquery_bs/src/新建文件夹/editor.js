import React from 'react';
import sprintf from 'sprintf';
const fs=window.require("fs");
const path=window.require("path");
const ipcRenderer = window.require('electron').ipcRenderer; //
class Card1 extends React.Component{
  render=()=>{
  	return(<div style={{
            position:"relative"
            ,width:"210mm"
            ,height:"148mm"
            ,border:"solid 1px"
            ,paddingLeft:"100px"
            ,paddingRight:"100px"
          }}>
	    <p style={{marginTop:"140px",marginLeft:"100px",fontSize:"20px"}}>
	            <font face="SimHei">北京科技大学预收款凭条&emsp;&emsp;&emsp;No&emsp;{this.props.start}</font>
      </p>
      <div style={{height:"1em"}}></div>
			<p>
          <span>今收到</span>
			   <input type="text"  className="line_input"  style={{width:"130mm"}}/>
			</p>
			<p>
			    <span>交&emsp;来</span>
			    <input type="text"  className="line_input"  style={{width:"130mm"}} />
			</p>
			<p>
			    <span>人民币（大写）</span>
			    <input type="text"  className="line_input"   style={{width:"54mm"}} />
			    <span>￥</span>
			    <input type="text"  className="line_input"   style={{width:"52mm"}} />
			</p>
			<div style={{height:"2em"}}></div>
			<p>
			    <span>收款单位</span>
			    <span style={{margin:"0 0 0 38mm"}}>收款人</span>
			</p>
			<p>
			    <span>(公章)</span>
			    <input type="text"  className="line_input"/>
			    <span >(签章)</span>
			    <input type="text"  className="line_input"/>
			    <span >&emsp;&emsp;&emsp;年&emsp;月&emsp;日</span>
			 </p>
       <div style={{padding:"3px 3px 3px 3px"
               ,writingMode:"tb-rl"
               ,position:"absolute"
               ,width:"1em"
               ,top:"50mm",left:"190mm"}}>
       {this.props.lian}
       </div>
		</div>);
  }
}
class A4Lian extends React.Component{
  constructor() {
    super();
    let cfg=this.getconfig();
    if(!cfg.start) cfg.start=1;
    if(!cfg.num) cfg.num=1;
    if(!cfg.year) {
      let d=new Date();
      let y=d.getFullYear();
      cfg.year=y-2000;
    }
    this.state=cfg;
    ipcRenderer.on("request_close",()=>{
      this.saveconfig(this.state);
      ipcRenderer.send("close");
    })
  }
  getconfig=()=>{
    try{
      const configName = 'config.json';
      let configPath = path.join(__dirname, configName);
      let data=fs.readFileSync(configPath, { enconding: 'utf-8' });
      return JSON.parse(data);
    }
    catch(e){
      return {};
    }
  }
  saveconfig=(data)=>{
    const configName = 'config.json';
    let configPath = path.join(__dirname, configName);
    fs.writeFileSync(configPath, JSON.stringify(data));
  }
  onClick=()=>{
    console.log("click");
    ipcRenderer.send('print', {});
  }
  onChange=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({start:start});
  }
  onChange_num=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({num:start});
  }
  onChange_year=(event)=>{
    let start=parseInt(event.target.value,10);
    this.setState({year:start});
  }
  render(){
    let start=this.state.start;
    let pages=[];
    for(var i=0;i<this.state.num;i++){
        let str_start=sprintf("%04d%04d",this.state.year,start);
        pages.push(<div key={i} className="sheet">
        <Card1 start={str_start} lian="第一联　存根联" />
        <Card1 start={str_start} lian="第二联　交款方收执" />
    </div>);
        start+=1;
    }
	return (
<div>
  <div style={{display:"flex", justifyContent:"space-between"}}className="only_screen">
   <div>
    <label>起始号码</label><input value={this.state.start} onChange={this.onChange}></input>
    <label>页数</label><input value={this.state.num} onChange={this.onChange_num}></input>
    <button  onClick={this.onClick}>打印</button>
   </div>
   <div>
    <label>year</label><input value={this.state.year} onChange={this.onChange_year}></input>
   </div>
  </div>
  <div className="A4">
    {pages}
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
export default A4Lian;