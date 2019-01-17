import React from 'react';
import "./Background.css"
import WelcomeText from "./WelcomeText"

class Background extends React.Component {
  render(){
    return (
      <section className="jumbotron jumbotron-fluid">
        <WelcomeText/>
      </section>
    )
  }
}

export default Background;
