import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"
import {AboutMe} from "./containers/AboutMe"
import {Projects} from "./containers/Projects"
import {ConnectMe} from "./containers/ConnectMe"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
        <AboutMe/>
        <Projects/>
        <ConnectMe/>
      </div>
    );
  }
}

export default App;
