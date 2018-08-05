import Backbone from './backbone.js';
var _ = require('underscore');
// var object = new Backbone.Events();
// console.log(object);
// object.on("alert", function(msg) {
//   console.log("Triggered " + msg);
// });

// object.trigger("alert", "an event");
let MyView = Backbone.View.extend({
  el:$('#root'),
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
    // this.callback = arguments[0].callback;
    // this.obj = arguments[0].obj;
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
let v=new MyView();
console.log(v);
v.render();