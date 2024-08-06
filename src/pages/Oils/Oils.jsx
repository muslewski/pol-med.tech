import React from "react";
import "./Oils.css";

import background from "./assets/backgroundOils.jpg";
import foreground from "./assets/foreground.png";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import redcert from "./assets/redcert.png";
import iconHandshake from "./assets/iconHandshake.svg";
import iconTrade from "./assets/iconTrade.svg";
import iconWarehouse from "./assets/iconWarehouse.svg";
import oilsBackground from "./assets/oilsBackground.jpg";

import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import Hero from "../../components/Hero";
import TextBox from "./TextBox";
import TextBoxLi from "./TextBoxLi";

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

        <img className="background2" src={oilsBackground} alt="" />

        <Hero>
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Oleje posmażalnicze (UCO)"
            description="Oferujemy kompleksowe rozwiązania związane z dostawą olejów
              roślinnych oraz odbiorem i magazynowaniem olejów posmażalniczych."
            col1="rgba(12,37,90,0.2)"
            col2="rgba(5,31,58,0.7)"
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
            <div className="relative sm:absolute right-0 w-fit z-20 animate-fade-left">
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
      {/*  bg-gradient-to-b from-[#040E30] to-[#051b33]  */}
      <Section
        customClass="bg-gradient-to-b from-[#040E30] to-[#051b33] pb-32 md:pb-36 3xl:pb-32"
        customClassInner="w-3/4 xl:w-3/4"
      >
        {/* 📜📜📜 */}
        <div className="flex flex-wrap gap-24 self-start">
          <GlowingTitle>Oferujemy</GlowingTitle>
          <div className="flex flex-col gap-16 justify-between max-w-2xl self-start">
            <div className="flex justify-between flex-col gap-16 sm:flex-row">
              <TextBox text="Handel" icon={iconHandshake} />
              <TextBox text="Odbiór" icon={iconTrade} />
            </div>
            <TextBox
              text="Magazynowanie olejów posmażalniczych"
              icon={iconWarehouse}
            />
          </div>
        </div>
      </Section>

      <Section customClass="pb-32 pt-32" customClassInner="w-3/4 xl:w-3/4">
        <div class="custom-shape-divider-top-1722892339">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        {/* 🛢️🛢️🛢️ */}
        <div className=" relative self-center flex flex-col gap-24">
          <div className="flex flex-wrap gap-24 self-start">
            <GlowingTitle customClassH2="backdrop-blur-md bg-black/5 drop-shadow-glowingTextSubtle">
              Nasza oferta obejmuje
            </GlowingTitle>
            <ul className="flex flex-col gap-16">
              <TextBoxLi borderCol="#f7ffff" bgCol="rgba(0, 0, 0, 0.5)">
                Oleje roślinne pochodzące z lokali gastronomicznych lub
                przedsiębiorstw zajmujących się produkcją żywności.
              </TextBoxLi>
              <TextBoxLi borderCol="#f2f9ff" bgCol="rgba(0, 0, 0, 0.4)">
                Tłuszcze zwierzęce KAT.1, KAT.2 oraz KAT.3 - pochodzące z
                zakładów przetwórstwa mięsnego.
              </TextBoxLi>
              <TextBoxLi borderCol="#f3f7fe" bgCol="rgba(0, 0, 0, 0.3)">
                Kwasy tłuszczowe i inne produkty wykorzystywane do
                biokomponentów.
              </TextBoxLi>
            </ul>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1722892549">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </Section>

      <Section
        customClass="bg-gradient-to-b from-[#051527] to-[#193655] min-h-full w-full pt-32"
        customClassInner="w-3/4 xl:w-3/4"
      >
        <div className="flex flex-col self-start gap-24 w-full">
          <GlowingTitle>Posiadamy również</GlowingTitle>

          <ul className="flex flex-col gap-16">
            <TextBoxLi borderCol="#caecff">
              Oleje bazowe SN 85, SN 100, SN 150, SN 500, BS 150.
            </TextBoxLi>
            <TextBoxLi borderCol="#cde4ff">
              MOCZNIK typu A (wykorzystywany np do produkcji AdBlue).
            </TextBoxLi>
            <TextBoxLi borderCol="#c1cefe">
              Katalizatory do produkcji biodiesla: metanol, wodorotlenek potasu
              i wodorotlenek sodu.
            </TextBoxLi>
            <TextBoxLi borderCol="#c3c1fe">
              Pośredniczymy w dostawach etanolu.
            </TextBoxLi>
          </ul>
        </div>
      </Section>
    </>
  );
}

export default Oils;
