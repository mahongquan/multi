var _ = require('underscore');
// console.log(_);
export class Component{
    constructor(){
    	this.state={};
    }
    setState=(newState)=>{
    	_.extend(this.state,newState);
    }
}
export default class React{

}