import Backbone from './backbone.js';
import PackItemView from './PackItemView';
import {Pack,PackItem,PackItemList} from "./models";
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
export default PackItemListView;