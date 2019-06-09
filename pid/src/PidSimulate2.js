import React, { Component } from 'react';
let canvas_fabric;
var kp_noraml = 3.0;
var ki_normal = 0.0001;
var kd_normal = 80.0;
var kp_prePre = 3.0;
var ki_prePre = 2.0;
var kd_prePre = 1.0;

// let canvas;
// let ctx;
var isrun = false;
var x = 20;
var y = 20;
var vx = 0;
var vy = 0;

var setpointX = x;
var setpointY = y;
var prevErrorX = 0;
var prevPrevErrorX = 0;
var prevErrorY = 0;
var prevPrevErrorY = 0;
var integralX = 0;
var integralY = 0;
var kp = 3.0;
var ki = 0.0001;
var kd = 80.0;
var history = [];
var historyTick = 0;
// let func_name = 'normal';

function resizeCanvas() {
  // console.log("resizeCanvas");
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  canvas_fabric.setWidth(window.innerWidth);
  canvas_fabric.setHeight(window.innerHeight);
}

// function updateCoefficients() {
//   integralX = 0;
//   integralY = 0;
// }
function pid() {
  // console.log("normal pid")
  var errorX = setpointX - x;
  integralX += errorX;
  var derivativeX = errorX - prevErrorX;
  prevErrorX = errorX;

  var errorY = setpointY - y;
  integralY += errorY;
  var derivativeY = errorY - prevErrorY;
  prevErrorY = errorY;

  return [
    0.001 * (kp * errorX + ki * integralX + kd * derivativeX),
    0.001 * (kp * errorY + ki * integralY + kd * derivativeY),
  ];
}
function reset_pid() {
  integralX = 0;
  integralY = 0;

  prevPrevErrorY = 0;
  prevPrevErrorX = 0;
  prevErrorX = 0;
  prevErrorY = 0;
}
function update() {
  let a = pid();
  var ax = a[0];
  var ay = a[1];
  var maxA = 0.2;
  ax = Math.max(Math.min(ax, maxA), -maxA);//加速度
  ay = Math.max(Math.min(ay, maxA), -maxA);
  vx += ax;//速度
  vy += ay;
  x += vx;//位置
  y += vy;

  if (++historyTick == 5) {
    historyTick = 0;

    if (history.length >= 10) {
      history.shift();
    }
    history.push([x, y]);
  }
  // ctx.fillStyle = '#E7D492'; //clear then redraw
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  canvas_fabric.clear();
  var rect = new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#E7D492',
    width: canvas_fabric.width,
    height: canvas_fabric.height,
  });
  canvas_fabric.add(rect);//背景

  for (var i = 0; i < history.length; ++i) {
    //历史轨迹
    // ctx.fillStyle = 'rgba(96,185,154,' + i / history.length + ')';
    // ctx.beginPath();
    // ctx.arc(history[i][0], history[i][1], 5, 0, 2 * Math.PI, false);
    // ctx.closePath();
    // ctx.fill();
    var circle = new fabric.Circle({
      left: history[i][0] - 5,
      top: history[i][1] - 5,
      fill: 'rgba(96,185,154,' + i / history.length + ')',
      radius: 5,
    });
    canvas_fabric.add(circle);//轨迹
  }

  // ctx.strokeStyle = '#60B99A'; //目标路线
  // ctx.lineWidth = 1;
  // ctx.setLineDash([8, 14]);
  // ctx.beginPath();
  // ctx.moveTo(setpointX, setpointY);
  // ctx.lineTo(x, y);
  // ctx.stroke();
  // ctx.setLineDash([]);
  let canvasObject = new fabric.Line([setpointX, setpointY, x, y], {
    stroke: '#60B99A',
    strokeDashArray: [8, 14],
    strokeWidth: 1,
  });
  canvas_fabric.add(canvasObject);//指向目标
  // ctx.fillStyle = '#7B5747'; //飞行物
  // ctx.beginPath();
  // ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
  // ctx.closePath();
  // ctx.fill();
  let circle_fly = new fabric.Circle({
    left: x - 20,
    top: y - 20,
    fill: '#7B5747',
    radius: 20,
  });
  canvas_fabric.add(circle_fly);//飞行器
  // ctx.strokeStyle = '#F77825'; 
  // ctx.lineWidth = 8;
  // ctx.lineCap = 'round';
  // ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.lineTo(x - ax * 300, y);
  canvasObject = new fabric.Line([x, y, x + ax * 300, y], {
    stroke: '#F77825',
    strokeWidth: 8,
  });
  canvas_fabric.add(canvasObject);//x加速
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.lineTo(x, y);
  // ctx.lineTo(x, y - ay * 300);
  // ctx.stroke();
  canvasObject = new fabric.Line([x, y, x, y + ay * 300], {  
    stroke: '#F77825',
    strokeWidth: 8,
  });
  canvas_fabric.add(canvasObject); //y加速
  // requestAnimationFrame(update);
  if (isrun) setTimeout(update, 16);
}
function canvasClick(e) {
  // console.log(e.absolutePointer);
  setpointX = e.absolutePointer.x;
  setpointY = e.absolutePointer.y;
}

export default class PidSimulate extends Component {
  state = {
    kp: kp,
    ki: ki,
    kd: kd,
  };
  constructor() {
    super();
    // this.canvas1 = React.createRef();
    this.state = { isrun: true };
  }
  componentDidMount() {
    // canvas = this.canvas1.current; //document.getElementById("canvas1");
    canvas_fabric = new fabric.Canvas('c', {
      backgroundColor: '#E7D492',
      width: window.innerWidth,
      height: window.innerHeight,
      isDrawingMode: false,
      skipTargetFind: true,
      selectable: false,
      selection: false,
    });

    // canvas.addEventListener('click', canvasClick);
    canvas_fabric.on('mouse:down', canvasClick);
    // ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    this.start_click();
  }
  componentWillUnmount() {
    this.stop_click();
  }
  start_click = () => {
    this.setState({ isrun: true }, () => {
      isrun = true;
      update(this.state.pid_func);
    });
  };
  stop_click = () => {
    this.setState({ isrun: false }, () => {
      isrun = false;
    });
  };

  kpChange = e => {
    // console.log(e.target.value);
    kp = parseFloat(e.target.value);
    this.setState({ kp: kp });
  };
  kiChange = e => {
    ki = parseFloat(e.target.value);
    this.setState({ ki: ki });
  };
  kdChange = e => {
    kd = parseFloat(e.target.value);
    this.setState({ kd: kd });
  };
  kChange = e => {
    k = parseFloat(e.target.value);
    this.setState({ k: k });
  };

  // pid_func_change = e => {
  //   this.stop_click();
  //   func_name = e.target.value;
  //   if (e.target.value === 'normal') {
  //     kp = kp_noraml;
  //     ki = ki_normal;
  //     kd = kd_normal;
  //   } else {
  //     kp = kp_prePre;
  //     ki = ki_prePre;
  //     kd = kd_prePre;
  //   }
  //   var state = {
  //     kp: kp,
  //     ki: ki,
  //     kd: kd,
  //     pid_func: func_name,
  //   };
  //   reset_pid();
  //   this.setState(state, () => {
  //     this.start_click();
  //   });
  // };
  reset_click = () => {
    x = 0;
    y = 0;
    setpointX = 0;
    setpointY = 0;
    reset_pid();
  };
  render() {
    // console.log(this.state);
    return (
      <div id="container">
        <canvas
          id="c"
          style={{ width: '100vw', height: '100vh' }}
          ref={this.canvas1}
        />
        <span id="caption">
          <a href="https://en.wikipedia.org/wiki/PID_controller">
            PID controller
          </a>
          . CLICK TO FLY. Ball is physically simulated, orange lines represent
          your thrusters.
        </span>
        <span id="control">
          <button id="start" onClick={this.reset_click}>
            reset
          </button>
          <button
            id="start"
            onClick={this.start_click}
            style={{ display: this.state.isrun ? 'none' : 'inline' }}
          >
            start
          </button>
          <button
            id="stop"
            onClick={this.stop_click}
            style={{ display: this.state.isrun ? 'inline' : 'none' }}
          >
            stop
          </button>
          <label>Kp</label>
          <input
            type="text"
            id="kp"
            value={kp}
            onChange={this.kpChange}
            size="8"
          />
          <label>Ki</label>
          <input
            type="text"
            id="ki"
            value={ki}
            onChange={this.kiChange}
            size="8"
          />
          <label>Kd</label>
          <input
            type="text"
            id="kd"
            value={kd}
            onChange={this.kdChange}
            size="8"
          />
        </span>
        <style jsx="true">{`
          body {
            color: #554236;
            font-family: sans-serif;
            margin: 0;
            overflow: hidden;
          }
          #container {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
          }
          #caption {
            font-weight: bold;
            position: absolute;
            left: 0;
            bottom: 0;
            margin: 10px;

            cursor: default;
          }
          #caption a {
            color: #f77825;
          }
          #control {
            position: absolute;
            right: 0;
            top: 0;
            margin: 10px;
          }
        `}</style>
      </div>
    );
  }
}
