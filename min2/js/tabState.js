const TaskList = require('./tabState2/task.js');
var { myglobal } = require('./myglobal');
function initializeTabState() {
  window.tasks = new TaskList();
  myglobal.currentTask = undefined;
  window.tabs = undefined;
}

initializeTabState();
module.exports = { initializeTabState: initializeTabState };
