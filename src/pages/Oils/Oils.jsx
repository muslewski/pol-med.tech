import React from "react";
import "./Oils.css";

import background from "./assets/backgroundOils.jpg";
import foreground from "./assets/foreground.png";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import redcert from "./assets/redcert.png";
import iconHandshake from "./assets/iconHandshake.svg";
import iconTrade from "./assets/iconTrade.svg";
import iconWarehouse from "./assets/iconWarehouse.svg";
import oilsBackground from "./assets/oilsBackground.jpg";
import godlo from "./assets/godlo.png";

import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";
import GlowingTitle from "../../components/GlowingTitle";
import Section from "../../components/Section";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import Hero from "../../components/Hero";
import TextBox from "./TextBox";
import TextBoxLi from "./TextBoxLi";
import { useTranslation } from "react-i18next";

function Oils() {
  const { t } = useTranslation("Oils");
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

        {/* <img className="backgroundOils" src={oilsBackground} alt="" /> */}
        {/* <img className="backgroundOils2" src={oils2Background} alt="" /> */}

        <Hero>
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title={t("hero_title")}
            description={t("hero_description")}
            col1="rgba(12,37,90,0.2)"
            col2="rgba(5,31,58,0.7)"
          />
          <ContactButton className="flex sm:hidden self-end relative right-16" />

          {/* Decyzja */}
          <a
            href="/decyzja.pdf"
            target="_blank"
            className="[&_.makeBigger]:hover:scale-105 self-end"
          >
            <div className="static sm:absolute right-0 bottom-10 w-fit z-20 animate-fade-left animate-delay-300">
              <div className="bg-white absolute right-[80%] top-0 h-full w-36 sm:w-48 flex items-center border-4 animate-delay-450 animate-fade-left rounded-l-full px-6">
                <img
                  className="h-4/5 drop-shadow-redcert"
                  src={godlo}
                  alt={t("starosta_button")}
                />
              </div>
              <div className="makeBigger shadow-homeCard transition-transform text-white font-semibold font-exo relative z-10 text-lg sm:text-2xl border-4 border-secondary-dark/25 border-r-0 bg-[#0F2950] py-5 sm:py-6 rounded-l-full h-full px-12">
                {t("starosta_button")}
              </div>
            </div>
          </a>

          {/* Certyfikat */}
          <a
            href="/certyfikat.pdf"
            target="_blank"
            className="[&_.makeBigger]:hover:scale-105 self-end"
          >
            <div className="relative sm:absolute right-0 w-fit z-20 animate-fade-left">
              <div className="bg-white absolute right-[80%] top-0 h-full w-40 sm:w-48 flex items-center  border-4 animate-delay-150 animate-fade-left  rounded-l-full   px-6">
                <img
                  className=" h-3/4 drop-shadow-redcert"
                  src={redcert}
                  alt={t("redcert_button_alt")}
                />
              </div>
              <div className="makeBigger  shadow-homeCard transition-transform text-white font-semibold font-exo relative z-10 text-lg sm:text-2xl border-4 border-secondary-dark/25 border-r-0 bg-[#0F2950] py-5 sm:py-6  rounded-l-full h-full  px-12">
                {t("redcert_button")}
              </div>
            </div>
          </a>
        </Hero>
      </header>

      {/* 📜📜📜 */}
      {/* bg-gradient-to-b from-[#040E30] to-[#051b33]  */}
      <Section
        customClass="pb-32 md:pb-36 3xl:pb-32 bg-gradient-to-b from-[#040E30] to-[#051b33]"
        customClassInner="w-3/4 xl:w-3/4"
      >
        <div className="flex flex-wrap gap-24 self-start">
          <GlowingTitle>{t("section_title_1")}</GlowingTitle>
          <div className="flex flex-col gap-16 justify-between max-w-2xl self-start">
            <div className="flex justify-between flex-col gap-16 sm:flex-row">
              <TextBox
                text={t("text_box_1")}
                icon={iconHandshake}
                iconAlt={t("text_box_alt_1")}
              />
              <TextBox
                text={t("text_box_2")}
                icon={iconTrade}
                iconAlt={t("text_box_alt_2")}
              />
            </div>
            <TextBox
              text={t("text_box_3")}
              icon={iconWarehouse}
              iconAlt={t("text_box_alt_3")}
            />
          </div>
        </div>
      </Section>

      <img
        className="backgroundOils"
        src={oilsBackground}
        alt={t("section_2_background_alt")}
      />
      {/* 🛢️🛢️🛢️ */}
      <Section customClass="pb-36 pt-36" customClassInner="w-3/4 xl:w-3/4">
        <div className="custom-shape-divider-top-1722892339">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className=" relative self-start flex flex-col gap-24">
          <div className="flex flex-wrap gap-24 self-start">
            <GlowingTitle customClassH2="backdrop-blur-md bg-black/5 drop-shadow-glowingTextSubtle">
              {t("section_title_2")}
            </GlowingTitle>
            <ul className="flex flex-col gap-16">
              <TextBoxLi borderCol="#f7ffff" bgCol="rgba(0, 0, 0, 0.5)">
                {t("text_box_li_1")}
              </TextBoxLi>
              <TextBoxLi borderCol="#f2f9ff" bgCol="rgba(0, 0, 0, 0.4)">
                {t("text_box_li_2")}
              </TextBoxLi>
              <TextBoxLi borderCol="#f3f7fe" bgCol="rgba(0, 0, 0, 0.3)">
                {t("text_box_li_3")}
              </TextBoxLi>
            </ul>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1722892549">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Section>

      {/* ➕➕➕ */}
      {/* bg-gradient-to-b from-[#051527] to-[#193655] */}
      <Section
        customClass="w-full pt-32 pb-64 bg-gradient-to-b from-[#051527] to-[#193655]"
        customClassInner="w-3/4 xl:w-3/4"
      >
        <div className="flex flex-col self-start gap-24 w-full">
          <GlowingTitle>{t("section_title_3")}</GlowingTitle>

          <ul className="flex flex-col gap-16">
            <TextBoxLi borderCol="#caecff">{t("text_box_li_4")}</TextBoxLi>
            <TextBoxLi borderCol="#cde4ff">{t("text_box_li_5")}</TextBoxLi>
            <TextBoxLi borderCol="#c1cefe">{t("text_box_li_6")}</TextBoxLi>
            <TextBoxLi borderCol="#cde4ff">{t("text_box_li_7")}</TextBoxLi>
          </ul>
        </div>
      </Section>

      {/* <img className="backgroundOils2" src={oils2Background} alt="" /> */}
    </>
  );
}

export default Oils;
