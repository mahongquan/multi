import React, { Component } from 'react';
import Canvas from './Canvas'
// console.log("here");

class QueryBrowserContainer extends Component {
  constructor(){
    super();
  }
  componentDidMount() {
  }
 componentWillUnmount() {
  }
  onDraw=()=>{
    console.log("draw");
  }
  render() {
    // console.log(this.state);
    return (
<div id="paint1">
    <Canvas  width={200} height={200} style={{border:"solid 1px #0f0"}} />
    <style jsx="true">{`
    `}</style>
</div>
    );
  }
}
export default QueryBrowserContainer;


