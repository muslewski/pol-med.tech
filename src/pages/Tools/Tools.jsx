import React, { useState } from "react";
import background from "./assets/backgroundTools.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import Section from "../../components/Section";
import GlowingTitle from "../../components/GlowingTitle";
import LiTool from "./LiTool";

import jobCvIcon from "./assets/job-cv.webp";
import metalIcon from "./assets/metal.webp";
import moneyBagIcon from "./assets/money-bag.webp";
import precisionIcon from "./assets/precision.webp";

import t0 from "./assets/list/t0.jpg";
import t1 from "./assets/list/t1.jpg";
import t2 from "./assets/list/t2.jpg";
import t3 from "./assets/list/t3.jpg";
import t4 from "./assets/list/t4.jpg";
import t5 from "./assets/list/t5.jpg";
import t6 from "./assets/list/t6.jpg";
import t7 from "./assets/list/t7.jpg";
import t8 from "./assets/list/t8.jpg";
import t9 from "./assets/list/t9.jpg";
import SimpleLi from "./SimpleLi";

function Tools() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9];

  const tools = [
    "Narzędzia ręczne: młotki, śrubokręty, piły, szczypce itp.",
    "Narzędzia elektryczne: wiertarki, szlifierki, wkrętarki itp.",
    "Narzędzia pneumatyczne: młoty pneumatyczne, klucze pneumatyczne itp.",
    "Narzędzia hydrauliczne: podnośniki hydrauliczne, prasy hydrauliczne itp.",
    "Narzędzia pomiarowe: suwmiarki, mikrometry, liniały itp.",
    "Narzędzia spawalnicze: spawarki, palniki, elektrody itp.",
    "Narzędzia do obróbki skrawaniem: noże tokarskie, frezy, wiertła itp.",
    "Narzędzia ścierne: tarcze, szczotki, osełki itp.",
    "Roboty przemysłowe: manipulatory, automatyka, linie produkcyjne itp.",
    "Drukarki 3D: drukarki stereolitograficzne, drukarki FDM, drukarki SLS, filamenty itp.",
  ];

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
        <BgBottomVector image={bottomVector} />

        <Hero customClass="gap-28">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Narzędzia przemysłowe"
            description="Odkryj naszą ofertę narzędzi, które sprawią, że Twoje przedsięwzięcia przemysłowe staną się jeszcze bardziej efektywne i wydajne!"
            col1="rgba(1, 47, 49, 0.2)"
            col2="rgba(1, 47, 49, 0.7)"
          />

          <ContactButton
            customBackground="bg-[#012F31]"
            className="flex sm:hidden self-end relative right-16"
          />
        </Hero>
      </header>

      <Section customClass="bg-gradient-to-b from-[#012031] to-[#012F31]">
        <div className="self-start flex flex-wrap gap-16">
          <GlowingTitle>Oferujemy</GlowingTitle>
          <div className="max-w-7xl font-exo font-medium text-xl 2xl:text-[1.5rem] sm:leading-snug">
            Kompleksowe zaopatrzenie przedsiębiorstw w zakresie różnych rodzajów
            narzędzi przemysłowych, specjalistycznego wyposażenia oraz produktów
            BHP.
          </div>
        </div>

        <div className="self-start w-full flex flex-wrap gap-16">
          <GlowingTitle>
            Nasz asortyment{" "}
            <span className="hidden lg:inline">narzędzi przemysłowych </span>
          </GlowingTitle>

          <div
            className="w-full sm:p-16 bg-white rounded-2xl flex flex-col bg-center bg-cover"
            style={{ backgroundImage: `url(${images[selectedImage]})` }}
          >
            <div className="flex flex-col gap-6">
              <img
                className="block sm:hidden rounded-t-2xl  h-72 object-cover"
                src={images[selectedImage]}
                alt=""
              />
              <ul className="gap-4 p-2 sm:p-0 sm:gap-8 flex flex-wrap justify-stretch">
                {tools.map((tool, index) => (
                  <LiTool key={index} index={index} chooseMe={setSelectedImage}>
                    {tool}
                  </LiTool>
                ))}
              </ul>
            </div>

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="self-start flex flex-wrap gap-16 w-full">
          <GlowingTitle>Świadczymy</GlowingTitle>
          <div className="flex flex-col gap-3 text-lg 2xl:text-xl">
            <h3>
              Usługi w zakresie doboru odpowiednich narzędzi w zależości od:
            </h3>
            <ul className="max-w-4xl bg-gradient-to-br rounded-md from-[#23474bf7] p-7 w-full font-exo font-medium text-xl 2xl:text-[1.6rem] sm:leading-snug flex flex-col gap-5">
              <SimpleLi icon={jobCvIcon}>rodzaju wykonywanej pracy,</SimpleLi>
              <SimpleLi icon={metalIcon}>
                materiału, którego się obrabia,
              </SimpleLi>
              <SimpleLi icon={precisionIcon}>
                wymaganej precyzji i dokładności,
              </SimpleLi>
              <SimpleLi icon={moneyBagIcon}>
                dostępnych środków finansowych.
              </SimpleLi>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Tools;
