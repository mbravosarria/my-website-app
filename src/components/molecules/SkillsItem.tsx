import React from "react";
import Img from "../atoms/Img";
import { SkillsItemProps } from "@/interfaces/interfaces";
import JosefinText from "../atoms/JosefinText";
import YesevaText from "../atoms/YesevaText";

function SkillsItem({
  img,
  deadline,
  description,
  knowledge,
  tools,
  languages,
}: SkillsItemProps) {
  return (
    <div className="mx-6 flex h-full flex-col items-center space-y-6 border border-orange-1 bg-white px-2 py-8 text-center">
      <Img
        className="relative h-16 w-16"
        src={img}
        alt={knowledge?.items[0] || ""}
      />
      <YesevaText className="text-xl font-bold text-black">
        {deadline}
      </YesevaText>
      <JosefinText className="text-black">{description}</JosefinText>
      {knowledge && (
        <>
          <YesevaText className="font-bold text-orange-2">
            {knowledge.title}
          </YesevaText>
          <div className="flex flex-col">
            {knowledge.items.map((item) => (
              <JosefinText key={item}>{item}</JosefinText>
            ))}
          </div>
        </>
      )}
      {languages && (
        <>
          <YesevaText className="font-bold text-orange-2">
            {languages.title}
          </YesevaText>
          <JosefinText>{languages.items.join(", ")}</JosefinText>
        </>
      )}
      {tools && (
        <>
          <YesevaText className="font-bold text-orange-2">
            {tools.title}
          </YesevaText>
          <div className="flex flex-col">
            {tools.items.map((item) => (
              <JosefinText key={item}>{item}</JosefinText>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SkillsItem;
