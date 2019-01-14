var electron = require('electron');
var menuButton = document.getElementById('menu-button');
var { myglobal } = require('../myglobal');
menuButton.addEventListener('click', function(e) {
  myglobal.showSecondaryMenu();
});

myglobal.showSecondaryMenu = function() {
  var navbar = document.getElementById('navbar');
  var rect = menuButton.getBoundingClientRect();
  var navbarRect = navbar.getBoundingClientRect();

  electron.ipcRenderer.send('showSecondaryMenu', {
    x: Math.round(rect.left),
    y: Math.round(navbarRect.bottom),
    async: true,
  });
};
