import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"
import {AboutMe} from "./containers/AboutMe"
import {Projects} from "./containers/Projects"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
        <AboutMe/>
        <Projects/>
      </div>
    );
  }
}

export default App;
