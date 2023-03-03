import React from "react";
import { TextProps } from "@/interfaces/interfaces";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

function JosefinText({ children, ...rest }: TextProps) {
  return (
    <div className={josefin.className}>
      <p {...rest}>{children}</p>
    </div>
  );
}

export default JosefinText;
