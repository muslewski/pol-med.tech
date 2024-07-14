import React from "react";

import background from "./assets/backgroundOils.jpg";
import foreground from "./assets/foreground.png";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import redcert from "./assets/redcert.png";

import HeroCard from "../../components/HeroCard/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import Hero from "../../components/Hero";

function Oils() {
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
            title="Oleje posmażalnicze (UCO)"
            description="Oferujemy kompleksowe rozwiązania związane z dostawą olejów
              roślinnych oraz odbiorem i magazynowaniem olejów posmażalniczych."
          />
          <ContactButton className="flex sm:hidden self-end relative right-16" />

          {/* Tutaj zamień link gdy będzie docelowy  */}
          {/* Tutaj zamień link gdy będzie docelowy  */}
          {/* Tutaj zamień link gdy będzie docelowy  */}
          <a
            href="/pol-med.tech/certyfikat.pdf"
            target="_blank"
            className="[&_.makeBigger]:hover:scale-105 self-end"
          >
            <div className="relative sm:absolute right-0 w-fit  sm:bottom-24 z-20 animate-fade-left">
              <div className="bg-white absolute right-[80%] top-0 h-full w-40 sm:w-48 flex items-center  border-4 animate-delay-150 animate-fade-left  rounded-l-full   px-6">
                <img
                  className=" h-3/4 drop-shadow-redcert"
                  src={redcert}
                  alt=""
                />
              </div>
              <div className="makeBigger  shadow-homeCard transition-transform text-white underline font-semibold font-exo relative z-10 text-lg sm:text-2xl border-4 border-secondary-dark/25 border-r-0 bg-[#0F2950] py-5 sm:py-6  rounded-l-full h-full  px-12">
                Certyfikat
              </div>
            </div>
          </a>
        </Hero>
      </header>
      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#193655]">
        <GlowingTitle>Oferujemy</GlowingTitle>

        <div></div>
      </Section>
    </>
  );
}

export default Oils;
