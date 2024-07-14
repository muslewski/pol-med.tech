import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import carServiceIcon from "../../Assets/car-service.webp";
import oilTankIcon from "../../Assets/oil-tank.webp";
import toolsIcon from "../../Assets/tools.webp";
import helloIcon from "../../Assets/hello.webp";
import hamburger from "./assets/hamburger.svg";
import polMedDark from "./assets/polMedDark.png";
import nightSvg from "./assets/night.svg";
import polandSvg from "./assets/Poland.svg";
import smallArrow from "./assets/smallArrow.svg";
import NavElement from "./NavElement";
import goToTop from "../../utils/goToTop";
import ContactButton from "./ContactButton";

function Navbar() {
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

  return (
    <nav className="font-raleway mt-8 fixed pointer-events-none [&_li]:pointer-events-auto  h-full mb-8 w-screen z-10 flex justify-center items-start">
      <ul className="flex justify-around gap-12 2lg:gap-0 2lg:justify-between items-center sm:items-start xl:items-center text-sm 2xl:text-lg 3xl:text-[1.2rem]  text-primary-dark xl:tracking-wide w-full max-w-[90vw] 2lg:max-w-[95vw]  xl:max-w-[90vw] ">
        <li className=" rounded-full hover:scale-105 transition-all ease-in-out duration-500 hover:drop-shadow-homeCard px-4 py-2 sm:p-0  sm:bg-transparent ">
          <Link to="/pol-med.tech/" onClick={goToTop}>
            <div className="w-32 xl:w-36 2xl:w-48 flex flex-col items-center drop-shadow-logoDark">
              <img className="w-full" src={polMedDark} alt="" />
              <h6 className="text-sm font-bold italic font-lobsterTwo text-[#BE1C07]">
                Od 2003
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
                to="/pol-med.tech/Edukacja_i_badania"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={carServiceIcon} className="h-7 2lg:hidden" alt="" />
                Edukacja i badania
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/pol-med.tech/Oleje_UCO"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={oilTankIcon} className="h-7 2lg:hidden" alt="" />
                Oleje UCO
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/pol-med.tech/Narzedzia"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={toolsIcon} className="h-7 2lg:hidden" alt="" />
                Narzędzia
              </Link>
            </NavElement>
            <NavElement>
              <Link
                to="/pol-med.tech/O_nas"
                className="flex items-center gap-3 py-3 2lg:py-0"
                onClick={goToTop}
              >
                <img src={helloIcon} className="h-7 2lg:hidden" alt="" />O nas
              </Link>
            </NavElement>
            <NavElement className="">
              <button
                className="h-fit flex items-center gap-3 py-3 2lg:py-0"
                onClick={handleNavigationClick}
              >
                <img className="h-6" src={polandSvg} alt="" />
                <span className="2lg:hidden 5xl:flex">Polski</span>
                <img className="h-2" src={smallArrow} alt="" />
              </button>
            </NavElement>
            <NavElement className="">
              <button
                className="h-fit flex items-center gap-3 py-3 2lg:py-0"
                onClick={handleNavigationClick}
              >
                <img className="h-6" src={nightSvg} alt="" />
                <span className="flex 2lg:hidden 5xl:flex">Ciemny</span>
                <img className="h-2" src={smallArrow} alt="" />
              </button>
            </NavElement>
          </ul>
        </li>
        <li className="flex items-center gap-7 justify-center">
          <div
            onClick={() => setNavigation((prev) => !prev)}
            className="flex justify-center 2lg:hidden drop-shadow-logoDark bg-secondary-dark/5 px-3 rounded-full  hover:scale-105 duration-500 cursor-pointer transition-transform ease-in-out"
            ref={refHamburger}
          >
            <img className="w-16 " src={hamburger} alt="" />
          </div>

          <ContactButton className="hidden sm:flex " />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
