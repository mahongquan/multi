let { myglobal } = require('./myglobal');
let electron = require('electron');
// let fs = require('fs')
window.electron = electron;
electron.webFrame.setVisualZoomLevelLimits(1, 1);
electron.webFrame.setLayoutZoomLevelLimits(0, 0);
window.Dexie = require('dexie');
require('./menuBarVisibility.js').initialize();
require('./navbar/tabActivity.js').init();
require('./downloadManager.js').initialize();

// add a class to the body for fullscreen status

electron.ipcRenderer.on('enter-full-screen', function() {
  document.body.classList.add('fullscreen');
});

electron.ipcRenderer.on('leave-full-screen', function() {
  document.body.classList.remove('fullscreen');
});
console.log(navigator);

if (navigator.platform === 'MacIntel') {
  document.body.classList.add('mac');
  myglobal.platformType = 'mac';
} else if (navigator.platform === 'Win32') {
  document.body.classList.add('windows');
  myglobal.platformType = 'windows';
} else {
  document.body.classList.add('linux');
  myglobal.platformType = 'linux';
}

if (myglobal.platformType === 'windows') {
  electron.ipcRenderer.on('maximize', function() {
    document.body.classList.add('maximized');
  });

  electron.ipcRenderer.on('unmaximize', function() {
    document.body.classList.remove('maximized');
  });
}

// https://remysharp.com/2010/07/21/throttling-function-calls
myglobal.empty = function(node) {
  var n;
  while ((n = node.firstElementChild)) {
    node.removeChild(n);
  }
};

/* prevent a click event from firing after dragging the window */

window.addEventListener('load', function() {
  var isMouseDown = false;
  var isDragging = false;
  var distance = 0;

  document.body.addEventListener('mousedown', function() {
    isMouseDown = true;
    isDragging = false;
    distance = 0;
  });

  document.body.addEventListener('mouseup', function() {
    isMouseDown = false;
  });

  var dragHandles = document.getElementsByClassName('windowDragHandle');

  for (var i = 0; i < dragHandles.length; i++) {
    dragHandles[i].addEventListener('mousemove', function(e) {
      if (isMouseDown) {
        isDragging = true;
        distance += Math.abs(e.movementX) + Math.abs(e.movementY);
      }
    });
  }

  document.body.addEventListener(
    'click',
    function(e) {
      if (isDragging && distance >= 10.0) {
        e.stopImmediatePropagation();
        isDragging = false;
      }
    },
    true
  );
});
