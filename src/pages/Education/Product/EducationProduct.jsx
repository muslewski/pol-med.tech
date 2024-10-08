import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import stationsData from "../stationImages.json";
import ContactButton from "../../../components/Navbar/ContactButton";
import Section from "../../../components/Section";
import iconCart from "../../../Assets/cart.png";
import GoodButton from "../../../components/GoodButton";
import StationObject from "../StationObject";
import GlowingTitle from "../../../components/GlowingTitle";
import { useTranslation } from "react-i18next";

function EducationProduct({ setZoomIn, mainPhoto, setMainPhoto }) {
  const { t, ready: tOthersReady } = useTranslation("Others");
  const { t: tStation, ready: tReady } = useTranslation("EducationStations");
  const { t: tPageTitles, ready: tTitlesReady } = useTranslation("PageTitles");
  const { t: tPageDescriptions } = useTranslation("PageDescriptions");
  const { id } = useParams();

  const [title, setTitle] = useState("Pol-Med");
  const [description, setDescription] = useState("");
  const stationsLength = stationsData.stations.length;

  const nextStation =
    stationsData.stations[
      parseInt(id) + 1 < stationsLength ? parseInt(id) + 1 : 0
    ];
  const prevStation =
    stationsData.stations[
      parseInt(id) - 1 < 0 ? stationsLength - 1 : parseInt(id) - 1
    ];

  const [station, setStation] = useState(stationsData.stations[id]);

  useEffect(() => {
    if (tOthersReady && tReady && tTitlesReady) {
      if (station) {
        setTitle(tStation(`stations.${id}.title`) + " | " + "Pol-Med");
        setDescription(tStation(`stations.${id}.description`));
      } else {
        setTitle(tPageTitles("education_not_found_page_title"));
        setDescription(
          tPageDescriptions("education_not_found_page_description")
        );
      }
    }
  }, [id, station, tStation, tPageTitles, tOthersReady, tReady, tTitlesReady]);

  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }, [title, description]);

  if (!station) {
    return (
      <Section
        customClass="pt-52 bg-gradient-to-br from-[#030b26] to-[#082752]"
        customClassInner="gap-52"
      >
        <div className="flex flex-wrap w-full justify-start gap-24">
          <GlowingTitle>{t("education_product_not_found")}</GlowingTitle>

          <StationObject
            image={stationsData.stations[0].images[0]}
            id={stationsData.stations[0].id}
            title={tStation(`stations.${0}.title`)}
            description={tStation(`stations.${0}.description`)}
          />
          <StationObject
            image={stationsData.stations[1].images[0]}
            id={stationsData.stations[1].id}
            title={tStation(`stations.${1}.title`)}
            description={tStation(`stations.${1}.description`)}
          />
        </div>
      </Section>
    );
  }

  const [sidePhotos, setSidePhotos] = useState(station.images.slice(3));

  //use effect when id changes
  useEffect(() => {
    const newStation = stationsData.stations[id];
    if (newStation) {
      setStation(newStation);
      setMainPhoto(newStation.images[2]);
      setSidePhotos(newStation.images.slice(3));
    }
  }, [id]);

  return (
    <>
      <Section
        customClass="pt-52 bg-gradient-to-br from-[#030b26] to-[#082752]"
        customClassInner="gap-52"
      >
        <div className="flex gap-24 flex-col 5xl:flex-row">
          <div className=" w-96 min-w-96 px-12 sm:px-0 h-fit self-center 5xl:self-start flex justify-center">
            <img
              className="mainPhoto rounded-lg cursor-zoom-in  hover:scale-105 transition-transform max-h-[26rem]"
              src={mainPhoto}
              alt={t("education_product_main_image_alt")}
              onClick={() => setZoomIn((prev) => !prev)}
            />
          </div>

          {sidePhotos.length > 0 && (
            <div className="flex flex-wrap justify-center h-fit w-fit min-w-40 gap-12 px-6 sm:px-0">
              {sidePhotos.map((image, index) => (
                <div
                  className="relative z-10 [&>div]:hover:top-1 [&>div]:hover:-left-1"
                  key={index}
                >
                  <img
                    className="h-28 sm:h-40 w-28 sm:w-40 object-cover cursor-pointer rounded-lg"
                    draggable="false"
                    src={image}
                    alt={`${index + 1}. ${t(
                      "education_product_side_image_alt"
                    )}`}
                    onClick={() => {
                      setMainPhoto(image);
                      setSidePhotos([
                        ...sidePhotos.slice(0, index),
                        mainPhoto,
                        ...sidePhotos.slice(index + 1),
                      ]);
                    }}
                  />
                  <div className="imgBackground pointer-events-none transition-all"></div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-12 max-w-2xl px-6 sm:px-0">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-exo font-bold">
                {tStation(`stations.${id}.title`)}
              </h1>
              <p className="text-lg sm:text-xl">
                {tStation(`stations.${id}.description`)}
              </p>
            </div>

            <GoodButton
              link="/Kontakt"
              customText={t("education_product_button")}
              icon={iconCart}
              iconAlt={t("education_product_button_alt")}
              className="-ml-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-start gap-24">
          <GlowingTitle> Zobacz również </GlowingTitle>
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
    </>
  );
}

export default EducationProduct;
