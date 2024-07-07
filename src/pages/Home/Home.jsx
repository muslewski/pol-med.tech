import "./Home.css";

import backgroundRectangleBottom from "./assets/rectangleBottom.svg";
import backgroundRectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";
import HeroCard from "../../components/HeroCard/HeroCard";
import videoPolMed from "./assets/polmed3.mp4";
import fallbackImageBackground from "./assets/background.webp";
import educationCardImg from "./assets/educationCard.png";
import oilsCardImg from "./assets/oleje.webp";
import toolsCardImg from "./assets/narzedzia.webp";
import carServiceIcon from "./assets/car-service.webp";
import oilTankIcon from "./assets/oil-tank.webp";
import toolsIcon from "./assets/tools.webp";
import SectionCard from "./SectionCard";
import circle1 from "./assets/circle1.svg";
import circle2 from "./assets/circle2.svg";
import circle3 from "./assets/circle3.svg";

import { useRef } from "react";

function Home() {
  const offerRef = useRef(null);

  const executeScroll = () =>
    offerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <header>
        <video
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          className="background brightness-75 blur-sm"
          poster={fallbackImageBackground}
        >
          <source src={videoPolMed} type="video/mp4" />
          <img
            src={fallbackImageBackground}
            className="background brightness-75"
            alt="Fallback Image"
          />
          Your browser does not support the video tag.
        </video>

        <img
          className="foreground2 pointer-events-none select-none"
          src={backgroundRectangleBottom}
          alt=""
        />
        <img
          className="foreground3 pointer-events-none select-none"
          src={backgroundRectangleTop}
          alt=""
        />
        {/* <img
          className="background pointer-events-none select-none"
          src={foreground2}
          alt=""
        /> */}

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
            className="hidden sm:flex top-[110%] w-12 xl:w-14 2xl:w-16 3xl:w-20 left-1/2 translate-x-1/2 absolute cursor-pointer drop-shadow-logoDark hover:scale-105 transition-all ease-in-out duration-500 animate-pulse animate-infinite animate-duration-[2500ms] animate-delay-1000 animate-ease-in-out"
            alt=""
            onClick={executeScroll}
          />
        </HeroCard>
      </header>
      <section
        className="text-white px-10 pt-56 pb-96 text-2xl flex justify-center relative"
        style={{
          boxShadow:
            "0 -12px 24px 5px #040030, inset 0px 24px 24px -3px #040030",
          background: `linear-gradient(-45deg, #211d50, #040030 50%)`,
        }}
        ref={offerRef}
      >
        <img src={circle1} alt="" className="absolute left-0 top-[25%]" />
        <img src={circle2} alt="" className="absolute right-0 top-[50%]" />
        <img src={circle3} alt="" className="absolute left-0 top-[75%]" />

        <div className=" max-w-[75%] w-full flex flex-col gap-36">
          <h2 className="border-4 text-xl lg:text-2xl 2xl:text-3xl w-fit px-12 py-6 rounded-full border-primary-dark/15 drop-shadow-navigationAccent font-bold">
            Odkryj nasze możliwości
          </h2>
          <div className="w-full h-fit flex flex-wrap gap-28 justify-evenly items-start">
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
      </section>
    </>
  );
}

export default Home;
