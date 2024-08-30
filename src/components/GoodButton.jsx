import React from "react";
import buttonPattern from "../Assets/buttonPattern.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function GoodButton({ className, link, icon, iconAlt = "", customText = "" }) {
  const { t } = useTranslation("Others");
  return (
    <Link
      to={link}
      className={`relative z-10 [&_img]:hover:-left-1 [&_img]:hover:-bottom-3 w-fit hover:scale-105 duration-500 transition-transform ease-in-out ${className}`}
    >
      <img
        className="w-full h-full absolute -left-5 -bottom-4 transition-all ease-in-out duration-500 pointer-events-none"
        src={buttonPattern}
        alt=""
      />
      <div className="text-center tracking-wide relative z-10 text-base sm:text-lg border-[3px] backdrop-blur-lg font-semibold border-primary-dark py-3 sm:py-4 px-6 rounded-full w-fit flex items-center gap-4 sm:gap-6">
        {customText.length < 1 ? t("good_button_default_text") : customText}
        {icon && <img className="h-9" src={icon} alt={iconAlt} />}
      </div>
    </Link>
  );
}

export default GoodButton;
