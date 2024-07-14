import React from "react";

import background from "./assets/backgroundEducation.webp";
import foreground from "./assets/foreground.webp";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import ForegroundItem from "../../components/Objects/ForegroundItem";
import Hero from "../../components/Hero";

function Education() {
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
        <ForegroundItem
          image={foreground}
          alt="Foreground Image of Car Station with Mechanics"
        />
        <BgBottomVector image={bottomVector} />

        <Hero customClass="gap-28">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Stanowiska dydaktyczno-laboratoryjne"
            description="To zintegrowane moduły dydaktyczne, które umożliwiają naukę o
            różnych aspektach technologii samochodowych w praktyczny i
            angażujący sposób."
          />

          <ContactButton
            customBackground="bg-[rgba(7,33,54,0.75)]"
            className="flex sm:hidden self-end relative right-16"
          />
        </Hero>
      </header>
      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#1d3a75]">
        <GlowingTitle>Oferujemy</GlowingTitle>

        <div className=""></div>
      </Section>
    </>
  );
}

export default Education;
