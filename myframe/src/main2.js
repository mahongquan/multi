import Backbone from './backbone2.js';
var _ = require('underscore');
var $=require('./jquery.js');
console.log(Backbone);
class Contact extends Backbone.Model {
  defaults = function() {
    return {
      id: undefined,
      text: '',
    };
  };
}
class ContactList extends Backbone.Collection{
  model= Contact
}

let contacts = new ContactList([new Contact({id:1,text:"hello"})]);

class BoardView extends Backbone.View{
  el=window.$('#root')
  template= _.template(`<table >
    <tr><td>board</td></tr>
          <tr>
                <td>
                    <button id="id_ok">back</button>
                </td>
                <td>
                    <button id="id_cancel">取消</button>
                </td>
          </tr>
        </table>`)
  events= {
    'click #id_ok': 'ok',
    'click #id_cancel': 'cancel',
  }
  initialize=function() {
  }
  render= function() {
    console.log("render");
    this.$el.html(this.template());
    return this;
  }
  cancel= function() {
    //console.log("cancel");
    // this.$el.dialog('close');
  }
  ok= function() {
    Backbone.history.navigate("",{trigger:true});
  }
}
///////////////////////////////////////////////////////////////////////////////
class ContactView extends Backbone.View{
  constructor(options){
    super({
        model:options.model,
        tagName:"div",
        events:{
          'click #id_delete': 'deleteit',
          'click #id_edit': 'editit',
        }
    });
    this._ensureElement();this.initialize(options)
  }
  template= _.template(`<span>
      <%- id %>
 </span><span>
      <%- text %>
 </span><button id="id_delete">delete</button><button id="id_edit">edit</button>`)

  deleteit=()=>{
    console.log();
    // this.model.destroy();
    this.parent.deleteit(this.model);
  }
  editit=()=>{
    console.log("edit");
    // this.model.destroy();

  }
  initialize=(options)=>{
    console.log("ContactView initialize")
    this.parent = options.parent;
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'remove', this.remove);
  }
  render=()=>{
    console.log(this.model);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
///////////////////////////////////////////////////////////////////////////////////
let id=2;
class ListView extends Backbone.View{
  constructor(){
    super({
       model:contacts,
       el:$("#root"),
       events:{
          'click #id_ok': 'ok',
          }
    });
    console.log(this);
    this.template= _.template(`
    <input id="input1"></input>
    <button id="id_ok">add</button></div><div id="contact_list"></div>
    `)
    this._ensureElement();this.initialize();
  }
  
  deleteit=function(model){
    // console.log(contacts);
    contacts.remove(model);
  }
  ok=function(){
    console.log("add")
    var contact=new Contact({id:id++,text:$("#input1").val()});
    console.log(contact)
    contacts.add(contact);
    console.log(contacts);
    
  }
  initialize=function() {
// $('#root').html(`
//     <input id="input1"></input>
//     <button id="id_ok">add</button></div><div id="contact-list"></div>
//     `);    
    console.log(this.$el);
    console.log(this.template());
    
    console.log("init");
    this.listenTo(contacts, 'add', this.addOne);
    this.listenTo(contacts, 'reset', this.addAll);
    this.listenTo(contacts, 'all', this.render);
    this.addAll();
  }
  render= function() {
    console.log(this.template());
    this.$el.html(this.template());
    console.log(this);
    console.log(this.$el);
    return this;
  }
  addOne= function(contact) {
    console.log("addOne===========================================")
    var view = new ContactView({ model: contact,parent:this});
    console.log("---------------")
    console.log(view.render().el);
    console.log(this.$('#contact_list'));
    this.$('#contact-list').append(view.render().el);
    // console.log($('#contact-list'));
  }
  addAll= function() {
    contacts.each(this.addOne, this);
  }
}
//////////
// var ListView = Backbone.View.extend({
//   el: $('#root'),
//   template: _.template(`
//     <input id="input1"></input>
//     <button id="id_ok">add</button></div><div id="contact-list"></div>
//     `),
//   events: {
//     'click #id_ok': 'ok',
//   },
//   deleteit:function(model){
//     // console.log(contacts);
//     contacts.remove(model);
//   },
//   ok:function(){
//     var contact=new Contact({id:id++,text:$("#input1").val()});
//     contacts.add(contact);
//   },
//   initialize: function() {
//     this.$el.html(this.template());
//     console.log("init");
//     this.listenTo(contacts, 'add', this.addOne);
//     this.listenTo(contacts, 'reset', this.addAll);
//     this.listenTo(contacts, 'all', this.render);
//     this.addAll();
//   },
//   render: function() {
//     return this;
//   },
//   addOne: function(contact) {
//     var view = new ContactView({ model: contact,parent:this});
//     $('#contact-list').append(view.render().el);
//   },
//   addAll: function() {
//     contacts.each(this.addOne, this);
//   },
// });
/////////////////////////////////////////////////////////////////////////////////////////////
class AppRouter extends Backbone.Router{
    routes = {
        "" : "list",
        "board/:id" : "board"
    }
    true_delete=function(){
      console.log("true_delete");
    }
    list = function () {
        console.log("list")
        // console.log($("#root"));
        // $("#root").html("<a href='#board'>to board</a>");
        var v=new ListView();
        v.render();
        // var r=v.render();
        // $("#root").html(r.$el.html());
    }
    board= function (id) {
       console.log("board");
       var v=new BoardView();
       v.render();
    }
}
// var router=new AppRouter();
// Backbone.history.start();
var v=new ListView();
v.render();
// $('#root').html(`
//     <input id="input1"></input>
//     <button id="id_ok">add</button></div><div id="contact-list"></div>
//     `);