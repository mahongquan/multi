// gets the tracking settings and sends them to the main process
var settings = require('./util/settings');
settings.get('filtering', function(settings) {
  electron.ipcRenderer.send('setFilteringSettings', settings);
});

function registerFiltering(ses) {
  electron.ipcRenderer.send('registerFiltering', ses);
}
