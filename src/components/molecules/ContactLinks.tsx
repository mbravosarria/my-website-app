import React from "react";
import Img from "../atoms/Img";

function ContactLinks() {
  return (
    <div className="flex flex-row space-x-8">
      <Img
        src="/github-icon.svg"
        alt="Github Icon"
        className="relative h-10 w-10"
      />
      <Img
        src="/linkedin-icon.svg"
        alt="Github Icon"
        className="relative h-10 w-10"
      />
      <Img
        src="/mail-icon.svg"
        alt="Github Icon"
        className="relative h-10 w-10"
      />
    </div>
  );
}

export default ContactLinks;
