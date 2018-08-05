import {myglobal,contacts,host} from './constants';
var _ = require('underscore');
var $=require("jquery");
const template_str=`
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
export default class UserView{
    constructor(options){
      this.model={
            username: 'mahongquan',
            password: '333333',
            csrfmiddlewaretoken: myglobal.csrf_token
        }
      this.template= _.template(template_str);
        // this.get_csrf();
      this.show();
    }
    login=()=>{
      //console.log("login");
      var data={
        username:$("#username").val(),
        password:$("#password").val(),
        csrfmiddlewaretoken:myglobal.csrf_token,
      };
      // var self=this;
        $.ajax({
           type: 'POST'
          , url: host+"/rest/login"
          , data: data
          , complete:()=> {
          }
          , error:(XMLHttpRequest, textStatus, errorThrown)=> {
              //console.log(errorThrown);
          }
          , success: (data)=>{
              //console.log("ajax done");
              //console.log(data);
              data=JSON.parse(data);
              if (data.success) {
                  myglobal.user=data.data.name;
                  // myglobal.csrf_token=getCookie('csrftoken'); //Ext.util.Cookies.get("csrftoken");
                  this.parent.update_user();
                  $('#modal1').modal('hide');
                  this.parent.load_data();
              }
          }
      });
    }
    // button_save_click=()=>{
    //     console.log("save");
    //     console.log($("#username").val())
    //     console.log($("#password").val())

    //     $('#modal1').modal('hide');
    // }
    show=()=>{
        $("body").append(this.template(this.model));              //to dom
        $("#button_save").click(this.login);  //bind
        
        $('#modal1').on('hidden.bs.modal', function (e) {
            $('#modal1').remove();
        })
        var options={};
        $('#modal1').modal(options)
    }
}
