import {Component } from './react-me';
import update from 'immutability-helper';
import myredux from './MyRedux';
var _ = require('underscore');
var $=require("jquery");

class ItemEdit extends Component{
  constructor(){
    super();
    this.state={ 
        showModal: false,
        packitem:{},
        bg:{}
    }
    let r=this.render();
    $("body").append(r); 
    this.componentDidMount();
  }
  show=()=>{
    console.log("show");
    var options={};
    $('#modal1').modal(options)
  }
  hide=()=>{

  }
  componentDidMount=()=>{
    this.unsubscribe=myredux.ItemStore.subscribe(this._onChange);
  }
  
  componentWillUnmount=()=> {
     this.unsubscribe();
  }
  _onChange=()=>{
      let state1   =myredux.ItemStore.getState();
      let item=state1.items[state1._item];
      if(item){
      }
      else{
        item={}
      }
      this.old=item;
      this.setState({bg:{}});
      this.setState({
        packitem:item
        ,showModal:state1.showedit
      });
  }
  _editError=()=>{
    alert(myredux.ItemStore.getError());
  }
  _showedit=()=> {

    console.log("_on showedit");
    this.setState({ showModal: true,bg:{}});
    this.old=myredux.ItemStore.getCurrent();
    this.setState({packitem:this.old});
  }
  _editChange=()=> {
      console.log("_on showedit");
      this.setState({ showModal: true,bg:{}});
      this.old=myredux.ItemStore.getCurrent();
      this.setState({packitem:this.old});
  }
  close=()=>{
    this.setState({ showModal: false });
    myredux.ItemActionCreators.hideEdit();
  }

  open2=(idx)=>{
    this.setState({ showModal: true,bg:{}});
    this.index=idx;
    if (this.index==null){
      this.old={};
    }
    else{
      this.parent=this.props.parent;
      this.old=this.parent.state.items[this.index];
    }
    this.setState({packitem:this.old});
  }
  
  handleSave=(data)=>{
    myredux.ItemActionCreators.updateItem(this.state.packitem);
  }
  quehuoChange=(e)=>{
    var quehuo=this.state.packitem.quehuo;
    quehuo=!quehuo;
    if(this.old.quehuo===quehuo)
    {
      const bg2=update(this.state.bg,{[e.target.name]:{$set:"#ffffff"}})
      this.setState({bg:bg2});
    }
    else{
       const bg2=update(this.state.bg,{[e.target.name]:{$set:"#8888ff"}})
      this.setState({bg:bg2}); 
    }
    const contact2=update(this.state.packitem,{quehuo: {$set:quehuo}});
    console.log(contact2);
    this.setState({packitem:contact2});
  }
  handleChange=(e)=>{
    // console.log("change");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.name);
    if(this.old[e.target.name]===e.target.value)
    {
      const bg2=update(this.state.bg,{[e.target.name]:{$set:"#ffffff"}})
      //this.state.bg[e_target_name]="#ffffff";
      //console.log("equal");
      this.setState({bg:bg2});
    }
    else{
       const bg2=update(this.state.bg,{[e.target.name]:{$set:"#8888ff"}})
      //this.state.bg[e_target_name]="#ffffff";
      //console.log("equal");
      this.setState({bg:bg2}); 
    }
    const contact2=update(this.state.packitem,{[e.target.name]: {$set:e.target.value}});
    // console.log(contact2);
    this.setState({packitem:contact2});
  }
  render=()=>{
    return (
        `
<div id="modal1" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">登录</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
<table id="table_input" className="table-condensed" >
            <tbody> 
            <tr >
                <td >
                    ID:
                </td>
                <td >
                    <input type="text" id="id" name="id" readOnly="true"  disabled="disabled"    defaultValue={this.state.packitem.id} />
                </td>
            </tr><tr>
                <td>
                    名称:
                </td>
                <td>
                    <input  style={{"backgroundColor":this.state.bg.name}}  type="text" id="name" name="name" value={this.state.packitem.name} onChange={this.handleChange} />
                </td>
            </tr><tr>
                <td>
                    <label>规格:</label>
                </td>
                <td>
                    <input style={{"backgroundColor":this.state.bg.guige}} type="text"  name="guige" 
                    value={this.state.packitem.guige}  onChange={this.handleChange} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>编号:</label>
                </td>
                <td>
                    <input style={{"backgroundColor":this.state.bg.bh}} type="text" id="bh" name="bh" value={this.state.packitem.bh}  onChange={this.handleChange} />
                </td>
            </tr>
           
            <tr>
                <td>
                    <label>单位:</label>
                </td>
                <td>
                    <input type="text" style={{"backgroundColor":this.state.bg.danwei}}
                    id="danwei" name="danwei"  value={this.state.packitem.danwei} onChange={this.handleChange} />
                </td>
            </tr> 
            </tbody>
            </table>
       <div> 
       <button className="btn btn-primary" id="bt_save" onClick={this.handleSave} >保存</button> 
       </div>      
      </div>
    </div>
  </div>
</div>        
`);
  }
}
export default ItemEdit;
