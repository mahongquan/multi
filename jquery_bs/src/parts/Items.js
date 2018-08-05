import React,{Component } from './react-me';
import myredux from './MyRedux';
import ItemEdit from './ItemEdit';
var _ = require('underscore');
var $=require("jquery");

class Items extends Component {
   constructor(){
     super();
     this.state = {
      items: [],
      start:0,
      total:0,
      limit:10,
      search:"",
      start_input:1,
      error:"",
     }
     this.state=this.state;
     this.item_edit=new ItemEdit();
   }
  componentDidMount=()=>{
    // console.log(myredux.ItemStore);
    this.unsubscribe=myredux.ItemStore.subscribe(this._onChange);
    this.loaddata();
    $("#id_bt_search").click(this.search);
    $("#bt_prev").bind("click", {}, this.handlePrev);
    $("#bt_next").bind("click", {}, this.handleNext);
    $("#page_go").bind("click", {}, this.jump);
    $("#id_input").bind("change", {}, this.handleSearchChange);
    $("#id_start_input").bind("change", {}, this.handlePageChange);
  }

  componentWillUnmount=()=> {
     this.unsubscribe();
  }
  _onChange=()=> {
      // console.log("_onChange");
      let state1   =myredux.ItemStore.getState();
      // console.log(state1);
      this.setState(state1);
      console.log(this.state);
      if(this.state.showedit){
        this.item_edit.show();
      }
      let html_items=this.state.items.map(this.mapfunc);
      $("#item-list").empty();
      html_items.forEach((one)=>{
        let j=$(one);
        j.find("a").click(this.edit_click);
        $("#item-list").append(j);
      });
      // console.log(html_items);
        $("#page").empty();
        var right=this.state.start+this.state.limit;
        if (right>this.state.total) right=this.state.total;

        var hasprev=true;
        var hasnext=true;
        //console.log(this);
        //console.log(this.state);
        if(this.state.start===0){
          hasprev=false;
        }
        //console.log(this.state.start+this.state.limit>=this.state.total);
        if(this.state.start+this.state.limit>=this.state.total){

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

        if(this.state.total<1){
          $("#page").append((0)+"..."+right+" / "+this.state.total);
        }
        else{
          $("#page").append((this.state.start+1)+"..."+right+" / "+this.state.total);
        }

  }
  loaddata=()=>{
      myredux.ItemActionCreators.getItems({
          query:this.state.search,
          start:this.state.start,
          limit:this.state.limit
      });
  }
  handleSearchChange = (e) => {
    this.state.search=e.target.value;
    this.setState({search:this.state.search});
  }
  search = (e) => {
    console.log(this.state.search);
    this.state.start=0;
    this.loaddata();
  };
  handlePrev = (e) => {
    this.state.start=this.state.start-this.state.limit;
    if(this.state.start<0) {this.state.start=0;}
    this.loaddata();
  };
  handlePackItemChange = (idx,contact) => {
    console.log(idx);
    const contacts2=update(this.state.items,{[idx]: {$set:contact}});
    console.log(contacts2);
    this.setState({items:contacts2});
  };
  handleNext = (e) => {
    this.state.start=this.state.start+this.state.limit;
    if(this.state.start>this.state.total-this.state.limit) 
        this.state.start=this.state.total-this.state.limit;//total >limit
    if(this.state.start<0)
    {
      this.state.start=0;
    }
    this.loaddata();
  };
  jump=()=>{
    this.state.start=parseInt(this.state.start_input,10)-1;
    if(this.state.start>this.state.total-this.state.limit) 
        this.state.start=this.state.total-this.state.limit;//total >limit
    if(this.state.start<0)
    {
      this.state.start=0;
    }
    this.loaddata();
  };
  handlePageChange= (e) => {
    this.setState({start_input:e.target.value});
  };
  edit_click=(e)=>{
    this.handleEdit(parseInt($(e.target).attr("index"),10));
  }
  handleEdit=(idx)=>{
    myredux.ItemActionCreators.showEdit(idx);
  }
  mapfunc=(contact, idx) => {
      let temp_str
      if (!contact.image || contact.image===""){
        temp_str=`<tr key=${idx} >
          <td><%- id %></td>
          <td><%- bh %></td>
          <td><a index=${idx} href="#"><%- name %></a></td>
          <td><%- guige %></td>
          <td><%- danwei %></td>
          <td></td>
        </tr>`}
      else{
        temp_str=`<tr key={idx} >
          <td><%- id %></td>
          <td><%- bh %></td>
          <td><a index=${idx} href="#"><%- name %></a></td>
          <td><%- guige %></td>
          <td><%- danwei %></td>
          <td><img alt="no" src="/media/<%- image %>" width="100" height="50"></img></td>
        </tr>`;
      }
      let template= _.template(temp_str);
      return template(contact);
  }
  render=()=>{
    return (`<div>
  <input id="id_input" type="text"  placeholder=""  />
  <button id="id_bt_search" class="btm btn-info" >搜索</button>
  <table class="table-responsive table-bordered table-condensed"><thead>
    <tr>
    <th>ID</th>
    <th>编号</th>
    <th>名称</th>
    <th>规格</th>
    <th>单位</th>
    <th>图片</th>
    </tr></thead><tbody id="item-list">
    </tbody>
  </table>
  <a id="bt_prev" href="#" >前一页</a>
  <label id="page"></label>
  <a id="bt_next" href="#">后一页</a>
  <input id="id_start_input" maxLength="6" size="6" />
  <button id="page_go" class="btn btn-info">跳转</button>
</div>`);
  }
};
export default Items;