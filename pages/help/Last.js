import React, { Component } from 'react';
export default class Counter extends Component<Props> {
  render() {
    return (
      <ul className="css-not-selector-shortcut">
        <style jsx="true">{`
          .css-not-selector-shortcut {
            display: flex;
          }
          li {
            list-style-type: none;
            margin: 0;
            padding: 0 0.75rem;
          }
          li:not(:last-child) {
            border-right: 2px solid #d2d5e4;
          }
        `}</style>

        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    );
  }
}
