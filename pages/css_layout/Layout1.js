import React from 'react';
import { Motion, spring } from 'react-motion';
import _ from 'lodash';
let range = _.range;

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = { stiffness: 300, damping: 50 };
const itemsCount = 4;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      originalPosOfLastPressed: 0,
      order: range(itemsCount),
    };
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseDown = (pos, pressY, { pageY }) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
    });
  };

  handleMouseMove = ({ pageY }) => {
    const {
      isPressed,
      topDeltaY,
      order,
      originalPosOfLastPressed,
    } = this.state;

    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / 100), 0, itemsCount - 1);
      let newOrder = order;

      if (currentRow !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(
          order,
          order.indexOf(originalPosOfLastPressed),
          currentRow
        );
      }

      this.setState({ mouseY: mouseY, order: newOrder });
    }
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });
  };

  render() {
    const { mouseY, isPressed, originalPosOfLastPressed, order } = this.state;

    return (
      <div className="demo8">
        {range(itemsCount).map(i => {
          const style =
            originalPosOfLastPressed === i && isPressed
              ? {
                  scale: spring(1.1, springConfig),
                  shadow: spring(16, springConfig),
                  y: mouseY,
                }
              : {
                  scale: spring(1, springConfig),
                  shadow: spring(1, springConfig),
                  y: spring(order.indexOf(i) * 100, springConfig),
                };
          return (
            <Motion style={style} key={i}>
              {({ scale, shadow, y }) => (
                <div
                  onMouseDown={this.handleMouseDown.bind(null, i, y)}
                  onTouchStart={this.handleTouchStart.bind(null, i, y)}
                  className="demo8-item"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 *
                      shadow}px 0px`,
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: i === originalPosOfLastPressed ? 99 : i,
                  }}
                >
                  {order.indexOf(i) + 1}
                </div>
              )}
            </Motion>
          );
        })}
        <style jsx="true">
          {`
            * {
              padding: 0;
              margin: 0;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
            }
            body {
              cursor: url('cursor.png') 39 39, auto;
            }
            .demo8-outer {
              background-color: #eee;
              color: #fff;
              position: absolute;
              width: 100%;
              height: 100%;
              font: 28px/1em 'Helvetica';
              display: flex;
              justify-content: center;
              align-items: center;
              display: -webkit-flex;
              -webkit-justify-content: center;
              -webkit-align-items: center;
            }
            .demo8 {
              width: 320px;
              height: 400px;
            }
            .demo8-item {
              position: absolute;
              width: 320px;
              height: 90px;
              overflow: visible;
              pointer-events: auto;
              transform-origin: 50% 50% 0px;
              border-radius: 4px;
              color: rgb(153, 153, 153);
              line-height: 96px;
              padding-left: 32px;
              font-size: 24px;
              font-weight: 400;
              background-color: rgb(255, 255, 255);
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
            }
            .link {
              position: absolute;
              color: rgb(76, 76, 76);
              text-decoration: none;
              font: 14px/1em 'Helvetica';
              padding: 10px;
              top: 0;
              left: 0;
            }
          `}
        </style>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%', margin: '1em', border: '1px solid green' }}>
          <p>
            nav
            11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          </p>
        </div>
        <div style={{ border: '1px solid green' }}>
          <p>
            content222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
          </p>
        </div>
      </div>
    );
  }
}
// export default App;
