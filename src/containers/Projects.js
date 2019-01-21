import React from "react";
import {Project} from "../components/Project/Project";
import {ProjectCollection1,ProjectCollection2} from "../components/Project/ProjectCollection";
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
            {
              ProjectCollection1.map((project,index) => {
                return (
                  <Project websiteName={project["websiteName"]}
                  websiteImage={project["websiteImage"]}
                  websiteContent={project["websiteContent"]}
                  key={index}/>
                )
              })
            }
          </div>
          <div className="row">
            {
              ProjectCollection2.map((project,index) => {
                return (
                  <Project websiteName={project["websiteName"]}
                  websiteImage={project["websiteImage"]}
                  websiteContent={project["websiteContent"]}
                  key={index}/>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}
