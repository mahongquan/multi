import Backbone from './backbone.js';
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
