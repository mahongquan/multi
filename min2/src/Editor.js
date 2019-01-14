import React, { Component } from 'react';
import DlgAbout from './DlgAbout';
import data from './Data';
const path = window.require('path');
const fs = window.require('fs');
const electron = window.require('electron');
const { ipcRenderer } = window.require('electron'); //
const fontSize = 16;
const toolbar_h = 80;
class HtmlEditor extends Component {
  constructor() {
    super();
    this.webview = React.createRef();
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
    ipcRenderer.on('goback', () => {
      // this.setState({show_about:true});
      this.w.goBack();
    });
    this.state = {
      show_about: false,
      filename_input: 'http://127.0.0.1:8000',
      filename: 'http://127.0.0.1:8000',
    };
  }
  componentDidMount() {
    this.w = this.webview.current; //document.getElementById("preview");
    console.log(this.w);
    this.w.addEventListener('new-window', e => {
      console.log(e);
      this.setState({ filename: e.url });
    });
  }
  componentWillUnmount() {}
  filename_change = e => {
    this.setState({ filename_input: e.target.value });
  };
  about_click = () => {
    this.setState({ show_about: true });
  };
  go_click = () => {
    console.log('go');
    this.setState({ filename: this.state.filename_input });
  };
  render() {
    return (
      <div>
        <DlgAbout
          showModal={this.state.show_about}
          closeModal={() => {
            this.setState({ show_about: false });
          }}
        />
        <input
          onChange={this.filename_change}
          value={this.state.filename_input}
        />
        <button onClick={this.go_click}>go</button>
        <button
          onClick={() => {
            this.w.goBack();
          }}
        >
          back
        </button>
        <button
          onClick={() => {
            this.w.goForward();
          }}
        >
          forward
        </button>
        <button onClick={this.about_click}>about</button>
        <webview
          ref={this.webview}
          src={this.state.filename}
          style={{ width: '100vw', height: '100vh' }}
        >
          {' '}
        </webview>
        <style jsx="true">{`
          body {
            margin: 0 0 0 0;
            padding: 0 0 0 0;
          }
        `}</style>
      </div>
    );
  }
}

export default HtmlEditor;
