// defines schema for the browsingData database
// requires Dexie.min.js

if (typeof Dexie === 'undefined' && typeof require !== 'undefined') {
  var Dexie = require('dexie');
}

var db = new Dexie('browsingData');

var dbErrorMessage = 'Internal error opening backing store for indexedDB.open';
var dbErrorAlertShown = false;

// Min 1.1.0-1.3.1
db.version(3).stores({
  bookmarks: 'url, title, text, extraData', // url must come first so it is the primary key
  history: 'url, title, color, visitCount, lastVisit, extraData', // same thing
  readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
  settings: 'key, value', // key is the name of the setting, value is an object
});

// Min >= 1.4.0
db.version(4)
  .stores({
    /*
  color - the main color of the page, extracted from the page icon
  pageHTML - a saved copy of the page's HTML, when it was last visited. Removed in 1.6.0, so all pages visited after then will have an myglobal.empty string in this field.
  extractedText - the text content of the page, extracted from pageHTML. Unused as of 1.7.0, should be removed completely in a future version.
  searchIndex - an array of words on the page (created from extractedText), used for full-text searchIndex
  isBookmarked - whether the page is a bookmark
  extraData - other metadata about the page
  */
    places:
      'url, title, color, visitCount, lastVisit, pageHTML, extractedText, *searchIndex, isBookmarked, metadata',
    readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
    settings: 'key, value', // key is the name of the setting, value is an object
  })
  // upgrade from v3 to v4
  .upgrade(function(t) {
    // upgrade history items

    t.history
      .each(function(historyItem) {
        t.places.put({
          url: historyItem.url,
          title: historyItem.title,
          color: historyItem.color,
          visitCount: historyItem.visitCount,
          lastVisit: historyItem.lastVisit,
          // data not stored in the old database schema
          pageHTML: '',
          extractedText: '',
          searchIndex: [],
          // the old history table did not contain bookmarks
          isBookmarked: false,
          metadata: (historyItem.extraData || {}).metadata || {},
        });
      })
      .then(function() {
        // upgrade bookmarks

        t.bookmarks.each(function(bookmark) {
          // t.places.add cannot be used, since an item with the bookmark's url might already exist as a history item
          t.places.put({
            url: bookmark.url,
            title: bookmark.title,
            color: '',
            visitCount: 1,
            lastVisit: 1,
            pageHTML: '',
            extractedText: bookmark.text,
            searchIndex: bookmark.text
              .trim()
              .toLowerCase()
              .replace(/[^\w\s]/g, ' ')
              .split(/\s+/g),
            isBookmarked: true,
            metadata: (bookmark.extraData || {}).metadata || {},
          });
        });
      });

    // remove the old history and bookmarks tables

    // t.bookmarks.toCollection().delete()
    // t.history.toCollection().delete()
  });

// TODO set the value of the bookmarks and history tables to null in a future version to delete them - see https://github.com/dfahlander/Dexie.js/issues/276

db.open().then(function() {
  console.log('database opened ', performance.now());
});
// Dexie.Promise.on('error', function (error) {
//   console.warn('database error occured', error)

//   if (error.message.indexOf(dbErrorMessage) !== -1 && !dbErrorAlertShown) {
//     window && window.alert && window.alert(l('multipleInstancesErrorMessage'))
//     electron.remote.app.quit()

//     dbErrorAlertShown = true
//   }
// })

if (typeof module !== 'undefined') {
  module.exports = db;
}
