import React, { Component } from 'react';
import './App.css';
import "./Animate.css";
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"
import {AboutMe} from "./containers/AboutMe"
import {Projects} from "./containers/Projects"
import {ConnectMe} from "./containers/ConnectMe"
import {Testinomials} from "./containers/Testinomials"
import {MyAdvantages} from "./containers/MyAdvantages"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
        <AboutMe/>
        <Projects/>
        <Testinomials/>
        <MyAdvantages/>
        <ConnectMe/>
      </div>
    );
  }
}

export default App;
