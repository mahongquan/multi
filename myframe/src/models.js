import Backbone from './backbone.js';
import {host} from './constants';
export var PackItemList = Backbone.Collection.extend({
  model: PackItem,
  url: host + '/rest/PackItem/',
  parse: function(data, options) {
    //console.log("parse response");
    // if(data.total)
    //   myglobal.total=data.total;
    return data.data;
  },
});
export var Pack = Backbone.Model.extend({
  urlRoot: host + '/rest/Pack/',
  defaults: function() {
    return {
      id: undefined,
      name: '',
    };
  },
});
export var PackItem = Backbone.Model.extend({
  urlRoot: host + '/rest/PackItem/',
  defaults: function() {
    return {
      id: undefined,
      pack_id: undefined,
      item_id: undefined,
      ct: 0,
      Item: undefined,
    };
  },
});
