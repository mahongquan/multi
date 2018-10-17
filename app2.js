'use strict';

require('./app.css');

var styles = {
  '.reactpaint :not(table):not(tbody):not(tr):not(td)': {
    'display': 'flex'
  },
  '.reactpaint': {
    'display': 'flex',
    'flexFlow': 'column',
    'flex': '1',
    'width': '100%',
    'height': '100%',
    'margin': '0',
    'padding': '0',
    'border': '0',
    'overflow': 'hidden'
  },
  '.horizontal': {
    'flexFlow': 'row',
    'flex': '1 1 0',
    'overflow': 'hidden'
  },
  '.vertical': {
    'flexFlow': 'column',
    'flex': '1'
  },
  '.reactpaint .vertical': {
    'height': '100%'
  },
  '.component': {
    'display': 'flex',
    'flexFlow': 'column',
    'margin': '0',
    'padding': '0',
    'border': '0',
    'overflow': 'hidden'
  }
}; // @related-file ./app.css

var a = require("b");