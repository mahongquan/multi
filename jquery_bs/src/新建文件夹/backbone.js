var _ = require('underscore');
let Backbone={}
class View{
  constructor(options){
    if(options){
      this.options=options;
      if(options.el){
        this.$el=$(el)  
      }
      else{
        this.$el=$(options.tagName)
      }
    }
  }
  static extend=function(){
     return View; 
  }
  listenTo=function(){

  }
  $=window.$
}
class Model{
  toJSON=()=>{
    if(this.attributes){
        return _.clone(this.attributes);
    }
    else{
        return this.defaults();
    }
  }
  static extend=function(){
    return Model;
  }
}
class Collection{
  static extend=function(){
     return Collection; 
  }
}
Backbone.View=View;
Backbone.Model=Model;
Backbone.Collection=Collection;
export default Backbone;
