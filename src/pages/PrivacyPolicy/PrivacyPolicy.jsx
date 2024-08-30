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
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation("PrivacyPolicy");
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

        <Hero customClass="translate-y-0">
          <HeroCard
            boxCustom="relative sm:bottom-0"
            title={t("hero_title")}
            description={t("hero_description")}
            col1="rgba(21, 51, 76, 0.2)"
            col2="rgba(28, 31, 72, 0.7)"
          />
        </Hero>
      </header>

      <Section customClass="toPrint bg-gradient-to-b from-[#040E30] to-[#0a0a46] magicAUnderline">
        <PolicyObject
          title={t("section_1_title")}
          icon={iconSetting}
          iconAlt={t("section_1_icon_alt")}
        >
          <p
            dangerouslySetInnerHTML={{ __html: t("section_1_description_p") }}
          ></p>
          <ul className="flex flex-col gap-3">
            <li>
              <b>{t("section_1_description_company")}</b> P.P.H.U. "Pol-Med" Sp.
              z o.o.
            </li>
            <li>
              <b>{t("section_1_description_address")}</b>
              <a
                href="https://maps.app.goo.gl/rKBj2jozLHX2NQ9y5"
                target="_blank"
              >
                {" "}
                ul. Leśna 38, 86-031 Osielsko
              </a>
            </li>
            <li>
              <b>{t("section_1_description_NIP")}</b> PL9671167341
            </li>
            <li>
              <b>{t("section_1_description_REGON")}</b> 093140846
            </li>
            <li>
              <b>{t("section_1_description_KRS")}</b> 0000166787
            </li>
            <li>
              <b>{t("section_1_description_BDO")}</b> 000638650
            </li>
            <li>EU-REDcert-553-54240001</li>
            <li>
              <b>{t("section_1_description_email")}</b>{" "}
              <a href="mailto:biuro@pol-med.tech">biuro@pol-med.tech</a>
            </li>
            <li>
              <b>{t("section_1_description_phone")}</b>{" "}
              <a href="tel:+48 52 5000 260">+48 52 5000 260</a>
            </li>
            <li>{t("section_1_description_capital")}</li>
          </ul>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_2_title")}
          icon={iconClient}
          iconAlt={t("section_2_icon_alt")}
        >
          <p>{t("section_2_description_p_1")}</p>
          <p
            dangerouslySetInnerHTML={{ __html: t("section_2_description_p_2") }}
          ></p>
          <p>{t("section_2_description_p_3")}</p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_3_title")}
          icon={iconTarget}
          iconAlt={t("section_3_icon_alt")}
        >
          {t("section_3_description_p_1")}
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_4_title")}
          icon={iconAnalysis}
          iconAlt={t("section_4_icon_alt")}
        >
          <p>{t("section_4_description_p_1")}</p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_5_title")}
          icon={iconServers}
          iconAlt={t("section_5_icon_alt")}
        >
          <p
            dangerouslySetInnerHTML={{ __html: t("section_5_description_p_1") }}
          ></p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_6_title")}
          icon={iconSocial}
          iconAlt={t("section_6_icon_alt")}
        >
          <p
            dangerouslySetInnerHTML={{ __html: t("section_6_description_p_1") }}
          ></p>
        </PolicyObject>

        <PolicyHr />

        <PolicyObject
          title={t("section_7_title")}
          icon={iconShuffle}
          iconAlt={t("section_7_icon_alt")}
        >
          <p
            dangerouslySetInnerHTML={{ __html: t("section_7_description_p_1") }}
          ></p>
        </PolicyObject>
      </Section>
    </>
  );
}

export default PrivacyPolicy;
