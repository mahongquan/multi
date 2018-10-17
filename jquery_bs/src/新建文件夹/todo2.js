import {myglobal,contacts,host} from './constants';
var _ = require('underscore');
class DialogLogin{
    constructor(){
        this.model={
            username: 'mahongquan',
            password: '333333',
            csrfmiddlewaretoken: myglobal.csrf_token
        }
        this.template_str=`
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
        <table class="table-condensed">
        <tr hidden="true">
                <td>
                    <label>csrfmiddlewaretoken:</label>
                </td>
                <td>
                    <input type="text" id="csrfmiddlewaretoken"  value="<%- csrfmiddlewaretoken %>">
                </td>
          </tr>
          <tr>
                <td>
                    <label>用户名:</label>
                </td>
                <td>
                    <input type="text" id="username"  value="<%- username %>">
                </td>
          </tr>
          <tr>
                <td>
                    <label>密码:</label>
                </td>
                <td>
                    <input type="text" id="password"  value="<%- password %>">
                </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
           <button type="button" id="button_save" class="btn btn-primary">提交</button>
      </div>
    </div>
  </div>
</div>`;
        this.template= _.template(this.template_str);
        this.get_csrf();
    }
    get_csrf= function() {
        $.ajax({
          context: this,
          url: host + '/rest/login_index',
          cache: false,
          processData: false,
          contentType: false,
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
          },
          success: function(data) {
            myglobal.csrf_token = data.csrf_token;
            this.show();
          },
        });
    }    
    button_save_click=()=>{
        console.log("save");
        console.log($("#username").val())
        console.log($("#password").val())
        $('#modal1').modal('hide');
    }
    show=()=>{
        $("body").append(this.template(this.model));              //to dom
        $("#button_save").click(this.button_save_click);  //bind
        var options={};
        $('#modal1').on('hidden.bs.modal', function (e) {
            $('#modal1').remove();
        })
        $('#modal1').modal(options)
    }
}
class Todos{
    constructor(){
        this.todos=[];
        console.log("document ready");
        $("#root").html(`
        <div id="todoapp">
            <header>
                <h1>Todos</h1>
                <div class="input-group">
                  <input id="new-todo" class="form-control" type="text" placeholder="What needs to be done?"  aria-label="" aria-describedby="basic-addon1">
                  <div class="input-group-prepend">
                    <button id="button_add"  class="btn btn-primary" type="button">add</button>
                  </div>
                </div>
            </header>
            <section id="main">
              <table id="todo-list"></table>
            </section>
            <button id="button_clear" type="button">clear</button> 
            <button id="button_test" type="button">test</button>    
        </div>
        `);
        $("#button_add").click(this.button_add_click);
        $("#button_clear").click(this.button_clear_click);
        $("#button_test").click(this.button_test_click);
        this.showall();
    }
    clearall=()=>{
        $("[one]").remove();
    }
    button_edit_click=(event)=>{
        console.log("button_edit clicked");

    }
    button_test_click=(event)=>{
        console.log("button_test clicked");
        let d=new DialogLogin();
        // d.show();
        // var options={};
        // $('#modal1').modal(options)
    }
    button_remove_click=(event)=>{
        console.log("button_remove clicked");
        console.log(event.data);
        console.log(event.data.row);
        event.data.row.remove();
        let rowid=event.data.rowid;
        this.todos[rowid]=undefined;//=todos.slice(rowid);
    }        
    showall=()=>{
        this.clearall();
        var todolist=$("#todo-list");
        for(var i in this.todos){
            if(this.todos[i]){
                var one = $('<tr one="true"></tr>');
                var rowid = $('<td>'+i+'</td>');
                var newEl = $('<td>'+this.todos[i]+'</td>');
                var btn_remove = $('<td><button type="button">remove</button></td>');
                //btn.click(button_remove_click);
                btn_remove.bind("click", { row:one,rowid:i},this.button_remove_click );
                //var btnedit = $('<td><button type="button">edit</button></td>');
                //btnedit.click(button_edit_click);
                one.append(rowid);
                one.append(newEl); 
                //one.append(btnedit);
                one.append(btn_remove);
                todolist.append(one);
            }
        }            
    }
    button_add_click=()=>{
        console.log("button_add clicked");
        var newtodo=$("#new-todo");
        this.todos.push(newtodo[0].value);
        this.showall();
    }
    button_clear_click=()=>{
        this.todos=[];
        this.clearall();
    }        
}
let todos=new Todos();