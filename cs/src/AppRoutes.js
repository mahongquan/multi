import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppCS from './cs';
import AppToDo from './todos';
import App2 from './App2';
import AppParts from './parts/App_bootstrap';
import Parts_mu from './parts_mu/App_mu';
import Mobx1 from './mobx1/index';
import G2048 from './2048/2048';
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
                <Route path="/cs" component={AppCS} />
                <Route path="/app2" component={App2} />
                <Route path="/todos" component={AppToDo} />
                <Route path="/parts" component={AppParts} />
                <Route path="/mu" component={Parts_mu} />
                <Route path="/g2048" component={G2048} />
                <Route path="/mobx1" component={Mobx1} />
                <Redirect exact path="/"  to="/app2" />
           </Switch>
        </Router>
    );
  }
}

