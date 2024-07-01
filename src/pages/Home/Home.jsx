import React from "react";
import "./Home.css";

import background from "./assets/background.jpg";
import foreground from "./assets/smoke.png";
import foreground2 from "./assets/particles4.png";

import backgroundRectangleBottom from "./assets/rectangleBottom.svg";
import backgroundRectangleTop from "./assets/rectangleTop.svg";
import HeroPattern from "./assets/HeroPattern.svg";
import ArrowDown from "./assets/Arrow.svg";

function Home() {
  return (
    <>
      <header className="">
        <img
          className="background bg-secondary-dark pointer-events-none select-none"
          src={background}
          alt=""
        />
        <img
          className="foreground pointer-events-none select-none"
          src={foreground}
          alt=""
        />
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

        <div
          className=" text-primary-dark flex flex-col gap-10 max-w-6xl text-center items-center bg-gradient-to-br from-secondary-dark/5 to-secondary-dark/40 backdrop-blur-md pl-[16%] pr-24 py-24 
        rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out"
        >
          <h1 className="text-5xl leading-tight font-raleway font-bold drop-shadow-whiteText">
            Profesjonalne wsparcie dla Twojego biznesu i edukacji!
          </h1>
          <hr className="h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent  backdrop-blur-md shadow-navigationBlack" />
          <div className="flex justify-evenly text-2xl w-full font-exo ">
            <h2 className="">Technologia</h2>
            <h2>Badania</h2>
            <h2>Przemysł</h2>
          </div>
        </div>

        <img
          src={ArrowDown}
          className="bottom-24 left-1/3 absolute drop-shadow-logoDark"
          alt=""
        />
      </header>
      <section className="bg-secondary-dark text-white px-10 pt-44 pb-44 text-2xl flex justify-center">
        <div className=" max-w-[85%] w-full">
          <h2 className="border-4 text-3xl w-fit px-12 py-6 rounded-full border-primary-dark/15 drop-shadow-navigationAccent font-bold">
            Odkryj nasze możliwości
          </h2>
        </div>

        <div></div>
      </section>
    </>
  );
}

export default Home;
