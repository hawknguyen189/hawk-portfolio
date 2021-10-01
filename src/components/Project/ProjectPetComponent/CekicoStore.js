import React from "react";
import { ProjectPet } from "./ProjectPet";
import { TechnologyUsed } from "./TechnologyUsed";
import { ProjectCollection1 as ProjectPetData } from "../ProjectCollection";

const CekicoStore = () => {
  return (
    <div id="comingSoon">
      <ProjectPet
        websiteIntro={ProjectPetData[2]["websiteIntro"]}
        websiteImage={ProjectPetData[2]["websiteImage"]}
        websiteLink={ProjectPetData[2]["websiteLink"]}
        websiteGit={ProjectPetData[2]["websiteGit"]}
      />
      <TechnologyUsed
        responsiveImage={ProjectPetData[2]["responsiveImage"]}
        techonologies={ProjectPetData[2]["techonologies"]}
        extra={ProjectPetData[2]["extra"]}
      />
    </div>
  );
};
export default CekicoStore;
