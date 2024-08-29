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

import jobCvIcon from "./assets/job-cv.png";
import metalIcon from "./assets/metal.png";
import moneyBagIcon from "./assets/money-bag.png";
import precisionIcon from "./assets/precision.png";

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
import { useTranslation } from "react-i18next";

function Tools() {
  const { t } = useTranslation("Tools");
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9];

  const tools = [
    t("tools_list.0.title"),
    t("tools_list.1.title"),
    t("tools_list.2.title"),
    t("tools_list.3.title"),
    t("tools_list.4.title"),
    t("tools_list.5.title"),
    t("tools_list.6.title"),
    t("tools_list.7.title"),
    t("tools_list.8.title"),
    t("tools_list.9.title"),
  ];

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

        <Hero customClass="gap-28">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title={t("hero_title")}
            description={t("hero_description")}
            col1="rgba(1, 47, 49, 0.2)"
            col2="rgba(1, 47, 49, 0.7)"
          />

          <ContactButton
            customBackground="bg-[#012F31]"
            className="flex sm:hidden self-end relative right-16"
          />
        </Hero>
      </header>

      <Section customClass="bg-gradient-to-b from-[#012031] to-[#03343d]">
        <div className="self-start flex flex-wrap gap-16">
          <GlowingTitle>{t("section_title_1")}</GlowingTitle>
          <div className="max-w-7xl font-exo font-medium text-xl 2xl:text-[1.5rem] sm:leading-snug">
            {t("section_description_1")}
          </div>
        </div>

        <div className="self-start w-full flex flex-wrap gap-16">
          <GlowingTitle>{t("section_title_2")}</GlowingTitle>

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

            {/* <div>
              <img src="" alt="" />
            </div> */}
          </div>
        </div>

        <div className="self-start flex flex-wrap gap-16 w-full">
          <GlowingTitle>{t("section_title_3")}</GlowingTitle>
          <div className="flex flex-col gap-3 text-lg 2xl:text-xl">
            <h3>{t("section_description_3")}</h3>
            <ul className="max-w-4xl bg-gradient-to-br rounded-md from-[#23474bf7] p-7 w-full font-exo font-medium text-xl 2xl:text-[1.6rem] sm:leading-snug flex flex-col gap-5">
              <SimpleLi icon={jobCvIcon} iconAlt={t("simple_li_alt_1")}>
                {t("simple_li_1")}
              </SimpleLi>
              <SimpleLi icon={metalIcon} iconAlt={t("simple_li_alt_2")}>
                {t("simple_li_2")}
              </SimpleLi>
              <SimpleLi icon={precisionIcon} iconAlt={t("simple_li_alt_3")}>
                {t("simple_li_3")}
              </SimpleLi>
              <SimpleLi icon={moneyBagIcon} iconAlt={t("simple_li_alt_4")}>
                {t("simple_li_4")}
              </SimpleLi>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Tools;
