import React, { Component } from 'react';
import { ResizableBox } from 'react-resizable';
import Triangle from './Triangle';
import Canvas from './Canvas';
import { AutoSizer, } from 'react-virtualized';
var mouseFrom = {},
  mouseTo = {},
  drawType = null,
  canvasObjectIndex = 0,
  textbox = null;
var drawWidth = 3; //笔触宽度
var color = 'green'; //画笔颜色
var drawingObject = null; //当前绘制对象
var moveCount = 1; //绘制移动计数器
var doDrawing = false; // 绘制状态
let canvas;
///////////////////////////
const SIDEBAR_WIDTH = 235;
const header_h="80px";
const footer_h="40px";
const STYLES = {
  wrapper:{
    position:"relative",
  },
  footer:{
    position:"fixed",
    top:`calc(100vh - ${footer_h})`,
    backgroundColor:"#666",
    overflow:"hidden",
    width:"100%",
    height:`${footer_h}`,
  },
  collapse: {
    color: '#fff',
    cursor: 'pointer',
    width: 10,
    position:"fixed",
    left: 0,
    top:`${header_h}`,
    height:`calc(100vh - ${footer_h} - ${header_h})`,
    backgroundColor: '#aaa',
  },

  header:{
    backgroundColor:"#666",
    position:"fixed",
    left:0,
    top:0,
    height:`${header_h}`,
    width:"100%",
    margin:"0 0 0 0",
    overflow:"hidden"
  },
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '0px 0px 0px 10px',
    margin:`${header_h} 0 0 0 `,
    overflow:"auto"
  },
  sidebar: { 
    transition: 'all .2s' ,
    backgroundColor:"white"
  },
  content: { flex: 1, overflow: 'auto', paddingLeft: '0px',backgroundColor:"#888" },
  resizeable: { width: 'auto', maxWidth: '100%' },
};
class LongSide extends Component {
  render() {
    var arr1=[];
    for(var i=0;i<1000;i++){
        arr1.push(i);
    }
    var ps=arr1.map((one,key)=>{
          return <p key={key}>hello</p>
    });
    return (<div>
            begin{ps}end

          </div>)
  }
}
class Header extends Component {
  render() {
    var arr1=[];
    for(var i=0;i<1000;i++){
        arr1.push(i);
    }
    var ps=arr1.map((one,key)=>{
          return <p key={key}>header</p>
    });
    return (<div style={{display:"flex"}}>
            {ps}
          </div>)
  }
}
class Footer extends Component {
  render() {
    var arr1=[];
    for(var i=0;i<1000;i++){
        arr1.push(i);
    }
    var ps=arr1.map((one,key)=>{
          return <p key={key}>footer</p>
    });
    return (<div style={{display:"flex"}}>
            {ps}
          </div>)
  }
}
class LongSpan extends Component {
  render() {
    var arr1=[];
    for(var i=0;i<1000;i++){
        arr1.push(i);
    }
    var ps=arr1.map((one,key)=>{
          return <span key={key}>{this.props.text}</span>
    });
    return (<span>
            {ps}
          </span>)
  }
}
class Long extends Component {
  render() {
    var arr1=[];
    for(var i=0;i<1000;i++){
        arr1.push(i);
    }
    var ps=arr1.map((one,key)=>{
          return <p key={key}>hello</p>
    });
    return (<div>
            {ps}
          </div>)
  }
}
class QueryContainer extends Component {
  state={
    width:500,
    height:500,
  }
  componentDidMount() {
    // this.bind_events();
    // this.bind_select();
    window.addEventListener('resize',this.resize);
    canvas = new fabric.Canvas('c', {
        backgroundColor: 'rgb(100,100,200)',
        width: this.refs.canvas.clientWidth,
        height: this.refs.canvas.clientHeight,
        isDrawingMode: true,
        skipTargetFind: false,
        selectable: false,
        selection: false,
      });

      window.canvas = canvas;
      window.zoom = window.zoom ? window.zoom : 1;

      canvas.freeDrawingBrush.color = color; //设置自由绘颜色
      canvas.freeDrawingBrush.width = drawWidth;
  }
  componentWillUnmount() {       
    window.removeEventListener('resize',this.resize);
  }
  resize=(w,h)=>{
    console.log(w);
    console.log(h);
    // if(canvas) delete canvas;
    this.setState({height:h,width:w},()=>{

      canvas = new fabric.Canvas('c', {
        backgroundColor: 'rgb(100,100,200)',
        width: this.refs.canvas.clientWidth,
        height: this.refs.canvas.clientHeight,
        isDrawingMode: true,
        skipTargetFind: false,
        selectable: false,
        selection: false,
      });

      window.canvas = canvas;
      window.zoom = window.zoom ? window.zoom : 1;

      canvas.freeDrawingBrush.color = color; //设置自由绘颜色
      canvas.freeDrawingBrush.width = drawWidth;
    });
  }
  render() {
    var width=this.state.width;
    var height=this.state.height
    console.log(this.state);
    return (
    <div style={STYLES.content}>
            <ResizableBox 
              className="react-resizable react-resizable-two-resize"
              onResizeStop={
                (event, { size }) =>{
                  // this.setState({height:size.height,width:size.width});
                  this.resize(size.width,size.height);
                } 
              }

              width={width}
              height={height}
              minConstraints={[10, 10]}
              maxConstraints={[6000, 6000]}>
              <canvas id="c"
                style={{border:"solid green 2px"}}
                ref="canvas"
                width={width}
                height={height} />
            </ResizableBox>

    </div>);
  }
}

//Canvas width height change will result a new canvas.
//left top change will change ClientRect.

class QueryBrowserContainer extends Component {
  state={
    sideBarWidth:SIDEBAR_WIDTH,
    sidebarCollapsed:false,
    width:100,
  }
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    window.addEventListener("click",this.windowclick);
  }
  // resize=()=>{
  //   this.setState({width:window.innerWidth-10-this.state.sideBarWidth})
  // }
  
  windowclick=(e)=>{
    console.log(e.target);
  }
  onCollapseClick=()=> {
    this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
  }
  render() {
    return (
      <div style={STYLES.wrapper}>

        <div style={STYLES.container}>
          <div id="sidebar" style={{
            ...STYLES.sidebar,
            marginLeft: this.state.sidebarCollapsed ? (- this.state.sideBarWidth) : 0,
          }}>
            <ResizableBox 
              className="react-resizable react-resizable-ew-resize"
              onResizeStop={(event, { size }) =>{this.setState({sideBarWidth:size.width});} }
              width={this.state.sideBarWidth || SIDEBAR_WIDTH}
              height={NaN}
              minConstraints={[50, 0]}
              maxConstraints={[window.innerWidth-10-18, 10000]}>
              <LongSide />
            </ResizableBox>
          </div>
          <QueryContainer width={window.innerWidth-10-this.state.sideBarWidth} />
        </div>
        
        <div onClick={this.onCollapseClick} style={STYLES.collapse}>
          <Triangle direction={this.state.sidebarCollapsed?"right":"left"} 
          style={{ top:`calc((100vh - ${header_h} - ${footer_h})/2)`
          , position: 'absolute', marginLeft: -3 }} />
        </div>
        <div style={STYLES.header}>
          <Header />
        </div>        
        <div style={STYLES.footer}>
             <Footer />
        </div>
        <style jsx="true">{`
* {
  box-sizing: border-box;
}
html {
  font-size: 1rem;
  overflow-wrap: break-word;
}
body {
  margin: 0;
  padding: 0;
}          
#sidebar { overflow-y: hidden; overflow-x: hidden; }
#sidebar ::-webkit-scrollbar{ display:none }

#sidebar:hover { overflow-y:auto; overflow-y:overlay }
#sidebar:hover ::-webkit-scrollbar { display:block }

#sidebar ::-webkit-scrollbar { -webkit-appearance:none }
#sidebar ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 -2px,inset 0 -8px,inset 0 2px,inset 0 8px;
  min-height: 36px
}

.react-resizable {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.react-resizable.react-resizable-se-resize {
  /*
    workaround because react-resizable requires a initial "width" in px
    https://github.com/STRML/react-resizable/issues/6
   */
  width: 100% !important;
  max-width: 100%; /* removes scroll bar in windows version */
  max-height:100%;
}

.react-resizable-ew-resize {
  padding-right: 15px;
}

.react-resizable-ew-resize .react-resizable-handle {
  position: absolute;
  width: 10px;
  top: 0px;
  right: 0px;
  margin-top: 0;
  cursor: -webkit-grabbing;
  background-color:#eee;
}

.react-resizable-ew-resize .react-resizable-handle:before {
  content: "\f07e";
  font-family: Icons;
}


.react-resizable-se-resize .react-resizable-handle {
  position: absolute;
  background-color:#0f0;
  height: 20px;
  bottom: 0;
  left: 0;
  width:200px;
  cursor: row-resize;
}
.react-resizable-two-resize .react-resizable-handle {
  position: absolute;
  background-color:#0f0;
  height: 20px;
  bottom: 0;
  right: 0;
  width:20px;
  cursor: move;
}
.react-resizable-my-resize .react-resizable-handle {
  position: absolute;
  width:100%;
  height: 10px;
  bottom: 0px;
  left: 0px;
  margin-top: 0;
  cursor: row-resize !important;
  background-color:#efe;
}
.react-resizable-handle {
  height: 100%;
  cursor: col-resize !important;
}

          `}</style>
      </div>
    );
  }
}


export default QueryBrowserContainer;
