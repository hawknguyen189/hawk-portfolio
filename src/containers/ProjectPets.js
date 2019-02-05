import React from "react";
import {ProjectShowing} from "../components/Project/ProjectShowing"
import {Projects} from "./Projects"

export class ProjectPets extends React.Component{
  render (){
    return(
      <section className="project-pets" id="myPets">
        {/*<ScrollToTopOnMount/>*/}
        <div className="container-fluid bg-light py-5">
          <Projects/>
        </div>
        <ProjectShowing/>
      </section>
    )
  }
}
