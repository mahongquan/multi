import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect,Circle, Text ,Group} from 'react-konva';
import Konva from 'konva';
class App extends Component {
  static id=0;
  state={
    shapes:{}
  }
  onDragStart=(id,e)=> {
    console.log(e);
  }
  onDragEnd=(id,e)=> {
    console.log(e);
    console.log(this.state.shapes[id])
    console.log(e.evt.clientX);
    let shape=this.state.shapes[id];
    let p=this.state.shapes[id].props;
    let new_shape=(<Rect  
      x={e.target.attrs.x} 
      y={e.target.attrs.y} key={id}  height={p.height} fill="green" draggable={true}
      width={p.width}  onDragEnd={(e)=>{this.onDragEnd(id,e)}}
          onDragStart={(e)=>{this.onDragStart(id,e)}} />);

    this.state.shapes[id]=new_shape;
  }
      addRect=()=>{
        var shapes2=this.state.shapes;
        let id=App.id++;
        shapes2[id]=(<Rect key={id}
          x={50}
          y={50}
          width={50}
          height={50}
          fill="green"
          draggable="true"
          onDragEnd={(e)=>{this.onDragEnd(id,e)}}
          onDragStart={(e)=>{this.onDragStart(id,e)}}
        />);
        this.setState({shapes:shapes2});
    }
    addCircle=()=>{
      let id=App.id++;
      var shapes2=this.state.shapes;
        shapes2[id]=(<Circle key={id}
          onDragEnd={(e)=>{this.onDragEnd(id,e)}}
          onDragStart={(e)=>{this.onDragStart(id,e)}}
          radius={50}
          x={150}
          y={150}
          fill="green"
          draggable="true"
        />);
        this.setState({shapes:shapes2});
    }	
  render() {
    console.log(this.state.shapes);
    let g_shapes=[]
    for(var i in this.state.shapes){
      g_shapes.push(this.state.shapes[i]);
    }
    return (
    <div>
     <div><button onClick={this.addRect}>add rect</button>
     <button onClick={this.addCircle}>add circle</button></div>
      <Stage drawBorder="true" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {g_shapes}
        </Layer>
      </Stage>
    </div>
    );
  }
}

export default App;
