import React from "react";
import stationsData from "../stations.json";
import Section from "../../../components/Section";
import GoodButton from "../../../components/GoodButton";
import iconCart from "../../../Assets/cart.webp";
import GlowingTitle from "../../../components/GlowingTitle";
import StationObject from "../StationObject";

import photo1 from "../assets/platform1.jpg";
import photo2 from "../assets/platforma.webp";
import SpecialProductLi from "./SpecialProductLi";

import iconComputer from "../assets/iconComputer.webp";
import iconMechanic from "../assets/iconMechanic.webp";
import iconSettings from "../assets/iconSettings.webp";

function SpecialProduct({ setZoomIn, mainPhoto, setMainPhoto }) {
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
            alt=""
            onClick={() => {
              setMainPhoto(photo1);
              setZoomIn((prev) => !prev);
            }}
          />
          <img
            className="mainPhoto rounded-lg cursor-zoom-in  max-h-[26rem]  hover:scale-105 transition-transform ease-in-out duration-200"
            src={photo2}
            alt=""
            onClick={() => {
              setMainPhoto(photo2);
              setZoomIn((prev) => !prev);
            }}
          />
        </div>

        <div className="flex flex-col gap-24 px-6 sm:px-0">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-exo font-bold">
              Interaktywna platforma edukacyjna
            </h1>
            <hr className="h-1.5 w-full sm:w-3/4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500/25 border-none" />

            <ul className="flex flex-col gap-12">
              <SpecialProductLi icon={iconComputer}>
                Stanowisko dydaktyczne do pracowni mechatroniki samochodowej
                zapewnia interaktywną platformę edukacyjną, umożliwiającą
                uczniom naukę tworzenia mapy pracy silnika. Głównym elementem
                stanowiska jest Uniwersalny Komputer Sterujący, który umożliwia
                kontrolę pracy silnika z zapłonem iskrowym oraz elektronicznym
                wtryskiem paliwa.
              </SpecialProductLi>
              <SpecialProductLi icon={iconSettings}>
                Uczniowie mają możliwość eksperymentowania z różnymi
                ustawieniami i konfiguracjami, a także tworzenia map pracy
                silnika. Poprzez analizę danych wejściowych z czujników, takich
                jak położenie, temperatura czy podciśnienie, oraz odpowiednie
                programowanie sterownika, mogą kreować mapy pracy silnika,
                dostosowując jego działanie do różnych warunków
                eksploatacyjnych. Stanowisko dydaktyczne do pracowni
                mechatroniki samochodowej zapewnia interaktywną platformę
                edukacyjną, umożliwiającą uczniom naukę tworzenia mapy pracy
                silnika. Głównym elementem stanowiska jest Uniwersalny Komputer
                Sterujący, który umożliwia kontrolę pracy silnika z zapłonem
                iskrowym oraz elektronicznym wtryskiem paliwa.
              </SpecialProductLi>
              <SpecialProductLi icon={iconMechanic}>
                Tworzenie map pracy silnika to nie tylko umiejętność
                programowania, ale również głębsze zrozumienie mechanizmów
                działania silnika oraz wpływu różnych parametrów na jego
                efektywność i osiągi. Dzięki praktycznym ćwiczeniom na
                stanowisku dydaktycznym, uczniowie zdobywają niezbędną wiedzę i
                umiejętności w zakresie diagnostyki, naprawy oraz optymalizacji
                pracy silnika, co przygotowuje ich do wykonywania zawodu
                elektromechanika lub mechatronika samochodowego.
              </SpecialProductLi>
            </ul>
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

export default SpecialProduct;
