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
              <h2 className="text-sm-left align-self-start border-bottom border-secondary">
                Hi! I'm Hoc Nguyen.
              </h2>
              <br/>
              <h4>
                You can call me Hawk. Im a, non-top, but profounding web developer who you may look for.
              </h4>
              <h6>
                I, like many other people,
                enjoy spending my time on swimming in the Ocean of Coding Knowledge. Im looking forward to becoming
                an experienced full-stack web developer in the next 3 years.
              </h6>
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
