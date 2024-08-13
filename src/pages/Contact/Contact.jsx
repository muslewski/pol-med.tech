import React from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundContact.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Section from "../../components/Section";

function Contact() {
  return (
    <>
      <header>
        <Background
          image={background}
          alt="Background Image of Oil Containers"
        />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />

        <BgBottomVector image={bottomVector} />

        <div className={`flex flex-col translate-y-11 w-full gap-14`}>
          <div className="w-64 h-36 bg-black"></div>
        </div>
      </header>

      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#10295b]"></Section>
    </>
  );
}

export default Contact;
