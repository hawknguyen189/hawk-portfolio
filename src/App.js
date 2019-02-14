import React, { Component } from 'react';
import './App.css';
import "./Animate.css";
import {NavBar} from "./containers/NavBar";
import {MainBackground} from "./containers/MainBackground";
import {Main} from "./containers/Main";
import {Contact} from "./containers/Contact";
import {ProjectPets} from "./containers/ProjectPets";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          {/*<ScrollToTop>*/}
            <div className="App">
              <Route path={process.env.PUBLIC_URL + '/'} component={NavBar}/>
              <Route path="/" component={MainBackground}/>
              <Switch>
                <Route exact={true} path={process.env.PUBLIC_URL + '/'} component={Main}/>
                <Route path="/projectpets" component={ProjectPets}/>
              </Switch>
              <Route path={process.env.PUBLIC_URL + '/'} component={Contact}/>
            </div>
          {/*</ScrollToTop>*/}
      </Router>
    );
  }
}

export default App;
