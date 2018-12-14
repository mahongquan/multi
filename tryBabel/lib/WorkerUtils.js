"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPromiseWorker = registerPromiseWorker;
exports.registerPromiseWorkerApi = registerPromiseWorkerApi;

function registerPromiseWorker(handler) {
  self.addEventListener("message", function (event) {
    const {
      data
    } = event;

    try {
      const message = handler(data.message);
      self.postMessage({
        message,
        uid: data.uid
      });
    } catch (error) {
      self.postMessage({
        error: error.message,
        uid: data.uid
      });
    }
  });
}

function registerPromiseWorkerApi(worker) {
  const uidMap = {}; // Unique id per message since message order isn't guaranteed

  let counter = 0;
  worker.addEventListener("message", event => {
    const {
      uid,
      error,
      message
    } = event.data;
    const [resolve, reject] = uidMap[uid];
    delete uidMap[uid];

    if (error == null) {
      resolve(message);
    } else {
      reject(error);
    }
  });
  return {
    postMessage(message) {
      const uid = ++counter;
      return new Promise((resolve, reject) => {
        uidMap[uid] = [resolve, reject];
        worker.postMessage({
          message,
          uid
        });
      });
    }

  };
}