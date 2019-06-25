import React, { Component } from 'react';
const styles = {
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid black',
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',

    borderTop: '20px solid #000',
  },

  arrowRight: {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',

    borderLeft: '10px solid #000',
  },

  arrowLeft: {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',

    borderRight: '10px solid #000',
  },
};
export default class Triangle extends Component {
  render() {
    const direction = this.props.direction;
    const style = this.props.style;
    console.log(style);

    let style_new;
    if (direction === 'left') {
      style_new = Object.assign({}, styles.arrowLeft, style);
    } else {
      style_new = Object.assign({}, styles.arrowRight, style);
    }
    console.log(style_new);
    return <div style={style_new} />;
  }
}
