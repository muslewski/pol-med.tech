import React, { useRef } from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundPrivacy.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import Section from "../../components/Section";
import GlowingTitle from "../../components/GlowingTitle";
import PolicyTitle from "./PolicyTitle";
import PolicyObject from "./PolicyObject";
import PolicyHr from "./PolicyHr";

import iconSetting from "./assets/iconSetting.png";
import iconClient from "./assets/iconClient.png";
import iconTarget from "./assets/iconTarget.png";
import iconAnalysis from "./assets/iconAnalysis.png";
import iconServers from "./assets/iconServers.png";
import iconSocial from "./assets/iconSocial.png";
import iconShuffle from "./assets/iconShuffle.png";

function PrivacyPolicy() {
  return (
    <>
      <header>
        <Background image={background} alt="Background Image of office" />
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />
        <BgBottomVector image={bottomVector} />

        <Hero customClass="translate-y-0">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title="Polityka Prywatności"
            description="Twoja prywatność jest dla nas priorytetem! W naszej Polityce Prywatności znajdziesz szczegóły dotyczące tego, jak zbieramy, przetwarzamy i chronimy Twoje dane osobowe."
            col1="rgba(21, 51, 76, 0.2)"
            col2="rgba(28, 31, 72, 0.7)"
          />
        </Hero>
      </header>

      <Section customClass="toPrint bg-gradient-to-b from-[#040E30] to-[#0a0a46] magicAUnderline">
        <PolicyObject
          title="1. Informacje o Administratorze Danych Osobowych"
          icon={iconSetting}
        >
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i
            ochrony danych osobowych przekazywanych przez użytkowników w związku
            z korzystaniem z serwisu internetowego{" "}
            <a href="https://pol-med.tech" target="_blank">
              https://pol-med.tech
            </a>
            . Administratorem danych osobowych jest:
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <b>Firma:</b> P.P.H.U. "Pol-Med" Sp. z o.o.
            </li>
            <li>
              <b>Adres:</b>
              <a
                href="https://maps.app.goo.gl/rKBj2jozLHX2NQ9y5"
                target="_blank"
              >
                {" "}
                ul. Leśna 38, 86-031 Osielsko
              </a>
            </li>
            <li>
              <b>NIP:</b> PL9671167341
            </li>
            <li>
              <b>REGON:</b> 093140846
            </li>
            <li>
              <b>KRS:</b> 0000166787
            </li>
            <li>
              <b>BDO:</b> 000638650
            </li>
            <li>EU-REDcert-553-54240001</li>
            <li>
              <b>Adres e-mail:</b>{" "}
              <a href="mailto:biuro@pol-med.tech">biuro@pol-med.tech</a>
            </li>
            <li>
              <b>Telefon:</b> <a href="tel:+48 52 5000 260">+48 52 5000 260</a>
            </li>
            <li>Kapitał zakładowy - 50.000 PLN (wpłacony w całości).</li>
          </ul>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject title="2. Dane Osobowe" icon={iconClient}>
          <p>
            Zgromadzenie i przetwarzanie danych osobowych użytkowników jest
            prowadzone zgodnie z obowiązującymi przepisami prawa, w
            szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych (RODO).
          </p>
          <p>
            Nie zbieramy żadnych danych osobowych przekazywanych na stronie
            internetowej{" "}
            <a href="https://pol-med.tech" target="_blank">
              https://pol-med.tech
            </a>{" "}
            bez wyraźnej zgody użytkownika.
          </p>
          <p>
            Nasza strona jest wyposażona w certyfikat SSL, co oznacza, że
            wszystkie przekazywane informacje są szyfrowane i chronione przed
            dostępem osób nieupoważnionych.
          </p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title="3. Cel i Zakres Przetwarzania Danych Osobowych"
          icon={iconTarget}
        >
          Jeśli użytkownik dobrowolnie poda nam swoje dane osobowe (na przykład
          w formularzu kontaktowym lub w celu subskrypcji newslettera), będziemy
          przetwarzać te dane wyłącznie w celu realizacji określonego celu, o
          którym zostanie poinformowany w chwili ich zbierania. Dostarczone nam
          dane osobowe nie będą przekazywane osobom trzecim ani wykorzystywane w
          celach marketingowych bez wyraźnej zgody użytkownika.
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title="4. Analiza Danych i Statystyki"
          icon={iconAnalysis}
        >
          <p>
            Nasza strona może korzystać z narzędzi do analizy ruchu, takich jak
            Google Analytics, w celu zbierania anonimowych informacji na temat
            ruchu na stronie. Te dane są wykorzystywane wyłącznie w celach
            statystycznych i doskonalenia jakości naszego serwisu. Nie pozwalają
            one na identyfikację konkretnych użytkowników.
          </p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject title="5. Utrzymanie Strony" icon={iconServers}>
          <p>
            Strona{" "}
            <a href="https://pol-med.tech" target="_blank">
              https://pol-med.tech
            </a>{" "}
            jest utrzymywana przy użyciu infrastruktury GitHub Pages, co
            zapewnia wysoki poziom bezpieczeństwa i ochrony danych. GitHub
            oferuje zaawansowane monitorowanie oraz system kontroli wersji,
            który ułatwia śledzenie zmian i zapobiega ewentualnym incydentom
            związanym z bezpieczeństwem. Dodatkowo, kod źródłowy strony jest
            jawny i dostępny pod adresem:{" "}
            <a href="https://github.com/muslewski/pol-med.tech" target="_blank">
              https://github.com/muslewski/pol-med.tech
            </a>
            . Publiczny dostęp do kodu umożliwia przejrzystość oraz wspiera
            ciągłe doskonalenie strony.
          </p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject title="6. Prawa Użytkowników" icon={iconSocial}>
          <p>
            Zgodnie z RODO, użytkownicy mają prawo dostępu do swoich danych
            osobowych, ich poprawiania, usuwania lub ograniczania przetwarzania,
            a także prawo do przenoszenia danych oraz wniesienia sprzeciwu wobec
            przetwarzania danych osobowych. Wszelkie pytania i prośby dotyczące
            danych osobowych prosimy kierować na adres e-mail:{" "}
            <a href="mailto:biuro@pol-med.tech">biuro@pol-med.tech</a>.
          </p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title="7. Zmiany w Polityce Prywatności"
          icon={iconShuffle}
        >
          <p>
            Zastrzegamy sobie prawo do zmiany Polityki Prywatności w celu
            dostosowania jej do zmieniających się potrzeb i przepisów prawnych.
            Aktualna wersja Polityki Prywatności zawsze będzie dostępna na
            stronie:{" "}
            <a href="https://pol-med.tech/polityka_prywatnosci" target="_blank">
              https://pol-med.tech/polityka_prywatnosci
            </a>
          </p>
        </PolicyObject>
      </Section>
    </>
  );
}

export default PrivacyPolicy;
