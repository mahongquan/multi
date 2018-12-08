import React, { Component } from 'react';
export default class Root extends Component<Props> {
  render() {
    return (
<div style={{
  borderRadius: "50%",
  width:  this.props.r,
  height: this.props.r,
  background: this.props.color
}}></div>
    );
  }
}

