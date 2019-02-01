import React from "react";
import {ProjectPet} from "../components/Project/ProjectPet"
import {TechnologyUsed} from "../components/Project/TechnologyUsed"

export class ProjectPets extends React.Component{
  render (){
    return(
      <section className="project-pets" id="myPets">
        {/*<ScrollToTopOnMount/>*/}
        <div className="container-fluid bg-light py-3">
          <ProjectPet />
        </div>
        <div className="container-fluid bg-white py-3">
          <TechnologyUsed />
        </div>
      </section>
    )
  }
}
