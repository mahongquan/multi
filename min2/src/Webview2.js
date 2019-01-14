import React, { Component } from 'react';
// import DlgAbout from './DlgAbout';
import data from './Data';
var { myglobal } = require('./myglobal');
require('./webviews');
const path = window.require('path');
const fs = window.require('fs');
const electron = window.require('electron');
const { ipcRenderer } = window.require('electron'); //
const fontSize = 16;
const toolbar_h = 80;
const tabId = String(Math.round(Math.random() * 100000000000000000));
class HtmlEditor extends Component {
  constructor() {
    super();
    this.webviewRef = React.createRef();
    data.getconfig();
    ipcRenderer.on('request_close', () => {
      data.saveconfig();
      ipcRenderer.send('close');
    });
    ipcRenderer.on('save', () => {
      this.save_click();
    });
    ipcRenderer.on('new', () => {
      this.newfile();
    });
    ipcRenderer.on('open', () => {
      this.open_click();
    });
    ipcRenderer.on('about', () => {
      this.setState({ show_about: true });
    });

    console.log(__dirname);
    this.state = {
      show_about: false,
      filename_input: __dirname + '/../test/index.html',
      filename: __dirname + '/../test/index.html',
      canGoBack: false,
      canGoForward: false,
      failLoad: false,
      favicon: null,
      title: '',
    };
  }
  componentDidMount() {
    myglobal.ui = this;
    myglobal.webviews.add(tabId);
    myglobal.webviews.setSelected(tabId, {
      focus: true,
    });
  }
  componentWillUnmount() {}
  onPageURLChange = url => {
    this.setState({ filename_input: url });
  };
  updateBackButton = () => {
    myglobal.webviews.callAsync(tabId, 'canGoBack', null, canGoBack => {
      this.setState({ canGoBack: canGoBack });
    });
    myglobal.webviews.callAsync(tabId, 'canGoForward', null, canGoForward => {
      this.setState({ canGoForward: canGoForward });
    });
  };
  filename_change = e => {
    this.setState({ filename_input: e.target.value });
  };
  about_click = () => {
    this.setState({ show_about: true });
  };
  go_click = () => {
    console.log('go');
    myglobal.webviews.update(tabId, this.state.filename_input);
  };

  show_menu = e => {
    console.log(e);
    var navbar = e.target;
    var navbarRect = navbar.getBoundingClientRect();

    electron.ipcRenderer.send('showSecondaryMenu', {
      x: Math.round(navbarRect.left),
      y: Math.round(navbarRect.bottom),
      async: true,
    });
  };
  render() {
    let gobackbutton, goforwardbutton;
    if (this.state.canGoBack) {
      gobackbutton = (
        <button
          onClick={() => {
            myglobal.webviews.get(tabId).goBack();
          }}
        >
          back
        </button>
      );
    } else {
      gobackbutton = <button disabled>back</button>;
    }
    if (this.state.canGoForward) {
      goforwardbutton = (
        <button
          onClick={() => {
            myglobal.webviews.get(tabId).goForward();
          }}
        >
          forward
        </button>
      );
    } else {
      goforwardbutton = <button disabled>forward</button>;
    }
    return (
      <div>
        <div>
          <img
            onClick={this.show_menu}
            src={this.state.favicon}
            style={{
              lineHeight: '16px',
              width: '16px',
              height: '16px',
              marginTop: '0px',
              paddingTop: '0px',
            }}
          />
          {this.state.title}
        </div>
        <input
          style={{ width: '330px' }}
          onChange={this.filename_change}
          value={this.state.filename_input}
        />
        <button onClick={this.go_click}>go</button>
        <span
          style={{
            backgroundColor: '#f00',
            display: this.state.failLoad ? 'inline' : 'none',
          }}
        >
          fail
        </span>
        <button
          onClick={() => {
            myglobal.webviews.callAsync(tabId, 'reload');
          }}
        >
          reload
        </button>
        {gobackbutton}
        {goforwardbutton}
        <button onClick={this.about_click}>about</button>
        <div />
        <style jsx="true">{`
          html {
            font-size: 16;
            overflow-wrap: break-word;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-variant-ligatures: none;
            font-variant-ligatures: none;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default HtmlEditor;
