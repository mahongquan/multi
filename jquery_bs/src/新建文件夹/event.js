import Backbone from './backbone2.js';
var _ = require('underscore');
var $=require('./jquery.js');
var e=new Backbone.Events();
e.on("fire",()=>{
  console.log("fire")
});

class Contact extends Backbone.Events {
  constructor(){
    super();
    console.log(this);
    console.log(e);
    this.listenTo(e, 'fire', this.addOne);
    console.log(this);
    console.log(e);
  }
  addOne(){
    console.log('addOne');
  }
}
let c=new Contact();
e.trigger("fire");


