import "./Home.css";

import backgroundRectangleBottom from "./assets/rectangleBottom.svg";
import backgroundRectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";
import HeroCard from "../../components/HeroCard/HeroCard";
import videoPolMed from "./assets/polmed.mp4";
import educationCard from "./assets/educationCard.png";
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
        <div className=" max-w-[75%] w-full flex flex-col bg-black justify-around">
          <h2 className="border-4 text-3xl w-fit px-12 py-6 rounded-full border-primary-dark/15 drop-shadow-navigationAccent font-bold">
            Odkryj nasze możliwości
          </h2>
          <div className="w-full h-fit flex flex-wrap gap-24">
            <SectionCard
              image={educationCard}
              title="Stanowiska dydaktyczno-laboratoryjne"
              description="Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
          samochodowych."
            />
            <SectionCard
              image={educationCard}
              title="Stanowiska dydaktyczno-laboratoryjne"
              description="Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
        samochodowych."
            />
            <SectionCard
              image={educationCard}
              title="Stanowiska dydaktyczno-laboratoryjne"
              description="Praktyczne i angażujące systemy dydaktyczne z zakresu technologii
        samochodowych."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
