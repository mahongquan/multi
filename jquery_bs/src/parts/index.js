// import AppView from './AppView';
import {Component } from './react-me';
import ReactDOM from './react-dom-me';
import Items from "./Items";
    // <link type="text/css" rel="stylesheet" href="./bootstrap/dist/css/bootstrap.min.css" />
    // <link type="text/css" rel="stylesheet" href="./font-awesome/css/font-awesome.min.css" />
    // <link type="text/css" rel="stylesheet" href="./index.css" />
require("./bootstrap/dist/js/bootstrap.min.js");
require("./popper.js/dist/popper.min.js");
let app=new Items();
ReactDOM.render(app, document.getElementById('root'));