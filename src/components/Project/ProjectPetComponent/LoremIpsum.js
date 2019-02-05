import React from "react";
import {ProjectPet} from "./ProjectPet";
import {TechnologyUsed} from "./TechnologyUsed";
import {ProjectPetData} from "./ProjectPetData";

export class LoremIpsum extends React.Component{
  render (){
    return(
      <div id="portfolio">
        <ProjectPet
          websiteIntro={ProjectPetData[1]["websiteIntro"]}
          websiteImage={ProjectPetData[1]["websiteImage"]}
          websiteLink={ProjectPetData[1]["websiteLink"]}
          websiteGit={ProjectPetData[1]["websiteGit"]}
          />
        <TechnologyUsed
          responsiveImage={ProjectPetData[1]["responsiveImage"]}
          techonologies={ProjectPetData[1]["techonologies"]}
          extra={ProjectPetData[1]["extra"]}
          />
      </div>
    )
  }
}
