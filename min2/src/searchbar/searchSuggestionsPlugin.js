var { myglobal } = require('../myglobal');
var searchbar = require('./searchbar.js');
var searchbarPlugins = require('./searchbarPlugins.js');
var searchbarUtils = require('./searchbarUtils.js');

var urlParser = require('../util/urlParser.js');
var searchEngine = require('../util/searchEngine.js');
let { debounce } = require('../func');
var ddgAttribution = l('resultsFromDDG');
let { getCustomBang } = require('./bangsPlugin');

function showSearchSuggestions(text, input, event, container) {
  // TODO support search suggestions for other search engines
  if (searchEngine.getCurrent().name !== 'DuckDuckGo') {
    return;
  }

  // if the search text is a custom bang, we should never show suggestions
  if (getCustomBang(text)) {
    myglobal.empty(container);
    return;
  }

  if (searchbarPlugins.getResultCount() > 3) {
    myglobal.empty(container);
    return;
  }

  fetch('https://ac.duckduckgo.com/ac/?t=min&q=' + encodeURIComponent(text), {
    cache: 'force-cache',
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      myglobal.empty(container);

      if (results) {
        results = results.slice(0, 3);
        results.forEach(function(result) {
          var data = {
            title: result.phrase,
          };

          if (
            urlParser.isURL(result.phrase) ||
            urlParser.isURLMissingProtocol(result.phrase)
          ) {
            // website suggestions
            data.icon = 'fa-globe';
          } else {
            // regular search results
            data.icon = 'fa-search';
          }

          var item = searchbarUtils.createItem(data);

          item.addEventListener('click', function(e) {
            searchbar.openURL(result.phrase, e);
          });

          container.appendChild(item);
        });
        searchbarPlugins.addResults('searchSuggestions', results.length);
      }
    });
}

searchbarPlugins.register('searchSuggestions', {
  index: 4,
  trigger: function(text) {
    return (
      !!text &&
      (text.indexOf('!') !== 0 || text.trim().indexOf(' ') !== -1) &&
      !tabs.get(tabs.getSelected()).private
    );
  },
  showResults: debounce(showSearchSuggestions, 150),
});
