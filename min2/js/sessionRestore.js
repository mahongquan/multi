var browserUI = require('./browserUI.js');
let { initializeTabState } = require('./tabState');
let { myglobal } = require('./myglobal');
myglobal.sessionRestore = {
  save: function() {
    var data = {
      version: 2,
      state: JSON.parse(JSON.stringify(tasks.getStringifyableState())),
    };

    // save all tabs that aren't private

    for (var i = 0; i < data.state.tasks.length; i++) {
      data.state.tasks[i].tabs = data.state.tasks[
        i
      ].tabs.filter(function(tab) {
        return !tab.private;
      });
    }
    try {
      localStorage.setItem('sessionrestoredata', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  },
  restore: function() {
    // return restore_none();
    var savedStringData = localStorage.getItem('sessionrestoredata')

    /* the survey should only be shown after an upgrade from an earlier version */
    var shouldShowSurvey = false
    // if (savedStringData && !localStorage.getItem('1.8survey')) {
    //   shouldShowSurvey = true
    // }
    // localStorage.setItem('1.8survey', 'true')

    try {
      // first run, show the tour
      if (!savedStringData) {
        tasks.setSelected(tasks.add()); // create a new task

        var newTab = myglobal.currentTask.tabs.add({
          url: 'http://127.0.0.1:8000/',
        });
        browserUI.addTab(newTab, {
          enterEditMode: false,
        });
        return;
      }

      console.log(savedStringData);

      var data = JSON.parse(savedStringData);

      // the data isn't restorable
      if (
        (data.version && data.version !== 2) ||
        (data.state && data.state.tasks && data.state.tasks.length === 0)
      ) {
        tasks.setSelected(tasks.add());

        browserUI.addTab(myglobal.currentTask.tabs.add());
        return;
      }

      // add the saved tasks

      data.state.tasks.forEach(function(task) {
        // restore the task item
        tasks.add(task);
      });

      // switch to the previously selected tasks

      browserUI.switchToTask(data.state.selectedTask);

      if (myglobal.currentTask.tabs.isEmpty()) {
        myglobal.tabBar.enterEditMode(myglobal.currentTask.tabs.getSelected());
      }

      // if this isn't the first run, and the survey popup hasn't been shown yet, show it

      if (shouldShowSurvey) {
        fetch('https://minbrowser.github.io/min/survey/survey.json')
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            setTimeout(function() {
              if (data.available && data.url) {
                if (myglobal.currentTask.tabs.isEmpty()) {
                  navigate(myglobal.currentTask.tabs.getSelected(), data.url);
                } else {
                  var surveyTab = myglobal.currentTask.tabs.add({
                    url: data.url,
                  });
                  browserUI.addTab(surveyTab, {
                    enterEditMode: false,
                  });
                }
              }
            }, 200);
          });
      }
    } catch (e) {
      // an error occured while restoring the session data

      console.error('restoring session failed: ', e);

      var backupSavePath = require('path').join(
        electron.remote.app.getPath('userData'),
        'sessionRestoreBackup-' + Date.now() + '.json'
      );

      require('fs').writeFileSync(backupSavePath, savedStringData);

      // destroy any tabs that were created during the restore attempt
      initializeTabState();

      // create a new tab with an explanation of what happened
      var newTask = tasks.add();
      var newSessionErrorTab = tasks.get(newTask).tabs.add({
        url:
          'file://' +
          __dirname +
          '/../pages/sessionRestoreError/index.html?backupLoc=' +
          encodeURIComponent(backupSavePath),
      });

      browserUI.switchToTask(newTask);
      browserUI.switchToTab(newSessionErrorTab);
    }
  },
};
function restore_none() {
  var backupSavePath = require('path').join(
    electron.remote.app.getPath('userData'),
    'sessionRestoreBackup-' + Date.now() + '.json'
  );
  console.log(backupSavePath);
  // require('fs').writeFileSync(backupSavePath, savedStringData)

  // destroy any tabs that were created during the restore attempt
  initializeTabState();

  // create a new tab with an explanation of what happened
  var newTask = tasks.add();
  var newSessionErrorTab = tasks.get(newTask).tabs.add({
    url:
      'file://' +
      __dirname +
      '/../pages/sessionRestoreError/index.html?backupLoc=' +
      encodeURIComponent(backupSavePath),
  });

  browserUI.switchToTask(newTask);
  browserUI.switchToTab(newSessionErrorTab);
}
// TODO make this a preference

myglobal.sessionRestore.restore();

setInterval(myglobal.sessionRestore.save, 12500);
// module.exports={sessionRestore:sessionRestore};
