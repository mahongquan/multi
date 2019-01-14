const tabPrototype = require('./tab.js');
const TabStack = require('../tabRestore.js');
var { myglobal } = require('../myglobal');
class TaskList {
  constructor() {
    this.selected = null;
    window.tasks = []; // each task is {id, name, tabs: [], tabHistory: TabStack}
  }

  add(task = {}, index) {
    const newTask = {
      name: task.name || null,
      tabs: task.tabs || [],
      tabHistory: new TabStack(task.tabHistory),
      id: task.id || String(TaskList.getRandomId()),
    };

    for (var key in tabPrototype) {
      newTask.tabs[key] = tabPrototype[key];
    }

    if (index) {
      this.window.tasks.splice(index, 0, newTask);
    } else {
      this.window.tasks.push(newTask);
    }

    return newTask.id;
  }

  getStringifyableState() {
    return {
      tasks: window.tasks,
      selectedTask: this.selected,
    };
  }

  get(id) {
    return this.find(task => task.id == id) || null;
  }

  byIndex(index) {
    return this.window.tasks[index];
  }

  getTaskContainingTab(tabId) {
    return this.find(task => task.tabs.has(tabId)) || null;
  }

  getIndex(id) {
    return this.window.tasks.findIndex(task => task.id == id);
  }

  setSelected(id) {
    this.selected = id;
    myglobal.currentTask = this.get(id);
    window.tabs = myglobal.currentTask.tabs;
  }

  destroy(id) {
    const index = this.getIndex(id);

    if (index < 0) return false;

    this.window.tasks.splice(index, 1);
    return index;
  }

  destroyAll() {
    this.window.tasks = [];
    this.selected = null;
    myglobal.currentTask = null;
  }

  getLastActivity(id) {
    tabs = this.get(id).tabs;
    var lastActivity = 0;

    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].lastActivity > lastActivity) {
        lastActivity = tabs[i].lastActivity;
      }
    }

    return lastActivity;
  }

  getLength() {
    return this.window.tasks.length;
  }

  map(fun) {
    return this.window.tasks.map(fun);
  }

  forEach(fun) {
    return this.window.tasks.forEach(fun);
  }

  indexOf(task) {
    return this.window.tasks.indexOf(task);
  }

  splice(...args) {
    return this.window.tasks.splice.apply(this.window.tasks, args);
  }

  find(filter) {
    for (var i = 0, len = this.window.tasks.length; i < len; i++) {
      if (filter(this.window.tasks[i], i, this.window.tasks)) {
        return this.window.tasks[i];
      }
    }
  }

  static getRandomId() {
    return Math.round(Math.random() * 100000000000000000);
  }
}

module.exports = TaskList;
