import React from "react";
import {ProjectPet} from "../components/Project/ProjectPet"

export class ProjectPets extends React.Component{
  render (){
    return(
      <section className="container-fluid bg-light py-5" id="myPets">
        {/*<ScrollToTopOnMount/>*/}
        <ProjectPet />
      </section>
    )
  }
}
