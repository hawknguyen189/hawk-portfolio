import React, { Component } from "react";
import "./App.css";
import "./Animate.css";
import { NavBar } from "./containers/NavBar";
import { MainBackground } from "./containers/MainBackground";
import { Main } from "./containers/Main";
import { Contact } from "./containers/Contact";
import { ProjectPets } from "./containers/ProjectPets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {/*<ScrollToTop>*/}
        <div className="App">
          {console.log("Today is another amazing day")}
          <Route path="/" component={NavBar} />
          <Route path="/" component={MainBackground} />
          <Switch>
            <Route exact={true} path="/" component={Main} />
            <Route path="/projectpets" component={ProjectPets} />
          </Switch>
          <Route path="/" component={Contact} />
        </div>
        {/*</ScrollToTop>*/}
      </Router>
    );
  }
}

export default App;
