import Backbone from './backbone.js';
import AppView from './AppView'
var _ = require('underscore');
var host = 'http://127.0.0.1:8000';
var availableTags = [
  'CS-1011C',
  'CS-2800',
  'CS-3000',
  'CS-3000G',
  'HD-5',
  'N-3000',
  'O-3000',
  'OH-3000',
  'ON-3000',
  'ON-4000',
  'ONH-3000',
];
function nowDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var s_month = '' + month;
  if (s_month.length < 2) s_month = '0' + s_month;
  var day = date.getDate();
  var s_day = '' + day;
  if (s_day.length < 2) s_day = '0' + s_day;
  return year + '-' + s_month + '-' + s_day;
}
function SetCookie(
  name,
  value //两个参数，一个是cookie的名子，一个是值
) {
  var Days = 30; //此 cookie 将被保存 30 天
  var exp = new Date(); //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
function getCookie(name) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) return unescape(arr[2]);
  return null;
}
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}
var user = 'AnonymousUser';
$('#dropdownMenu1_text').text(user);
var csrf_token = null; //getCookie('csrf_token'); //"{{ csrf_token }}";
var cache = {};
var cache_item = {};
var PackItemList = Backbone.Collection.extend({
  model: PackItem,
  url: host + '/rest/PackItem/',
  parse: function(data, options) {
    //console.log("parse response");
    // if(data.total)
    //   myglobal.total=data.total;
    return data.data;
  },
});
console.log(Backbone.Model);

var Pack = Backbone.Model.extend({
  urlRoot: host + '/rest/Pack/',
  defaults: function() {
    return {
      id: undefined,
      name: '',
    };
  },
});
var PackItem = Backbone.Model.extend({
  urlRoot: host + '/rest/PackItem/',
  defaults: function() {
    return {
      id: undefined,
      pack_id: undefined,
      item_id: undefined,
      ct: 0,
      Item: undefined,
    };
  },
});
class Contact extends Backbone.Model {
  urlRoot = host + '/rest/Contact/';
  //fields:['id', 'yonghu', 'addr', 'channels', 'yiqixinghao', 'yiqibh', 'baoxiang', 'shenhe', 'yujifahuo_date', 'tiaoshi_date', 'hetongbh', 'method'],
  defaults = function() {
    var d = new Date();
    var dstr = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return {
      id: undefined,
      yonghu: '',
      addr: '',
      channels: '',
      yiqixinghao: '',
      yiqibh: '',
      baoxiang: '',
      shenhe: '',
      yujifahuo_date: nowDate(),
      tiaoshi_date: nowDate(),
      hetongbh: '',
      method: '',
    };
  };
}
var ContactList = Backbone.Collection.extend({
  model: Contact,
  url: host + '/rest/Contact/',
  //localStorage: new Backbone.LocalStorage("contacts-backbone"),
  parse: function(data, options) {
    console.log('parse response:' + data.total);
    if (data.total != undefined) myglobal.total = data.total;
    return data.data;
  },
});
var UsePack = Backbone.Model.extend({
  urlRoot: host + '/rest/UsePack/',
  defaults: function() {
    return {
      pack: "", 
      contact: "",
      name: "", 
      hetongbh: "",
      id:undefined,
    };
  },
});

//{"itemid": 44, "ct": 1, "name": "镍箔", "pack": 111, "id": 1147},
var Item = Backbone.Model.extend({
  urlRoot: host + '/rest/Item/',
  defaults: function() {
    return {
      id: undefined,
      name: '',
      guige: '',
      bh: '',
      danwei: '',
    };
  },
});

var UsepackList = Backbone.Collection.extend({
  model: UsePack,
  url: host + '/rest/UsePack/',
  parse: function(data, options) {
    //console.log("parse response");
    // if(data.total)
    //   myglobal.total=data.total;
    return data.data;
  },
});
var contacts = new ContactList();
var ContactEditView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(`        <table id="table_input" class="table-condensed" >
<tr>
                <td>
                    ID:
                </td>
                <td>
                    <input type="text" id="id" name="id" readonly="true"      value="<%- id %>">
                </td>
        <!--     </tr><tr> -->
                <td>
                    <label>用户单位:</label>
                </td>
                <td>
                    <input type="text" id="yonghu" name="yonghu" value="<%- yonghu %>">
                </td>
            </tr><tr>
                <td>
                    客户地址:
                </td>
                <td>
                    <input type="text" id="addr" name="addr" value="<%- addr %>">
                </td>
       <!--      </tr><tr> -->
                <td>
                    通道配置:
                </td>
                <td>
                    <input type="text" id="channels" name="channels" value="<%- channels %>">
                </td>
            </tr><tr>
                <td>
                    <label>仪器型号:</label>
                </td>
                <td>
                    <input type="text" id="yiqixinghao" name="yiqixinghao" value="<%- yiqixinghao %>">
                </td>
  <!--           </tr><tr> -->
                <td>
                    <label>仪器编号:</label>
                </td>
                <td>
                    <input type="text" id="yiqibh" name="yiqibh" value="<%- yiqibh %>">
                </td>
            </tr><tr>
                <td>
                    <label>包箱:</label>
                </td>
                <td>
                    <input type="text" id="baoxiang" name="baoxiang" value="<%- baoxiang %>">
                </td>
<!--             </tr><tr> -->
                <td>
                    审核:
                </td>
                <td>
                    <input type="text" id="shenhe" name="shenhe" value="<%- shenhe %>">
                </td>
            </tr><tr>
                <td>
                    <label>预计发货时间:</label>
                </td>
                <td>
                    <input type="text" class="mydate" id="yujifahuo_date" name="yujifahuo_date" value="<%- yujifahuo_date %>">
                </td>
<!--             </tr><tr> -->
                <td>
                    调试时间:
                </td>
                <td>
                    <input type="text" class="mydate" id="tiaoshi_date" name="tiaoshi_date" value="<%- tiaoshi_date %>">
                </td>
            </tr><tr>
                <td>
                    <label>合同编号:</label>
                </td>
                <td>
                    <input type="text" id="hetongbh" name="hetongbh" value="<%- hetongbh %>">
                </td>
<!--             </tr><tr> -->
                <td>
                    方法:
                </td>
                <td>
                <input type="text" id="id" name="id" readonly="true" value="<%- method %>"><button class="btn" id="bt_file">选取文件</button>
                </td>
            </tr>        </table>
       <div align="center"> <button class="btn btn-primary" id="bt_save">保存</button> <button class="btn" id="bt_clear">清除</button> <button class="btn" id="bt_clearid">复制</button><div>
        <div id="id_usepacks"></div>`),
  events: {
    'click #bt_file': 'uploadfile',
    'click #bt_save': 'save',
    'click #bt_clear': 'myclear',
    'click #bt_clearid': 'myclearid',
  },
  upload_click: function(event) {
    //console.log("upload_click");
    //console.log(event.data);
    var view = event.data.view;
    $.ajax({
      context: view,
      url: host + '/rest/upload',
      type: 'POST',
      cache: false,
      data: new FormData($('#uploadForm')[0]),
      processData: false,
      contentType: false,
    })
      .done(function(res) {
        //console.log("done");
        //console.log(res);//{"success":True, "files":fullfilepath}
        data = JSON.parse(res);
        if (data.success) {
          //$("#method").val(data.files);
          view.model.set({ method: data.files });

          $('#uploadForm').dialog('close');
          //console.log(this);
        } else {
        }
      })
      .fail(function(res) {});
  },
  uploadfile: function() {
    $('#upload').bind('click', { view: this }, this.upload_click);
    $('#uploadForm').dialog({
      //bgiframe: true,
      //resizable: false, height: "530",width:"200",
      //height:140,
      modal: true,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
  },
  save_new: function() {
    //console.log("upload_click");
    var data = new FormData(this.$('#uploadForm')[0]);
    $.ajax({
      context: this,
      url: host + '/rest/Contact/',
      cache: false,
      data: data,
      processData: false,
      contentType: false,
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
      },
      success: function(data) {
        console.log('upload done');
        //console.log(data);
        // if (data.success) {
        //     addrow(data.data.id, data.data.name);
        //     $("#dialog").dialog("close");
        // }
      },
    });
  },
  save: function() {
    var data = {};
    for (var fname in this.model.attributes) {
      if (fname != 'id') {
        //var name=this.$("#"+fname).attr("name");
        var value = this.$('#' + fname).val();
        if (value) {
          var node = this.$('#' + fname);
          if (node.attr('type') == 'checkbox') {
            data[fname] = node[0].checked;
          } else {
            data[fname] = value;
          } //else
        } //if
      } //if
    } //for
    var newcontact = false;
    if (this.model.get('id') == undefined) {
      contacts.add(this.model);
      newcontact = true;
    }
    this.model.set(data);
    var self = this;
    this.model.save(null, {
      success: function(context, model, resp, options) {
        console.log(resp);
        if (model.success) {
          context.set(model.data);
          if (newcontact) {
            self.parentview.changeModel(self.model);
          }
        } else {
          console.log(model.message);
        }
      },
    });
  },
  myclear: function() {
    ////console.log("clear click");
    this.model = new Contact();
    this.render();
  },
  myclearid: function() {
    //copy
    //this.$("#id").val(undefined);
    //console.log("clearid");
    data = {}; //copy data from old model
    for (var fname in this.model.attributes) {
      if (fname != 'id') {
        data[fname] = this.model.get(fname);
      }
    }
    data['id'] = undefined; //id undefined save use POST,else use PUT
    this.model = new Contact();
    this.model.set(data);
    this.render();
    this.parentview.changeModel(this.model);
    this.listenTo(this.model, 'change', this.render); //model change must relisten
    this.listenTo(this.model, 'destroy', this.remove);
  },
  initialize: function() {
    this.parentview = arguments[0].parentview;
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    this.$('.mydate').datepicker('destroy');
    this.$el.html(this.template(this.model.toJSON()));
    this.$('.mydate').datepicker({
      dateFormat: 'yy-mm-dd',
      numberOfMonths: 1, //显示几个月
      showButtonPanel: true, //是否显示按钮面板
      clearText: '清除', //清除日期的按钮名称
      closeText: '关闭', //关闭选择框的按钮名称
      yearSuffix: '年', //年的后缀
      showMonthAfterYear: true, //是否把月放在年的后面
      //defaultDate:'2011-03-10',//默认日期
      //minDate:'2011-03-05',//最小日期
      //maxDate:'2011-03-20',//最大日期
      monthNames: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      dayNames: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
      dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    });
    return this;
  },
});
/////////////////////////////////////////////////////////////////////////////////////
var ContactView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template(`<td>
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
      <%- yiqibh %>
 </td><td>
      <%- baoxiang %>
 </td><td>
      <%- shenhe %>
 </td><td>
      <%- yujifahuo_date %>
 </td><td>
      <%- tiaoshi_date %>
 </td><td>
      <a class="contact_edit">[[<%- hetongbh %>]]</a>
 </td><td>
      <a href="/media/<%- method %>"><%- method %></a>
 </td>
 <td><a class="contact_detail" data="<%- id %>">详细</a>
<a class="contact_zxd" data="<%- id %>">装箱单</a><a class="contact_zs" data="<%- id %>">校准证书</a><!-- <a  class="contact_delete" data="<%- id %>">删除</a>
 </td> -->`),
  events: {
    'click .contact_edit': 'edit',
    'click .contact_delete': 'delete',
    //"click .contact_usepack" : "usepack",
    'click .contact_zxd': 'zxd',
    'click .contact_zs': 'zs',
    'click .contact_detail': 'detail',
  },
  detail: function() {
    window.open(
      '/parts/showcontact/?id=' + this.model.get('id'),
      'detail',
      'height=800,width=800,resizable=yes,scrollbars=yes'
    );
  },
  zxd: function() {
    window.open('/parts/zhuangxiangdan?id=' + this.model.get('id'));
  },
  zs: function() {
    window.open('/parts/tar?id=' + this.model.get('id'));
  },
  edit: function() {
    //console.log("edit");
    //console.log(arguments)
    var editview = new ContactEditView2({ model: this.model });
    editview.showdialog();
    // App.editview.model=this.model;
    //App.$("#section_edit").show();
  },
  true_delete: function() {
    var data = {};
    data.id = this.model.get('id');
    data.csrfmiddlewaretoken = csrf_token;
    data = JSON.stringify(data);
    this.model.destroy({ data: data, contentType: 'application:json' });
  },
  delete: function() {
    //delete-template
    var deleteview = new DeleteView({ callback: this.true_delete, obj: this });
    deleteview.render();
    deleteview.$el.dialog({
      modal: true,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    // this.input = this.$('.edit');
    return this;
  },
});
///////////////////////////
var ContactEditView2 = Backbone.View.extend({
  tagName: 'div',
  template: _.template(`  <div id="id_contact_edit"></div>
  <div id="id_usepack_edit"></div>`),
  initialize: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.cev = new ContactEditView({ model: this.model, parentview: this });
    var v = this.cev.render().el;
    this.$('#id_contact_edit').append(v);
    this.pev = new UsepackListView({ model: this.model });
    var v = this.pev.render().el;
    if (this.model.get('id') == undefined) {
      this.$('#id_usepack_edit').attr('hidden', true);
    } else {
      this.$('#id_usepack_edit').attr('hidden', false);
    }
    this.$('#id_usepack_edit').append(v);
  },
  showdialog: function() {
    this.render(); //must call because editview has no element now;
    var self = this;
    this.$el.dialog({
      width: 700, //height:800,
      modal: false,
      overlay: {
        //backgroundColor: '#0F0'
        //,
        opacity: 0.5,
      },
      autoOpen: true,
      open: function(event, ui) {
        //console.log("dialog open function");
        //$(ui).find('.mydate').datepicker({
        //  $(".mydate").datepicker({
        //       dateFormat: 'yy-mm-dd',
        //       numberOfMonths:1,//显示几个月
        //       showButtonPanel:true,//是否显示按钮面板
        //       clearText:"清除",//清除日期的按钮名称
        //       closeText:"关闭",//关闭选择框的按钮名称
        //       yearSuffix: '年', //年的后缀
        //       showMonthAfterYear:true,//是否把月放在年的后面
        //       //defaultDate:'2011-03-10',//默认日期
        //       //minDate:'2011-03-05',//最小日期
        //       //maxDate:'2011-03-20',//最大日期
        //       monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        //       dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        //       dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        //       dayNamesMin: ['日','一','二','三','四','五','六'],
        // });
      },
      close: function(event, ui) {
        //console.log("dialog close function");
        //$(ui).find('.mydate').datepicker("destroy");
        //$('.mydate').datepicker("destroy");
        $(this).dialog('destroy');
      },
    });
    this.cev.$('#yiqixinghao').autocomplete({
      minLength: 1,
      source: availableTags,
    });
    this.pev
      .$('#auto_pack1')
      .autocomplete({
        minLength: 1,
        focus: function(event, ui) {
          //$( "#auto_pack1" ).val( ui.item.value);
          return false;
        },
        select: function(event, ui) {
          self.pev.addrow(ui.item.id, ui.item.name);
          return false;
        },
        source: function(request, response) {
          var term = request.term;
          request = { search: term };
          if (term in cache) {
            let data = cache[term];
            response(data);
            return;
          }
          $.getJSON(host + '/rest/Pack', request, function(data, status, xhr) {
            cache[term] = data.data;
            response(data.data);
          });
        },
      })
      .autocomplete('instance')._renderItem = function(ul, item) {
        console.log(item);
        return $('<li>')
          .append('<a>' + item.id + '_' + item.name + '</a>')
          .appendTo(ul);
      };
  },
  changeModel: function(model) {
    console.log('changeModel=========================');
    console.log(this.model.get('id'));
    console.log(model.get('id'));
    // if (this.model.get("id")!=model.get("id"))
    // {
    this.model = model;
    this.pev.model = this.model;
    this.pev.render();
    this.pev.mysetdata(); //refresh data
    if (this.model.get('id') == undefined) {
      this.$('#id_usepack_edit').attr('hidden', true);
    } else {
      this.$('#id_usepack_edit').attr('hidden', false);
    }
    // }
  },
  render: function() {
    return this;
  },
});
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var DeleteView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(`        <table >
          <tr>
                <td>是否确定?</td>
          </tr>
          <tr>
                <td>
                    <button id="id_ok">确定</button>
                </td>
                <td>
                    <button id="id_cancel">取消</button>
                </td>
          </tr>
        </table>`),
  events: {
    'click #id_ok': 'ok',
    'click #id_cancel': 'cancel',
  },
  initialize: function() {
    //console.log(arguments);
    this.callback = arguments[0].callback;
    this.obj = arguments[0].obj;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  cancel: function() {
    //console.log("cancel");
    this.$el.dialog('close');
  },
  ok: function() {
    //console.log("ok");
    //var contactlistview=this.model;//ture object is view
    //contactlistview.true_delete();
    //this.callback();
    this.callback.apply(this.obj, []);
    this.$el.dialog('close');
  },
});
/////////////////////////////////////////////////////////usepackListView
var UsepackListView = Backbone.View.extend({
  tagName: 'div', //el: $("#section_usepack"),
  template: _.template(`<div class="container">
     <p>usepack list </p>
      <!-- div id="contact-info">
       <table>
      <tr><td>id：</td><td><%- id %></td></tr>
      <tr><td>合同号：</td><td><%- hetongbh %></td></tr>
      </table>
      </div -->
      <table  class="table-bordered"  width="600px">
    　<thead>
    　　<tr>
    　　　<td>ID</td><td>包名称</td><td >合同</td><td >包</td><td >合同号</td><td>操作</td>
    　　</tr>
   　</thead> 
      <tbody id="usepack-list">
      </tbody>
      </table>
      <div style="padding: 5px 5px 50px 5px;min-height:300px">  <!-- leave margin to show autocomplete items -->
      <p><input id="auto_pack1" placeholder="输入包"></p>
      <p><input id="new_pack1"  placeholder="新包"><button class="btn btn-info" id="id_new_usepack">新包</button></p>
      </div>
  </div>`),
  events: {
    'click #id_new_usepack': 'new_usepack',
  },
  new_usepack: function() {
    //console.log("select_usepack");
    var p = new Pack();
    var self = this;
    p.set({ name: this.$('#new_pack1').val() });
    p.save(null, {
      success: function(context, model, resp, options) {
        //console.log(options);
        //console.log("save finish");
        //model.set(resp.success.arguments[0].data);
        context.set(model.data);
        //self.usepacks.add(p);
        //alert("success");
        self.addrow(p.get('id'), p.get('name'));
        self.$('#new_pack1').val('');
      },
    });
  },
  mysetdata: function() {
    this.$('#usepack-list').empty();
    this.usepacks.fetch({
      reset: true,
      data: { contact: this.model.get('id') },
      success: function() {
        ////console.log(this.usepacks.length+" usepacks")
        // this.$("#page").empty();
        // var right=myglobal.start+myglobal.limit
        // this.$("#page").append((myglobal.start+1)+"..."+right+" of "+myglobal.total);
      },
      error: function() {},
    }); //{ reset: true,data: { start:this.start,limit:this.limit} });
  },
  initialize: function() {
    this.usepacks = new UsepackList();
    this.listenTo(this.usepacks, 'add', this.addOne);
    this.listenTo(this.usepacks, 'reset', this.addAll);
    this.listenTo(this.usepacks, 'all', this.render);
    this.$el.html(this.template(this.model.toJSON()));
    this.mysetdata();
  },
  addrow: function(pk, value) {
    //console.log(pk);
    //console.log(value);
    var p = new UsePack();
    var self = this;
    p.set({ contact: this.model.get('id'), pack: pk });
    p.save(null, {
      success: function(context, model, resp, options) {
        //console.log(options);
        //console.log("save finish");
        //model.set(resp.success.arguments[0].data);
        context.set(model.data);
        self.usepacks.add(p);
      },
    });
  },
  render: function() {
    //console.log("usepack-list render");//_.template($('#usepack-list-template').html()),
    //this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  addOne: function(usepack) {
    //console.log("addOne usepacks");
    var view = new UsepackView({ model: usepack });
    var viewc = view.render().el;
    //console.log(viewc);
    this.$('#usepack-list').append(viewc);
  },
  addAll: function() {
    //console.log("addAll usepacks");
    this.usepacks.each(this.addOne, this);
  },
});
//////////////////////////////////////////////////////////UsepackView
var UsepackView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template(`<td><%- id %></td><td><%- name %></td>
    <td ><%- contact %></td><td ><%- pack %></td>
    <td ><%- hetongbh %></td><td>
    <button class="usepack_edit">编辑</button>
    <button  class="usepack_delete" >删除</button></td>`),
  events: {
    'click .usepack_edit': 'edit',
    'click .usepack_delete': 'delete',
  },
  edit: function() {
    //console.log("edit");
    var packitemListView = new PackItemListView({ model: this.model });
    packitemListView.$el.dialog({
      width: 800, //height:500,
      modal: true,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
    packitemListView
      .$('#auto_item1')
      .autocomplete({
        minLength: 1,
        focus: function(event, ui) {
          //$( "#auto_pack1" ).val( ui.item.value);
          return false;
        },
        select: function(event, ui) {
          packitemListView.addrow(ui.item.id, ui.item.name);
          return false;
        },
        source: function(request, response) {
          var term = request.term;
          request = { search: term };
          if (term in cache_item) {
            data = cache_item[term];
            response(data.data);
            return;
          }
          $.getJSON(host + '/rest/Item', request, function(data, status, xhr) {
            cache_item[term] = data;
            response(data.data);
          });
        },
      })
      .autocomplete('instance')._renderItem = function(ul, item) {
      return $('<li>')
        .append('<a>' + item.id + '_' + item.name + '_' + item.guige + '</a>')
        .appendTo(ul);
    };
  },
  true_delete: function() {
    var data = {};
    data.id = this.model.get('id');
    data.csrfmiddlewaretoken = csrf_token;
    data = JSON.stringify(data);
    this.model.destroy({ data: data, contentType: 'application:json' });
  },
  delete: function() {
    var deleteview = new DeleteView({ callback: this.true_delete, obj: this });
    deleteview.render();
    deleteview.$el.dialog({
      modal: true,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
/////////////////////////////
///////
/////////////////////////////////////////////////////////usepackListView
//////////////////////////////////////////////////////////UsepackView
//////////////
var PackItemEditView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(`    <table  class="table-condensed" >
            <tr>
                <td>
                    <label>ID:</label>
                </td>
                <td>
                    <input type="text" id="id" readonly="true"      value="<%- id %>">
                </td>
            </tr>
             <tr>
                <td>
                    <label>备件id:</label>
                </td>
                <td>
                    <input type="text" id="id"  class="item" readonly="true"      value="<%- Item.id %>">
                </td>
            </tr>
            <tr>
                <td>
                    <label>编号:</label>
                </td>
                <td>
                    <input type="text" id="bh" class="item" value="<%- Item.bh %>">
                </td>
            </tr>       
            <tr>
                <td>
                    <label>名称:</label>
                </td>
                <td>
                    <input type="text" id="name"  class="item"  value="<%- Item.name %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>规格:</label>
                </td>
                <td>
                    <input type="text" id="guige"  class="item"   value="<%- Item.guige %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>单位:</label>
                </td>
                <td>
                    <input type="text" id="danwei"  class="item"  value="<%- Item.danwei %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>数量:</label>
                </td>
                <td>
                    <input type="text" id="ct"  class="packitem"  value="<%- ct %>">
                </td>
            </tr>        
            </table>
        <button  class="btn btn-primary" id="bt_save_item">保存</button>
`),
  events: {
    'click #bt_save_item': 'save',
  },
  save: function() {
    var item = {};
    var item_vs = this.$('.item');
    for (var i = 0; i < item_vs.length; i++) {
      console.log($(item_vs[i]).attr('id'));
      item[$(item_vs[i]).attr('id')] = $(item_vs[i]).val();
    }
    var data = {};
    var packitem_vs = this.$('.packitem');
    for (var i = 0; i < packitem_vs.length; i++) {
      console.log($(packitem_vs[i]).attr('id'));
      data[$(packitem_vs[i]).attr('id')] = $(packitem_vs[i]).val();
    }
    this.model.set({ Item: item });
    this.model.set(data);
    var self = this;
    this.model.save(null, {
      success: function(context, model, resp, options) {
        //console.log(options);
        //console.log("packitem save finish");
        //model.set(resp.success.arguments[0].data);
        context.set(model.data);
        self.$el.dialog('close');
      },
    });
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
var PackItemView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template(`  <table  class="table-condensed" >
            <tr>
                <td>
                    <label>ID:</label>
                </td>
                <td>
                    <input type="text" id="id" readonly="true"      value="<%- id %>">
                </td>
            </tr>
             <tr>
                <td>
                    <label>备件id:</label>
                </td>
                <td>
                    <input type="text" id="id"  class="item" readonly="true"      value="<%- Item.id %>">
                </td>
            </tr>
            <tr>
                <td>
                    <label>编号:</label>
                </td>
                <td>
                    <input type="text" id="bh" class="item" value="<%- Item.bh %>">
                </td>
            </tr>       
            <tr>
                <td>
                    <label>名称:</label>
                </td>
                <td>
                    <input type="text" id="name"  class="item"  value="<%- Item.name %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>规格:</label>
                </td>
                <td>
                    <input type="text" id="guige"  class="item"   value="<%- Item.guige %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>单位:</label>
                </td>
                <td>
                    <input type="text" id="danwei"  class="item"  value="<%- Item.danwei %>">
                </td>
            </tr>        
            <tr>
                <td>
                    <label>数量:</label>
                </td>
                <td>
                    <input type="text" id="ct"  class="packitem"  value="<%- ct %>">
                </td>
            </tr>        
            </table>
        <button  class="btn btn-primary" id="bt_save_item">保存</button>`),
  events: {
    'click .packitem_edit': 'edit',
    'click .packitem_delete': 'delete',
  },
  edit: function() {
    //console.log("edit");
    var packitemedit = new PackItemEditView({ model: this.model });
    packitemedit.render();
    packitemedit.$el.dialog({
      width: 300,
      height: 400,
      modal: false,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
  },
  true_delete: function() {
    var data = {};
    data.id = this.model.get('id');
    data.csrfmiddlewaretoken = csrf_token;
    data = JSON.stringify(data);
    this.model.destroy({ data: data, contentType: 'application:json' });
  },
  delete: function() {
    var deleteview = new DeleteView({ callback: this.true_delete, obj: this });
    deleteview.render();
    deleteview.$el.dialog({
      modal: true,
      overlay: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      autoOpen: true,
      close: function(event, ui) {
        $(this).dialog('destroy');
      },
    });
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
var PackItemListView = Backbone.View.extend({
  tagName: 'div', //el: $("#section_usepack"),
  template: _.template(`  <div class="container">
      <div id="pack-info">
      <table>
      <tr><td>id：</td><td><%- id %></td></tr>
      <tr><td>包名称：</td><td><%- name %></td></tr>
      </table>
      </div>
      <table  class="table-bordered" >
    　<thead>
    　　<tr>
    　　　<td>ID</td><td>编号</td><td>名称</td><td>规格</td><td>数量</td><td hidden="true">pack</td><td hidden="true">备件id</td><td>操作</td>
    　　</tr>
   　</thead> 
      <tbody id="packitem-list">
      </tbody>
      </table>
      <section id="packitem-edit">
      </section>
      <div style="padding: 5px 5px 50px 5px;min-height:300px">  <!-- leave margin to show autocomplete items -->
      <p><input id="auto_item1" placeholder="输入备件"></p>
      <p><input id="new_item1"  placeholder="新备件名称"><button id="id_new_packitem">新备件</button></p>
      </div>
  </div>`),
  events: {
    'click #id_new_packitem': 'new_packitem',
  },
  new_packitem: function() {
    //console.log("new packitem");
    var p = new Item();
    var self = this;
    p.set({ name: this.$('#new_item1').val(), ct: 1 });
    p.save(null, {
      success: function(context, model, resp, options) {
        //console.log(options);
        //console.log("save finish");
        //model.set(resp.success.arguments[0].data);
        context.set(model.data);
        //self.usepacks.add(p);
        //alert("success");
        self.addrow(p.get('id'), p.get('name'));
        self.$('#new_item1').val('');
      },
    });
  },
  mysetdata: function() {
    this.$('#packitem-list').empty();
    this.packitems.fetch({
      reset: true,
      data: { pack_id: this.model.get('pack'), start: 0, limit: 200 },
      success: function() {
        ////console.log(this.usepacks.length+" usepacks")
        // this.$("#page").empty();
        // var right=myglobal.start+myglobal.limit
        // this.$("#page").append((myglobal.start+1)+"..."+right+" of "+myglobal.total);
      },
      error: function() {},
    }); //{ reset: true,data: { start:this.start,limit:this.limit} });
  },
  initialize: function() {
    this.packitems = new PackItemList();
    this.listenTo(this.packitems, 'add', this.addOne);
    this.listenTo(this.packitems, 'reset', this.addAll);
    this.listenTo(this.packitems, 'all', this.render);
    this.$el.html(this.template(this.model.toJSON()));
    // this.pie=new PackItemEditView({model:new PackItem()});
    // this.$("#packitem-edit").append(this.pie.render().el);
    this.mysetdata();
  },
  addrow: function(pk, value) {
    //console.log(pk);
    //console.log(value);
    var p = new PackItem();
    var self = this;
    p.set({ pack: this.model.get('pack'), itemid: pk, ct: 1 });
    p.save(null, {
      success: function(context, model, resp, options) {
        //console.log(options);
        //console.log("save finish");
        //model.set(resp.success.arguments[0].data);
        context.set(model.data);
        self.packitems.add(p);
      },
    });
  },
  render: function() {
    //console.log("packitem-list render");//_.template($('#usepack-list-template').html()),
    //this.$el.html(this.template(this.model.toJSON()));
    //return this;
  },
  addOne: function(packitem) {
    //console.log("addOne usepacks");
    var view = new PackItemView({ model: packitem });
    var viewc = view.render().el;
    //console.log(viewc);
    this.$('#packitem-list').append(viewc);
  },
  addAll: function() {
    //console.log("addAll usepacks");
    this.packitems.each(this.addOne, this);
  },
});
$("body").html(`
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
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>  
    <div class="container table-responsive">
      <form hidden="true" id="uploadForm" enctype="multipart/form-data">
        <input id="file" type="file" name="file"/>
        <button id="upload" type="button">上传</button>
      </form>
      <div id="todoapp">
        <div>
          <table>
            <tr>
              <td>
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span id="dropdownMenu1_text">Dropdown</span>
                  <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li id="li_login"hidden="true"><a href="#" id="id_login" >log in</a></li>
                    <li id="li_logout"><a href="#" id="id_logout">log out</a></li>
                  </ul>
                </div>
              </td>
              <td>
                <input type="text" id="id_input_search"  placeholder="合同 or 仪器编号" value="">
                <button id="id_bt_search" class="btm btn-info">搜索</button>
                <button id="id_bt_new"  class="btn btn-primary">新合同</button>
              </td>
              <td>
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span id="dropdownMenu2_text">过滤</span>
                  <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#" class="baoxiang" >马红权</a></li>
                    <li><a href="#" class="baoxiang" >陈旺</a></li>
                    <li><a href="#" class="baoxiang" >吴振宁</a></li>
                    <li><a href="#" class="baoxiang" >周伟</a></li>
                    <li><a href="#" class="baoxiang" >刘银凯</a></li>
                    <li><a href="#" class="baoxiang" ><span class="glyphicon glyphicon-asterisk"></span></a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div id="main" style="min-height:200px;">
          <table  class="table-bordered" >
            <thead>
              <tr>
                <td>ID</td><td>用户单位</td><td>客户地址</td><td>通道配置</td><td>仪器型号</td><td>仪器编号</td><td>包箱</td><td>审核</td>
                <td>预计发货时间</td><td>调试时间</td><td>合同编号</td><td>方法</td><td>操作</td>
              </tr>
            </thead>
            <tbody id="contact-list">
            </tbody>
          </table>
          <a id="bt_prev">前一页</a> <label id="page">page/page</label><a id="bt_next">后一页</a>
        </div>
      </div>

    </div>`);
var App = new AppView();

