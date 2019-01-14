var electron = require('electron');
// var browserUI = require('./browserUI.js');
// const previewCache = require('./previewCache.js');
var { myglobal } = require('./myglobal');
var getView = electron.remote.getGlobal('getView');
var urlParser = require('./util/urlParser.js');
var { throttle } = require('./func.js');
/* implements selecting webviews, switching between them, and creating new ones. */
// var { windowIsMaximised } = require('./windowsCaptionButtons');
// var placeholderImg = document.getElementById('webview-placeholder');

var windowIsMaximized = false; // affects navbar height on Windows
var windowIsFullscreen = false; // TODO track this for each individual webContents
// let { goBackButton } = require('./navbar/goBackButton');
function lazyRemoteObject(getObject) {
  var cachedItem = null;
  return new Proxy(
    {},
    {
      get: function(obj, prop) {
        if (!cachedItem) {
          cachedItem = getObject();
        }
        return cachedItem[prop];
      },
    }
  );
}

function forceUpdateDragRegions() {
  setTimeout(function() {
    // manually force the drag regions to update to work around https://github.com/electron/electron/issues/14038
    var d = document.createElement('div');
    d.setAttribute(
      'style',
      '-webkit-app-region:drag; width: 1px; height: 1px;'
    );
    document.body.appendChild(d);
    setTimeout(function() {
      document.body.removeChild(d);
    }, 100);
  }, 100);
}

// the permissionRequestHandler used for webviews
function pagePermissionRequestHandler(webContents, permission, callback) {
  if (permission === 'notifications' || permission === 'fullscreen') {
    callback(true);
  } else {
    callback(false);
  }
}

function captureCurrentTab(options) {
  console.log('captureCurrentTab');
  // if (
  //   myglobal.webviews.placeholderRequests.length > 0 &&
  //   !(options && options.forceCapture === true)
  // ) {
  //   // capturePage doesn't work while the view is hidden
  //   return;
  // }

  // electron.ipcRenderer.send('getCapture', {
  //   id: myglobal.webviews.selectedId,
  //   width: Math.round(window.innerWidth / 10),
  //   height: Math.round(window.innerHeight / 10),
  // });
}

function updateBackButton() {
  // if (!tabs.get(tabs.getSelected()).url) {
  //   // goBackButton.disabled = true;
  //   return;
  // }
  myglobal.ui.updateBackButton();
}

// set the permissionRequestHandler for non-private tabs

electron.remote.session.defaultSession.setPermissionRequestHandler(
  pagePermissionRequestHandler
);

// called whenever a new page starts loading, or an in-page navigation occurs
function onPageURLChange(tab, url) {
  myglobal.ui.onPageURLChange(url);
  // if the page is an error page, the URL is really the value of the "url" query parameter
  // if (url.startsWith(myglobal.webviews.internalPages.error)) {
  //   url = new URLSearchParams(new URL(url).search).get('url');
  // }

  // if (
  //   url.indexOf('https://') === 0 ||
  //   url.indexOf('about:') === 0 ||
  //   url.indexOf('chrome:') === 0 ||
  //   url.indexOf('file://') === 0
  // ) {
  //   tabs.update(tab, {
  //     secure: true,
  //     url: url,
  //   });
  // } else {
  //   tabs.update(tab, {
  //     secure: false,
  //     url: url,
  //   });
  // }
}

// called whenever the page finishes loading
function onPageLoad(e) {
  var tab = myglobal.webviews.getTabFromContents(this);

  myglobal.webviews.callAsync(tab, 'getURL', null, function(url) {
    // capture a preview image if a new page has been loaded
    // if (
    //   tab === tabs.getSelected() &&
    //   tabs.get(tab).url !== url
    // ) {
    //   setTimeout(function() {
    //     // sometimes the page isn't visible until a short time after the did-finish-load event occurs
    //     captureCurrentTab();
    //   }, 100);
    // }

    onPageURLChange(tab, url);

    // myglobal.tabBar.rerenderTab(tab);

    updateBackButton();
  });
}

// called whenever a navigation finishes
function onNavigate(e, url, httpResponseCode, httpStatusText) {
  var tab = myglobal.webviews.getTabFromContents(this);
  onPageURLChange(tab, url);
  updateBackButton();
}

myglobal.webviews = {
  tabViewMap: {}, // tabId: browserView
  tabContentsMap: {}, // tabId: webContents
  selectedId: null,
  placeholderRequests: [],
  asyncCallbacks: {},
  internalPages: {
    error: urlParser.getFileURL(__dirname + '/../pages/error/index.html'),
  },
  events: [],
  eventCount: 0,
  IPCEvents: [],
  bindEvent: function(event, fn, options) {
    myglobal.webviews.eventCount++;
    myglobal.webviews.events.push({
      event: event,
      fn: fn,
      options: options,
      id: myglobal.webviews.eventCount,
    });
  },
  bindIPC: function(name, fn) {
    myglobal.webviews.IPCEvents.push({
      name: name,
      fn: fn,
    });
  },
  viewMargins: [0, 0, 0, 0], // top, right, bottom, left
  adjustMargin: function(margins) {
    for (var i = 0; i < margins.length; i++) {
      myglobal.webviews.viewMargins[i] += margins[i];
    }
    myglobal.webviews.resize();
  },
  getViewBounds: function() {
    if (windowIsFullscreen) {
      return {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      var navbarHeight = 80;

      const viewMargins = myglobal.webviews.viewMargins;
      return {
        x: 0 + viewMargins[3],
        y: 0 + viewMargins[0] + navbarHeight,
        width: window.innerWidth - (viewMargins[1] + viewMargins[3]),
        height:
          window.innerHeight - (viewMargins[0] + viewMargins[2]) - navbarHeight,
      };
    }
  },
  add: function(tabId, url) {
    // var tabData = tabs.get(tabId);

    // if the tab is private, we want to partition it. See http://electron.atom.io/docs/v0.34.0/api/web-view-tag/#partition
    // since tab IDs are unique, we can use them as partition names
    // if (tabs.get(tabId).private === true) {
    //   var partition = tabId.toString(); // options.tabId is a number, which electron.remote.session.fromPartition won't accept. It must be converted to a string first

    //   // register permissionRequestHandler for this tab
    //   // private tabs use a different session, so the default permissionRequestHandler won't apply

    //   electron.remote.session
    //     .fromPartition(partition)
    //     .setPermissionRequestHandler(pagePermissionRequestHandler);

    //   // enable ad/tracker/contentType blocking in this tab if needed

    //   registerFiltering(partition);
    // }

    electron.ipcRenderer.send('createView', {
      id: tabId,
      webPreferencesString: JSON.stringify({
        webPreferences: {
          nodeIntegration: false,
          scrollBounce: true,
          // preload: __dirname + '/dist/preload.js',
          allowPopups: false,
          // partition: partition,
        },
      }),
      boundsString: JSON.stringify(myglobal.webviews.getViewBounds()),
      events: myglobal.webviews.events,
    });

    let view = lazyRemoteObject(function() {
      return getView(tabId);
    });

    let contents = lazyRemoteObject(function() {
      return getView(tabId).webContents;
    });

    myglobal.webviews.callAsync(tabId, 'loadURL', url);

    myglobal.webviews.tabViewMap[tabId] = view;
    myglobal.webviews.tabContentsMap[tabId] = contents;
    return view;
  },
  setSelected: function(id, options) {
    // options.focus - whether to focus the view. Defaults to true.
    myglobal.webviews.selectedId = id;

    // create the view if it doesn't already exist
    if (!myglobal.webviews.getView(id)) {
      myglobal.webviews.add(id);
    }

    updateBackButton();

    if (myglobal.webviews.placeholderRequests.length > 0) {
      return;
    }

    electron.ipcRenderer.send('setView', {
      id: id,
      bounds: myglobal.webviews.getViewBounds(),
      focus: !options || options.focus !== false,
    });

    forceUpdateDragRegions();
  },
  update: function(id, url) {
    myglobal.webviews.callAsync(id, 'loadURL', urlParser.parse(url));
  },
  destroy: function(id) {
    var w = myglobal.webviews.tabViewMap[id];
    if (w) {
      electron.ipcRenderer.send('destroyView', id);
    }
    delete myglobal.webviews.tabViewMap[id];
    delete myglobal.webviews.tabContentsMap[id];
    if (myglobal.webviews.selectedId === id) {
      myglobal.webviews.selectedId = null;
    }
  },
  getView: function(id) {
    return myglobal.webviews.tabViewMap[id];
  },
  get: function(id) {
    return myglobal.webviews.tabContentsMap[id];
  },
  requestPlaceholder: function(reason) {
    if (!myglobal.webviews.placeholderRequests.includes(reason)) {
      myglobal.webviews.placeholderRequests.push(reason);
    }
    if (myglobal.webviews.placeholderRequests.length === 1) {
      // create a new placeholder

      var img = previewCache.get(myglobal.webviews.selectedId);
      var associatedTab = tabs.get(myglobal.webviews.selectedId);
      if (img) {
        placeholderImg.src = img;
        placeholderImg.hidden = false;
      } else if (
        associatedTab &&
        associatedTab.url &&
        associatedTab.url !== 'about:blank'
      ) {
        captureCurrentTab({ forceCapture: true });
      } else {
        placeholderImg.hidden = true;
      }
    }
    setTimeout(function() {
      electron.ipcRenderer.send('hideCurrentView');
    }, 0);
  },
  hidePlaceholder: function(reason) {
    myglobal.webviews.placeholderRequests.splice(
      myglobal.webviews.placeholderRequests.indexOf(reason),
      1
    );

    if (myglobal.webviews.placeholderRequests.length === 0) {
      // multiple things can request a placeholder at the same time, but we should only show the view again if nothing requires a placeholder anymore
      if (myglobal.webviews.tabViewMap[myglobal.webviews.selectedId]) {
        electron.ipcRenderer.send('setView', {
          id: myglobal.webviews.selectedId,
          bounds: myglobal.webviews.getViewBounds(),
          focus: true,
        });
        forceUpdateDragRegions();
      }
      // wait for the view to be visible before removing the placeholder
      setTimeout(function() {
        if (myglobal.webviews.placeholderRequests.length === 0) {
          // make sure the placeholder hasn't been re-enabled
          placeholderImg.hidden = true;
        }
      }, 400);
    }
  },
  getTabFromContents: function(contents) {
    for (let tabId in myglobal.webviews.tabContentsMap) {
      if (myglobal.webviews.tabContentsMap[tabId] === contents) {
        return tabId;
      }
    }
    return null;
  },
  releaseFocus: function() {
    electron.ipcRenderer.send('focusMainWebContents');
  },
  focus: function() {
    if (myglobal.webviews.selectedId) {
      electron.ipcRenderer.send('focusView', myglobal.webviews.selectedId);
    }
  },
  resize: function() {
    electron.ipcRenderer.send('setBounds', {
      id: myglobal.webviews.selectedId,
      bounds: myglobal.webviews.getViewBounds(),
    });
  },
  callAsync: function(id, method, args, callback) {
    console.log('callAsync:' + id + '/' + method);
    console.log(args);
    if (!(args instanceof Array)) {
      args = [args];
    }
    if (callback) {
      var callId = Math.random();
      myglobal.webviews.asyncCallbacks[callId] = callback;
    }
    electron.ipcRenderer.send('callViewMethod', {
      id: id,
      callId: callId,
      method: method,
      args: args,
    });
  },
};

myglobal.webviews.bindEvent(
  'new-window',
  function(e, url, frameName, disposition) {
    console.log('new-window');
    console.log(url);
    var tab = myglobal.webviews.getTabFromContents(this);
    console.log(tab);
    myglobal.webviews.update(tab, url);
    // var currentIndex = tabs.getIndex(tabs.getSelected());

    // var newTab = tabs.add(
    //   {
    //     url: url,
    //     private: tabs.get(tab).private, // inherit private status from the current tab
    //   },
    //   currentIndex + 1
    // );
    // browserUI.addTab(newTab, {
    //   enterEditMode: false,
    //   openInBackground: disposition === 'background-tab', // possibly open in background based on disposition
    // });
  },
  { preventDefault: true }
);

window.addEventListener(
  'resize',
  throttle(function() {
    if (myglobal.webviews.placeholderRequests.length > 0) {
      // can't set view bounds if the view is hidden
      return;
    }
    myglobal.webviews.resize();
  }, 75)
);

electron.ipcRenderer.on('enter-html-full-screen', function() {
  windowIsFullscreen = true;
  myglobal.webviews.resize();
});

electron.ipcRenderer.on('leave-html-full-screen', function() {
  windowIsFullscreen = false;
  myglobal.webviews.resize();
});

electron.ipcRenderer.on('maximize', function() {
  // windowIsMaximised = true;
  myglobal.webviews.resize();
});

electron.ipcRenderer.on('unmaximize', function() {
  // windowIsMaximised = false;
  myglobal.webviews.resize();
});

myglobal.webviews.bindEvent('did-finish-load', onPageLoad);
myglobal.webviews.bindEvent('did-navigate-in-page', onPageLoad);
myglobal.webviews.bindEvent('did-navigate', onNavigate);

myglobal.webviews.bindEvent('page-title-updated', function(
  e,
  title,
  explicitSet
) {
  // var tab = myglobal.webviews.getTabFromContents(this);
  // tabs.update(tab, {
  //   title: title,
  // });
  // myglobal.tabBar.rerenderTab(tab);
});

myglobal.webviews.bindEvent('did-fail-load', function(
  e,
  errorCode,
  errorDesc,
  validatedURL,
  isMainFrame
) {
  // if (errorCode && errorCode !== -3 && isMainFrame && validatedURL) {
  //   browserUI.navigate(
  //     myglobal.webviews.getTabFromContents(this),
  //     myglobal.webviews.internalPages.error +
  //       '?ec=' +
  //       encodeURIComponent(errorCode) +
  //       '&url=' +
  //       encodeURIComponent(validatedURL)
  //   );
  // }
});

myglobal.webviews.bindEvent('crashed', function(e, isKilled) {
  var tabId = myglobal.webviews.getTabFromContents(this);
  var url = tabs.get(tabId).url;

  tabs.update(tabId, {
    url:
      myglobal.webviews.internalPages.error +
      '?ec=crash&url=' +
      encodeURIComponent(url),
  });

  // the existing process has crashed, so we can't reuse it
  myglobal.webviews.destroy(tabId);
  myglobal.webviews.add(tabId);

  if (tabId === tabs.getSelected()) {
    myglobal.webviews.setSelected(tabId);
  }
});

myglobal.webviews.bindIPC('close-window', function(webview, tabId, args) {
  browserUI.closeTab(tabId);
});

electron.ipcRenderer.on('view-event', function(e, args) {
  if (!myglobal.webviews.tabViewMap[args.viewId]) {
    // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
    return;
  }
  myglobal.webviews.events.forEach(function(ev) {
    if (ev.id === args.eventId) {
      ev.fn.apply(
        myglobal.webviews.tabContentsMap[args.viewId],
        [e].concat(args.args)
      );
    }
  });
});

electron.ipcRenderer.on('async-call-result', function(e, args) {
  console.log('async-call-result');
  console.log(args);
  myglobal.webviews.asyncCallbacks[args.callId](args.data);
  delete myglobal.webviews.asyncCallbacks[args.callId];
});

electron.ipcRenderer.on('view-electron.ipcRenderer', function(e, args) {
  if (!myglobal.webviews.tabViewMap[args.id]) {
    // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
    return;
  }
  myglobal.webviews.IPCEvents.forEach(function(item) {
    if (item.name === args.name) {
      item.fn(myglobal.webviews.tabContentsMap[args.id], args.id, [args.data]);
    }
  });
});

setInterval(function() {
  captureCurrentTab();
}, 30000);

electron.ipcRenderer.on('captureData', function(e, data) {
  previewCache.set(data.id, data.url);
  if (
    data.id === myglobal.webviews.selectedId &&
    myglobal.webviews.placeholderRequests.length > 0
  ) {
    placeholderImg.src = data.url;
    console.log(data.url);
    placeholderImg.hidden = false;
  }
});

/* focus the view when the window is focused */

electron.ipcRenderer.on('windowFocus', function() {
  if (document.activeElement === document.body) {
    myglobal.webviews.focus();
  }
});
