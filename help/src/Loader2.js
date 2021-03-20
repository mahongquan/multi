import React, { Component } from 'react';
// '@keyframes bouncing-loader': {
//   'from': {
//     'opacity': '1',
//     'transform': 'translateY(0)'
//   },
//   'to': {
//     'opacity': '0.1',
//     'transform': 'translateY(-0.5rem)'
//   }
// },
var styles = {
  '#bouncing-loader': {
    display: 'flex',
    justifyContent: 'center',
  },
  '#bouncing-loader > div': {
    width: '0.5rem',
    height: '0.5rem',
    margin: '1.5rem 0.1rem',
    background: '#8385aa',
    borderRadius: '50%',
    animation: 'bouncing-loader 0.6s infinite alternate',
  },
  '#bouncing-loader > div:nth-child(2)': {
    animationDelay: '0.2s',
  },
  '#bouncing-loader > div:nth-child(3)': {
    animationDelay: '0.4s',
  },
}; // @related-file ./loader.css

export default class Loader2 extends Component {
  render() {
    return (
      <div style={{ ...styles['#bouncing-loader'] }}>
        <div style={{ ...styles['#bouncing-loader > div'] }} />
        <div
          style={{
            ...styles['#bouncing-loader > div'],
            ...styles['#bouncing-loader > div:nth-child(2)'],
          }}
        />
        <div
          style={{
            ...styles['#bouncing-loader > div'],
            ...styles['#bouncing-loader > div:nth-child(3)'],
          }}
        />
        <style jsx="true">
          {`
            @keyframes bouncing-loader {
              from {
                opacity: 1;
                transform: translateY(0);
              }
              to {
                opacity: 0.1;
                transform: translateY(-0.5rem);
              }
            }
          `}
        </style>
      </div>
    );
  }
}
