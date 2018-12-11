import React, { Component } from 'react';
var kp_noraml = 3.0;
var ki_normal = 0.0001;
var kd_normal = 80.0;

var kp_prePre = 3.0;
var ki_prePre = 2.0;
var kd_prePre = 1.0;

let canvas;
let ctx;
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
var k = 0.0001;
var kp = 3.0;
var ki = 0.0001;
var kd = 80.0;
var history = [];
var historyTick = 0;
let func_name = 'normal';

function resizeCanvas() {
  // console.log("resizeCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function updateCoefficients() {
  integralX = 0;
  integralY = 0;
}
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
function pid_me() {
  var errorX = setpointX - x;

  prevPrevErrorX = prevErrorX;
  prevErrorX = errorX;

  var errorY = setpointY - y;
  prevPrevErrorY = prevErrorY;
  prevErrorY = errorY;

  return [
    0.001 * k * (kp * errorX - ki * prevErrorX + kd * prevPrevErrorX),
    0.001 * k * (kp * errorY - ki * prevErrorY + kd * prevPrevErrorY),
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
  let a;
  if (func_name === 'normal') {
    a = pid();
  } else {
    a = pid_me();
  }
  var ax = a[0];
  var ay = a[1];
  var maxA = 0.2;
  ax = Math.max(Math.min(ax, maxA), -maxA);
  ay = Math.max(Math.min(ay, maxA), -maxA);
  vx += ax;
  vy += ay;
  x += vx;
  y += vy;

  if (++historyTick == 5) {
    historyTick = 0;

    if (history.length >= 50) {
      history.shift();
    }
    history.push([x, y]);
  }
  ctx.fillStyle = '#E7D492'; //clear then redraw
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < history.length; ++i) {
    //历史轨迹
    ctx.fillStyle = 'rgba(96,185,154,' + i / history.length + ')';
    ctx.beginPath();
    ctx.arc(history[i][0], history[i][1], 5, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  ctx.strokeStyle = '#60B99A'; //目标路线
  ctx.lineWidth = 1;
  ctx.setLineDash([8, 14]);
  ctx.beginPath();
  ctx.moveTo(setpointX, setpointY);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#7B5747'; //飞行物
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#F77825'; //加速度
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - ax * 300, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineTo(x, y);
  ctx.lineTo(x, y - ay * 300);
  ctx.stroke();

  // requestAnimationFrame(update);
  if (isrun) setTimeout(update, 16);
}
function canvasClick(e) {
  // console.log(e.target);
  setpointX = e.clientX;
  setpointY = e.clientY;
}

export default class PidSimulate extends Component {
  state = {
    kp: kp,
    ki: ki,
    kd: kd,
    k: k,
    pid_func: 'normal',
  };
  constructor() {
    super();
    this.canvas1 = React.createRef();
  }
  componentDidMount() {
    canvas = this.canvas1.current; //document.getElementById("canvas1");
    canvas.addEventListener('click', canvasClick);
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    this.start_click();
  }
  componentWillUnmount() {
    this.stop_click();
  }
  start_click = () => {
    isrun = true;
    update(this.state.pid_func);
  };
  stop_click = () => {
    isrun = false;
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

  pid_func_change = e => {
    this.stop_click();
    func_name = e.target.value;
    if (e.target.value === 'normal') {
      kp = kp_noraml;
      ki = ki_normal;
      kd = kd_normal;
    } else {
      kp = kp_prePre;
      ki = ki_prePre;
      kd = kd_prePre;
    }
    var state = {
      kp: kp,
      ki: ki,
      kd: kd,
      pid_func: func_name,
    };
    reset_pid();
    this.setState(state, () => {
      this.start_click();
    });
  };
  reset_click = () => {
    x = 0;
    y = 0;
    reset_pid();
  };
  render() {
    // console.log(this.state);
    return (
      <div id="container">
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
          <button id="start" onClick={this.start_click}>
            start
          </button>
          <button id="stop" onClick={this.stop_click}>
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
          <label>pid</label>
          <select value={this.state.pid_func} onChange={this.pid_func_change}>
            <option value="normal">normal</option>
            <option value="prePre">prePre</option>
          </select>
          <label>k</label>
          <input
            type="text"
            id="k"
            value={k}
            onChange={this.kChange}
            size="8"
          />
        </span>
        <canvas
          style={{ width: '100vw', height: '100vh' }}
          ref={this.canvas1}
        />
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
