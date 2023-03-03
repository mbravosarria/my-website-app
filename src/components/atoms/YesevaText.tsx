import React from "react";
import { TextProps } from "@/interfaces/interfaces";
import { Yeseva_One } from "@next/font/google";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: "400" });

function YesevaText({ children, ...rest }: TextProps) {
  return (
    <div className={yeseva.className}>
      <p {...rest}>{children}</p>
    </div>
  );
}

export default YesevaText;
