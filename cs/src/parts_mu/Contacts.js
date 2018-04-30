import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Client from './Client';
import DialogExampleSimple from "./DialogExampleSimple"
import DialogImportStandard from "./DialogImportStandard"
import ContactEdit from "./ContactEdit2New"
import update from 'immutability-helper';
import image from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { observable } from "mobx";//, action, computed
import { observer } from "mobx-react";
import DropDown from './DropDown';
import RichTextEditor from 'react-rte';
var moment = require('moment');

class ContactStore {
    @observable contacts = [];
    @observable start=0;
    @observable total=0;
    @observable showModal=false;
    @observable contact={};
    @observable bg={};
    @observable index=null;
    @observable search="";
    @observable start_input=1;
    @observable baoxiang="";
    //edit 
    @observable rich=RichTextEditor.createEmptyValue();
    @observable editRich=false;
    limit=5;
    old={};
    constructor(){
      this.loaddata();
    }
    loaddata=()=>{
      var data={search:this.search
        ,start:this.start
        ,baoxiang:this.baoxiang
        ,limit:this.limit};
        console.log(data);
            Client.contacts(
              data
              ,(res)=>{
                console.log(res);
                this.contacts=res.data;
                this.total=res.total;
                this.start=data.start;
              }
            );
    }
    handleItemSave=(data)=>{
      var url="/rest/Contact";
      Client.postOrPut(url,this.packitem,(res) => {
        console.log(res);
          this.packitem=res.data;
          this.old=res.data;
          this.showModal=false;
      });
    }
    handleItemChange=(e)=>{
      console.log("change");
      if(this.old[e.target.name]===e.target.value)
      {
        this.bg[e.target.name]="#ffffff"
      }
      else{
        this.bg[e.target.name]="#8888ff"
      }
      this.packitem[e.target.name]=e.target.value;
    }
}
const theme = createMuiTheme({
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 24,
  },
  palette: {
    primary: blue,
  },
});
@observer
class App extends Component {
  mystate = {
    start:0,
    limit:5,
    total:0,
    baoxiang:"",
    logined: false,
    search:""
  }
   state = {
    contacts: [],
    limit:10,
    user: "AnonymousUser",
    start:0,
    total:0,
    search:"",
    start_input:1,
    currentIndex:null,
    baoxiang:"",
    open:false,
    anchorEl:null,
  }
  constructor(){
    super();
    this.store = new ContactStore();    
  }
  componentDidMount=() => {
    this.loaddata();
  }
  loaddata=()=>{
    this.store.loaddata();
  };
  handleTest = () => {
    //const contact2=update(this.state.contacts[this.state.selected],{baoxiang: {$set: "test"}});
    // console.log("handleTest");
    //console.log(contact2);
    //var one=this.state.contacts[this.state.selected];
    var idx=this.state.selected;
    console.log(idx);
    const contacts2=update(this.state.contacts,{[idx]: {baoxiang:{$set:"test111"}}});
    console.log(contacts2);
    //this.state.contacts[this.state.selected].baoxiang="test";
    this.setState({contacts:contacts2});
    //this.forceUpdate();
  };
  handleContactChange = (idx,contact) => {
    console.log(idx);
    const contacts2=update(this.state.contacts,{[idx]: {$set:contact}});
    console.log(contacts2);
    this.setState({contacts:contacts2});
  };
  oncontactClick=(key) => {
    console.log("click row");
    console.log(key);
    this.setState({selected:key});
  };
  handleImportStandard=() => {
    console.log("import row");
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  onDetailClick=(contactid)=>{
    console.log(contactid);
    window.open(host+"/parts/showcontact/?id="+contactid, "detail", 'height=800,width=800,resizable=yes,scrollbars=yes');
  }
  handleSearchChange = (e) => {
    this.store.search=e.target.value;
  }
  search = (e) => {
    console.log(this.store.search);
    this.store.start=0;
    this.loaddata();
  };
  handlePrev = (e) => {
    this.store.start=this.store.start-this.store.limit;
    if(this.store.start<0) {
      this.store.start=0;
    }
    this.loaddata();
  };

  handleNext = (e) => {
    this.store.start=this.store.start+this.store.limit;
    if(this.store.start>this.store.total-this.store.limit)
    { 
        this.store.start=this.store.total-this.store.limit;//total >limit
    }
    if(this.store.start<0)
    {
      this.store.start=0;
    }
    this.loaddata();
  };
  jump=()=>{
    this.store.start=parseInt(this.store.start_input,10)-1;
    if(this.store.start>this.store.total-this.store.limit) 
        this.store.start=this.store.total-this.store.limit;//total >limit
    if(this.store.start<0)
    {
      this.store.start=0;
    }
    this.loaddata();
  };
  handlePageChange= (e) => {
    this.store.start_input=e.target.value;
  };
  handleEdit=(idx)=>{
    //myredux.ItemActionCreators.showEdit(idx);
    this.store.showModal=true;
    this.store.index=idx;
    this.store.contact=this.store.contacts[idx];
    this.store.bg={};
    if (this.store.index==null){
      this.store.old={
        yujifahuo_date:moment().format("YYYY-MM-DD"),
        tiaoshi_date:moment().format("YYYY-MM-DD"),
        addr:"",
        channels:"",
        baoxiang:"",
        hetongbh:"",
        shenhe:"",
        yonghu:"",
        yiqibh:"",
        yiqixinghao:""
      };
      this.store.hiddenPacks=true;
    }
    else{
      this.store.old=this.store.contact;
      this.store.hiddenPacks=false;
    }
    this.store.old.dianqi=this.store.old.dianqi || "";
    this.store.old.jixie=this.store.old.jixie || "";
    this.store.old.redao=this.store.old.redao || "";
    this.store.old.hongwai=this.store.old.hongwai || "";
    this.store.old.channels=this.store.old.channels || "";
    this.store.old.detail=this.store.old.detail || "";
    this.store.old.addr=this.store.old.addr || "";
    //var val1=RichTextEditor.createValueFromString(this.store.old.detail,"html");
  }
  inputChange=(e)=>{
    console.log(this.refs.input);
    console.log(this.refs.style);
    var style=getComputedStyle(this.refs.input, null)
    console.log(style);
    this.setState({test_input:e.target.value});
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  }
   onSelectBaoxiang=(e) => {
    this.store.baoxiang=e;
    this.loaddata();
  }
  render() {
    const contactRows = this.store.contacts.map((contact, idx) => (
      <TableRow      key={idx}      onClick={() => this.oncontactClick(idx)}>
        <TableCell>{contact.id}</TableCell>
        <TableCell>{contact.hetongbh}</TableCell>
        <TableCell>{contact.yonghu}</TableCell>
        <TableCell><a onClick={()=>{this.handleEdit(idx);}}>{contact.yiqibh}</a>
          <DropDown title={this.store.baoxiang}>
            <MenuItem  onClick={()=>{
              this.onSelectBaoxiang("马红权");
            }}>马红权</MenuItem>
            <MenuItem    onClick={()=>{
              this.onSelectBaoxiang("吴振宁");
            }}>吴振宁</MenuItem>
          </DropDown>
        </TableCell>
        <TableCell>{contact.baoxiang}</TableCell>
        <TableCell>{contact.yiqixinghao}</TableCell>
      </TableRow>
    ));
var hasprev=true;
    var hasnext=true;
    let prev;
    let next;
    //console.log(this.store);
    if(this.store.start===0){
      hasprev=false;
    }

    if(this.store.start+this.store.limit>=this.store.total){

      hasnext=false;
    }
    if (hasprev){
      prev=(<Button onClick={this.handlePrev}>前一页</Button>);
    }
    else{
      prev=null;
    }
    if(hasnext){
      next=(<Button onClick={this.handleNext}>后一页</Button>);
    }
    else{
      next=null;
    }
    const { anchorEl } = this.state;
    return (
    <MuiThemeProvider theme={theme}>
      <ContactEdit store={this.store}/>
      <div className="App">
        <Toolbar>
           <TextField type="text" value={this.store.search}  placeholder="" onChange={this.handleSearchChange} />
           <Button id="id_bt_search" onClick={this.search}>搜索</Button>
           <DialogImportStandard title="导入标样" disabled={this.state.logined}  onLoginSubmit={this.onLoginSubmit} />
           <Button   variant="raised" onClick={this.handleTest}>test</Button>
        </Toolbar>
        <Table>
    <TableHead>
      <TableRow>
        <TableCell>id</TableCell>
        <TableCell>合同编号</TableCell>
        <TableCell>用户单位</TableCell>
        <TableCell>bh</TableCell>
        <TableCell>包箱
          <DropDown title={this.store.baoxiang}>
            <MenuItem  onClick={()=>{
              this.onSelectBaoxiang("马红权");
            }}>马红权</MenuItem>
            <MenuItem    onClick={()=>{
              this.onSelectBaoxiang("吴振宁");
            }}>吴振宁</MenuItem>
          </DropDown>
        </TableCell>
        <TableCell>仪器型号</TableCell>
      </TableRow>
    </TableHead>
         <TableBody>
            {contactRows}
          </TableBody>
        </Table>
       {prev}
            <label id="page">{this.store.start+1}../{this.store.total}</label>
            {next}
            <input maxLength="6" size="6" onChange={this.handlePageChange} value={this.store.start_input} />
            <Button id="page_go"  className="btn btn-info" onClick={this.jump}>跳转</Button>
      </div>

</MuiThemeProvider>
    );
  }
}
export default App;
