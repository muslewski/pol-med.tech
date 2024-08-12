import React from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundAbout.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import Section from "../../components/Section";
import GlowingTitle from "../../components/GlowingTitle";
import FancyInfo from "../../components/FancyInfo";

import carServiceIcon from "../../Assets/car-service.svg";
import oilTankIcon from "../../Assets/oil-tank.svg";
import toolsIcon from "../../Assets/tools.svg";

function About() {
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

        <Hero>
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Poznaj nas bliżej 👋"
            description="Łączymy pasję i doświadczenie, aby dostarczać innowacyjne rozwiązania wspierające rozwój przemysłu i edukacji. Twój sukces to nasz priorytet!"
            col1="rgba(21, 51, 76, 0.2)"
            col2="rgba(12, 31, 90, 0.7)"
          />
        </Hero>
      </header>

      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#0a0a46]">
        <div className="flex flex-wrap gap-24 self-start">
          <GlowingTitle>Oferujemy produkty i usługi</GlowingTitle>
          <FancyInfo
            image={carServiceIcon}
            alt=""
            title="Stanowiska edukacyjne branży samochodowej"
            description="Dostarczamy nowoczesne stacje edukacyjne dla szkół i ośrodków szkoleniowych, pomagając przyszłym mechanikom zdobyć praktyczne umiejętności."
            col2="rgba(255, 255, 255, 0)"
            col1="#2973b9"
          />
          <FancyInfo
            image={oilTankIcon}
            alt=""
            title="Oleje posmażalnicze UCO"
            description="Oferujemy oleje UCO wysokiej jakości, przyjazne dla środowiska, które mogą być stosowane w różnych zastosowaniach, np. takich jak biopaliwa."
            col2="rgba(255, 255, 255, 0)"
            col1="#4444ba"
          />
          <FancyInfo
            image={toolsIcon}
            alt="Image of a diagnostic tool for car"
            title="Narzędzia przemysłowe"
            description="Zapewniamy szeroki wybór narzędzi przemysłowych do różnych zastosowań, od warsztatów mechanicznych po zakłady produkcyjne."
            col2="rgba(255, 255, 255, 0)"
            col1="rgb(68, 194, 169)"
          />
        </div>
      </Section>
    </>
  );
}

export default About;
