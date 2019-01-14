var { myglobal } = require('../myglobal');
var searchbarPlugins = require('./searchbarPlugins.js');
var searchbarUtils = require('./searchbarUtils.js');
var urlParser = require('../util/urlParser.js');

var places = require('../places/places.js');

function showPlaceSuggestions(text, input, event, container) {
  // use the current tab's url for history suggestions, or the previous tab if the current tab is myglobal.empty
  var url = tabs.get(tabs.getSelected()).url;

  if (!url || url === 'about:blank') {
    var previousTab = tabs.getAtIndex(tabs.getIndex(tabs.getSelected()) - 1);
    if (previousTab) {
      url = previousTab.url;
    }
  }

  places.getPlaceSuggestions(url, function(results) {
    myglobal.empty(container);

    var tabList = tabs.get().map(function(tab) {
      return tab.url;
    });

    results = results.filter(function(item) {
      return tabList.indexOf(item.url) === -1;
    });

    results.slice(0, 4).forEach(function(result) {
      var item = searchbarUtils.createItem({
        title: urlParser.prettyURL(result.url),
        secondaryText: searchbarUtils.getRealTitle(result.title),
        url: result.url,
        delete: function() {
          places.deleteHistory(result.url);
        },
      });

      container.appendChild(item);
    });
  });
}

searchbarPlugins.register('placeSuggestions', {
  index: 1,
  trigger: function(text) {
    return !text;
  },
  showResults: showPlaceSuggestions,
});
