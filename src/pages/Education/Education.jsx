import React, { useEffect, useState } from "react";

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
import stationsData from "./stationImages.json";
import { useTranslation } from "react-i18next";

function Education() {
  const { t, i18n } = useTranslation("Education");
  const { t: tStation } = useTranslation("EducationStations");

  const [video, setVideo] = useState({
    id: 0,
    videoSrc:
      "https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1",
    title: t("video_object_title_1"),
    description: t("video_object_description_1"),
  });

  // This effect will be triggered when the language changes
  useEffect(() => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      title: t(`video_object_title_${prevVideo.id + 1}`),
      description: t(`video_object_description_${prevVideo.id + 1}`),
    }));
  }, [i18n.language, t]);

  return (
    <>
      <header>
        <Background image={background} alt={t("hero_background_alt")} />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />
        <ForegroundItem image={foreground} alt={t("hero_foreground_alt")} />
        <BgBottomVector image={bottomVector} />

        <Hero customClass="gap-28">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title={t("hero_title")}
            description={t("hero_description")}
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
          <GlowingTitle>{t("section_title_1")}</GlowingTitle>

          <FancyInfo
            image={iconRepairingCar}
            alt={t("fancy_info_alt_1")}
            title={t("fancy_info_title_1")}
            description={t("fancy_info_description_1")}
            col1="#0493B2"
            col2="rgba(87, 252, 255, 0.01)"
          />
          <FancyInfo
            image={iconDiagnosticCar}
            alt={t("fancy_info_alt_2")}
            title={t("fancy_info_title_2")}
            description={t("fancy_info_description_2")}
            col1="#0473B2"
            col2="rgba(87, 164, 255, 0.01)"
          />
          <FancyInfo
            image={iconEnginePart}
            alt={t("fancy_info_alt_3")}
            title={t("fancy_info_title_3")}
            description={t("fancy_info_description_3")}
            col1="#3542b7"
            col2="rgba(87, 94, 255, 0.01)"
          />
          <FancyInfo
            image={iconLesson}
            alt={t("fancy_info_alt_4")}
            title={t("fancy_info_title_4")}
            description={t("fancy_info_description_4")}
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
              iconAlt={t("video_object_alt_1")}
              videoSrc="https://www.youtube.com/embed/oOiXQDaDouw?si=2cIdPL_K6nHYGzsT&enablejsapi=1"
              title={t("video_object_title_1")}
              description={t("video_object_description_1")}
              setVideo={setVideo}
              currentVideoId={video.id}
            />

            <VideoObject
              id={1}
              icon={iconDiagnostic}
              iconAlt={t("video_object_alt_2")}
              videoSrc="https://www.youtube.com/embed/-lltFnhZlT0?si=QcgWmBxbtpyDVSbu&enablejsapi=1"
              title={t("video_object_title_2")}
              description={t("video_object_description_2")}
              setVideo={setVideo}
              currentVideoId={video.id}
            />

            <VideoObject
              id={2}
              icon={iconOscilloscope}
              iconAlt={t("video_object_alt_3")}
              videoSrc="https://www.youtube.com/embed/edlhrt-Ep-E?si=8gJdUgfBUNcTAOiA&enablejsapi=1"
              title={t("video_object_title_3")}
              description={t("video_object_description_3")}
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
                alt={t("special_product_alt")}
              />
            </Link>
            <span className="font-exo font-medium text-xl bg-gradient-to-r from-[#37E7FF] to-[#7A87FF]   text-transparent bg-clip-text">
              {t("special_product_new")}
            </span>
          </div>

          <div className="w-fit flex gap-12 flex-col">
            <FancyInfo
              className="5xl:max-w-full"
              title={t("special_product_title")}
              description={t("special_product_description")}
              col1="#37E7FF"
              col2="#7a87ff2b"
              buttonIcon={iconPrototype}
              buttonIconAlt={t("special_product_button_alt")}
              link="/Edukacja_i_badania/interaktywna_platforma_edukacyjna"
            />
          </div>
        </div>

        {/* 🚙🚙🚙 */}
        <div className="w-full flex flex-wrap  gap-24">
          <GlowingTitle>{t("section_title_2")}</GlowingTitle>

          {stationsData.stations.map((station, index) => (
            <StationObject
              key={station.id}
              id={station.id}
              image={station.images[0]}
              title={tStation(`stations.${index}.title`)}
              description={tStation(`stations.${index}.description`)}
            />
          ))}
        </div>

        <h3>{t("section_last_info")}</h3>
      </Section>
    </>
  );
}

export default Education;
