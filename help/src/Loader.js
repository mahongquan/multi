import React, { Component } from 'react';
import styles from './loader.css';

export default class Root extends Component<Props> {
  render() {
    return (
<div id="bouncing-loader">
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
#bouncing-loader {
  display: flex;
  justify-content: center;
}
#bouncing-loader > div {
  width: 0.5rem;
  height: 0.5rem;
  margin: 1.5rem 0.1rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
#bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
#bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
  `}
  </style>
  <div></div>
  <div></div>
  <div></div>
</div>

    );
  }
}

