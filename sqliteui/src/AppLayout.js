import React, { Component } from 'react';
import { ResizableBox } from 'react-resizable';
import Triangle from './Triangle';
// import AppTabs from '../AppTabs';
const SIDEBAR_WIDTH = 235;
const STYLES = {
  wrapper:{
    position:"relative"
  },
  footer:{
    position:"fixed",
    top:'calc(100vh - 40px)',
    backgroundColor:"#666",
    overflow:"hidden",
    width:"100%",
    height:40,
  },
  header:{
    backgroundColor:"#666",
    height:"50px",
    top:0,
    position:"fixed",
    width:"100%",
    overflow:"hidden"
  },
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '50px 0px 40px 10px',
    margin:'0px 0px 0px 0px',
  },
  sidebar: { 
    transition: 'all .2s' ,
    backgroundColor:"white"
  },
  content: { flex: 1, overflow: 'auto', paddingLeft: '0px',backgroundColor:"#888" },
  collapse: {
    position: 'fixed',
    color: '#fff',
    cursor: 'pointer',
    width: 10,
    left: 0,
    top:50,
    height: 'calc(100vh - 90px)',
    backgroundColor: '#eee',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  },
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
            {ps}

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
  render() {
    return (<div style={STYLES.content}>
             <LongSpan text="content" />
          </div>)
  }
}
class QueryBrowserContainer extends Component {
  state={
    sideBarWidth:SIDEBAR_WIDTH,
    sidebarCollapsed:false,
  }
  constructor(props, context) {
    super(props, context);
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
              <div>
                <LongSpan text="side" />
              </div>
            </ResizableBox>
          </div>
          <QueryContainer />
        </div>
        <div style={STYLES.header}>
          <Header />
        </div>
        <div onClick={this.onCollapseClick} style={STYLES.collapse}>
          <Triangle direction={this.state.sidebarCollapsed?"right":"left"} style={{ top: 'calc(100vh/2 - 57px)', position: 'absolute', marginLeft: -3 }} />
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
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
  background-position: bottom right;
  padding: 0 3px 3px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: se-resize;
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
