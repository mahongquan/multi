import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App2 from './App2';
import AppHelp from './AppHelp';
import AppTest from './AppTest';
import App from './App';
import AppFlex from './AppFlex';
import AppAnim from './AppAnim';
import Home from './Home';
import Ace from './Ace';
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
                <Route path="/ace" component={Ace} />
                <Route path="/home" component={Home} />
                <Route path="/app2" component={App2} />
                <Route path="/app" component={App} />
                <Route path="/anim" component={AppAnim} />
                <Route path="/flex" component={AppFlex} />
                <Route path="/help" component={AppHelp} />
                <Route path="/test" component={AppTest} />
                <Redirect path="/"  to="/home" />
           </Switch>
        </Router>
    );
  }
}

