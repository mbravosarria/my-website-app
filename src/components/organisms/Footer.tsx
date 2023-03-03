import React from "react";
import Img from "../atoms/Img";
import JosefinText from "../atoms/JosefinText";
import YesevaText from "../atoms/YesevaText";
import ContactLinks from "../molecules/ContactLinks";

function Footer() {
  return (
    <div className="flex flex-col items-center space-y-8 bg-gradient-to-b from-orange-1 via-orange-2 to-orange-2 pb-8 pt-28 text-center">
      <Img
        src="/bravos-icon-text.svg"
        alt="Github Icon"
        className="relative h-24 w-24"
      />
      <YesevaText className="mb-6 text-white">
        Living, learning, & leveling up one day at a time.
      </YesevaText>
      <ContactLinks />
    </div>
  );
}

export default Footer;
