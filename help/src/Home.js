import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
export default class Root extends Component {
  render() {
    return (
      <div>
        <Link to="/help">help</Link>
        <div />
        <Link to="/test">test</Link>
        <div />
        <Link to="/app2">app2</Link>
        <div />
        <Link to="/app">app</Link>
        <div />
        <Link to="/flex">flex</Link>
        <div />
        <Link to="/anim">anim</Link>
        <div />
        <Link to="/ace">ace</Link>
        <div />
      </div>
    );
  }
}
