import React, { useState } from "react";

import background from "./assets/backgroundEducation.webp";
import foreground from "./assets/foreground.webp";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import iconRepairingCar from "./assets/iconCarRepair.webp";
import iconDiagnosticCar from "./assets/iconCarDiagnostic.webp";
import iconEnginePart from "./assets/iconCarPart.webp";
import iconLesson from "./assets/iconCarLesson.webp";
import iconError from "./assets/iconError.webp";
import iconDiagnostic from "./assets/iconDiagnostic.webp";
import iconOscilloscope from "./assets/iconOscilloscope.webp";
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
        <div className="flex flex-wrap max-w-full xl:max-w-[85%]  gap-24">
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
          className="flex flex-col relative items-center gap-12 max-w-5xl px-0 sm:px-10 py-12 rounded-[5rem]"
          style={{
            background: `linear-gradient(-60deg, #15366dd3, transparent 60%)`,
          }}
        >
          <div className="border-4 border-primary-dark/50 rounded-3xl overflow-hidden shadow-navigation">
            <iframe
              className="h-full sm:h-56 2lg:h-80"
              loading="lazy"
              src={video.videoSrc}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4 px-10 sm:px-0">
            <h3 className="font-exo font-semibold text-center text-xl 2xl:text-[1.7rem]">
              {video.title}
            </h3>
            <p className="font-raleway text-lg 2xl:text-xl">
              {video.description}
            </p>
          </div>

          <div className="flex flex-row flex-wrap sm:flex-row w-full md:h-40 items-center sm:w-3/4 justify-evenly gap-4 px-4 sm:px-8 py-4 bg-secondary-darkEducation/25 rounded-3xl sm:rounded-full shadow-navigation border-4 border-x-0 sm:border-x-4 border-secondary-dark/25">
            <img
              className={`p-3 transition-all cursor-pointer ${
                video.id != 0 ? "hover:scale-110" : "hover:brightness-90"
              }`}
              src={iconError}
              alt=""
              draggable="false"
              onClick={() =>
                setVideo({
                  id: 0,
                  videoSrc:
                    "https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1",
                  title: "Panel Symulacji Usterek",
                  description:
                    "To zaawansowany system umożliwiający generowanie typowych usterek sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają praktyczne umiejętności implementacji procedur diagnostycznych do wykrywania i lokalizacji usterek z wykorzystaniem specjalistycznych urządzeń diagnostycznych.",
                })
              }
              style={{
                height: video.id == 0 ? "6rem" : "5rem",
                opacity: video.id == 0 ? "100%" : "50%",
              }}
            />
            <img
              className={`p-3 transition-all cursor-pointer ${
                video.id != 1 ? "hover:scale-110" : "hover:brightness-90"
              }`}
              src={iconDiagnostic}
              alt=""
              draggable="false"
              onClick={() =>
                setVideo({
                  id: 1,
                  videoSrc:
                    "https://www.youtube.com/embed/-lltFnhZlT0?si=QcgWmBxbtpyDVSbu&enablejsapi=1",
                  title: "Procedury diagnostyki silnika",
                  description:
                    "Stanowisko dydaktyczne umożliwiające realizację procedur diagnostycznych oceny stanu technicznego silnika spalinowego z wykorzystaniem specjalistycznego oprzyrządowania oraz pozwalającego na szybką realizację lokalizacji i weryfikacji usterek.",
                })
              }
              style={{
                height: video.id == 1 ? "6rem" : "5rem",
                opacity: video.id == 1 ? "100%" : "50%",
              }}
            />
            <img
              className={`p-3 transition-all cursor-pointer ${
                video.id != 2 ? "hover:scale-110" : "hover:brightness-90"
              }`}
              src={iconOscilloscope}
              alt=""
              draggable="false"
              onClick={() =>
                setVideo({
                  id: 2,
                  videoSrc:
                    "https://www.youtube.com/embed/edlhrt-Ep-E?si=8gJdUgfBUNcTAOiA&enablejsapi=1",
                  title: "Badania oscyloskopowe",
                  description:
                    "Stanowisko umożliwia wykorzystanie możliwości uniwersalnego oscyloskopu do weryfikacji parametrów pracy silnika spalinowego. Stanowi to podstawę realizowanych działań w zakresie identyfikacji stanu technicznego silnika spalinowego.",
                })
              }
              style={{
                height: video.id == 2 ? "6rem" : "5rem",
                opacity: video.id == 2 ? "100%" : "50%",
              }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Education;
