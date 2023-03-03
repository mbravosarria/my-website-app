import React from "react";
import JosefinText from "../atoms/JosefinText";
import YesevaText from "../atoms/YesevaText";
import Img from "../atoms/Img";

function Presentation() {
  return (
    <div className="mx-2 flex flex-col items-center space-y-20">
      <YesevaText className="text-3xl font-bold text-orange-2">
        Software Engineer
      </YesevaText>
      <JosefinText className="text-center text-black">
        I code websites of all kinds, and I’m passionate about what I do
      </JosefinText>
      <Img src="/avatar.svg" alt="Menu Icon" className="relative h-36 w-36" />
    </div>
  );
}

export default Presentation;
