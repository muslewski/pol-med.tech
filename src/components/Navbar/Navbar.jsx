import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLanguage, availableLanguages } from "../../utils/i18n";
import i18n from "i18next";

import carServiceIcon from "../../Assets/car-service.png";
import oilTankIcon from "../../Assets/oil-tank.png";
import toolsIcon from "../../Assets/tools.png";
import helloIcon from "../../Assets/hello.png";
import contactIcon from "../../Assets/contact-form.png";
import hamburger from "./assets/hamburger.svg";
import polMedDark from "./assets/polMedDark.png";
import nightSvg from "./assets/night.svg";
import smallArrow from "./assets/smallArrow.svg";
import NavElement from "./NavElement";
import goToTop from "../../utils/goToTop";
import ContactButton from "./ContactButton";
import { languageIcons } from "./languageIcons";

function Navbar() {
  const [language, setLanguage] = useState(
    Object.entries(availableLanguages)
      .filter(([code, name]) => code === getLanguage()) // Filtrowanie języka na podstawie jego kodu
      .map(([code, name]) => ({ code, name }))[0] // Mapowanie wyników do obiektu z kodem i nazwą
  );

  const [freeLanguages, setFreeLanguages] = useState(
    Object.entries(availableLanguages)
      .filter(([code, name]) => code !== getLanguage()) // Filtrowanie języka na podstawie jego kodu
      .map(([code, name]) => ({ code, name })) // Mapowanie wyników do obiektu z kodem i nazwą
  );

  const { t, i18n } = useTranslation("Navbar");

  const navigationRef = useRef();
  const [navigation, setNavigation] = useState(null);

  // Latest status of navigation.
  navigationRef.current = navigation;

  // By default animation is hidden
  const [navigationAnimationClass, setNavigationAnimationClass] =
    useState("hidden 2lg:flex");

  // Logic for animation of navigation (Jump in / out)
  useEffect(() => {
    let timeout;

    if (navigation === true) {
      setNavigationAnimationClass(
        "animate-jump-in animate-duration-[400ms]  2xl:flex"
      );
    } else if (navigation === false) {
      setNavigationAnimationClass(
        "animate-jump-out animate-duration-[400ms] 2lg:animate-jump-in"
      );
      // Make sure that we will not see jump out animation after it is already disabled
      timeout = setTimeout(() => {
        setNavigationAnimationClass("hidden xl:flex");
      }, 1000);
    }

    // Clear timeout
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigation]);

  // Logic of hiding settings in multiple ways
  const useOutsideClick = (callback) => {
    const ref = useRef();
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
      // Click Outside
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      // Escape
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          callback();
        }
      };

      // Scroll
      const handleScroll = () => {
        if (!scrollTimeoutRef.current) {
          callback();
          scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
          }, 3000); // 5 seconds delay
        }
      };

      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
      document
        .querySelector(".wrapper")
        .addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
        document
          .querySelector(".wrapper")
          .removeEventListener("scroll", handleScroll);
      };

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    }, [ref]);

    return ref;
  };

  // Hide navigation if visible
  const handleClickOutside = () => {
    if (navigationRef.current === true) {
      setNavigation(false);
    }
  };

  // Do nothing when clicked on children elements
  const handleNavigationClick = (event) => {
    event.stopPropagation();
  };

  // Ref for hamburger button
  const refHamburger = useOutsideClick(handleClickOutside);

  // Change language
  function changeLanguage(lng) {
    i18n.changeLanguage(lng.code);
    localStorage.setItem("language", lng.code); // Zapisz wybór języka

    setLanguage(
      Object.entries(availableLanguages)
        .filter(([code, name]) => name === lng.name) // Filtrowanie języka na podstawie jego kodu
        .map(([code, name]) => ({ code, name }))[0] // Mapowanie wyników do obiektu z kodem i nazwą
    );

    setFreeLanguages(
      Object.entries(availableLanguages)
        .filter(([code, name]) => name !== lng.name) // Filtrowanie języka na podstawie jego kodu
        .map(([code, name]) => ({ code, name })) // Mapowanie wyników do obiektu z kodem i nazwą
    );
  }

  return (
    <nav className="font-raleway mt-8 fixed pointer-events-none [&_li]:pointer-events-auto  h-full mb-8 w-screen z-10 flex justify-center items-start">
      <ul className="flex justify-around gap-12 2lg:gap-0 2lg:justify-between items-center sm:items-start xl:items-center text-sm 2xl:text-lg 3xl:text-[1.2rem]  text-primary-dark xl:tracking-wide w-full max-w-[90vw] 2lg:max-w-[95vw]  xl:max-w-[90vw] ">
        <li className=" rounded-full hover:scale-105 transition-all ease-in-out duration-500 hover:drop-shadow-homeCard px-4 py-2 sm:p-0  sm:bg-transparent ">
          <Link to="/" onClick={goToTop}>
            <div className="w-32 xl:w-36 2xl:w-48 flex flex-col items-center drop-shadow-logoDark">
              <img className="w-full" src={polMedDark} alt={t("alt_logo")} />
              <h6 className="text-sm font-bold italic font-lobsterTwo text-white">
                {/* #BE1C07 */}
                {t("logo_date")}
              </h6>
            </div>
          </Link>
        </li>
        <li
          className={`
            ${navigationAnimationClass} absolute top-[15%] 2lg:static 2lg:flex`}
        >
          <ul
            className={`flex flex-col 2lg:flex-row  magicAUnderline items-start  2lg:items-center gap-5 2lg:gap-14 3xl:gap-20 font-semibold py-10 2lg:py-3 xl:py-4 px-16 2lg:px-5 xl:px-8 rounded-[4rem] 2lg:rounded-full  border-secondary-dark/15 border-4 backdrop-blur-md shadow-navigation
              bg-gradient-to-br from-[rgba(0,10,48,0.75)] 2lg:from-[rgba(4,0,48,0.35)] to-[rgba(21,24,53,0.7)] 2lg:to-[rgba(9,42,95,0.5)]`}
          >
            <NavElement>
              <Link
                to="Edukacja_i_badania"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={carServiceIcon} className="h-7 2lg:hidden" alt="" />
                {t("education_and_research")}
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/Oleje_UCO"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={oilTankIcon} className="h-7 2lg:hidden" alt="" />
                {t("oils_uco")}
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/Narzedzia"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={toolsIcon} className="h-7 2lg:hidden" alt="" />
                {t("tools")}
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/O_nas"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={helloIcon} className="h-7 2lg:hidden" alt="" />
                {t("about_us")}
              </Link>
            </NavElement>
            <NavElement className="sm:hidden">
              <Link
                to="/Kontakt"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={contactIcon} className="h-7 2lg:hidden" alt="" />
                {t("contact_form")}
              </Link>
            </NavElement>
            <NavElement className="">
              <button
                className="h-fit flex items-center gap-3 py-3 2lg:py-0"
                onClick={(event) => {
                  handleNavigationClick(event);
                }}
              >
                <img
                  className="h-6"
                  src={languageIcons[language.code]}
                  alt=""
                />
                <span className="2lg:hidden 5xl:flex">{language.name}</span>
                <img className="h-2" src={smallArrow} alt="" />
              </button>
              <div className="absolute bg-black mt-4">
                {freeLanguages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng)}
                    className="w-48 text-left px-6 py-2 hover:bg-secondary-dark/25 flex items-center gap-3"
                  >
                    <img className="h-6" src={languageIcons[lng.code]} alt="" />
                    {lng.name}
                  </button>
                ))}
              </div>
            </NavElement>
            {/* <NavElement className="">
              <button
                className="h-fit flex items-center gap-3 py-3 2lg:py-0"
                onClick={handleNavigationClick}
              >
                <img className="h-6" src={nightSvg} alt="" />
                <span className="flex 2lg:hidden 5xl:flex">Ciemny</span>
                <img className="h-2" src={smallArrow} alt="" />
              </button>
            </NavElement> */}
          </ul>
        </li>
        <li className="flex items-center gap-7 justify-center">
          <div
            onClick={() => setNavigation((prev) => !prev)}
            className="flex justify-center 2lg:hidden drop-shadow-logoDark bg-secondary-dark/5 px-3 rounded-full  hover:scale-105 duration-500 cursor-pointer transition-transform ease-in-out"
            ref={refHamburger}
          >
            <img className="w-16 " src={hamburger} alt={t("alt_menu_button")} />
          </div>

          <ContactButton className="hidden sm:flex " />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
