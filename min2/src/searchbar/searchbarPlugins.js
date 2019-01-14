var { myglobal } = require('../myglobal');
var searchbar = document.getElementById('searchbar');

var searchbarPlugins = []; // format is {name, container, trigger, showResults}
var URLHandlers = []; // format is {trigger, action}
var resultCounts = {}; // format is {pluginName: count}
var topAnswerArea = searchbar.querySelector('.top-answer-area');

// empties all containers in the searchbar
function clearAll() {
  myglobal.empty(topAnswerArea);
  for (var i = 0; i < searchbarPlugins.length; i++) {
    myglobal.empty(searchbarPlugins[i].container);
  }
}

function getTopAnswer(pluginName) {
  if (pluginName) {
    // TODO a template string would be useful here, but UglifyJS doesn't support them yet
    return topAnswerArea.querySelector(
      '[data-plugin={plugin}]'.replace('{plugin}', pluginName)
    );
  } else {
    return topAnswerArea.firstChild;
  }
}

function setTopAnswer(pluginName, item) {
  myglobal.empty(topAnswerArea);
  if (item) {
    item.setAttribute('data-plugin', pluginName);
    topAnswerArea.appendChild(item);
  }
}

function getContainer(pluginName) {
  for (var i = 0; i < searchbarPlugins.length; i++) {
    if (searchbarPlugins[i].name === pluginName) {
      return searchbarPlugins[i].container;
    }
  }
  return null;
}

function register(name, object) {
  // add the container
  var container = document.createElement('div');
  container.classList.add('searchbar-plugin-container');
  container.setAttribute('data-plugin', name);
  searchbar.insertBefore(container, searchbar.childNodes[object.index + 1]);

  searchbarPlugins.push({
    name: name,
    container: container,
    trigger: object.trigger,
    showResults: object.showResults,
  });
}

function run(text, input, event) {
  resultCounts = {};

  for (var i = 0; i < searchbarPlugins.length; i++) {
    if (!searchbarPlugins[i].trigger || searchbarPlugins[i].trigger(text)) {
      searchbarPlugins[i].showResults(
        text,
        input,
        event,
        searchbarPlugins[i].container
      );
    } else {
      myglobal.empty(searchbarPlugins[i].container);

      // if the plugin is not triggered, remove a previously created top answer
      var associatedTopAnswer = getTopAnswer(searchbarPlugins[i].name);

      if (associatedTopAnswer) {
        associatedTopAnswer.remove();
      }
    }
  }
}

function registerURLHandler(object) {
  URLHandlers.push({
    trigger: object.trigger,
    action: object.action,
  });
}

function runURLHandlers(text) {
  for (var i = 0; i < URLHandlers.length; i++) {
    if (URLHandlers[i].trigger(text)) {
      URLHandlers[i].action(text);
      return true;
    }
  }
  return false;
}

function getResultCount(pluginName) {
  if (pluginName) {
    return resultCounts[pluginName] || 0;
  } else {
    var resultCount = 0;
    for (var plugin in resultCounts) {
      resultCount += resultCounts[plugin];
    }
    return resultCount;
  }
}

function addResults(pluginName, ct) {
  if (resultCounts[pluginName]) {
    resultCounts[pluginName] += ct;
  } else {
    resultCounts[pluginName] = ct;
  }
}

module.exports = {
  clearAll,
  getTopAnswer,
  setTopAnswer,
  getContainer,
  register,
  run,
  registerURLHandler,
  runURLHandlers,
  getResultCount,
  addResults,
};
