import React, { Component } from 'react';
export default class dynamicShadow extends Component<Props> {
  render() {
    return (
<div className="dynamic-shadow">
  <style jsx="true">
  {`
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;
}
.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}

  `}
  </style>
  I am a div with dynamic-shadow.I am a div with dynamic-shadow.I am a div with dynamic-shadow.I am a div with dynamic-shadow.
</div>
    );
  }
}

