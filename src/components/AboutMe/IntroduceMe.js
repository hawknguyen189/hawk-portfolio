import React from 'react';
import "./introduceme.css";
import aboutMe from "../../images/about-me.png";

export class IntroduceMe extends React.Component {
  render(){
    return (
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center
              flex-sm-column text-sm-left bounce-in-left wow" data-wow-delay="0.5s">
              <h3 className="text-sm-left align-self-start border-bottom px-2">
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
              <a href="#contact">
                <button className="btn btn-primary mt-2">Find Out More About Me</button>
              </a>
            </div>
            <div className="col-sm about-me py-5 bounce-in-right wow" data-wow-delay="0.5s">
              <img src={aboutMe} alt="about me" className="img-fluid border rounded border-dominating-color border-width-large"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
