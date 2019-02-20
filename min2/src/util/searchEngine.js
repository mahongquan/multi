let { myglobal } = require('../myglobal');
var settings = require('./settings.js');
// otherwise, assume window.settings exists already

myglobal.currentSearchEngine = {
  name: '',
  searchURL: '%s',
};

var defaultSearchEngine = 'Baidu';

var searchEngines = {
  DuckDuckGo: {
    name: 'DuckDuckGo',
    searchURL: 'https://duckduckgo.com/?q=%s&t=min',
  },
  Google: {
    name: 'Google',
    searchURL: 'https://www.google.com/search?q=%s',
  },
  Bing: {
    name: 'Bing',
    searchURL: 'https://www.bing.com/search?q=%s',
  },
  Yahoo: {
    name: 'Yahoo',
    searchURL: 'https://search.yahoo.com/yhs/search?p=%s',
  },
  Baidu: {
    name: 'Baidu',
    searchURL: 'https://www.baidu.com/s?wd=%s',
  },
  StartPage: {
    name: 'StartPage',
    searchURL: 'https://startpage.com/do/search?q=%s',
  },
  Wikipedia: {
    name: 'Wikipedia',
    searchURL: 'https://wikipedia.org/w/index.php?search=%s',
  },
  Yandex: {
    name: 'Yandex',
    searchURL: 'https://yandex.com/search/?text=%s',
  },
  none: {
    name: 'none',
    searchURL: 'http://%s',
  },
};

settings.get('searchEngine', function(value) {
  if (typeof value === 'string') {
    // migrate from legacy format
    value = { name: value };
    settings.set('searchEngine', value);
  }

  if (value && value.name) {
    myglobal.currentSearchEngine = searchEngines[value.name];
  } else if (value && value.url) {
    myglobal.currentSearchEngine = {
      name: 'custom',
      searchURL: value.url,
      custom: true,
    };
  } else {
    myglobal.currentSearchEngine = searchEngines[defaultSearchEngine];
  }
});

var searchEngine = {
  getCurrent: function() {
    return myglobal.currentSearchEngine;
  },
  isSearchURL: function(url) {
    if (
      !myglobal.currentSearchEngine.name ||
      myglobal.currentSearchEngine.name === 'none'
    ) {
      return false;
    } else {
      let searchFragment = myglobal.currentSearchEngine.searchURL.split(
        '%s'
      )[0];
      return url.startsWith(searchFragment);
    }
  },
};

if (typeof module === 'undefined') {
  window.currentSearchEngine = myglobal.currentSearchEngine;
} else {
  module.exports = searchEngine;
}
