import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./containers/NavBar"
import {MainBackground} from "./containers/MainBackground"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainBackground/>
      </div>  
    );
  }
}

export default App;
