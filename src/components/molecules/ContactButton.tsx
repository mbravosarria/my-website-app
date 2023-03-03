import React from "react";
import Button from "../atoms/Button";
import Img from "../atoms/Img";
import YesevaText from "../atoms/YesevaText";

function ContactButton() {
  return (
    <Button className="flex flex-row space-x-2 rounded-full border border-blue-1 py-2 px-8">
      <Img
        src="/contact-icon.svg"
        alt="Contact Icon"
        className="relative h-6 w-6"
      />
      <YesevaText className="text-white">Let’s do this</YesevaText>
    </Button>
  );
}

export default ContactButton;
