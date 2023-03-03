import React from "react";
import Img from "../atoms/Img";

function TopBar() {
  return (
    <div className="mx-2 flex flex-row justify-between">
      <Img
        src="/bravos-icon.svg"
        alt="Bravo's Icon"
        className="relative h-10 w-10"
      />
      <Img
        src="/menu-icon.svg"
        alt="Menu Icon"
        className="relative h-10 w-10"
      />
    </div>
  );
}

export default TopBar;
