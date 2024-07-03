import React from "react";
import { Link, useLocation } from "react-router-dom";

import polMedDark from "./assets/polMedDark.png";
import kontaktSvg from "./assets/Kontakt.svg";
import nightSvg from "./assets/night.svg";
import polandSvg from "./assets/Poland.svg";
import smallArrow from "./assets/smallArrow.svg";
import NavElement from "./NavElement";

const routesConfig = [
  {
    path: "/pol-med.tech/Edukacja_i_badania",
    color35: "rgba(4, 14, 48, 0.35)",
    color15: "rgba(4, 14, 48, 0.15)",
  },
  {
    path: "/pol-med.tech/Oleje_UCO",
    color35: "rgba(4, 14, 48, 0.35)",
    color15: "rgba(4, 14, 48, 0.15)",
  },
  {
    path: "/pol-med.tech/Narzedzia",
    color35: "rgba(4, 14, 48, 0.35)",
    color15: "rgba(4, 14, 48, 0.15)",
  },
  {
    path: "/pol-med.tech/O_nas",
    color35: "rgba(4, 14, 48, 0.35)",
    color15: "rgba(4, 14, 48, 0.15)",
  },
  {
    path: "/pol-med.tech/Kontakt",
    color35: "rgba(4, 14, 48, 0.35)",
    color15: "rgba(4, 14, 48, 0.15)",
  },
];

function Navbar() {
  function goToTop() {
    document.querySelector(".wrapper").scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const location = useLocation();
  const currentRoute = routesConfig.find(
    (route) => route.path === location.pathname
  );

  const bg35SecondaryClass = currentRoute
    ? currentRoute.color35
    : "rgb(4, 0, 48, 0.35)";

  const bg15SecondaryClass = currentRoute
    ? currentRoute.color15
    : "rgb(4, 0, 48, 0.15)";

  return (
    <nav className="font-raleway mt-8 fixed w-screen z-10 flex justify-center">
      <ul className="flex justify-between items-center text-[1.19rem]  text-primary-dark tracking-wide w-full  max-w-[90vw] ">
        <li className=" rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 hover:drop-shadow-homeCard">
          <Link to="/pol-med.tech/" onClick={goToTop}>
            <div className="w-48 flex flex-col items-center drop-shadow-logoDark">
              <img className="w-full" src={polMedDark} alt="" />
              <h6 className="text-sm font-bold italic font-lobsterTwo text-[#BE1C07]">
                Od 2003
              </h6>
            </div>
          </Link>
        </li>
        <li>
          <ul
            className={`flex  items-center gap-[60pt] font-semibold py-[10pt] px-[25pt] rounded-full  border-secondary-dark/15 border-4 backdrop-blur-md shadow-navigation`}
            style={{
              backgroundColor: bg35SecondaryClass,
              borderColor: bg15SecondaryClass,
            }}
          >
            <NavElement>
              <Link to="/pol-med.tech/Edukacja_i_badania">
                Edukacja i badania
              </Link>
            </NavElement>
            <NavElement>
              <Link to="/pol-med.tech/Oleje_UCO">Oleje UCO</Link>
            </NavElement>
            <NavElement>
              <Link to="/pol-med.tech/Narzedzia">Narzędzia</Link>
            </NavElement>
            <NavElement>
              <Link to="/pol-med.tech/O_nas">O nas</Link>
            </NavElement>
            <NavElement>
              <button className="h-9 flex items-center gap-3">
                <img className="h-3/4" src={polandSvg} alt="" />
                <img className="h-1/4" src={smallArrow} alt="" />
              </button>
            </NavElement>
            <NavElement>
              <button className="h-9 flex items-center gap-3">
                <img className="h-3/4" src={nightSvg} alt="" />
                <img className="h-1/4" src={smallArrow} alt="" />
              </button>
            </NavElement>
          </ul>
        </li>
        <li className="relative font-bold z-10 mb-5 ml-5 [&_img]:hover:-left-1 [&_img]:hover:-bottom-2">
          <Link to="/pol-med.tech/Kontakt">
            <img
              className="w-full h-full absolute -left-5 -bottom-4 -z-10 transition-all ease-in-out duration-500 pointer-events-none"
              src={kontaktSvg}
              alt=""
            />
            <div
              className="border-[3px] border-primary-dark py-[12pt] px-[20pt] rounded-full z-20 backdrop-blur-sm shadow-contactInner hover:scale-105 duration-500 transition-transform ease-in-out"
              style={{ backgroundColor: bg15SecondaryClass }}
            >
              Skontaktuj się
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
