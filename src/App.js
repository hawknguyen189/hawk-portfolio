import React, { Component } from 'react';
import './App.css';
import "./Animate.css";
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"
import {Main} from "./containers/Main"
import {Contact} from "./containers/Contact"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
        <Main/>
        <Contact/>
      </div>
    );
  }
}

export default App;
