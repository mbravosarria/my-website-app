import React from "react";
import JosefinText from "../atoms/JosefinText";
import YesevaText from "../atoms/YesevaText";

function AboutBox() {
  return (
    <div className="flex flex-col items-center space-y-4 bg-gradient-to-b from-blue-3 via-blue-3 to-blue-1 px-2 pt-6 pb-48 text-center">
      <YesevaText className="text-xl font-bold text-white">
        Hi, I’m Michel. Nice to meet you.
      </YesevaText>
      <JosefinText className="text-white">
        Since I started my journey as a software developer 3 years ago, I have
        done remote work for agencies and full-time jobs for companies in the
        technology sector as a developer and as an IT specialist. I have
        creative thinking, good communication, time-management, team work
        experience and I’m perpetually working on improving my chops
      </JosefinText>
    </div>
  );
}

export default AboutBox;
