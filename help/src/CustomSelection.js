import React, { Component } from 'react';
export default class Root extends Component {
  render() {
    return (
      <p className="custom-text-selection">
        <style jsx="true">
          {`
            ::selection {
              background: aquamarine;
              color: black;
            }
            .custom-text-selection::selection {
              background: deeppink;
              color: white;
            }
          `}
        </style>
        Select some of this text.
      </p>
    );
  }
}
