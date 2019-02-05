import React from 'react';
import {AboutMe} from "./AboutMe"
import {Projects} from "./Projects"
import {ConnectMe} from "./ConnectMe"
import {Testinomials} from "./Testinomials"
import {MyAdvantages} from "./MyAdvantages"

export class Main extends React.Component {
  render() {
    return (
      <main>
        <AboutMe/>
        <section className="container-fluid bg-light py-5" id="projects">
          <Projects/>
        </section>
        <Testinomials/>
        <MyAdvantages/>
        <ConnectMe/>
      </main>
    );
  }
}
