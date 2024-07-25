import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import stationsData from "../stations.json";
import ContactButton from "../../../components/Navbar/ContactButton";
import Section from "../../../components/Section";
import iconCart from "../../../Assets/cart.webp";
import GoodButton from "../../../components/GoodButton";
import StationObject from "../StationObject";
import GlowingTitle from "../../../components/GlowingTitle";

function EducationProduct() {
  const { id } = useParams();

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
  if (!station) {
    return (
      <div className="bg-red-200 min-h-screen">
        Niestety nie znaleziono produktu, zobacz inne:
      </div>
    );
  }

  const [mainPhoto, setMainPhoto] = useState(station.images[2]);
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

  console.log(sidePhotos);

  return (
    <Section
      customClass="pt-52 bg-gradient-to-br from-[#030b26] to-[#082752]"
      customClassInner="gap-52"
    >
      <div className="flex gap-24">
        <div className="w-96 min-w-96 h-fit">
          <img className="rounded-lg cursor-zoom-in" src={mainPhoto} alt="" />
        </div>

        {sidePhotos.length > 0 && (
          <div className="flex flex-wrap justify-center h-fit w-fit gap-12">
            {sidePhotos.map((image, index) => (
              <img
                className="h-40 w-40 object-cover cursor-pointer rounded-lg"
                draggable="false"
                src={image}
                key={index}
                alt=""
                onClick={() => {
                  setMainPhoto(image);
                  setSidePhotos([
                    ...sidePhotos.slice(0, index),
                    mainPhoto,
                    ...sidePhotos.slice(index + 1),
                  ]);
                }}
              />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-12 max-w-2xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-exo font-bold">{station.title}</h1>
            <p className="text-xl">{station.description}</p>
          </div>

          <GoodButton
            link="/pol-med.tech/Kontakt"
            customText="Zapytaj o produkt"
            icon={iconCart}
            className="-ml-1"
          />
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-start gap-24">
        <GlowingTitle> Zobacz również </GlowingTitle>
        <StationObject image={prevStation.images[0]} {...prevStation} />
        <StationObject image={nextStation.images[0]} {...nextStation} />
      </div>
    </Section>
  );
}

export default EducationProduct;
