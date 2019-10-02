import React, { Component } from 'react';
import  Link  from 'next/link';
export default class Root extends Component {
  render() {
    return (
      <div>
        <a href="/help/AppHelp">help</a>
        <div />
        <Link href="./context">contextmenu</Link>
        <div />
        <Link href="/help/AppTest">test</Link>
        <div />
        <Link href="/help/App2">app2</Link>
        <div />
        <Link href="/help/App">app</Link>
        <div />
        <Link href="/help/AppFlex">flex</Link>
        <div />
        <Link href="/help/AppAnim">anim</Link>
        <div />
      </div>
    );
  }
}
