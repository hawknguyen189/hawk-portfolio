import React from "react";
import {Project} from "../components/Project/Project";
import websiteImage from "../images/coming-soon.png";
import ProjectCollection from "../components/Project/ProjectCollection";
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
          <div className="row py-5">
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
          </div>
          <div className="row">
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
            <Project websiteName={ProjectCollection["comingSoon"]["websiteName"]}
              websiteImage={ProjectCollection["comingSoon"]["websiteImage"]}
              websiteContent={ProjectCollection["comingSoon"]["websiteContent"]}/>
          </div>
        </div>
      </section>
    )
  }
}
