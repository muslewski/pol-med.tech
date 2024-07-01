import React from "react";
import { Link } from "react-router-dom";

import polMedDark from "./assets/polMedDark.png";
import kontaktSvg from "./assets/Kontakt.svg";
import nightSvg from "./assets/night.svg";
import polandSvg from "./assets/Poland.svg";
import smallArrow from "./assets/smallArrow.svg";

function Navbar() {
  return (
    <nav className="font-raleway mt-8 fixed w-screen z-10">
      <ul className="flex justify-around items-center text-lg  text-primary-dark">
        <li>
          <Link to="/polmed-router/">
            <div className="w-48 flex flex-col items-center drop-shadow-logoDark">
              <img className="w-full" src={polMedDark} alt="" />
              <h6 className="text-sm font-bold italic font-lobsterTwo text-[#BE1C07]">
                Od 2003
              </h6>
            </div>
          </Link>
        </li>
        <li>
          <ul className="flex items-center gap-[40pt] font-semibold py-[10pt] px-[25pt] rounded-full bg-secondary-dark/35 border-secondary-dark/15 border-4 backdrop-blur-md shadow-navigationBlack">
            <li className="drop-shadow-navigationAccent">
              <Link to="/polmed-router/Edukacja_i_badania">
                Edukacja i badania
              </Link>
            </li>
            <li className="drop-shadow-navigationAccent">
              <Link to="/polmed-router/Oleje_UCO">Oleje UCO</Link>
            </li>
            <li className="drop-shadow-navigationAccent">
              <Link to="/polmed-router/Narzedzia">Narzędzia</Link>
            </li>
            <li className="drop-shadow-navigationAccent">
              <Link to="/polmed-router/O_nas">O nas</Link>
            </li>
            <li className="drop-shadow-navigationAccent">
              <button className="h-9 flex items-center gap-3">
                <img className="h-3/4" src={polandSvg} alt="" />
                <img className="h-1/4" src={smallArrow} alt="" />
              </button>
            </li>
            <li className="drop-shadow-navigationAccent">
              <button className="h-9 flex items-center gap-3">
                <img className="h-3/4" src={nightSvg} alt="" />
                <img className="h-1/4" src={smallArrow} alt="" />
              </button>
            </li>
          </ul>
        </li>
        <li className="relative font-bold z-10 mb-5 ml-5 [&_img]:hover:-left-1 [&_img]:hover:-bottom-2">
          <Link to="/polmed-router/Kontakt">
            <img
              className="w-full h-full absolute -left-5 -bottom-4 -z-10 transition-all ease-in-out duration-300 pointer-events-none"
              src={kontaktSvg}
              alt=""
            />
            <div className="bg-secondary-dark/15 border-[3px] border-primary-dark py-[12pt] px-[20pt] rounded-full z-20 backdrop-blur-sm shadow-contactInner">
              Skontaktuj się
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
