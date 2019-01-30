import React, { Component } from 'react';
import './App.css';
import "./Animate.css";
import {NavBar} from "./containers/NavBar";
import {MainBackground} from "./containers/MainBackground";
import {Main} from "./containers/Main";
import {Contact} from "./containers/Contact";
import {ProjectStore} from "./containers/ProjectStore";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar}/>
          <Route path="/" component={MainBackground}/>
          <Switch>
            <Route exact={true} path="/" component={Main}/>
            <Route exact={true} path="/projectstore" component={ProjectStore}/>
          </Switch>
          <Route path="/" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
