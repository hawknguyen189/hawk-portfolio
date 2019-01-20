import React from 'react';
import "./introduceme.css"
import aboutMe from "./about-me.png"

export class IntroduceMe extends React.Component {
  render(){
    return (
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center flex-sm-column text-sm-left">
              <h3 className="text-sm-left align-self-start border-bottom border-secondary pr-5">
                Hi! I'm Hoc Nguyen.
              </h3>
              <br/>
              <h6>
                You can call me Hawk. Im a, non-top, but profounding web developer who you may look for.
              </h6>
              <p>
                I, like many other people,
                enjoy spending my time on swimming in the Ocean of Coding Knowledge. Im looking forward to becoming
                an experienced full-stack web developer in the next 3 years.
              </p>
              <button className="btn btn-primary mt-2">Find Out More About Me</button>
            </div>
            <div className="col-sm about-me">
              <img src={aboutMe} alt="about me" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
