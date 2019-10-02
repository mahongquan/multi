import React, { Component } from 'react';
export default class Counter extends Component<Props> {
  render() {
    return (
      <div className="shape-separator">
        <style jsx="true">{`
          .shape-separator {
            position: relative;
            height: 48px;
            background: #333;
          }
          .shape-separator::after {
            content: '';
            background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
            position: absolute;
            width: 100%;
            height: 24px;
            bottom: 0;
          }
        `}</style>
      </div>
    );
  }
}
