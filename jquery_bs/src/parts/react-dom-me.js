var lodash=require('lodash');
var $=require("jquery");
export default class ReactDOM{
  static render=(obj,ele)=>{
  	let r=obj.render();
  	if(lodash.isString(r)){
  		$(ele).html(r);	
  		obj.componentDidMount();
  	}
  }
}