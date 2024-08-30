import React from "react";
import stationsData from "../stationImages.json";
import Section from "../../../components/Section";
import GoodButton from "../../../components/GoodButton";
import iconCart from "../../../Assets/cart.png";
import GlowingTitle from "../../../components/GlowingTitle";
import StationObject from "../StationObject";

import photo1 from "../assets/platform1.jpg";
import photo2 from "../assets/platforma.png";
import SpecialProductLi from "./SpecialProductLi";

import iconComputer from "../assets/iconComputer.png";
import iconMechanic from "../assets/iconMechanic.png";
import iconSettings from "../assets/iconSettings.png";
import { useTranslation } from "react-i18next";

function SpecialProduct({ setZoomIn, mainPhoto, setMainPhoto }) {
  const { t } = useTranslation("EducationSpecial");
  const { t: tStation } = useTranslation("EducationStations");

  const nextStation = stationsData.stations[0];
  const prevStation = stationsData.stations[1];

  return (
    <Section
      customClass="pt-52 bg-gradient-to-br from-[#030b26] to-[#082752]"
      customClassInner="gap-52"
    >
      <div className="flex gap-24 flex-col w-full">
        <div className=" px-12 sm:px-0 w-full h-fit self-center 5xl:self-start flex flex-wrap justify-center gap-12 sm:gap-24">
          <img
            className="mainPhoto rounded-lg cursor-zoom-in  max-h-[26rem] hover:scale-105 transition-transform ease-in-out duration-200"
            src={photo1}
            alt={t("alt_1")}
            onClick={() => {
              setMainPhoto(photo1);
              setZoomIn((prev) => !prev);
            }}
          />
          <img
            className="mainPhoto rounded-lg cursor-zoom-in  max-h-[26rem]  hover:scale-105 transition-transform ease-in-out duration-200"
            src={photo2}
            alt={t("alt_2")}
            onClick={() => {
              setMainPhoto(photo2);
              setZoomIn((prev) => !prev);
            }}
          />
        </div>

        <div className="flex flex-col gap-24 px-6 sm:px-0">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-exo font-bold">
              {t("title")}
            </h1>
            <hr className="h-1.5 w-full sm:w-3/4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500/25 border-none" />

            <ul className="flex flex-col gap-12">
              <SpecialProductLi
                icon={iconComputer}
                iconAlt={t("description_1_alt")}
              >
                {t("description_1")}
              </SpecialProductLi>
              <SpecialProductLi
                icon={iconSettings}
                iconAlt={t("description_2_alt")}
              >
                {t("description_2")}
              </SpecialProductLi>
              <SpecialProductLi
                icon={iconMechanic}
                iconAlt={t("description_3_alt")}
              >
                {t("description_3")}
              </SpecialProductLi>
            </ul>
          </div>

          <GoodButton
            link="/Kontakt"
            customText={t("good_button_text")}
            icon={iconCart}
            iconAlt={t("good_button_alt")}
            className="-ml-1"
          />
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-start gap-24">
        <GlowingTitle> {t("see_also")} </GlowingTitle>
        <StationObject
          image={prevStation.images[0]}
          id={prevStation.id}
          title={tStation(`stations.${prevStation.id}.title`)}
          description={tStation(`stations.${prevStation.id}.description`)}
        />
        <StationObject
          image={nextStation.images[0]}
          id={nextStation.id}
          title={tStation(`stations.${nextStation.id}.title`)}
          description={tStation(`stations.${nextStation.id}.description`)}
        />
      </div>
    </Section>
  );
}

export default SpecialProduct;
