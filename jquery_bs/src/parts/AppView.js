import {myglobal,contacts,host} from './constants';
import DlgLogin from './DlgLogin';
import Client from "./Client";
import ContactEdit from './ContactEdit';
var $=require("jquery");
var _ = require('underscore');
const contact_template_str=`
<tr>        
  <td>
      <%- id %>
 </td><td>
      <%- yonghu %>
 </td><td>
      <%- addr %>
 </td><td>
      <%- channels %>
 </td><td>
      <%- yiqixinghao %>
 </td><td>
    <a href="#" class="contact_edit" data=<%- id %> ><%- yiqibh %></a>
    <div style="display:inline" class="dropdown">
      <button class="dropdown-toggle" type="button" id="dropdownMenu_cmds" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" >详细</a>
        <a class="dropdown-item" >更新方法</a>
        <a class="dropdown-item" >全部文件</a>
        <a class="dropdown-item" >核对备料计划</a>
        <a class="dropdown-item" >资料文件夹</a>
      </div>
    </div>
 </td><td>
      <%- baoxiang %>
 </td><td>
      <%- shenhe %>
 </td><td>
      <%- yujifahuo_date %>
 </td><td>
      <%- tiaoshi_date %>
 </td><td>
      <%- hetongbh %>
 </td><td>
      <a href="/media/<%- method %>"><%- method %></a>
 </td>
 </tr>
 `;
const html_template=`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">装箱单</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>  
<div style="display:flex;margin-left:3px">
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <span id="dropdownMenu1_text">AnonymousUser</span>
      <span class="caret"></span>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <a class="dropdown-item" id="id_login" >登录</a>
        <a class="dropdown-item" id="id_logout">注销</a>
      </div>
    </div>
    <div class="input-group margin_left" style="width:260px">
      <input id="id_input_search" type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button id="id_bt_search" class="btn btn-outline-secondary" type="button">搜索</button>
      </div>
    </div>
    <button id="id_bt_new"  class="margin_left btn btn-primary">新合同</button>
    <div class="dropdown margin_left">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span id="dropdownMenu2_text">过滤</span>
        <span class="caret"></span>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item baoxiang" >马红权</a>
        <a class="dropdown-item baoxiang" >陈旺</a>
        <a class="dropdown-item baoxiang" >吴振宁</a>
        <a class="dropdown-item baoxiang" ><span class="fa fa-asterisk"></span></a>
      </div>
    </div>
</div>
<div id="main" class="table-responsive" style="margin-left:3px">
    <table  class="table-bordered" >
      <thead>
        <tr>
          <td>ID</td><td>用户单位</td><td>客户地址</td><td>通道配置</td><td>仪器型号</td><td>仪器编号</td><td>包箱</td><td>审核</td>
          <td>预计发货时间</td><td>调试时间</td><td>合同编号</td><td>方法</td>
        </tr>
      </thead>
      <tbody id="contact_list">
      </tbody>
    </table>
    <button id="bt_prev">前一页</button> 
    <label id="page">page/page</label>
    <button id="bt_next">后一页</button>
    <input id="id_start_input" maxLength="6" size="6"/>
    <button id="page_go"  class="btn btn-info">跳转</button>
    <div  style="min-height:200px;"></div>
</div>`;
export default class AppView{
    constructor(){
        this.todos=[];
        this.template= _.template(contact_template_str);
        $("#root").html(html_template);
        $("#id_bt_search").click(this.mysearch);
        $("#id_bt_new").click(this.newcontact);
        $("#id_login").click(this.showlogin);
        $("#id_logout").click(this.showlogout);
        $(".baoxiang").click(this.baoxiang);
        $("#bt_prev").bind("click", {}, this.button_prev_click);
        $("#bt_next").bind("click", {}, this.button_next_click);
        $("#page_go").bind("click", {}, this.jump);
        this.initialize();
    }
    edit=(e)=>{
      console.log("edit");

      let index=$(e.target).attr("index")
      let edit =new ContactEdit({index:index,parent:this});
    }
    update_user=()=>{
      $("#dropdownMenu1_text").text(myglobal.user);
      if(myglobal.user!="AnonymousUser"){
        $("#id_login").attr("hidden",true);
        $("#id_logout").attr("hidden",false);
      }
      else{
        $("#id_login").attr("hidden",false);
        $("#id_logout").attr("hidden",true);
      }
    }
    newcontact=()=>{
        var editview= new ContactEditView2({model: new Contact()});
        editview.showdialog();
    }
    mysearch=()=>{
       this.search=$("#id_input_search").val();
       this.start=0;
       //console.log("search="+this.search);
       this.load_data();
    }
    baoxiang=(event)=>{
        myglobal.baoxiang=event.target.text;
        this.start=0;
        this.load_data();
    }
    button_prev_click=()=>{
        this.start=this.start-this.limit;
        if(this.start<0) this.start=0;
        //contacts.fetch({ data: { start:this.start,limit:this.limit} });
        this.load_data();
        ////console.log(this.start+","+this.limit+","+this.total);
    }
    button_next_click=()=>{
        this.start=this.start+this.limit;
        if(this.start>this.total-this.limit) this.start=this.total-this.limit;//total >limit
        if(this.start<0)
          this.start=0;
        this.load_data();//contacts.fetch({ data: { start:this.start,limit:this.limit} });
        ////console.log(this.start+","+this.limit+","+this.total);
    }
    load_data=()=>{
        $("#contact-list").empty();
        Client.contacts(
          { start:this.start,
            limit:this.limit,
            search:this.search,
            baoxiang:myglobal.baoxiang,
          }, 
          (contacts) => {
            // console.log(contacts);
            myglobal.user=contacts.user;
            if(myglobal.user===undefined){
              myglobal.user="AnonymousUser"
            }
            this.total=contacts.total;
            this.todos=contacts.data;
            this.update_user();
            this.showall();
          },(error)=>{
              // console.log(typeof(error));
              if(error instanceof SyntaxError){
                this.showlogin();
              }
          }
        );
    }
    showlogout=()=>{
      console.log("logout");
      Client.logout((res)=>{
          if (res.success){
            myglobal.user="AnonymousUser"
            this.total=0;
            this.update_user();
            this.todos=[];
            this.showall();
          }
      });
    }
    showlogin=()=>{
        this.userv= new DlgLogin({parent:this});
    }
    initialize=()=> {
        this.start=0;
        this.limit=3;
        this.total=0;
        this.search="";
        this.load_data();
    }
   showall=()=>{
        $("#page").empty();
        var right=this.start+this.limit;
        if (right>this.total) right=this.total;

        var hasprev=true;
        var hasnext=true;
        let prev;
        let next;
        //console.log(this);
        //console.log(this.state);
        if(this.start===0){
          hasprev=false;
        }
        //console.log(this.state.start+this.state.limit>=this.state.total);
        if(this.start+this.limit>=this.total){

          hasnext=false;
        }
        if (hasprev){
          $("#bt_prev").attr("hidden",false);
        }
        else{
          $("#bt_prev").attr("hidden",true);
        }
        if(hasnext){
          $("#bt_next").attr("hidden",false);
        }
        else{
          $("#bt_next").attr("hidden",true);
        }

        if(this.total<1){
          $("#page").append((0)+"..."+right+" / "+this.total);
        }
        else{
          $("#page").append((this.start+1)+"..."+right+" / "+this.total);
        }

        $("#contact_list").empty();
        var todolist=$("#contact_list");
        for(var i=0;i<this.todos.length;i++){
              var one = this.template(this.todos[i]);
              let one2=$(one);
              one2.find(".contact_edit").attr("index",i);
              todolist.append(one2);
        }            
        // $(".contact_edit").bind("click", {},this.edit);
        $(".contact_edit").click(this.edit);
    }
    jump=()=>{
      let start_input=$("#id_start_input").val();
      this.start=parseInt(start_input,10)-1;
      if(this.start>this.total-this.limit) 
          this.start=this.total-this.limit;//total >limit
      if(this.start<0)
      {
        this.start=0;
      }
      this.load_data();
    };
}
