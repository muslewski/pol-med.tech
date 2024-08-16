import React, { useEffect, useState } from "react";
import arrow from "./assets/footerArrow.svg";
import phone from "./assets/footerPhone.svg";
import link from "./assets/footerLink.svg";
import top from "./assets/footerTop.svg";
import toTopArrow from "./assets/footerTopArrow.svg";
import FooterElement from "./FooterElement";
import { Link } from "react-router-dom";
import goToTop from "../../utils/goToTop";

function Footer() {
  return (
    <footer className="flex text-primary-dark tracking-wide justify-center relative z-50  bg-secondary-dark">
      <img
        src={top}
        alt=""
        className="absolute bottom-[99%] w-full min-h-16 object-cover object-right"
      />
      <img
        src={toTopArrow}
        alt=""
        className="absolute bottom-[97%] md:bottom-[110%] lg:bottom-[120%] 2xl:bottom-[130%] w-12 sm:w-16 right-[12%] drop-shadow-navigationAccent hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
        onClick={() => {
          goToTop();
        }}
      />

      <div
        className={`flex w-7/12 sm:w-9/12  flex-wrap  pb-20 pt-20 h-full justify-start sm:justify-evenly gap-24 magicAUnderline `}
      >
        {" "}
        <FooterElement
          title="Pol-Med"
          p1={
            <p>
              ul.{" "}
              <a
                href="https://maps.app.goo.gl/t8s2ppjCwsCvdeTM7"
                target="_blank"
              >
                Leśna 38
              </a>
            </p>
          }
          p2={<p>86-031 Osielsko</p>}
          p3={<p>Polska 🇵🇱</p>}
          icon={arrow}
        />
        <FooterElement
          title="Kontakt"
          p1={
            <p>
              tel. <a href="tel:+48 525 000 260">+48 525 000 260</a>
            </p>
          }
          p2={
            <p>
              tel. <a href="tel:+48 601 78 75 77">+48 601 78 75 77</a>
            </p>
          }
          p3={
            <p>
              email: <a href="mailto:biuro@pol-med.tech">biuro@pol-med.tech</a>
            </p>
          }
          icon={phone}
        />
        <FooterElement
          title="Linki"
          p1={
            <p>
              <Link to="/Kontakt">Formularz kontaktowy</Link>
            </p>
          }
          p2={
            <p>
              <Link to="/Polityka_prywatnosci">Polityka prywatności</Link>
            </p>
          }
          p3={
            <p>
              <Link to="/Prawa_autorskie">Prawa autorskie</Link>
            </p>
          }
          icon={link}
        />
      </div>
    </footer>
  );
}

export default Footer;
