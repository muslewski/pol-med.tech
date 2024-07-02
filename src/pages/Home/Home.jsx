import "./Home.css";

import backgroundRectangleBottom from "./assets/rectangleBottom.svg";
import backgroundRectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";
import HeroCard from "../../components/HeroCard/HeroCard";
import videoPolMed from "./assets/polmed.mp4";
import educationCardImg from "./assets/educationCard.png";
import oilsCardImg from "./assets/oleje.webp";
import toolsCardImg from "./assets/narzedzia.webp";
import carServiceIcon from "./assets/car-service.webp";
import oilTankIcon from "./assets/oil-tank.webp";
import toolsIcon from "./assets/tools.webp";
import SectionCard from "./SectionCard";

function Home() {
  return (
    <>
      <header>
        <video
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          className="background brightness-75 "
        >
          <source src={videoPolMed} type="video/mp4" />
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
          titleCustom=" drop-shadow-whiteText text-center"
          title="Profesjonalne wsparcie dla Twojego biznesu i edukacji!"
        >
          <hr className="h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent  backdrop-blur-md shadow-navigation" />
          <div className="flex justify-evenly text-2xl w-full font-exo ">
            <h2 className="">Technologia</h2>
            <h2>Badania</h2>
            <h2>Przemysł</h2>
          </div>
        </HeroCard>

        <img
          src={ArrowDown}
          className="bottom-24 left-1/3 absolute drop-shadow-logoDark animate-pulse animate-infinite animate-duration-[2500ms] animate-delay-1000 animate-ease-in-out"
          alt=""
        />
      </header>
      <section className="bg-secondary-dark text-white px-10 pt-44 pb-44 text-2xl flex justify-center">
        <div className=" max-w-[75%] w-full flex flex-col gap-24">
          <h2 className="border-4 text-3xl w-fit px-12 py-6 rounded-full border-primary-dark/15 drop-shadow-navigationAccent font-bold">
            Odkryj nasze możliwości
          </h2>
          <div className="w-full h-fit flex flex-wrap gap-24 justify-evenly items-start">
            <SectionCard
              image={educationCardImg}
              buttonIcon={carServiceIcon}
              title="Stanowiska dydaktyczno-laboratoryjne"
              description="Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
          samochodowych."
              gradient="#113C63"
              shadow="rgba(117,158,255,0.5)"
            />
            <SectionCard
              image={oilsCardImg}
              buttonIcon={oilTankIcon}
              title="Oleje posmażalnicze (UCO)"
              description="Odbiór, handel i magazynowanie olejów posmażalniczych (UCO) - kompleksowa usługa dostaw i odbiorów olejów dla przemysłu i gastronomii."
              gradient="#2C3C66"
              shadow="rgba(73, 91, 173, 0.5)"
            />
            <SectionCard
              image={toolsCardImg}
              buttonIcon={toolsIcon}
              title="Narzędzia przemysłowe"
              description="Kompleksowe zaopatrzenie przedsiębiorstw w różne rodzaje narzędzi przemysłowych."
              gradient="#115A55"
              shadow="rgba(117, 255, 227, 0.5)"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
