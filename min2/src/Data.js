const fs = window.require('fs');
const path = window.require('path');
function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}
const initpath = __dirname;
class Data {
  static saveconfig = () => {
    const configName = 'config.json';
    let configPath = path.join(initpath, configName);
    fs.writeFileSync(configPath, JSON.stringify(Data.config));
  };
  static getconfig = () => {
    try {
      const configName = 'config.json';
      let configPath = path.join(initpath, configName);
      console.log(configPath);
      let data = fs.readFileSync(configPath, { enconding: 'utf-8' });
      Data.config = JSON.parse(data);
      // console.log(Data.config);
      if (!isObject(Data.config)) {
        Data.config = {};
      }
      if (!Data.config.id) {
        Data.config.id = 0;
      }
      if (!Data.config.version) {
        Data.config.version = '0.1';
      }
      if (!Data.config.author) {
        Data.config.author = {
          name: 'mahongquan',
          email: 'mahongquan@sina.com',
        };
      }
      if (!Data.config.website) {
        Data.config.website = 'http://github.com/mahongquan/browser1';
      }
      if (!Data.config.boards) {
        Data.config.boards = [];
      }
    } catch (e) {
      console.log(e);
      return {};
    }
  };
  static config = { author: {} };
}
export default Data;
