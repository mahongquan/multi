/* global Worker tabs */
let { myglobal } = require('../myglobal');
const db = require('../util/database.js');
const searchEngine = require('../util/searchEngine.js');

const places = {
  updateHistory: function(tabId, extractedText, metadata) {
    /* this prevents pages that are immediately left from being saved to history, and also gives the page-favicon-updated event time to fire (so the colors saved to history are correct). */
    setTimeout(function() {
      const tab = tabs.get(tabId);
      if (tab) {
        const data = {
          url: tab.url,
          title: tab.title,
          color: tab.backgroundColor,
          extractedText: extractedText,
          metadata: metadata,
        };

        places.worker.postMessage({
          action: 'updateHistory',
          pageData: data,
        });
      }
    }, 500);
  },
  receiveHistoryData: function(webview, tabId, args) {
    // called when js/preload/textExtractor.js returns the page's text content

    var tab = tabs.get(tabId),
      data = args[0];

    var isInternalPage =
      tab.url.indexOf(__dirname) !== -1 &&
      tab.url.indexOf(myglobal.readerView.readerURL) === -1;
    var isSearchPage = searchEngine.isSearchURL(tab.url);

    // full-text data from search results isn't useful
    if (isSearchPage) {
      data.extractedText = '';
    }

    // don't save to history if in private mode, or the page is a browser page
    if (tab.private === false && !isInternalPage) {
      places.updateHistory(tabId, data.extractedText, data.metadata);
    }
  },
  callbacks: [],
  addWorkerCallback: function(callback) {
    const callbackId = Date.now();
    places.callbacks.push({ id: callbackId, fn: callback });
    return callbackId;
  },
  runWorkerCallback: function(id, data) {
    for (var i = 0; i < places.callbacks.length; i++) {
      if (places.callbacks[i].id === id) {
        places.callbacks[i].fn(data);
        places.callbacks.splice(i, 1);
      }
    }
  },
  deleteHistory: function(url) {
    places.worker.postMessage({
      action: 'deleteHistory',
      pageData: {
        url: url,
      },
    });
  },
  deleteAllHistory: function() {
    places.worker.postMessage({
      action: 'deleteAllHistory',
    });
  },
  searchPlaces: function(text, callback, options) {
    const callbackId = places.addWorkerCallback(callback);
    places.worker.postMessage({
      action: 'searchPlaces',
      text: text,
      callbackId: callbackId,
      options: options,
    });
  },
  searchPlacesFullText: function(text, callback) {
    const callbackId = places.addWorkerCallback(callback);
    places.worker.postMessage({
      action: 'searchPlacesFullText',
      text: text,
      callbackId: callbackId,
    });
  },
  getPlaceSuggestions: function(url, callback) {
    const callbackId = places.addWorkerCallback(callback);
    places.worker.postMessage({
      action: 'getPlaceSuggestions',
      text: url,
      callbackId: callbackId,
    });
  },
  onMessage: function(e) {
    // assumes this is from a search operation
    places.runWorkerCallback(e.data.callbackId, e.data.result);
  },
  updateBookmarkState: function(url, shouldBeBookmarked) {
    places.worker.postMessage({
      action: 'updateBookmarkState',
      pageData: {
        url: url,
        shouldBeBookmarked: shouldBeBookmarked,
      },
    });
  },
  toggleBookmarked: function(tabId) {
    // Toggles whether a URL is bookmarked or not
    const url = tabs.get(tabId).url;

    db.places
      .where('url')
      .equals(url)
      .first(function(item) {
        if (item && item.isBookmarked) {
          places.updateBookmarkState(url, false);
        } else {
          places.updateBookmarkState(url, true);
        }
      });
  },
  initialize: function() {
    places.worker = new Worker('./js/places/placesWorker.js');
    places.worker.onmessage = places.onMessage;

    myglobal.webviews.bindIPC('pageData', places.receiveHistoryData);
  },
};

module.exports = places;
