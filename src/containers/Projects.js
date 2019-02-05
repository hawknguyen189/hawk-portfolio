import React from "react";
import {Project} from "../components/Project/Project";
import {ProjectCollection1} from "../components/Project/ProjectCollection";
export class Projects extends React.Component{
  render (){
    return (
      <section className="container-fluid bg-light py-5" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center
              flex-sm-column wow">
              <h3 className="border-bottom px-2">
                My Latest Work
              </h3>
              <p>
                Some of my latest projects love to be shown here
              </p>
            </div>
          </div>
          <div className="row py-5 wow zoomInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            {
              ProjectCollection1.map((project,index) => {
                return (
                  <Project websiteName={project["websiteName"]}
                  websiteImage={project["websiteImage"]}
                  websiteContent={project["websiteContent"]}
                  websiteId={project["websiteId"]}
                  key={index}/>
                )
              })
            }
          </div>
          {/*<div className="row wow zoomInUp" data-wow-duration="2s" data-wow-delay="0.5s">
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
          </div>*/}
        </div>
      </section>
    )
  }
}
