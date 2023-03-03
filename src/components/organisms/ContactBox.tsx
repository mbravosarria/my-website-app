import React from "react";
import YesevaText from "../atoms/YesevaText";
import JosefinText from "../atoms/JosefinText";
import ContactButton from "../molecules/ContactButton";

function ContactBox() {
  return (
    <div className="relative mx-4 -mb-24 flex flex-col items-center space-y-8 rounded-3xl bg-blue-3 py-4 text-center text-white">
      <YesevaText className="text-lg font-bold">Start a project</YesevaText>
      <JosefinText>
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </JosefinText>
      <ContactButton />
    </div>
  );
}

export default ContactBox;
