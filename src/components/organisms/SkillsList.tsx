import React from "react";
import SkillsItem from "../molecules/SkillsItem";
import { skills } from "@/data/data";

function SkillsList() {
  return (
    <div className="relative -mt-36 flex flex-col">
      {skills.map((item) => (
        <SkillsItem key={item.img} {...item} />
      ))}
    </div>
  );
}

export default SkillsList;
