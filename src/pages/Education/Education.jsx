import React from "react";

import background from "./assets/backgroundEducation.webp";
import foreground from "./assets/foreground.webp";
import backgroundRectangleBottom from "./assets/rectangleBottom.svg";
import backgroundRectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import HeroCard from "../../components/HeroCard/HeroCard";

function Education() {
  return (
    <>
      <header className="">
        <img
          className="background bg-secondary-darkEducation pointer-events-none select-none"
          src={background}
          alt=""
        />
        <img
          className="foreground2 pointer-events-none select-none"
          src={backgroundRectangleBottom}
          alt=""
        />
        <img
          className="foreground2 pointer-events-none select-none"
          src={foreground}
          alt=""
        />
        <img
          className="foreground3 pointer-events-none select-none"
          src={backgroundRectangleTop}
          alt=""
        />
        <img
          className="absolute w-full -bottom-10 pointer-events-none select-none"
          src={bottomVector}
          alt=""
        />
        <HeroCard title="Stanowiska dydaktyczno-laboratoryjne">
          <div className="flex justify-evenly text-2xl w-full font-exo ">
            <h2 className="">
              To zintegrowane moduły dydaktyczne, które umożliwiają naukę o
              różnych aspektach technologii samochodowych w praktyczny i
              angażujący sposób.
            </h2>
          </div>
        </HeroCard>
      </header>
      <section className="bg-secondary-darkEducation text-white px-10 pt-44 pb-44 text-2xl flex justify-center">
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

export default Education;
