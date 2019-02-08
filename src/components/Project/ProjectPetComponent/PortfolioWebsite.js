import React from "react";
import {ProjectPet} from "./ProjectPet";
import {TechnologyUsed} from "./TechnologyUsed";
import {ProjectCollection1 as ProjectPetData} from "../ProjectCollection";

export class PortfolioWebsite extends React.Component{
  render (){
    return(
      <div id="portfolio">
        <ProjectPet
          websiteIntro={ProjectPetData[0]["websiteIntro"]}
          websiteImage={ProjectPetData[0]["websiteImage"]}
          websiteLink={ProjectPetData[0]["websiteLink"]}
          websiteGit={ProjectPetData[0]["websiteGit"]}
          />
        <TechnologyUsed
          responsiveImage={ProjectPetData[0]["responsiveImage"]}
          techonologies={ProjectPetData[0]["techonologies"]}
          extra={ProjectPetData[0]["extra"]}
          />
      </div>
    )
  }
}
