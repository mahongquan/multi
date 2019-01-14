let { myglobal } = require('../myglobal');
var searchbarPlugins = require('./searchbarPlugins.js');
var searchbarUtils = require('./searchbarUtils.js');
var urlParser = require('../util/urlParser.js');
const hosts = require('../util/hosts.js');

function showHostsSuggestions(text, input, event, container) {
  myglobal.empty(container);

  var results = hosts.filter(function(host) {
    // only match start of host string
    return host.indexOf(text) === 0;
  });

  results.slice(0, 4).forEach(function(result) {
    var item = searchbarUtils.createItem({
      title: result,
      secondaryText: l('hostsFileEntry'),
      url: 'http://' + result,
    });

    container.appendChild(item);
  });
}

searchbarPlugins.register('hostsSuggestions', {
  index: 1,
  trigger: function(text) {
    return hosts.length && typeof text === 'string' && text.length > 2;
  },
  showResults: showHostsSuggestions,
});
