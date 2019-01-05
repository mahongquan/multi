import {withRouter, Link} from 'react-router-dom';
import React from 'react';
import  {Button ,Table,Modal,Navbar,Nav,NavItem,DropdownButton,MenuItem} from "react-bootstrap";
import update from 'immutability-helper';
import DateTime from 'react-datetime';
var moment = require('moment');
var locale=require('moment/locale/zh-cn');
var socket=require("../db");
class App extends React.Component {
  mystate = {
    start:0,
  }
  constructor(){
    super();
    socket.init();
    var m1=moment();
    m1.subtract(1,"years");
    var m2=moment();
    m2.add(1,"days");
    this.state = {
      logined:false,
      limit:10,
      contacts: [],
      user: "AnonymousUser",
      start:0,
      total:0,
      search:"",
      baoxiang:"",
      start_input:1,
      currentIndex:null,
      connect_error:false,
      tp_str:"",
      begin_date:m1.format("YYYY-MM-DD"),
      end_date:m2.format("YYYY-MM-DD")
    }
    // var SerialPort = require("serialport");
    // const Readline = SerialPort.parsers.Readline;
    // var port = new SerialPort("COM1", {
    //     baudRate: 1200,
    //     dataBits: 7,
    //     parity: 'odd',
    //     stopBits: 1,
    //   });
    // this.parser = port.pipe(new Readline({ delimiter: '\r\n' }));
  }
  componentDidMount=() => {
    // this.parser.on('data', this.log);
    this.load_data();
  }
  log=(data)=>{
    //console.log(data);
    if(data!=this.state.tp_str){
        this.setState({tp_str:data});
    }
  }
  load_data=()=>{
    socket.emit("/get/Contact",
      { start:this.mystate.start,
        limit:this.state.limit,
        search:this.state.search,
        begin:this.state.begin_date,
        end:this.state.end_date,
      }, 
      (contacts) => {
        var user=contacts.user;
        if(user===undefined){
          user="AnonymousUser"
        }
        //this.mystate.total=contacts.total;//because async ,mystate set must before state;
        this.setState({
          contacts: contacts.data, //.slice(0, MATCHING_ITEM_LIMIT),
          user: user,
          total:contacts.total,
          start:this.mystate.start
        });
    });
  };
  handleContactChange = (idx,contact) => {
    console.log(idx);
    const contacts2=update(this.state.contacts,{[idx]: {$set:contact}});
    console.log(contacts2);
    this.setState({contacts:contacts2});
  };
  handleUserChange = (user) => {
    if (user === "AnonymousUser") {
      this.setState({
        logined: false
      });
    } else {
      this.setState({
        logined: true
      });
    }
    this.setState({
      user: user,
      contacts: [], //slice(0, MATCHING_ITEM_LIMIT),
    });
    this.load_data();
  };
  handleLogout = () => {
    console.log("logout");
    // Client.logout((data) => {
    //   console.log("logout" + data);
    //   this.setState({
    //     logined: false,
    //     user: "AnonymousUser",
    //     total:0,
    //     start:0,
    //   });
    //   this.handleUserChange(this.state.user);
    // });
  };
  handleSearchChange = (e) => {
    this.setState({search:e.target.value});
  };
  handlePrev = (e) => {
    this.mystate.start=this.mystate.start-this.state.limit;
    if(this.mystate.start<0) {this.mystate.start=0;}
    this.load_data();
  };
  search = (e) => {
    this.mystate.start=0;
    this.load_data();
  };
  jump=()=>{
    this.mystate.start=parseInt(this.state.start_input,10)-1;
    if(this.mystate.start>this.state.total-this.state.limit) 
        this.mystate.start=this.state.total-this.state.limit;//total >limit
    if(this.mystate.start<0)
    {
      this.mystate.start=0;
    }
    this.load_data();
  };
  handlePageChange= (e) => {
    this.setState({start_input:e.target.value});
  };


  handleNext = (e) => {
    this.mystate.start=this.state.start+this.state.limit;
    if(this.mystate.start>this.state.total-this.state.limit) 
        this.mystate.start=this.state.total-this.state.limit;//total >limit
    if(this.mystate.start<0)
    {
      this.mystate.start=0;
    }
    this.load_data();
  };
  onSelectBaoxiang=(e) => {
    this.mystate.baoxiang=e;
    this.setState({baoxiang:e});
    this.load_data();
  }
  auto_change=(event, value)=>{
    console.log("auto_change");
    if (value.length>1)
    {
      this.setState({ auto_value:value, auto_loading: true });
      socket.emit("/get/Pack",{search:value} ,(items) => {
          this.setState({ auto_items: items.data, auto_loading: false })
      });
    }
    else{
      this.setState({ auto_value:value, auto_loading: false });
    };
  }
  onLoginSubmit= (data) => {
    console.log(data);
    // Client.login(data.username, data.password, (res) => {
    //   if (res.success) {
    //     this.setState({
    //       logined: true,
    //     });
    //     this.setState({
    //       user: data.username
    //     });
    //     this.handleUserChange(this.state.user);
    //   }
    // });
  };
  handleEdit=(idx)=>{
    //this.setState({currentIndex:idx});
    this.refs.contactedit.open2(idx);
  }
  opendlgurl=(url,parent,idx,data)=>{
    this.currentIndex=idx;
    this.refs.dlgurl.open(url,data,this.handleContactChange2); 
  }
  openDlgItems=()=>{
    this.refs.dlgitems.open();
  }
  opendlgfolder=(contactid)=>{
     //this.refs.dlgfolder.open(contactid); 
     socket.emit("/folder",{yiqibh:contactid},()=>{});
  }
  opendlgfolder2=(contactid)=>{
     this.refs.dlgfolder2.open(contactid); 
     //socket.emit("/folder",{yiqibh:contactid},()=>{});
  }
  opendlgcheck=(contactid,yiqibh)=>{
   this.refs.dlgcheck.open(contactid,yiqibh); 
  }
  openDlgPacks=()=>{
    this.refs.dlgpacks.open();
  }
  openDlgCopyPack=()=>{
    this.refs.dlgcopypack.open();
  }
  openDlgStat=()=>{
    this.refs.dlgstat.open();
  }
  openDlgImport=()=>{
    this.refs.dlgimport.open();
  }
  openDlgImportHT=()=>{
    this.refs.dlgimportHT.open();
  }
  onDetailClick=(contactid)=>{
        const BrowserWindow = require('electron').remote.BrowserWindow
        const path = require('path')
        const modalPath = path.join('file://', __dirname, '../t_装箱单.htm')
        let win = new BrowserWindow({ width: 800, height: 600 })
        win.on('close', function () { win = null })
        console.log(modalPath);
        win.loadURL(modalPath)
        win.show()
  }
  sampleClick=()=>{

  }
   end_date_change=(value)=>{
    //this.state.yujifahuo_date=value;
    var t=null;
    if (typeof value==="string")
    {
      t=value;
    }
    else{
      t=value.format("YYYY-MM-DD");
    }
    this.setState({end_date:t});
  }
  begin_date_change=(value)=>{
    //this.state.yujifahuo_date=value;
    var t=null;
    if (typeof value==="string")
    {
      t=value;
    }
    else{
      t=value.format("YYYY-MM-DD");
    }
    this.setState({begin_date:t});
  }
  render() {
    console.log("render=========================");
    const contactRows = this.state.contacts.map((contact, idx) => (
      <tr key={idx} >
        <td>{contact.SampleId}</td>
        <td><a onClick={this.sampleClick}>{contact.SampleName}</a>
            <DropdownButton title="" id="id_dropdown3">
            <MenuItem onSelect={() => this.onDetailClick(contact.id)}>详细</MenuItem>
            <MenuItem onSelect={()=>this.opendlgurl("/rest/updateMethod",this,idx,{id:contact.id})}>更新方法</MenuItem>
            <MenuItem onSelect={()=>this.opendlgwait(contact.id)}>全部文件</MenuItem>
            <MenuItem onSelect={()=>this.opendlgcheck(contact.id,contact.yiqibh)}>核对备料计划</MenuItem>
            <MenuItem onSelect={()=>this.opendlgfolder(contact.yiqibh)}>资料文件夹</MenuItem>
          </DropdownButton>
        </td>
        <td>{contact.SampleNum}</td>
        <td>{contact.SampleWeight}</td>
        <td>{contact.FluxWeight}</td>
        <td>{contact.Content01}</td>
        <td>{contact.Area01}</td>
        <td>{contact.Content02}</td>
        <td>{contact.Area02}</td>
      </tr>
    ));
    var hasprev=true;
    var hasnext=true;
    let prev;
    let next;
    console.log(this.mystate);
    console.log(this.state);
    if(this.state.start===0){
      hasprev=false;
    }
    if(this.state.start+this.state.limit>=this.state.total){
      hasnext=false;
    }
    if (hasprev){
      prev=(<a onClick={this.handlePrev}>前一页</a>);
    }
    else{
      prev=null;
    }
    if(hasnext){
      next=(<a onClick={this.handleNext}>后一页</a>);
    }
    else{
      next=null;
    }
    return (
    <div id="todoapp" className="table-responsive">
    <DropdownButton title="文件" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <DropdownButton title="编辑" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <DropdownButton title="校正" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <DropdownButton title="设备" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <DropdownButton title="用户" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <DropdownButton title="帮助" id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
    <div>天平显示：{this.state.tp_str}</div>
    <div align="center" style={{display:this.state.connect_error?"":"none",textAlign: "center",color:"red"}} >!!!!!!!!!!连接错误!!!!!!!</div>
    <table>
    <tbody>
    <tr>
       <td>
       <DateTime  ref="datetime1" timeFormat={false} 
                    inputProps={
                      {"style":
                        {"backgroundColor":"#0A0"}
                      }
                    } 
                    id="begin_date" name="begin_date"  value={this.state.begin_date} onChange={this.begin_date_change} />
      </td>
      <td>
      <DateTime  ref="datetime2" timeFormat={false} 
                    inputProps={
                      {"style":
                        {"backgroundColor":"#0A0"}
                      }
                    } 
                    id="end_date" name="end_date"  value={this.state.end_date} onChange={this.end_date_change} />
      </td>
    <td>
          <input type="text" value={this.state.search}  placeholder="样品名称" onChange={this.handleSearchChange} />
          <button id="id_bt_search" className="btm btn-info" onClick={this.search}>搜索
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
    </td>
    <td>
         
    </td>
     <td>
   <button className="btn btn-info" onClick={this.openDlgImport}>导入标样</button>
  </td>
    <td>过滤:
    <DropdownButton title={this.state.baoxiang} id="id_dropdown2">
      <MenuItem onSelect={() => this.onSelectBaoxiang("马红权")}>马红权</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("陈旺")}>陈旺</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("吴振宁")}>吴振宁</MenuItem>
      <MenuItem onSelect={() => this.onSelectBaoxiang("")}>*</MenuItem>
    </DropdownButton>
  </td>
  </tr>
  </tbody>
  </table>
  <table className="table-bordered"><thead><tr>
  <th>ID</th>
  <th>名称</th>
  <th>序号</th>
  <th>重量</th><th>助熔剂质量</th>
  <th>C</th><th>C_Area</th>
  <th>S</th><th>S_Area</th>
  </tr></thead><tbody id="contact-list">{contactRows}</tbody>
  </table>{prev}
  <label id="page">{this.state.start+1}../{this.state.total}</label>{next}
      <input maxLength="6" size="6" onChange={this.handlePageChange} value={this.state.start_input} />
      <button id="page_go"  className="btn btn-info" onClick={this.jump}>跳转</button>
      <div style={{minHeight:"200px"}}></div>
  </div>
    );
  }
}

export default App;