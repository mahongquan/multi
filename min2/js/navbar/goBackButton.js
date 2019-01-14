var settings = require('../util/settings');
let { myglobal } = require('../myglobal');
var goBackButton = document.getElementById('back-button');

goBackButton.addEventListener('click', function(e) {
  myglobal.webviews.get(tabs.getSelected()).goBack();
});

settings.get('historyButton', function(value) {
  if (value === true || value === undefined) {
    goBackButton.hidden = false;
  } else {
    goBackButton.hidden = true;
  }
});
module.exports = { goBackButton: goBackButton };
