import React from "react";
import Button from "../atoms/Button";
import Img from "../atoms/Img";
import YesevaText from "../atoms/YesevaText";

function GithubButton() {
  return (
    <Button className="flex flex-row space-x-2 rounded-full border border-orange-2 py-2 px-8">
      <Img
        src="/github-orange-icon.svg"
        alt="Github Orange Icon"
        className="relative h-6 w-6"
      />
      <YesevaText className="text-orange-2">See more on Github</YesevaText>
    </Button>
  );
}

export default GithubButton;
