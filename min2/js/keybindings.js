/* defines keybindings that aren't in the menu (so they aren't defined by menu.js). For items in the menu, also handles electron.ipcRenderer messages */

/*
There are three possible ways that keybindings can be handled.
 Shortcuts that appear in the menubar are registered in main.js, and send IPC messages to the window (which are handled by this file)
Shortcuts that don't appear in the menubar are registered in this file, using defineShortcut(). 
 - If the browser UI is focused, these are handled by Mousetrap.
  - If a BrowserView is focused, these are handled by the before-input-event listener.
  */
let electron = require('electron');
const menuBarVisibility = require('./menuBarVisibility.js');
let { myglobal } = require('./myglobal');
var searchbar = require('./searchbar/searchbar.js');
var browserUI = require('./browserUI.js');
var focusMode = require('./focusMode.js');
var urlParser = require('./util/urlParser.js');
var settings = require('./util/settings');
let { userKeyMap } = require('./util/defaultKeyMap');
let { webviewGestures } = require('./webviewGestures');
let { PDFViewer } = require('./pdfViewer');
let { findinpage } = require('./findinpage');
var Mousetrap = require('mousetrap');
electron.ipcRenderer.on('zoomIn', function() {
  webviewGestures.zoomWebviewIn(tabs.getSelected());
});

electron.ipcRenderer.on('zoomOut', function() {
  webviewGestures.zoomWebviewOut(tabs.getSelected());
});

electron.ipcRenderer.on('zoomReset', function() {
  webviewGestures.resetWebviewZoom(tabs.getSelected());
});

electron.ipcRenderer.on('print', function() {
  if (PDFViewer.isPDFViewer(tabs.getSelected())) {
    PDFViewer.printPDF(tabs.getSelected());
  } else if (myglobal.readerView.isReader(tabs.getSelected())) {
    myglobal.readerView.printArticle(tabs.getSelected());
  } else {
    myglobal.webviews.get(tabs.getSelected()).print();
  }
});

electron.ipcRenderer.on('findInPage', function() {
  findinpage.start();
});

electron.ipcRenderer.on('inspectPage', function() {
  myglobal.webviews.get(tabs.getSelected()).openDevTools();
});

electron.ipcRenderer.on('showReadingList', function() {
  // open the searchbar with "!readinglist " as the input
  myglobal.tabBar.enterEditMode(tabs.getSelected(), '!readinglist ');
});

electron.ipcRenderer.on('showBookmarks', function() {
  myglobal.tabBar.enterEditMode(tabs.getSelected(), '!bookmarks ');
});

electron.ipcRenderer.on('showHistory', function() {
  myglobal.tabBar.enterEditMode(tabs.getSelected(), '!history ');
});

electron.ipcRenderer.on('duplicateTab', function(e) {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn();
    return;
  }

  // can't duplicate if tabs is myglobal.empty
  if (tabs.isEmpty()) {
    return;
  }

  const newIndex = tabs.getIndex(tabs.getSelected()) + 1;

  const sourceTab = tabs.get(tabs.getSelected());
  // strip tab id so that a new one is generated
  const newTab = tabs.add({ ...sourceTab, id: undefined }, newIndex);

  browserUI.addTab(newTab, { enterEditMode: false });
});

electron.ipcRenderer.on('addTab', function(e, data) {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn();
    return;
  }

  // if opening a URL (instead of adding an myglobal.empty tab), and only an myglobal.empty tab is open, navigate the current tab rather than creating another one
  if (tabs.isEmpty() && data.url) {
    browserUI.navigate(tabs.getSelected(), data.url);
  } else {
    var newIndex = tabs.getIndex(tabs.getSelected()) + 1;
    var newTab = tabs.add(
      {
        url: data.url || '',
      },
      newIndex
    );

    browserUI.addTab(newTab, {
      enterEditMode: !data.url, // only enter edit mode if the new tab is about:blank
    });
  }
});

electron.ipcRenderer.on('saveCurrentPage', function() {
  var currentTab = tabs.get(tabs.getSelected());

  // new tabs cannot be saved
  if (!currentTab.url) {
    return;
  }

  // if the current tab is a PDF, let the PDF viewer handle saving the document
  if (PDFViewer.isPDFViewer(tabs.getSelected())) {
    PDFViewer.savePDF(tabs.getSelected());
    return;
  }

  var savePath = electron.remote.dialog.showSaveDialog(
    electron.remote.getCurrentWindow(),
    {}
  );

  // savePath will be undefined if the save dialog is canceled
  if (savePath) {
    if (!savePath.endsWith('.html')) {
      savePath = savePath + '.html';
    }
    myglobal.webviews
      .get(currentTab.id)
      .getWebContents()
      .savePage(savePath, 'HTMLComplete', function() {});
  }
});

function addPrivateTab() {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn();
    return;
  }

  if (tabs.isEmpty()) {
    browserUI.destroyTab(tabs.getAtIndex(0).id);
  }

  var newIndex = tabs.getIndex(tabs.getSelected()) + 1;

  var privateTab = tabs.add(
    {
      private: true,
    },
    newIndex
  );
  browserUI.addTab(privateTab);
}

electron.ipcRenderer.on('addPrivateTab', addPrivateTab);

electron.ipcRenderer.on('addTask', function() {
  /* new tasks can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn();
    return;
  }

  browserUI.addTask();
  taskOverlay.show();
  setTimeout(function() {
    taskOverlay.hide();
    myglobal.tabBar.enterEditMode(tabs.getSelected());
  }, 600);
});

electron.ipcRenderer.on('goBack', function() {
  try {
    myglobal.webviews.get(tabs.getSelected()).goBack();
  } catch (e) {}
});

electron.ipcRenderer.on('goForward', function() {
  try {
    myglobal.webviews.get(tabs.getSelected()).goForward();
  } catch (e) {}
});

var menuBarShortcuts = ['mod+t', 'shift+mod+p', 'mod+n']; // shortcuts that are already used for menu bar items

var shortcutsList = [];

function defineShortcut(keysOrKeyMapName, fn, options = {}) {
  if (keysOrKeyMapName.keys) {
    var binding = keysOrKeyMapName.keys;
  } else {
    var binding = keyMap[keysOrKeyMapName];
  }

  if (typeof binding === 'string') {
    binding = [binding];
  }

  var shortcutCallback = function(e, combo) {
    // these shortcuts are already used by menu bar items, so also using them here would result in actions happening twice
    if (menuBarShortcuts.indexOf(combo) !== -1) {
      return;
    }
    // mod+left and mod+right are also text editing shortcuts, so they should not run when an input field is focused
    // also block single-letter shortcuts when an input field is focused, so that it's still possible to type in an input
    if (!combo.includes('+') || combo === 'mod+left' || combo === 'mod+right') {
      var webview = myglobal.webviews.get(tabs.getSelected());
      if (
        !tabs.get(tabs.getSelected()).url ||
        !webview.isFocused()
      ) {
        fn(e, combo);
      } else {
        webview.executeJavaScript(
          'document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA"',
          function(isInputFocused) {
            if (isInputFocused === false) {
              fn(e, combo);
            }
          }
        );
      }
    } else {
      // other shortcuts can run immediately
      fn(e, combo);
    }
  };

  binding.forEach(function(keys) {
    shortcutsList.push({
      combo: keys,
      keys: keys.split('+'),
      fn: shortcutCallback,
      keyUp: options.keyUp,
    });
  });

  Mousetrap.bind(binding, shortcutCallback, options.keyUp ? 'keyup' : null);
}

settings.get('keyMap', function(keyMapSettings) {
  keyMap = userKeyMap(keyMapSettings);

  // window.Mousetrap = Mousetrap
  defineShortcut('addPrivateTab', addPrivateTab);

  defineShortcut('enterEditMode', function(e) {
    myglobal.tabBar.enterEditMode(tabs.getSelected());
    return false;
  });

  defineShortcut('closeTab', function(e) {
    browserUI.closeTab(tabs.getSelected());
  });

  defineShortcut('restoreTab', function(e) {
    if (focusMode.enabled()) {
      focusMode.warn();
      return;
    }

    var restoredTab = myglobal.currentTask.tabHistory.pop();

    // The tab history stack is myglobal.empty
    if (!restoredTab) {
      return;
    }

    if (tabs.isEmpty()) {
      browserUI.destroyTab(tabs.getAtIndex(0).id);
    }

    browserUI.addTab(
      tabs.add(
        restoredTab,
        tabs.getIndex(tabs.getSelected()) + 1
      ),
      {
        enterEditMode: false,
      }
    );
  });

  defineShortcut('addToFavorites', function(e) {
    myglobal.tabBar
      .getTab(tabs.getSelected())
      .querySelector('.bookmarks-button')
      .click();
    myglobal.tabBar.enterEditMode(tabs.getSelected()); // we need to show the bookmarks button, which is only visible in edit mode
  });

  // cmd+x should switch to tab x. Cmd+9 should switch to the last tab

  for (var i = 1; i < 9; i++) {
    (function(i) {
      defineShortcut({ keys: 'mod+' + i }, function(e) {
        var currentIndex = tabs.getIndex(tabs.getSelected());
        var newTab =
          tabs.getAtIndex(currentIndex + i) ||
          tabs.getAtIndex(currentIndex - i);
        if (newTab) {
          browserUI.switchToTab(newTab.id);
        }
      });

      defineShortcut({ keys: 'shift+mod+' + i }, function(e) {
        var currentIndex = tabs.getIndex(tabs.getSelected());
        var newTab =
          tabs.getAtIndex(currentIndex - i) ||
          tabs.getAtIndex(currentIndex + i);
        if (newTab) {
          browserUI.switchToTab(newTab.id);
        }
      });
    })(i);
  }

  defineShortcut('gotoLastTab', function(e) {
    browserUI.switchToTab(
      tabs.getAtIndex(tabs.count() - 1).id
    );
  });

  defineShortcut('gotoFirstTab', function(e) {
    browserUI.switchToTab(tabs.getAtIndex(0).id);
  });

  defineShortcut({ keys: 'esc' }, function(e) {
    taskOverlay.hide();
    myglobal.tabBar.leaveEditMode();

    // exit full screen mode
    myglobal.webviews.callAsync(
      tabs.getSelected(),
      'executeJavaScript',
      'if(document.webkitIsFullScreen){document.webkitExitFullscreen()}'
    );

    myglobal.webviews.callAsync(tabs.getSelected(), 'focus');
  });

  defineShortcut('toggleReaderView', function() {
    if (myglobal.readerView.isReader(tabs.getSelected())) {
      myglobal.readerView.exit(tabs.getSelected());
    } else {
      myglobal.readerView.enter(tabs.getSelected());
    }
  });

  // TODO add help docs for this

  defineShortcut('goBack', function(d) {
    myglobal.webviews.get(tabs.getSelected()).goBack();
  });

  defineShortcut('goForward', function(d) {
    myglobal.webviews.get(tabs.getSelected()).goForward();
  });

  defineShortcut('switchToPreviousTab', function(d) {
    var currentIndex = tabs.getIndex(tabs.getSelected());
    var previousTab = tabs.getAtIndex(currentIndex - 1);

    if (previousTab) {
      browserUI.switchToTab(previousTab.id);
    } else {
      browserUI.switchToTab(
        tabs.getAtIndex(tabs.count() - 1).id
      );
    }
  });

  defineShortcut('switchToNextTab', function(d) {
    var currentIndex = tabs.getIndex(tabs.getSelected());
    var nextTab = tabs.getAtIndex(currentIndex + 1);

    if (nextTab) {
      browserUI.switchToTab(nextTab.id);
    } else {
      browserUI.switchToTab(tabs.getAtIndex(0).id);
    }
  });

  var taskSwitchTimeout = null;

  defineShortcut('switchToNextTask', function(d) {
    taskOverlay.show();

    const currentTaskIdx = tasks.indexOf(myglobal.currentTask);

    const nextTask = tasks.byIndex(currentTaskIdx + 1) || tasks.byIndex(0);
    browserUI.switchToTask(nextTask.id);

    taskOverlay.show();

    clearInterval(taskSwitchTimeout);
    taskSwitchTimeout = setTimeout(function() {
      taskOverlay.hide();
    }, 500);
  });

  defineShortcut('switchToPreviousTask', function(d) {
    taskOverlay.show();

    const currentTaskIdx = tasks.indexOf(myglobal.currentTask),
      taskCount = tasks.getLength();

    const previousTask =
      tasks.byIndex(currentTaskIdx - 1) || tasks.byIndex(tasks.getLength() - 1);
    browserUI.switchToTask(previousTask.id);

    taskOverlay.show();

    clearInterval(taskSwitchTimeout);
    taskSwitchTimeout = setTimeout(function() {
      taskOverlay.hide();
    }, 500);
  });

  defineShortcut('closeAllTabs', function(d) {
    // destroys all current tabs, and creates a new, myglobal.empty tab. Kind of like creating a new window, except the old window disappears.
    var tset = tabs.get();
    for (var i = 0; i < tset.length; i++) {
      browserUI.destroyTab(tset[i].id);
    }

    browserUI.addTab(); // create a new, blank tab
  });

  defineShortcut('toggleTasks', function() {
    if (taskOverlay.isShown) {
      taskOverlay.hide();
    } else {
      taskOverlay.show();
    }
  });

  var lastReload = 0;

  defineShortcut('reload', function() {
    var time = Date.now();

    // pressing mod+r twice in a row reloads the whole browser
    if (time - lastReload < 500) {
      electron.ipcRenderer.send('destroyAllViews');
      electron.remote.getCurrentWindow().webContents.reload();
    } else if (
      myglobal.webviews
        .get(tabs.getSelected())
        .getURL()
        .startsWith('file://')
    ) {
      // the webview.reload() method can't be used because if the webview is displaying an error page, we want to reload the original page rather than show the error page again
      browserUI.navigate(
        tabs.getSelected(),
        tabs.get(tabs.getSelected()).url
      );
    } else {
      // this can't be an error page, use the normal reload method
      myglobal.webviews.callAsync(tabs.getSelected(), 'reload');
    }

    lastReload = time;
  });

  // mod+enter navigates to searchbar URL + ".com"
  defineShortcut('completeSearchbar', function() {
    if (searchbar.associatedInput) {
      // if the searchbar is open
      var value = searchbar.associatedInput.value;

      myglobal.tabBar.leaveEditMode();

      // if the text is already a URL, navigate to that page
      if (urlParser.isURLMissingProtocol(value)) {
        browserUI.navigate(tabs.getSelected(), value);
      } else {
        browserUI.navigate(
          tabs.getSelected(),
          urlParser.parse(value + '.com')
        );
      }
    }
  });

  defineShortcut(
    'showAndHideMenuBar',
    function() {
      menuBarVisibility.toggleMenuBar();
    },
    { keyUp: true }
  ); //run on keyUp to avoid interfering with alt+f4 shortcut, see https://github.com/minbrowser/min/issues/631

  defineShortcut('followLink', function() {
    findinpage.end({ action: 'activateSelection' });
  });
}); // end settings.get

// reload the webview when the F5 key is pressed
document.body.addEventListener('keydown', function(e) {
  if (e.keyCode === 116) {
    try {
      myglobal.webviews.get(tabs.getSelected()).reloadIgnoringCache();
    } catch (e) {}
  }
});

myglobal.webviews.bindEvent('before-input-event', function(e, input) {
  var expectedKeys = 1;
  //account for additional keys that aren't in the input.key property
  if (input.alt && input.key !== 'Alt') {
    expectedKeys++;
  }
  if (input.shift && input.key !== 'Shift') {
    expectedKeys++;
  }
  if (input.control && input.key !== 'Control') {
    expectedKeys++;
  }
  if (input.meta && input.key !== 'Meta') {
    expectedKeys++;
  }

  shortcutsList.forEach(function(shortcut) {
    if (
      (shortcut.keyUp && input.type !== 'keyUp') ||
      (!shortcut.keyUp && input.type !== 'keyDown')
    ) {
      return;
    }
    var matches = true;
    var matchedKeys = 0;
    shortcut.keys.forEach(function(key) {
      if (
        !(
          key === input.key.toLowerCase() ||
          key === input.code.replace('Digit', '') ||
          (key === 'left' && input.key === 'ArrowLeft') ||
          (key === 'right' && input.key === 'ArrowRight') ||
          (key === 'up' && input.key === 'ArrowUp') ||
          (key === 'down' && input.key === 'ArrowDown') ||
          (key === 'alt' && (input.alt || input.key === 'Alt')) ||
          (key === 'shift' && (input.shift || input.key === 'Shift')) ||
          (key === 'ctrl' && (input.control || input.key === 'Control')) ||
          (key === 'mod' &&
            myglobal.platformType === 'mac' &&
            (input.meta || input.key === 'Meta')) ||
          (key === 'mod' &&
            myglobal.platformType !== 'mac' &&
            (input.control || input.key === 'Control'))
        )
      ) {
        matches = false;
      } else {
        matchedKeys++;
      }
    });

    if (matches && matchedKeys === expectedKeys) {
      shortcut.fn(null, shortcut.combo);
    }
  });
});
