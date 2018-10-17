import React,{Component } from './react-me';
import myredux from './MyRedux';
import sprintf from 'sprintf';
var _ = require('underscore');
var $=require("jquery");
const fs=window.require("fs");
const path=window.require("path");
const ipcRenderer = window.require('electron').ipcRenderer; //
class A4Lian extends Component {
    renderCard=(start,lian)=>{
      return `<div style="position:relative;width:210mm;height:148mm;left:0px;top:0px;
      ">
      <div style="padding:100px 100px 0px 100px;">
      <p style="text-align:center;font-size:20px">
              <font face="SimHei">北京科技大学预收款凭条&emsp;&emsp;&emsp;No&emsp;${start}</font>
      </p>
      <p style="text-align:center;font-size:15px">
         (不作报销凭证)
      </p>
      <div style="height:1em"></div>
      <p>
          <span>今收到</span>
         <input type="text"  class="line_input"  style="width:130mm"/>
      </p>
      <p>
          <span>交&emsp;来</span>
          <input type="text"  class="line_input"  style="width:130mm" />
      </p>
      <p>
          <span>人民币（大写）</span>
          <input type="text"  class="line_input"   style="width:54mm" />
          <span>￥</span>
          <input type="text"  class="line_input"   style="width:52mm" />
      </p>
      <div style="height:2em"></div>
      <p>
          <span>收款单位</span>
          <span style="margin:0 0 0 38mm">收款人</span>
      </p>
      <p>
          <span>(公章)</span>
          <input type="text"  class="line_input"/>
          <span >(签章)</span>
          <input type="text"  class="line_input"/>
          <span >&emsp;&emsp;&emsp;年&emsp;月&emsp;日</span>
       </p>
       </div>
       <div style="padding:3px 3px 3px 3px;
               writing-mode:tb-rl;
               position:absolute;
               width:1em;
               top:50mm;left:190mm">
       ${lian}
       </div>
    </div>`;
    }
    _onChange=()=> {
      // console.log("_onChange");
      let state1   =myredux.ItemStore.getState();
      this.setState(state1);
      // console.log(this.state);
      $("#id_year").val(this.state.year);
      $("#id_start").val(this.state.start);
      $("#id_num").val(this.state.num);
      $("#id_a4").empty();
      let start=this.state.start;
      for(var i=0;i<this.state.num;i++){
        // console.log("append");
        let str_start=sprintf("%04d%04d",this.state.year,start);
        let lian="第一联　存根联";
        let card1=this.renderCard(str_start,lian);
        lian="第二联　交款方收执";
        let card2=this.renderCard(str_start,lian);
        let page=`<div key={i} class="sheet">
            ${card1}
            ${card2}
        </div>`;
        $("#id_a4").append(page);
        start+=1;
      }
  }
 
  componentDidMount=()=>{
    // console.log(myredux.ItemStore);
    this.unsubscribe=myredux.ItemStore.subscribe(this._onChange);
    $("#id_start").bind("input",this.onChange);
    $("#id_num").bind("input",this.onChange_num);
    $("#id_year").bind("input",this.onChange_year);
    $("#id_print").click(this.onClick);
    let cfg;
    try{
      const configName = 'config.json';
      let configPath = path.join(__dirname, configName);
      let data=fs.readFileSync(configPath, { enconding: 'utf-8' });
      cfg=JSON.parse(data);
    }
    catch(e){
      let cfg={};
      if(!cfg.start) cfg.start=1;
      if(!cfg.num) cfg.num=1;
      if(!cfg.year) {
        let d=new Date();
        let y=d.getFullYear();
        cfg.year=y-2000;
      }
    }
    myredux.ItemActionCreators.load_config(cfg);
  }
  constructor() {
    super();
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
    myredux.ItemActionCreators.start_change(start)
  }
  onChange_num=(event)=>{
    let start=parseInt(event.target.value,10);
    myredux.ItemActionCreators.num_change(start)
    // this.setState({num:start});
  }
  onChange_year=(event)=>{
    console.log("onChange_year")
    let start=parseInt(event.target.value,10);
    myredux.ItemActionCreators.year_change(start)
    // this.setState({year:start});
  }
  render=()=>{
    return (`
<div>
  <div class="only_screen">
    <div style="display:flex;justify-content:space-between">
       <div>
        <label>起始号码</label><input id="id_start" value={this.state.start} onChange={this.onChange}></input>
        <label>页数</label><input id="id_num" value={this.state.num} onChange={this.onChange_num}></input>
        <button  id="id_print" onClick={this.onClick}>打印</button>
       </div>
       <div>
        <label>year</label><input id="id_year" value={this.state.year} onChange={this.onChange_year}></input>
       </div>
    </div>
  </div>
  <div id="id_a4" class="A4">
  </div>
</div>`);
  }
};
export default A4Lian;