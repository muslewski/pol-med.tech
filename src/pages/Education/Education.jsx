import React from "react";

import background from "./assets/backgroundEducation.webp";
import foreground from "./assets/foreground.webp";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import iconRepairingCar from "./assets/iconCarRepair.webp";
import iconDiagnostic from "./assets/iconCarDiagnostic.webp";
import iconEnginePart from "./assets/iconCarPart.webp";
import iconLesson from "./assets/iconCarLesson.webp";
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
        <GlowingTitle>Oferujemy</GlowingTitle>

        {/* 📜📜📜 */}
        <div className="flex flex-wrap max-w-full xl:max-w-[85%]  gap-24">
          <FancyInfo
            image={iconRepairingCar}
            alt="Image of a man exploring car enginge"
            title="Stanowiska edukacyjne"
            description="Interaktywne stanowiska edukacyjne przeznaczone do nauki budowy, diagnostyki i obsługi pojazdów hybrydowych i elektrycznych."
            col1="#0493B2"
            col2="rgba(87, 252, 255, 0.01)"
          />
          <FancyInfo
            image={iconDiagnostic}
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
        <div className="flex flex-col gap-12">
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="flex flex-col gap-3"
            style={{
              background: `linear-gradient(-60deg, #1195CD, transparent 60%)`,
            }}
          >
            <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem]">
              Panel Symulacji Usterek
            </h3>
            <p className="font-raleway text-lg 2xl:text-xl">
              To zaawansowany system umożliwiający generowanie typowych usterek
              sterowania silnikiem spalinowym dzięki któremu uczniowie nabywają
              praktyczne umiejętności implementacji procedur diagnostycznych do
              wykrywania i lokalizacji usterek z wykorzystaniem
              specjalistycznych urządzeń diagnostycznych.
            </p>
          </div>
          <div className="flex w-3/4 justify-evenly">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Education;
