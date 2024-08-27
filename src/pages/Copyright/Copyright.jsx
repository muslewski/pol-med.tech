import React from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundCopyright.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import Section from "../../components/Section";

function Copyright() {
  return (
    <>
      <header>
        <Background image={background} alt="Background Image of office" />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />
        <BgBottomVector image={bottomVector} />

        <Hero customClass="translate-y-0">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Prawa Autorskie"
            description="Na tej stronie prezentujemy kluczowe informacje o prawach autorskich oraz wykorzystywanych materiałach, zapewniając przejrzystość i zgodność z obowiązującymi przepisami."
            col1="rgba(21, 51, 76, 0.2)"
            col2="rgba(28, 31, 72, 0.7)"
          />
        </Hero>
      </header>
      <Section customClass="toPrint bg-gradient-to-b from-[#040E30] to-[#0a0a46] magicAUnderline"></Section>
    </>
  );
}

export default Copyright;
