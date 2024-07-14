import "./Home.css";

import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";
import ArrowMobile from "./assets/arrowMobile.svg";
import HeroCard from "../../components/HeroCard/HeroCard";
import videoPolMed from "./assets/polmed3.mp4";
import fallbackImageBackground from "./assets/background.webp";
import educationCardImg from "./assets/educationCard.png";
import oilsCardImg from "./assets/oleje.webp";
import toolsCardImg from "./assets/narzedzia.webp";
import carServiceIcon from "../../Assets/car-service.webp";
import oilTankIcon from "../../Assets/oil-tank.webp";
import toolsIcon from "../../Assets/tools.webp";
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
              className="hidden sm:flex top-[110%] w-12 sm:w-16 left-1/2 translate-x-1/2 absolute cursor-pointer drop-shadow-logoDark hover:scale-105 transition-all ease-in-out duration-500 animate-pulse animate-infinite animate-duration-[2500ms] animate-delay-1000 animate-ease-in-out"
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
        customClass="md:pt-40 3xl:pt-56 bg-gradient-to-b from-[#040030] to-[#141038]"
        ref={offerRef}
      >
        <img
          src={circle1}
          alt=""
          className="w-12 md:w-24  absolute left-0 top-[20%] md:top-[25%]"
        />
        <img
          src={circle2}
          alt=""
          className="w-24 md:w-44 absolute right-0 top-[50%]"
        />
        <img
          src={circle3}
          alt=""
          className="w-16 md:w-36 absolute left-0 top-[75%]"
        />

        <div className=" max-w-full w-full flex flex-col justify-center items-center gap-40">
          <GlowingTitle customClass="hidden sm:flex">
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
              linkHref="/pol-med.tech/Edukacja_i_badania"
            />
            <SectionCard
              image={oilsCardImg}
              buttonIcon={oilTankIcon}
              title="Oleje posmażalnicze (UCO)"
              description="Odbiór, handel i magazynowanie olejów posmażalniczych (UCO) - kompleksowa usługa dostaw i odbiorów olejów dla przemysłu i gastronomii."
              gradient="#2C3C66"
              shadow="rgba(73, 91, 173, 0.5)"
              linkHref="/pol-med.tech/Oleje_UCO"
            />
            <SectionCard
              image={toolsCardImg}
              buttonIcon={toolsIcon}
              title="Narzędzia przemysłowe"
              description="Kompleksowe zaopatrzenie przedsiębiorstw w różne rodzaje narzędzi przemysłowych."
              gradient="#115A55"
              shadow="rgba(117, 255, 227, 0.5)"
              linkHref="/pol-med.tech/Narzedzia"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;
