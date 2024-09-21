import React from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundAbout.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import Section from "../../components/Section";
import GlowingTitle from "../../components/GlowingTitle";
import FancyInfo from "../../components/FancyInfo";

import carServiceIcon from "../../Assets/car-service.svg";
import oilTankIcon from "../../Assets/oil-tank.svg";
import toolsIcon from "../../Assets/tools.svg";
import honestyIcon from "./assets/honestyIcon.png";
import goalIcon from "./assets/goalIcon.png";
import SeriousInfo from "../../components/SeriousInfo";
import ContactButton from "../../components/Navbar/ContactButton";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("About");
  return (
    <>
      <header>
        <Background image={background} alt={t("hero_background_alt")} />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />
        <BgBottomVector image={bottomVector} />

        <Hero>
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title={`${t("hero_title")} 👋`}
            description={t("hero_description")}
            col1="rgba(21, 51, 76, 0.2)"
            col2="rgba(28, 31, 72, 0.7)"
          />

          <ContactButton
            customBackground="bg-[rgba(7,9,54,0.35)]"
            className="flex sm:hidden self-end relative right-16"
          />
        </Hero>
      </header>

      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#0a0a46]">
        <div className="flex flex-wrap gap-16 sm:gap-24 self-start">
          <GlowingTitle>{t("section_title_1")}</GlowingTitle>

          <SeriousInfo
            icon={goalIcon}
            iconAlt={t("serious_info_alt_1")}
            title={t("serious_info_title_1")}
            description={t("serious_info_description_1")}
          />
          <SeriousInfo
            icon={honestyIcon}
            iconAlt={t("serious_info_alt_2")}
            title={t("serious_info_title_2")}
            description={
              <ul className="list-square list-inside flex flex-col gap-3">
                <li>{t("serious_info_description_2_1")}</li>
                <li>{t("serious_info_description_2_2")}</li>
                <li>{t("serious_info_description_2_3")}</li>
                <li>{t("serious_info_description_2_4")}</li>
              </ul>
            }
          />
        </div>

        <div className="flex flex-wrap gap-16 sm:gap-24 self-start">
          <GlowingTitle>{t("section_title_2")}</GlowingTitle>
          <FancyInfo
            image={carServiceIcon}
            alt={t("fancy_info_alt_1")}
            title={t("fancy_info_title_1")}
            description={t("fancy_info_description_1")}
            col2="rgba(12, 32, 66, 0.71)"
            col1="#2973b9"
            isBox={true}
          />
          <FancyInfo
            image={oilTankIcon}
            alt={t("fancy_info_alt_2")}
            title={t("fancy_info_title_2")}
            description={t("fancy_info_description_2")}
            col2="rgba(15, 14, 71, 0.71)"
            col1="#4444ba"
            isBox={true}
          />
          <FancyInfo
            image={toolsIcon}
            alt={t("fancy_info_alt_3")}
            title={t("fancy_info_title_3")}
            description={t("fancy_info_description_3")}
            col2="rgba(12, 50, 66, 0.71)"
            col1="rgb(68, 194, 169)"
            isBox={true}
          />
        </div>

        <div className="flex flex-wrap gap-16 sm:gap-24 self-start">
          <GlowingTitle>{t("section_title_3")}</GlowingTitle>
          <div className="w-full flex flex-col gap-10">
            <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem] flex gap-6 items-end">
              {t("location_info")}
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.46604608683543!2d18.082092471321893!3d53.18150894161017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470311d440a0005d%3A0x3970c9b600b2014!2sP.P.H.U.%20Pol%20-%20Med%20Sp.%20z%20o.o.!5e1!3m2!1spl!2spl!4v1714225278473!5m2!1spl!2spl"
              height="450"
              className="border-none rounded-xl drop-shadow-homeCard"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-16 sm:gap-16 self-start magicAUnderline">
          <GlowingTitle>{t("section_title_4")}</GlowingTitle>
          <ul className="flex flex-col gap-4 list-square list-inside font-exo [&_b]:font-semibold text-base lg:text-xl 2xl:text-2xl">
            <li>
              <b>{t("info_li_1")}</b>{" "}
              <a
                href="https://maps.app.goo.gl/rKBj2jozLHX2NQ9y5"
                target="_blank"
              >
                ul. Leśna 38, 86-031 Osielsko
              </a>
            </li>
            <li>
              <b>{t("info_li_2")}</b> PL9671167341
            </li>
            <li>
              <b>{t("info_li_3")}</b> 093140846
            </li>
            <li>
              <b>{t("info_li_4")}</b> 0000166787
            </li>
            <li>
              <b>{t("info_li_5")}</b> 000638650
            </li>
            <li>EU-REDcert-553-54240001</li>
            <li>
              <b>{t("info_li_7")}</b> BANK PEKAO SA, 75 1950 0001 2006 2440 5239
              0002
            </li>
            <li>{t("info_li_8")}</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

export default About;
