import React from "react";
import {Project} from "../components/Project/Project";
import websiteImage from "../images/coming-soon.png";

export class Projects extends React.Component{
  render (){
    return (
      <section className="container-fluid bg-light py-5" id="projects">
        <div className="container">
          <div className="heading-title">
            <h3 className="border-bottom border-secondary">
              My Latest Work
            </h3>
            <p>
              Some of my latest projects to be show here
            </p>
          </div>
          <div className="row">
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
          </div>
          <div className="row">
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
            <Project websiteName="Coming soon..." websiteImage={websiteImage}
              websiteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante."/>
          </div>
        </div>
      </section>
    )
  }
}
