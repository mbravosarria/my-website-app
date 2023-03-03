import React from "react";
import AboutBox from "../molecules/AboutBox";
import SkillsList from "../organisms/SkillsList";

function AboutMe() {
  return (
    <div className="flex flex-col items-center">
      <AboutBox />
      <SkillsList />
    </div>
  );
}

export default AboutMe;
