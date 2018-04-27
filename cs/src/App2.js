import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
export default class Root extends Component<Props> {
  render() {
    return (
        <div>
            <Link to="/cs">cs</Link>
            <Link style={{paddingLeft:"10px"}} to="/parts">parts</Link>
            <Link style={{paddingLeft:"10px"}}  to="/mobx1">mobx1</Link>
            <Link style={{paddingLeft:"10px"}}  to="/todos">todos</Link>
            <Link style={{paddingLeft:"10px"}}  to="/realworld">real world</Link>
        </div>
    );
  }
}

