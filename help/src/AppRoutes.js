import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App2 from './App2';
import {Router,Redirect, BrowserRouter,Route,Switch, Link} from 'react-router-dom'
var { ipcRenderer } =require("electron");//
import createHashHistory from "history/createHashHistory";
const history = createHashHistory({
  hashType: "slash" // the default
})
export default class Root extends Component<Props> {
  constructor(){
    super();
    ipcRenderer.on("goback", ()=>{
        console.log(history);
        history.goBack();
    });
  }
  render() {
    return (
        <Router  history={history}>
            <Switch>
                <Route path="/app2" component={App2} />
                <Redirect exact path="/"  to="/app2" />
           </Switch>
        </Router>
    );
  }
}

