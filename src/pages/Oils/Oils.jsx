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
// import oils2Background from "./assets/oils2Background.jpg";
import oilsBackground3 from "./assets/oils3Background.jpg";
import iconExpertise from "./assets/iconExpertise.webp";
import iconMicroscope from "./assets/iconMicroscope.webp";
import iconResearch from "./assets/iconResearch.webp";
import iconSuggestion from "./assets/iconSuggestion.webp";

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
import AdvancedBox from "./AdvancedBox";

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

        {/* <img className="backgroundOils" src={oilsBackground} alt="" /> */}
        {/* <img className="backgroundOils2" src={oils2Background} alt="" /> */}

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

      {/* 📜📜📜 */}
      {/* bg-gradient-to-b from-[#040E30] to-[#051b33]  */}
      <Section
        customClass="pb-32 md:pb-36 3xl:pb-32 bg-gradient-to-b from-[#040E30] to-[#051b33]"
        customClassInner="w-3/4 xl:w-3/4"
      >
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

      <img className="backgroundOils" src={oilsBackground} alt="" />
      {/* 🛢️🛢️🛢️ */}
      <Section customClass="pb-36 pt-36" customClassInner="w-3/4 xl:w-3/4">
        <div className="custom-shape-divider-top-1722892339">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

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

        <div className="custom-shape-divider-bottom-1722892549">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Section>

      {/* ➕➕➕ */}
      {/* bg-gradient-to-b from-[#051527] to-[#193655] */}
      <Section
        customClass="w-full pt-32 pb-32 bg-gradient-to-b from-[#051527] to-[#193655]"
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
            <TextBoxLi borderCol="#cde4ff">
              Pośredniczymy w dostawach etanolu.
            </TextBoxLi>
          </ul>
        </div>
      </Section>

      {/* <img className="backgroundOils2" src={oils2Background} alt="" /> */}

      {/* ➕➕➕ */}
      <Section
        customClass="pt-48 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${oilsBackground3})` }}
        customClassInner="w-3/4 xl:w-3/4"
      >
        <div className="custom-shape-divider-top-1722954430">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col self-start gap-24 w-full">
          <GlowingTitle customClassH2="backdrop-blur-md bg-indigo-950/15 border-indigo-950/15 drop-shadow-glowingTextSubtle">
            Świadczymy usługi
          </GlowingTitle>

          <AdvancedBox
            title="Badania wytrzymałościowe i eksploatacyjne"
            icon={iconResearch}
            description="Dokładnie sprawdzamy właściwości materiałów i elementów konstrukcyjnych maszyn i urządzeń, aby upewnić się, że są one w stanie wytrzymać obciążenia i pracować bezawaryjnie."
          />

          <AdvancedBox
            title="Badania i ocena parametrów użytkowych"
            icon={iconMicroscope}
            description="Analizujemy oleje, paliwa i smary, aby upewnić się, że spełniają one wymagania i zapewniają optymalną pracę maszyn."
          />

          <AdvancedBox
            title="Opinie i ekspertyzy"
            icon={iconSuggestion}
            description="Wydajemy rzetelne opinie i ekspertyzy na temat badanych próbek i stosowanych procesów technologicznych."
          />

          <AdvancedBox
            title="Przeglądy i weryfikacje"
            icon={iconExpertise}
            description="Dokonujemy przeglądów i weryfikacji instalacji technologicznych, aby zidentyfikować potencjalne problemy i zapewnić ich bezpieczną i wydajną pracę."
          />
        </div>

        {/* <div className="custom-shape-divider-bottom-1722954477">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </Section>
    </>
  );
}

export default Oils;
