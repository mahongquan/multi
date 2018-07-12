// import AppView from './AppView';
import {Component } from './react-me';
import ReactDOM from './react-dom-me';
import Items from "./Items";
require("./bootstrap/dist/js/bootstrap.min.js");
require("./popper.js/dist/popper.min.js");
let app=new Items();
ReactDOM.render(app, document.getElementById('root'));