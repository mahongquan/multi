import React, { Component } from 'react';
import DlgAbout from './DlgAbout';
import DlgSettings from './DlgSettings';
import DlgFail from './DlgFail';
import DlgDownload from './DlgDownload'
import data from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faBars,
  faArrowUp,
  faChevronRight,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';
import db from './util/database';
console.log(db);
window.db = db;
library.add(faBars);
library.add(faArrowLeft);
library.add(faArrowUp);
library.add(faChevronRight);
library.add(faThList);
library.add(faThLarge);
var { myglobal } = require('./myglobal');
require('./webviews');
let { webviewGestures } = require('./webviewGestures');
const path = window.require('path');
const fs = window.require('fs');
const electron = window.require('electron');
const { ipcRenderer } = window.require('electron'); //
const fontSize = 16;
const toolbar_h = 80;
const tabId = String(Math.round(Math.random() * 100000000000000000));
class Browser extends Component {
  constructor() {
    super();
    this.findinpage_input_ref=React.createRef();
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
    ipcRenderer.on('settings', () => {
      console.log('settings');
      this.setState({ show_settings: true });
      this.hide_view();
    });
    electron.ipcRenderer.on('print', function() {
      myglobal.webviews.get(tabId).print();
    });
    electron.ipcRenderer.on('saveCurrentPage', function() {
      var savePath = electron.remote.dialog.showSaveDialog(
        electron.remote.getCurrentWindow(),
        {}
      );

      // savePath will be undefined if the save dialog is canceled
      if (savePath) {
        if (!savePath.endsWith('.html')) {
          savePath = savePath + '.html';
        }
        // console.log(myglobal.webviews.get(tabId));
        myglobal.webviews.tabContentsMap[tabId].savePage(
          savePath,
          'HTMLComplete',
          function() {}
        );
      }
    });
    electron.ipcRenderer.on('inspectPage', function() {
      myglobal.webviews.tabContentsMap[tabId].openDevTools();
    });
    electron.ipcRenderer.on('addTab', function(e, data) {
      myglobal.webviews.update(tabId, data.url);
    });
    electron.ipcRenderer.on('zoomIn', function() {
      webviewGestures.zoomWebviewIn(tabId);
    });

    electron.ipcRenderer.on('zoomOut', function() {
      webviewGestures.zoomWebviewOut(tabId);
    });

    electron.ipcRenderer.on('zoomReset', function() {
      webviewGestures.resetWebviewZoom(tabId);
    });
    electron.ipcRenderer.on('findInPage', ()=>{
      this.setState({show_findpage:true});
      this.findinpage_input_ref.current.focus();
    });
    electron.ipcRenderer.on('download-info', (e, info)=>{
      console.log(info);
      this.setState({download_info:info});
    });
    this.state = {
      show_download:false,
      download_info:null,
      show_findpage:false,
      findinpage_input: '',
      show_about: false,
      filename_input: __dirname + '/../test/index.html',
      filename: __dirname + '/../test/index.html',
      canGoBack: false,
      canGoForward: false,
      failLoad: false,
      favicon: null,
      title: '',
      bookmark: '',
      show_fail: false,
      errorCode: null,
      errorDesc: null,
      validatedURL: null,
    };
  }
  componentDidMount() {
    myglobal.ui = this;
    myglobal.webviews.add(tabId, this.state.filename_input);
    myglobal.webviews.setSelected(tabId, {
      focus: true,
    });
  }
  findinpage_input_change = e => {
    this.setState({ findinpage_input: e.target.value });
    if (e.target.value != '') {
      myglobal.webviews.get(tabId).findInPage(e.target.value);
    }
  };
  componentWillUnmount() {}
  onPageURLChange = url => {
    console.log(url);
    this.setState({ filename_input: url }, this.show_bookmark);
    // this.show_bookmark();
  };
  onFail = (errorCode, errorDesc, validatedURL) => {
    this.hide_view();
    this.setState({
      show_fail: true,
      errorCode: errorCode,
      errorDesc: errorDesc,
      validatedURL: validatedURL,
    });
  };
  show_bookmark = () => {
    let currentURL = this.state.filename_input;
    db.places
      .where('url')
      .equals(currentURL)
      .first(item => {
        if (item && item.isBookmarked) {
          this.setState({ bookmark: '*' });
        } else {
          this.setState({ bookmark: '' });
        }
      });
  };
  hide_view = () => {
    electron.ipcRenderer.send('setBounds', {
      id: tabId,
      bounds: { x: 0, y: 0, width: 0, height: 0 },
    });
  };
  show_view = () => {
    electron.ipcRenderer.send('setBounds', {
      id: tabId,
      bounds: myglobal.webviews.getViewBounds(),
    });
  };
  updateFavicon = favicon => {
    this.setState({ favicon: favicon });
  };
  updateTitle = title => {
    this.setState({ title: title });
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
  download_click=()=>{
    this.hide_view();
    this.setState({ show_download: true });
  }
  about_click = () => {
    this.hide_view();
    this.setState({ show_about: true });
  };
  go_click = () => {
    console.log('go');
    myglobal.webviews.update(tabId, this.state.filename_input);
  };
  bookmark_click = () => {
    const url = this.state.filename_input;

    db.places
      .where('url')
      .equals(url)
      .first(item => {
        if (item && item.isBookmarked) {
          this.updateBookmarkState(url, false);
        } else {
          this.updateBookmarkState(url, true);
        }
      });
  };
  updateBookmarkState = (url, shouldBeBookmarked) => {
    db.transaction('rw', db.places, () => {
      db.places
        .where('url')
        .equals(url)
        .first(item => {
          if (!item) {
            item = {
              url: url,
              title: url,
              color: '',
              visitCount: 1,
              lastVisit: Date.now(),
              pageHTML: '',
              extractedText: '',
              searchIndex: [],
              metadata: {},
            };
          }
          item.isBookmarked = shouldBeBookmarked;

          db.places.put(item);
          if (shouldBeBookmarked) {
            this.setState({ bookmark: '*' });
          } else {
            this.setState({ bookmark: '' });
          }
        });
    });
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
      <div style={{ height: toolbar_h, border: '#00a solid 1px' }}>
        <div
          style={{
            border: '#00a solid 1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <img
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
          <FontAwesomeIcon
            icon="bars"
            onClick={this.show_menu}
            style={{ border: '#00a solid 1px' }}
          />
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
        <button onClick={this.bookmark_click}>
          bookmark{this.state.bookmark}
        </button>
        <button onClick={this.about_click}>about</button>
        <button onClick={this.download_click}>download</button>
        <div style={{display:this.state.show_findpage?"inline":"none"}}
        >
          <input
            id="findinpage-input" ref={this.findinpage_input_ref}
            onChange={this.findinpage_input_change}
            value={this.findinpage_input}
          />
          <span id="findinpage-count" className="inline-text" />
          <button
            id="findinpage-previous-match"
            onClick={() => {
              myglobal.webviews
                .get(tabId)
                .findInPage(this.state.findinpage_input, {
                  forward: false,
                  findNext: true,
                });
            }}
            tabIndex="-1"
          >
            prev
          </button>
          <button
            id="findinpage-next-match"
            onClick={() => {
              myglobal.webviews
                .get(tabId)
                .findInPage(this.state.findinpage_input, {
                  forward: true,
                  findNext: true,
                });
            }}
            tabIndex="-1"
          >
            next
          </button>
          <button id="findinpage-end" onClick={()=>{
            this.setState({show_findpage:false})
          }}>
            close
          </button>
        </div>
        <DlgAbout
          showModal={this.state.show_about}
          closeModal={() => {
            this.show_view();
            this.setState({ show_about: false });
          }}
        />
        <DlgSettings
          showModal={this.state.show_settings}
          closeModal={() => {
            this.show_view();
            this.setState({ show_settings: false });
          }}
        />
        <DlgFail
          errorCode={this.state.errorCode}
          errorDesc={this.state.errorDesc}
          validatedURL={this.state.validatedURL}
          showModal={this.state.show_fail}
          closeModal={() => {
            this.show_view();
            this.setState({ show_fail: false });
          }}
        />
        <DlgDownload
          info={this.state.download_info}
          showModal={this.state.show_download}
          closeModal={() => {
            this.show_view();
            this.setState({ show_download: false });
          }}
        />

      </div>
    );
  }
}

export default Browser;
