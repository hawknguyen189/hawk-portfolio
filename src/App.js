import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"
import {AboutMe} from "./containers/AboutMe"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
