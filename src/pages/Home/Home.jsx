import React from "react";
import "./Home.css";

import background from "./assets/background.jpg";
import foreground from "./assets/smoke.png";
import foreground2 from "./assets/particles3.png";

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
          className="foreground2 pointer-events-none select-none "
          src={backgroundRectangleBottom}
          alt=""
        />
        <img
          className="foreground3 pointer-events-none select-none "
          src={backgroundRectangleTop}
          alt=""
        />
        {/* <img
          className="background pointer-events-none select-none"
          src={foreground2}
          alt=""
        /> */}

        <div
          className="hero text-primary-dark flex flex-col gap-10 max-w-6xl text-center items-center bg-secondary-dark/25 backdrop-blur-lg pl-[16%] pr-24 py-24 
        rounded-r-[8rem] border-secondary-dark/15 border-8 "
        >
          <h1 className="text-5xl leading-tight font-raleway font-bold">
            Profesjonalne wsparcie dla Twojego biznesu i edukacji!
          </h1>
          <hr className="h-3 w-3/4 rounded-[100%] bg-primary-dark" />
          <div className="flex justify-evenly text-2xl w-full font-exo">
            <h2>Technologia</h2>
            <h2>Badania</h2>
            <h2>Przemysł</h2>
          </div>
        </div>
      </header>
      <section className="bg-secondary-dark text-white px-10 text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
        unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit
        iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi
        expedita perferendis inventore. Culpa incidunt odit dicta quibusdam
        ullam facilis eum magnam, consectetur voluptates praesentium, pariatur
        eos nihil! Natus in, autem aut facere repellat eveniet commodi illo
        ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta
        suscipit sed! Porro fugiat numquam vel magni, iure provident
        consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi
        incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus
        consectetur incidunt a exercitationem molestias doloribus tenetur amet,
        ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim
        voluptas natus! Assumenda praesentium voluptate culpa quidem quasi
        impedit unde incidunt odit velit, dolore officiis distinctio, fugit,
        optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora,
        fugiat provident corporis perspiciatis veritatis totam temporibus
        voluptates soluta vitae mollitia molestias reiciendis expedita doloribus
        est. Maxime et fugit expedita id sed cumque harum dignissimos aperiam
        voluptatum quos obcaecati illo tempore consectetur, sunt perferendis
        eius aliquid soluta praesentium voluptatem assumenda ex fuga. Iusto,
        possimus? Dolores deleniti eaque, aperiam consequuntur odit culpa,
        architecto, quas veniam provident inventore eius. Laboriosam in
        reprehenderit quidem? Officiis illum molestiae, praesentium velit, illo
        debitis quasi fuga laborum veritatis necessitatibus fugiat cupiditate!
        Quia animi provident maxime numquam porro itaque! Provident, rerum.
        Aliquid cum quo ducimus ad? Repellat nihil, saepe beatae rerum sint
        eveniet voluptate officiis velit autem officia tempore deserunt sequi
        quod quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam
        facilis, possimus modi placeat ratione soluta voluptate obcaecati error
        minima enim, fugiat quaerat architecto, iure dignissimos a eum quidem
        eos at fuga. Consectetur, quisquam at reprehenderit in exercitationem
        inventore incidunt dolorum quos adipisci labore? Fugiat facilis ipsum
        minus, officiis eos modi sequi distinctio pariatur reprehenderit
        accusantium labore obcaecati, recusandae saepe?
      </section>{" "}
      <section className="bg-secondary-dark text-white px-10 text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
        unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit
        iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi
        expedita perferendis inventore. Culpa incidunt odit dicta quibusdam
        ullam facilis eum magnam, consectetur voluptates praesentium, pariatur
        eos nihil! Natus in, autem aut facere repellat eveniet commodi illo
        ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta
        suscipit sed! Porro fugiat numquam vel magni, iure provident
        consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi
        incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus
        consectetur incidunt a exercitationem molestias doloribus tenetur amet,
        ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim
        voluptas natus! Assumenda praesentium voluptate culpa quidem quasi
        impedit unde incidunt odit velit, dolore officiis distinctio, fugit,
        optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora,
        fugiat provident corporis perspiciatis veritatis totam temporibus
        voluptates soluta vitae mollitia molestias reiciendis expedita doloribus
        est. Maxime et fugit expedita id sed cumque harum dignissimos aperiam
        voluptatum quos obcaecati illo tempore consectetur, sunt perferendis
        eius aliquid soluta praesentium voluptatem assumenda ex fuga. Iusto,
        possimus? Dolores deleniti eaque, aperiam consequuntur odit culpa,
        architecto, quas veniam provident inventore eius. Laboriosam in
        reprehenderit quidem? Officiis illum molestiae, praesentium velit, illo
        debitis quasi fuga laborum veritatis necessitatibus fugiat cupiditate!
        Quia animi provident maxime numquam porro itaque! Provident, rerum.
        Aliquid cum quo ducimus ad? Repellat nihil, saepe beatae rerum sint
        eveniet voluptate officiis velit autem officia tempore deserunt sequi
        quod quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam
        facilis, possimus modi placeat ratione soluta voluptate obcaecati error
        minima enim, fugiat quaerat architecto, iure dignissimos a eum quidem
        eos at fuga. Consectetur, quisquam at reprehenderit in exercitationem
        inventore incidunt dolorum quos adipisci labore? Fugiat facilis ipsum
        minus, officiis eos modi sequi distinctio pariatur reprehenderit
        accusantium labore obcaecati, recusandae saepe?
      </section>
    </>
  );
}

export default Home;
