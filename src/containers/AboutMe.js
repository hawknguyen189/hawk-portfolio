import React from 'react';
import {IntroduceMe} from "../components/AboutMe/IntroduceMe"
import {Skills} from "../components/AboutMe/Skills"

export class AboutMe extends React.Component {
  render(){
    return (
      <section className="container-fluid" id="aboutMe">
        <IntroduceMe/>
        <Skills/>
      </section>
    )
  }
}
