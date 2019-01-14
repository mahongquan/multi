/* imports common modules */

var electron = require('electron');
// var electron.ipcRenderer = electron.ipcRenderer

/* define window.chrome
   this is necessary because some websites (such as the Google Drive file viewer, see issue #378) check for a
   Chrome user agent, and then do things like if(chrome.<module>) {}
   so we need to define an myglobal.empty chrome object to prevent errors
   */

window.chrome = {};

var propertiesToClone = [
  'deltaX',
  'deltaY',
  'metaKey',
  'ctrlKey',
  'defaultPrevented',
  'clientX',
  'clientY',
];

function cloneEvent(e) {
  var obj = {};

  for (var i = 0; i < propertiesToClone.length; i++) {
    obj[propertiesToClone[i]] = e[propertiesToClone[i]];
  }
  return JSON.stringify(obj);
}

// workaround for Electron bug
setTimeout(function() {
  document.addEventListener(
    'wheel',
    function(e) {
      electron.ipcRenderer.send('wheel-event', cloneEvent(e));
    },
    { passive: true }
  );
}, 0);

/* re-implement window.close, since the built-in function doesn't work correctly */
window.close = function() {
  electron.ipcRenderer.send('close-window');
};
