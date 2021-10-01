import React from "react";
import { ProjectPet } from "./ProjectPet";
import { TechnologyUsed } from "./TechnologyUsed";
import { ProjectCollection2 as ProjectPetData } from "../ProjectCollection";

const CekicoStore = () => {
  return (
    <div id="comingSoon">
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
  );
};
export default CekicoStore;
