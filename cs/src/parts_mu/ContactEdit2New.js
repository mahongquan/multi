import React, { Component } from 'react';
import UsePacks2 from "./UsePacks2";
import { Modal} from "react-bootstrap";
import update from 'immutability-helper';
import Client from './Client';
import Autosuggest from 'react-autosuggest';
import RichTextEditor from 'react-rte';
import { observable } from "mobx";//, action, computed
import { observer } from "mobx-react";

var locale=require('moment/locale/zh-cn');
var DateTime=require('react-datetime');

@observer
export default class ContactEdit2New  extends Component{

  close=()=>{
  	console.log("close");
    this.store.showModal=false;
  }
  handleCopy=(data)=> {
     console.log("copy");
     this.props.store.index=null;
     var contact2=update(this.props.store.contact,{id:{$set:""}});
     this.props.store.contact=contact2;
     this.props.store.hiddenPacks=true;
  }
  handleSave=(data)=>{
    var url="/Contact";
    var dataSave=this.props.store.contact;
    dataSave.detail=this.props.store.rich.toString('html');
    Client.postOrPut(url,dataSave,(res) => {
      if(res.success){
        this.props.store.contact=res.data;
        this.props.store.old=res.data;
        this.props.store.bg={};
        this.props.store.hiddenPacks=false;
      }
      else{
        alert(res.message);
      }
    });
  }
  tiaoshi_date_change=(value)=>{
    //this.props.store.yujifahuo_date=value;
    var e_target_name="tiaoshi_date";
    console.log(this.props.store.old[e_target_name]);
    var t=null;
    if (typeof value==="string")
    {
      t=value;
    }
    else{
      t=value.format("YYYY-MM-DD");
    }
    console.log(t);
    if(this.props.store.old[e_target_name]===t)
    {
      this.props.store.bg[e_target_name]="#ffffff";
    }
    else{
      this.props.store.bg[e_target_name]="#8888ff"; 
    }
    const contact2=update(this.props.store.contact,{[e_target_name]: {$set:t}});
    this.props.store.contact=contact2
  }

  yujifahuo_date_change=(value)=>{
    //this.props.store.yujifahuo_date=value;
    var e_target_name="yujifahuo_date";
    console.log(this.props.store.old[e_target_name]);
    var t=null;
    if (typeof value==="string")
    {
      t=value;
    }
    else{
      t=value.format("YYYY-MM-DD");
    }
    console.log(t);
    if(this.props.store.old[e_target_name]===t)
    {
      this.props.store.bg[e_target_name]="#ffffff";
   }
    else{
      this.props.store.bg[e_target_name]="#8888ff";
    }
    this.props.store.contact[e_target_name]=t;
  }
  channels_change=(event, { newValue })=>{
    this.change1(newValue);
  }
  channels_change_fetch=()=>{}
  channels_select=(event,data)=>{
    this.change1(data.suggestion);
  }
  change1=(item)=>{
      console.log("selected");
      console.log(item);
      if(this.props.store.old.channels===item)
      {
        this.props.store.bg.channels="#ffffff"
      }
      else{
        this.props.store.bg.channels="#8888ff";
      }
      this.props.store.contact.channels=item;
  }
  yiqixinghao_change=(event, { newValue })=>{
    this.change2(newValue);
  }
  yiqixinghao_select=(event,data)=>{
    this.change2(data.suggestion);
  }
  change2=(item)=>{
      console.log("selected");
      console.log(item);
      if(this.props.store.old.yiqixinghao===item)
      {
        this.props.store.bg.yiqixinghao="#ffffff";
      }
      else{
        this.props.store.bg.yiqixinghao="#8888ff";
      }
      this.props.store.contact.yiqixinghao=item;
  }
  handleChange=(e)=>{
    if(this.props.store.old[e.target.name]===e.target.value)
    {
      this.props.store.bg[e.target.name]="#ffffff";
    }
    else{
      this.props.store.bg[e.target.name]="#8888ff";
    }
    this.props.store.contact[e.target.name]=e.target.value;
  }
  matchStateToTerm=(state, value)=>{
     return      state.toLowerCase().indexOf(value.toLowerCase()) !== -1 ;
  }
  detailchange=(value)=>{
    console.log(value);
    this.props.store.rich=value;
  }
  render=()=>{
    console.log("render contactedit");
    console.log(this.props);
    return (
        <Modal show={this.props.store.showModal} onHide={()=>{this.props.store.showModal=false;}}  dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>编辑仪器信息</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table id="table_input" className="table-condensed" >
            <tbody>
            <tr >
                <td >
                    ID:
                </td>
                <td >
                    <input type="text" id="id" name="id" disabled="disabled"    value={this.props.store.contact.id} />
                </td>
                <td>
                    <label>用户单位:</label>
                </td>
                <td>
                    <input style={{"backgroundColor":this.props.store.bg.yonghu}}  type="text" id="yonghu" name="yonghu" value={this.props.store.contact.yonghu} onChange={this.handleChange} />
                </td>
            </tr><tr>
                <td>
                    客户地址:
                </td>
                <td>
                    <input  style={{"backgroundColor":this.props.store.bg.addr}}  type="text" id="addr" name="addr" value={this.props.store.contact.addr} onChange={this.handleChange} />
                </td>
                <td>
                    通道配置:
                </td>
                <td><Autosuggest
                      inputProps={
                        { 
                          id: 'channels-autocomplete',
                          style:{backgroundColor:this.props.store.bg.channels},
                          value:this.props.store.contact.channels,
                          onChange:this.channels_change
                        }
                      }
                      suggestions={[
                        "1O(低氧)",
                        "1O(高氧)",
                        "1O(低氧)+2N",
                        "1C(低碳)+2S",
                        "1C(高碳)+2S",
                        "2C+1S(低硫)",
                        "2C+1S(高硫)",
                        "2C+2S",
                        "2O+2N",
                        "2O",
                      ]}
                      getSuggestionValue={(item) => item}
                      onSuggestionSelected={this.channels_select}
                      onSuggestionsFetchRequested={()=>{}}
                      onSuggestionsClearRequested={()=>{}}
                      renderSuggestion={(item) => (
                        <span>{item}</span>
                      )}
                    />
                </td>
            </tr><tr>
                <td>
                    <label>仪器型号:</label>
                </td>
                <td>
                    <Autosuggest
                       inputProps={
                        { 
                          id: 'yiqixinghao-autocomplete',
                          style:{backgroundColor:this.props.store.bg.yiqixinghao},
                          value:this.props.store.contact.yiqixinghao,
                          onChange:this.yiqixinghao_change
                        }
                      }
                      suggestions={[
                        "CS-1011C",
                        "CS-2800",
                        "CS-3000",
                        "CS-3000G",
                        "HD-5",
                        "N-3000",
                        "O-3000",
                        "OH-3000",
                        "ON-3000",
                        "ON-4000",
                        "ONH-3000"
                      ]}
                      getSuggestionValue={(item) => item}
                      onSuggestionsFetchRequested={()=>{}}
                      onSuggestionsClearRequested={()=>{}}
                      onSuggestionSelected={this.yiqixinghao_select}
                      renderSuggestion={(item) => (
                        <span>{item}</span>
                      )}
                    />
                </td>
                <td>
                    <label>仪器编号:</label>
                </td>
                <td>
                    <input  style={{"backgroundColor":this.props.store.bg.yiqibh}}  type="text" id="yiqibh" name="yiqibh" value={this.props.store.contact.yiqibh}  onChange={this.handleChange} />
                </td>
            </tr><tr>
                <td>
                    <label>包箱:</label>
                </td>
                <td>
                    <input style={{"backgroundColor":this.props.store.bg.baoxiang}} type="text" id="baoxiang" name="baoxiang" value={this.props.store.contact.baoxiang}  onChange={this.handleChange} />
                </td>
                <td>
                    审核:
                </td>
                <td>
                    <input style={{"backgroundColor":this.props.store.bg.shenhe}} type="text" id="shenhe" name="shenhe" value={this.props.store.contact.shenhe}  onChange={this.handleChange} />
                </td>
            </tr><tr>
                <td>
                    <label>入库时间:</label>
                </td>
                <td>
                    <DateTime  ref="datetime1" timeFormat={false} 
                    inputProps={
                      {"style":
                        {"backgroundColor":this.props.store.bg.yujifahuo_date}
                      }
                    } 
                    id="yujifahuo_date" name="yujifahuo_date"  value={this.props.store.contact.yujifahuo_date} onChange={this.yujifahuo_date_change} />
                </td>
                <td>
                    调试时间:
                </td>
                <td>
                <DateTime  ref="datetime2" timeFormat={false} 
                    inputProps={
                      {"style":
                        {"backgroundColor":this.props.store.bg.tiaoshi_date}
                      }
                    } 
                    name="tiaoshi_date"  value={this.props.store.contact.tiaoshi_date} onChange={this.tiaoshi_date_change} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>合同编号:</label>
                </td>
                <td>
                    <input  style={{"backgroundColor":this.props.store.bg.hetongbh}}  type="text" id="hetongbh" name="hetongbh" value={this.props.store.contact.hetongbh}  onChange={this.handleChange} />
                </td>
                <td>
                    方法:
                </td>
                <td>
                <input  style={{"backgroundColor":this.props.store.bg.method}}  type="text" id="method" name="method" disabled="true" defaultValue={this.props.store.contact.method} />
                {
                //<button className="btn" id="bt_file"><Glyphicon glyph="pencil" />
                //</button>
                //<button className="btn" id="bt_removefile"><Glyphicon glyph="remove" /></button>
                }
                </td>
            </tr>

            <tr>
                <td>
                    电气:
                </td>
                <td>
                    <input  style={{"backgroundColor":this.props.store.bg.dianqi}}
                      type="text" name="dianqi" value={this.props.store.contact.dianqi}  
                      onChange={this.handleChange} />
                </td>
                <td>
                    机械:
                </td>
                <td>
                <input  style={{"backgroundColor":this.props.store.bg.jixie}}  type="text"
                name="jixie"
                 value={this.props.store.contact.jixie} />
                   </td>
            </tr>        
            <tr>
                <td>
                    红外:
                </td>
                <td>
                    <input  style={{"backgroundColor":this.props.store.bg.hongwai}}  type="text"  
                    name="hongwai" value={this.props.store.contact.hongwai}  onChange={this.handleChange} />
                </td>
                <td>
                    热导:
                </td>
                <td>
                <input  style={{"backgroundColor":this.props.store.bg.redao}}  type="text"  name="redao" value={this.props.store.contact.redao} />
                </td>
            </tr>   
            <tr>
                <td>
                    <a onClick={()=>{
                    this.props.store.editRich=!this.props.store.editRich;
                }}>备注:</a>
                </td>
                <td  colSpan="3">
                {
                    <RichTextEditor disabled={!this.props.store.editRich}
                      value={
                          this.props.store.rich// this.props.store.contact.detail
                      }
                      onChange={this.detailchange}
                    />
                  }
                </td>
            </tr>   
        
            </tbody>
            </table>
       <div> 
       <button className="btn btn-primary" id="bt_save" onClick={this.handleSave} >保存</button> 
       <button className="btn" style={{margin:"20px 20px 20px 20px"}} id="bt_clearid" onClick={this.handleCopy}>复制</button>
       </div>
        <div id="id_usepacks" hidden={this.props.store.hiddenPacks}>
          <UsePacks2  contact_hetongbh={this.props.store.contact.hetongbh} contact_id={this.props.store.contact.id}/>
        </div>
        
        <div style={{minHeight:"200px"}}></div>
                </Modal.Body>
        </Modal>
    );
  }
};
