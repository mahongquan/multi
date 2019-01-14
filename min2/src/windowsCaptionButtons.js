let electron = require('electron');
var windowIsMaximised = false;
var windowIsFullscreen = false;
function initWindowCaption() {
  var captionMinimise = document.querySelector(
    '.windows-caption-buttons .caption-minimise, body.linux .titlebar-linux .caption-minimise'
  );

  var captionMaximise = document.querySelector(
    '.windows-caption-buttons .caption-maximise, body.linux .titlebar-linux .caption-maximise'
  );

  var captionRestore = document.querySelector(
    '.windows-caption-buttons .caption-restore, body.linux .titlebar-linux .caption-restore'
  );

  var captionClose = document.querySelector(
    '.windows-caption-buttons .caption-close, body.linux .titlebar-linux .caption-close'
  );

  function updateCaptionButtons() {
    if (windowIsMaximised || windowIsFullscreen) {
      captionMaximise.hidden = true;
      captionRestore.hidden = false;
    } else {
      captionMaximise.hidden = false;
      captionRestore.hidden = true;
    }
  }

  if (navigator.platform === 'Win32') {
    updateCaptionButtons();

    captionMinimise.addEventListener('click', function(e) {
      electron.remote.getCurrentWindow().minimize();
    });

    captionMaximise.addEventListener('click', function(e) {
      electron.remote.getCurrentWindow().maximize();
    });

    captionRestore.addEventListener('click', function(e) {
      if (windowIsFullscreen) {
        electron.remote.getCurrentWindow().setFullScreen(false);
      } else {
        electron.remote.getCurrentWindow().restore();
      }
    });

    captionClose.addEventListener('click', function(e) {
      electron.remote.getCurrentWindow().close();
    });

    electron.ipcRenderer.on('maximize', function(e) {
      windowIsMaximised = true;
      updateCaptionButtons();
    });
    electron.ipcRenderer.on('unmaximize', function(e) {
      windowIsMaximised = false;
      updateCaptionButtons();
    });
    electron.ipcRenderer.on('enter-full-screen', function(e) {
      windowIsFullscreen = true;
      updateCaptionButtons();
    });
    electron.ipcRenderer.on('leave-full-screen', function(e) {
      windowIsFullscreen = false;
      updateCaptionButtons();
    });
  }
}
module.exports = {
  windowIsMaximised: windowIsMaximised,
  windowIsFullscreen: windowIsFullscreen,
  initWindowCaption: initWindowCaption,
};
