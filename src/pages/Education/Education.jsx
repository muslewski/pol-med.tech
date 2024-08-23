import React, { useState } from "react";

import background from "./assets/backgroundEducation.png";
import foreground from "./assets/foreground.png";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import iconRepairingCar from "./assets/iconCarRepair.png";
import iconDiagnosticCar from "./assets/iconCarDiagnostic.png";
import iconEnginePart from "./assets/iconCarPart.png";
import iconLesson from "./assets/iconCarLesson.png";
import iconError from "./assets/iconError.png";
import iconDiagnostic from "./assets/iconDiagnostic.png";
import iconOscilloscope from "./assets/iconOscilloscope.png";
import iconPrototype from "./assets/iconPrototype.png";
import platformaImage from "./assets/platforma.png";
import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import ForegroundItem from "../../components/Objects/ForegroundItem";
import Hero from "../../components/Hero";
import FancyInfo from "../../components/FancyInfo";
import VideoObject from "./VideoObject";
import GoodButton from "../../components/GoodButton";
import { Link } from "react-router-dom";
import StationObject from "./StationObject";
import stationsData from "./stations.json";

function Education() {
  const [video, setVideo] = useState({
    id: 0,
    videoSrc:
      "https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1",
    title: "Panel Symulacji Usterek",
    description:
      "To zaawansowany system umożliwiający generowanie typowych usterek sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają praktyczne umiejętności implementacji procedur diagnostycznych do wykrywania i lokalizacji usterek z wykorzystaniem specjalistycznych urządzeń diagnostycznych.",
  });

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
        <ForegroundItem
          image={foreground}
          alt="Foreground Image of Car Station with Mechanics"
        />
        <BgBottomVector image={bottomVector} />

        <Hero customClass="gap-28">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Stanowiska dydaktyczno-laboratoryjne"
            description="To zintegrowane moduły dydaktyczne, które umożliwiają naukę o
            różnych aspektach technologii samochodowych w praktyczny i
            angażujący sposób."
            col1="rgba(26,21,76,0.2)"
            col2="rgba(12,37,90,0.7)"
          />

          <ContactButton
            customBackground="bg-[rgba(7,33,54,0.75)]"
            className="flex sm:hidden self-end relative right-16"
          />
        </Hero>
      </header>
      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#10295b]">
        {/* 📜📜📜 */}
        <div className="flex flex-wrap gap-24">
          <GlowingTitle>Oferujemy</GlowingTitle>

          <FancyInfo
            image={iconRepairingCar}
            alt="Image of a man exploring car enginge"
            title="Stanowiska edukacyjne"
            description="Interaktywne stanowiska edukacyjne przeznaczone do nauki budowy, diagnostyki i obsługi pojazdów hybrydowych i elektrycznych."
            col1="#0493B2"
            col2="rgba(87, 252, 255, 0.01)"
          />
          <FancyInfo
            image={iconDiagnosticCar}
            alt="Image of a diagnostic tool for car"
            title="Stanowiska badawcze"
            description="Nowoczesne stanowiska badawcze wyposażone w najnowsze technologie, umożliwiające prowadzenie badań i testów różnych układów i podzespołów pojazdów."
            col1="#0473B2"
            col2="rgba(87, 164, 255, 0.01)"
          />
          <FancyInfo
            image={iconEnginePart}
            alt="Image of car engine part"
            title="Urządzenia i narzędzia kontrolno-pomiarowe"
            description="Szeroki wybór wysoce precyzyjnych urządzeń i narzędzi do diagnostyki i serwisu pojazdów."
            col1="#3542b7"
            col2="rgba(87, 94, 255, 0.01)"
          />
          <FancyInfo
            image={iconLesson}
            alt="Image of mechanic lesson"
            title="Kursy i szkolenia"
            description="Kompleksowe kursy i szkolenia z zakresu diagnostyki pokładowej i obsługi pojazdów hybrydowych i elektrycznych, z uprawnieniami do 1kV."
            col1="#4e2abb"
            col2="rgba(161, 87, 255, 0.01)"
          />
        </div>

        {/* 🎬🎬🎬 */}
        <div
          className="flex flex-col relative items-center gap-12 max-w-5xl px-0 sm:px-10 py-12 rounded-3xl sm:rounded-[5rem]"
          style={{
            background: `linear-gradient(-60deg, #15366dd3, transparent 60%)`,
          }}
        >
          <div className="border-4 sm:w-2/3 border-primary-dark/50 rounded-3xl shadow-navigation hover:drop-shadow-homeCard transition-all duration-500 ease-in-out">
            <iframe
              className="h-full  rounded-3xl"
              loading="lazy"
              src={video.videoSrc}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4 px-6 sm:px-0">
            <h3 className="font-exo font-semibold sm:text-center text-xl 2xl:text-[1.7rem]">
              {video.title}
            </h3>
            <p className="font-raleway text-lg 2xl:text-xl">
              {video.description}
            </p>
          </div>

          <div className="flex flex-row flex-wrap sm:flex-row w-full md:h-32 items-center sm:w-3/4 justify-evenly gap-8 px-4 sm:px-8 sm:py-4 sm:bg-secondary-darkEducation/15 rounded-3xl sm:rounded-full sm:shadow-glowingTitle sm:border-4 border-secondary-dark/15">
            <VideoObject
              id={0}
              icon={iconError}
              videoSrc="https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1"
              title="Panel Symulacji Usterek"
              description="To zaawansowany system umożliwiający generowanie typowych usterek sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają praktyczne umiejętności implementacji procedur diagnostycznych do wykrywania i lokalizacji usterek z wykorzystaniem specjalistycznych urządzeń diagnostycznych."
              setVideo={setVideo}
              currentVideoId={video.id}
            />

            <VideoObject
              id={1}
              icon={iconDiagnostic}
              videoSrc="https://www.youtube.com/embed/-lltFnhZlT0?si=QcgWmBxbtpyDVSbu&enablejsapi=1"
              title="Procedury diagnostyki silnika"
              description="Stanowisko dydaktyczne umożliwiające realizację procedur diagnostycznych oceny stanu technicznego silnika spalinowego z wykorzystaniem specjalistycznego oprzyrządowania oraz pozwalającego na szybką realizację lokalizacji i weryfikacji usterek."
              setVideo={setVideo}
              currentVideoId={video.id}
            />

            <VideoObject
              id={2}
              icon={iconOscilloscope}
              videoSrc="https://www.youtube.com/embed/edlhrt-Ep-E?si=8gJdUgfBUNcTAOiA&enablejsapi=1"
              title="Badania oscyloskopowe"
              description="Stanowisko umożliwia wykorzystanie możliwości uniwersalnego oscyloskopu do weryfikacji parametrów pracy silnika spalinowego. Stanowi to podstawę realizowanych działań w zakresie identyfikacji stanu technicznego silnika spalinowego."
              setVideo={setVideo}
              currentVideoId={video.id}
            />
          </div>
        </div>

        {/* 🆕🆕🆕 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 sm:gap-24 max-w-6xl">
          <div className="flex flex-col-reverse sm:flex-col max-w-sm gap-4 items-center">
            <Link
              to="/Edukacja_i_badania/interaktywna_platforma_edukacyjna"
              className="hover:scale-[102%] [&>img]:hover:border-[#9bf3ff]/75 [&>img]:hover:border-[4px] [&>img]:hover:drop-shadow-homeCard transition-transform ease-in-out"
            >
              <img
                className="border-[6px] border-primary-dark/50 rounded-3xl shadow-navigation drop-shadow-none transition-all duration-500 ease-in-out"
                src={platformaImage}
                alt=""
              />
            </Link>
            <span className="font-exo font-medium text-xl bg-gradient-to-r from-[#37E7FF] to-[#7A87FF]   text-transparent bg-clip-text">
              Nowość na rynku
            </span>
          </div>

          <div className="w-fit flex gap-12 flex-col">
            <FancyInfo
              className="5xl:max-w-full"
              alt="Image of an interactive education platform"
              title="Interaktywna platforma edukacyjna"
              description="Nasze nowoczesne stanowisko dydaktyczne do mechatroniki samochodowej pozwala uczniom na naukę programowania i tworzenia map pracy silnika. Dzięki Uniwersalnemu Komputerowi Sterującemu, mogą eksperymentować z ustawieniami silnika i analizować dane z czujników, zdobywając praktyczne umiejętności potrzebne w zawodzie elektromechanika lub mechatronika samochodowego. Nowość na rynku!"
              col1="#37E7FF"
              col2="#7a87ff2b"
              buttonIcon={iconPrototype}
              link="/Edukacja_i_badania/interaktywna_platforma_edukacyjna"
            />
          </div>
        </div>

        {/* 🚙🚙🚙 */}
        <div className="w-full flex flex-wrap  gap-24">
          <GlowingTitle>
            Stanowiska{" "}
            <span className="hidden lg:inline">demonstracyjno-pomiarowe</span>
          </GlowingTitle>

          {stationsData.stations.map((station) => (
            <StationObject
              key={station.id}
              image={station.images[0]}
              {...station}
            />
          ))}
        </div>

        <h3>
          Oferowane przez nas produkty dostosowujemy do indywidualnych potrzeb i
          wymagań Zamawiających.
        </h3>
      </Section>
    </>
  );
}

export default Education;
