/* fades out tabs that are inactive */
let { myglobal } = require('../myglobal');
var tabActivity = {
  minFadeAge: 330000,
  refresh: function() {
    requestAnimationFrame(function() {
      var tabSet = tabs.get();
      var selected = tabs.getSelected();
      var time = Date.now();

      tabSet.forEach(function(tab) {
        if (selected === tab.id) {
          // never fade the current tab
          myglobal.tabBar.getTab(tab.id).classList.remove('fade');
          return;
        }
        if (time - tab.lastActivity > tabActivity.minFadeAge) {
          // the tab has been inactive for greater than minActivity, and it is not currently selected
          myglobal.tabBar.getTab(tab.id).classList.add('fade');
        } else {
          myglobal.tabBar.getTab(tab.id).classList.remove('fade');
        }
      });
    });
  },
  init: function() {
    setInterval(tabActivity.refresh, 7500);
  },
};

module.exports = tabActivity;
