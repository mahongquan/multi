var browserUI = require('../browserUI.js');
var focusMode = require('../focusMode.js');
var searchbar = require('../searchbar/searchbar.js');
var urlParser = require('../util/urlParser.js');
let { myglobal } = require('../myglobal');
var progressBar = require('./progressBar.js');
// var bookmarkStar = require('./bookmarkStar.js');

var lastTabDeletion = 0; // TODO get rid of this

myglobal.tabBar = {
  container: document.getElementById('tabs'),
  tabElementMap: {}, // tabId: tab element
  editingTab: null, // the ID of the tab that is being edited
  getTab: function(tabId) {
    return myglobal.tabBar.tabElementMap[tabId];
  },
  getTabInput: function(tabId) {
    return myglobal.tabBar.getTab(tabId).querySelector('.tab-input');
  },
  setActiveTab: function(tabId) {
    var activeTab = document.querySelector('.tab-item.active');

    if (activeTab) {
      activeTab.classList.remove('active');
    }

    var el = myglobal.tabBar.getTab(tabId);
    el.classList.add('active');

    requestIdleCallback(
      function() {
        requestAnimationFrame(function() {
          el.scrollIntoView();
        });
      },
      {
        timeout: 1500,
      }
    );
  },
  enterEditMode: function(tabId, editingValue) {
    // editingValue: an optional string to show in the searchbar instead of the current URL

    myglobal.webviews.requestPlaceholder('editMode');
    taskOverlay.hide();

    var tabEl = myglobal.tabBar.getTab(tabId);
    var webview = myglobal.webviews.get(tabId);

    var currentURL = urlParser.getDisplayURL(tabs.get(tabId).url);
    if (currentURL === 'about:blank') {
      currentURL = '';
    }
    document.body.classList.add('is-edit-mode');
    tabEl.classList.add('selected');

    var input = myglobal.tabBar.getTabInput(tabId);
    input.value = editingValue || currentURL;
    input.focus();
    if (!editingValue) {
      input.select();
    }

    searchbar.show(input);

    if (editingValue) {
      searchbar.showResults(editingValue, null);
    } else {
      searchbar.showResults('', null);
    }

    myglobal.tabBar.editingTab = tabId;
  },
  leaveEditMode: function() {
    if (!myglobal.tabBar.editingTab) {
      return;
    }
    var selTab = document.querySelector('.tab-item.selected');
    if (selTab) {
      selTab.classList.remove('selected');
    }

    var input = document.querySelector('.tab-item .tab-input:focus');
    if (input) {
      input.blur();
    }

    document.body.classList.remove('is-edit-mode');
    searchbar.hide();

    myglobal.webviews.hidePlaceholder('editMode');

    myglobal.tabBar.editingTab = null;
  },
  rerenderTab: function(tabId) {
    var tabEl = myglobal.tabBar.getTab(tabId);
    var tabData = tabs.get(tabId);

    var tabTitle = tabData.title || l('newTabLabel');

    tabEl.title = tabTitle;
    var titleEl = tabEl.querySelector('.tab-view-contents .title');
    titleEl.textContent = tabTitle;

    var secIcon = tabEl.getElementsByClassName('icon-tab-not-secure')[0];
    if (tabData.secure === false) {
      secIcon.hidden = false;
    } else {
      secIcon.hidden = true;
    }

    // update the star to reflect whether the page is bookmarked or not
    // bookmarkStar.update(
    //   tabId,
    //   myglobal.tabBar.getTab(tabId).querySelector('.bookmarks-button')
    // );
  },
  rerenderAll: function() {
    myglobal.empty(myglobal.tabBar.container);
    myglobal.tabBar.tabElementMap = {};
    for (var i = 0; i < tabs.length; i++) {
      var el = myglobal.tabBar.createElement(tabs[i]);
      myglobal.tabBar.container.appendChild(el);
      myglobal.tabBar.tabElementMap[tabs[i].id] = el;
    }
    if (tabs.getSelected()) {
      myglobal.tabBar.setActiveTab(tabs.getSelected());
    }
  },
  createElement: function(data) {
    var url = urlParser.parse(data.url);
    var tabTitle = data.title || l('newTabLabel');

    var tabEl = document.createElement('div');
    tabEl.className = 'tab-item';
    tabEl.setAttribute('data-tab', data.id);
    tabEl.title = tabTitle;

    var ec = document.createElement('div');
    ec.className = 'tab-edit-contents';

    var input = document.createElement('input');
    input.className = 'tab-input mousetrap';
    input.setAttribute('placeholder', l('searchbarPlaceholder'));
    input.value = url;

    ec.appendChild(input);
    // ec.appendChild(bookmarkStar.create(data.id));

    tabEl.appendChild(ec);

    var vc = document.createElement('div');
    vc.className = 'tab-view-contents';

    vc.appendChild(myglobal.readerView.getButton(data.id));
    vc.appendChild(progressBar.create());

    // icons

    var iconArea = document.createElement('span');
    iconArea.className = 'tab-icon-area';

    var closeTabButton = document.createElement('i');
    closeTabButton.classList.add('tab-close-button');
    closeTabButton.classList.add('fa');
    closeTabButton.classList.add('fa-times-circle');

    closeTabButton.addEventListener('click', function(e) {
      browserUI.closeTab(data.id);
      // prevent the searchbar from being opened
      e.stopPropagation();
    });

    iconArea.appendChild(closeTabButton);

    if (data.private) {
      var pbIcon = document.createElement('i');
      pbIcon.className = 'fa fa-eye-slash icon-tab-is-private tab-info-icon';
      iconArea.appendChild(pbIcon);

      vc.setAttribute('title', l('privateTab'));
    }

    var secIcon = document.createElement('i');
    secIcon.className = 'fa fa-unlock icon-tab-not-secure tab-info-icon';
    secIcon.title = l('connectionNotSecure');

    secIcon.hidden = data.secure !== false;
    iconArea.appendChild(secIcon);

    vc.appendChild(iconArea);

    // title

    var title = document.createElement('span');
    title.className = 'title';
    title.textContent = tabTitle;

    vc.appendChild(title);

    tabEl.appendChild(vc);

    input.addEventListener('keydown', function(e) {
      if (e.keyCode === 9 || e.keyCode === 40) {
        // if the tab or arrow down key was pressed
        searchbar.focusItem();
        e.preventDefault();
      }
    });

    // keypress doesn't fire on delete key - use keyup instead
    input.addEventListener('keyup', function(e) {
      if (e.keyCode === 8) {
        searchbar.showResults(this.value, e);
      }
    });

    input.addEventListener('keypress', function(e) {
      if (e.keyCode === 13) {
        // return key pressed; update the url
        searchbar.openURL(this.value, e);
      } else if (e.keyCode === 9) {
        return;
        // tab key, do nothing - in keydown listener
      } else if (e.keyCode === 16) {
        return;
        // shift key, do nothing
      } else if (e.keyCode === 8) {
        return;
        // delete key is handled in keyUp
      } else {
        // show the searchbar
        searchbar.showResults(this.value, e);
      }

      // on keydown, if the autocomplete result doesn't change, we move the selection instead of regenerating it to avoid race conditions with typing. Adapted from https://github.com/patrickburke/jquery.inlineComplete

      var v = String.fromCharCode(e.keyCode).toLowerCase();
      var sel = this.value
        .substring(this.selectionStart, this.selectionEnd)
        .indexOf(v);

      if (v && sel === 0) {
        this.selectionStart += 1;
        e.preventDefault();
      }
    });

    // prevent clicking in the input from re-entering edit-tab mode

    input.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    // click to enter edit mode or switch to a tab
    tabEl.addEventListener('click', function(e) {
      if (tabs.getSelected() !== data.id) {
        // else switch to tab if it isn't focused
        browserUI.switchToTab(data.id);
      } else {
        // the tab is focused, edit tab instead
        myglobal.tabBar.enterEditMode(data.id);
      }
    });

    tabEl.addEventListener('auxclick', function(e) {
      if (e.which === 2) {
        // if mouse middle click -> close tab
        browserUI.closeTab(data.id);
      }
    });

    tabEl.addEventListener('mousewheel', function(e) {
      if (
        e.deltaY > 65 &&
        e.deltaX < 10 &&
        Date.now() - lastTabDeletion > 650
      ) {
        // swipe up to delete tabs
        lastTabDeletion = Date.now();

        /* tab deletion is disabled in focus mode */
        if (focusMode.enabled()) {
          focusMode.warn();
          return;
        }

        var tab = this.getAttribute('data-tab');
        this.style.transform = 'translateY(-100%)';

        setTimeout(function() {
          browserUI.closeTab(tab);
        }, 150); // wait until the animation has completed
      }
    });

    return tabEl;
  },
  addTab: function(tabId) {
    var tab = tabs.get(tabId);
    var index = tabs.getIndex(tabId);

    var tabEl = myglobal.tabBar.createElement(tab);
    console.log(tabEl);
    myglobal.tabBar.container.insertBefore(
      tabEl,
      myglobal.tabBar.container.childNodes[index]
    );
    myglobal.tabBar.tabElementMap[tabId] = tabEl;
  },
  removeTab: function(tabId) {
    var tabEl = myglobal.tabBar.getTab(tabId);
    if (tabEl) {
      // The tab does not have a coresponding .tab-item element.
      // This happens when destroying tabs from other task where this .tab-item is not present
      myglobal.tabBar.container.removeChild(tabEl);
      delete myglobal.tabBar.tabElementMap[tabId];
    }
  },
};

// when we click outside the navbar, we leave editing mode

document.getElementById('webviews').addEventListener('click', function() {
  myglobal.tabBar.leaveEditMode();
});

/* progress bar events */

myglobal.webviews.bindEvent('did-start-loading', function() {
  var tabId = myglobal.webviews.getTabFromContents(this);
  progressBar.update(
    myglobal.tabBar.getTab(tabId).querySelector('.progress-bar'),
    'start'
  );
});

myglobal.webviews.bindEvent('did-stop-loading', function() {
  var tabId = myglobal.webviews.getTabFromContents(this);
  progressBar.update(
    myglobal.tabBar.getTab(tabId).querySelector('.progress-bar'),
    'finish'
  );
});
