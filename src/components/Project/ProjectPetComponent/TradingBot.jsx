import React from 'react';
import { ProjectPet } from "./ProjectPet";
import { TechnologyUsed } from "./TechnologyUsed";
import { ProjectCollection1 as ProjectPetData } from "../ProjectCollection";

const TradingBot = () => {
    return (
      <div id="portfolio">
        <ProjectPet
          websiteIntro={ProjectPetData[3]["websiteIntro"]}
          websiteImage={ProjectPetData[3]["websiteImage"]}
          websiteLink={ProjectPetData[3]["websiteLink"]}
          websiteGit={ProjectPetData[3]["websiteGit"]}
        />
        <TechnologyUsed
          responsiveImage={ProjectPetData[3]["responsiveImage"]}
          techonologies={ProjectPetData[3]["techonologies"]}
          extra={ProjectPetData[3]["extra"]}
        />
      </div>
    );
};

export default TradingBot;