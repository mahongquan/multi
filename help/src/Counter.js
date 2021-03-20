import React, { Component } from 'react';
export default class Counter extends Component {
  render() {
    return (
      <ul>
        <style jsx="true">{`
          ul {
            counter-reset: counter;
          }
          li::before {
            counter-increment: counter;
            content: counters(counter, '.') ' ';
          }
        `}</style>

        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </ul>
    );
  }
}
