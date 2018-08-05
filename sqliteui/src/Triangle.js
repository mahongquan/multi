import React, { Component } from 'react';
const syles={
arrowUp: {
  width: 0, 
  height: 0, 
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderBottom: "5px solid black"
},
arrowDown :{
  width: 0,
  height: 0, 
  borderLeft: "20px solid transparent",
  borderRight: "20px solid transparent",
  
  borderTop: "20px solid #000",
},

arrowRight :{
  width: 0, 
  height: 0, 
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  
  borderLeft: "10px solid #000",
},

arrowLeft :{
  width: 0, 
  height: 0, 
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent", 
  
  borderRight:"10px solid #000", 
}
}
export default class Triangle extends Component<Props> {

  render() {
  	const direction=this.props.direction;
  	const style1=this.props.style;
  	if(direction==="left"){
	    return (<div style={{...syles.arrowLeft,...style1}}></div> );
	}
	else{
		return (<div style={{...syles.arrowRight,...style1}}></div> );	
	}
  }
}

