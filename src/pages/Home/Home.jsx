import "./Home.css";

import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";
import ArrowMobile from "./assets/arrowMobile.svg";
import HeroCard from "../../components/HeroCard";
import videoPolMed from "./assets/polmed3.mp4";
import fallbackImageBackground from "./assets/background.png";
import educationCardImg from "./assets/educationCard.png";
import oilsCardImg from "./assets/oleje.png";
import toolsCardImg from "./assets/narzedzia.png";
import carServiceIcon from "../../Assets/car-service.png";
import oilTankIcon from "../../Assets/oil-tank.png";
import toolsIcon from "../../Assets/tools.png";
import SectionCard from "./SectionCard";
import circle1 from "./assets/circle1.svg";
import circle2 from "./assets/circle2.svg";
import circle3 from "./assets/circle3.svg";

import { useRef } from "react";
import { Link } from "react-router-dom";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BackgroundVideo from "../../components/Objects/BackgroundVideo";
import Hero from "../../components/Hero";

function Home() {
  const offerRef = useRef(null);

  const executeScrollOffer = () =>
    offerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <header>
        <BackgroundVideo
          fallbackImage={fallbackImageBackground}
          video={videoPolMed}
        />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />

        <Hero>
          <HeroCard
            boxCustom="items-center"
            titleCustom=" text-center"
            title="Profesjonalne wsparcie dla Twojego biznesu i edukacji!"
            col1="rgba(26,21,76,0.2)"
            col2="rgba(23,27,80,0.8)"
          >
            <hr className="hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText" />
            <div className="hidden sm:flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ">
              <h2 className="animate-fade-down animate-delay-[500ms] animate-duration-1000">
                Technologia
              </h2>
              <h2 className="animate-fade-down animate-delay-[1000ms] animate-duration-1000">
                Badania
              </h2>
              <h2 className="animate-fade-down animate-delay-[1500ms] animate-duration-1000">
                Przemysł
              </h2>
            </div>
            <img
              src={ArrowDown}
              className="hidden lg:flex top-[50%] -translate-y-1/2 left-[107%] w-12 sm:w-32 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/55 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              alt=""
              onClick={executeScrollOffer}
            />
          </HeroCard>

          {/* Mobile ⬇️ */}
          <div
            onClick={executeScrollOffer}
            className="sm:hidden min-w-[60%] relative text-secondary-dark bg-gradient-to-l from-primary-dark to-primary-dark/95 rounded-l-[8rem] w-fit self-end py-8 px-8 border-8 border-[#00000049] backdrop-blur-lg  border-r-0 animate-fade-left animate-duration-1000 animate-ease-in-out"
          >
            <img
              className="sm:hidden absolute right-full top-12 animate-fade-down animate-delay-500"
              src={ArrowMobile}
              alt=""
            />

            <h2 className="text-lg font-exo font-bold text-center">
              Odkryj nasze możliwości
            </h2>
          </div>
          <ContactButton className="flex sm:hidden self-end relative right-16" />
        </Hero>
      </header>

      <Section
        customClass="md:pt-40 bg-gradient-to-b from-[#040030] to-[#0c0739]"
        // bg to-[#141038]

        customClassInner="xl:w-full"
        ref={offerRef}
      >
        <img
          src={circle1}
          alt=""
          className="w-12 md:w-24 opacity-50  absolute left-0 top-[20%] md:top-[25%]"
        />
        <img
          src={circle2}
          alt=""
          className="w-24 md:w-44 opacity-50 absolute right-0 top-[50%]"
        />
        <img
          src={circle3}
          alt=""
          className="w-16 md:w-36 absolute opacity-50 left-0 top-[75%]"
        />

        <GlowingTitle customClass="hidden sm:flex  sm:max-w-[85%]">
          Odkryj nasze możliwości
        </GlowingTitle>

        <div className="w-full h-fit flex flex-wrap gap-24 2xl:gap-24 justify-evenly items-start">
          <SectionCard
            image={educationCardImg}
            buttonIcon={carServiceIcon}
            title="Stanowiska dydaktyczno-laboratoryjne"
            description="Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
          samochodowych."
            gradient="#113C63"
            shadow="rgba(117,158,255,0.5)"
            linkHref="/Edukacja_i_badania"
          />
          <SectionCard
            image={oilsCardImg}
            buttonIcon={oilTankIcon}
            title="Oleje posmażalnicze (UCO)"
            description="Odbiór, handel i magazynowanie olejów posmażalniczych (UCO) - kompleksowa usługa dostaw i odbiorów olejów dla przemysłu i gastronomii."
            gradient="#2C3C66"
            shadow="rgba(73, 91, 173, 0.5)"
            linkHref="/Oleje_UCO"
          />
          <SectionCard
            image={toolsCardImg}
            buttonIcon={toolsIcon}
            title="Narzędzia przemysłowe"
            description="Kompleksowe zaopatrzenie przedsiębiorstw w różne rodzaje narzędzi przemysłowych."
            gradient="#115A55"
            shadow="rgba(117, 255, 227, 0.5)"
            linkHref="/Narzedzia"
          />
        </div>
      </Section>
    </>
  );
}

export default Home;
