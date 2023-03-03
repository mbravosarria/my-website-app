import React from "react";
import YesevaText from "../atoms/YesevaText";
import JosefinText from "../atoms/JosefinText";
import GithubButton from "../molecules/GithubButton";

function MyWorks() {
  return (
    <div className="mx-4 flex flex-col items-center space-y-6">
      <YesevaText>My Recent Works</YesevaText>
      <JosefinText>Here are a few past projects I’ve worked on.</JosefinText>
      <GithubButton />
    </div>
  );
}

export default MyWorks;
