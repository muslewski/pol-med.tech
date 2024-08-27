import React, { useEffect, useState } from "react";
import arrow from "./assets/footerArrow.svg";
import phone from "./assets/footerPhone.svg";
import link from "./assets/footerLink.svg";
import topHome from "./assets/footerTop.svg";
import topEducation from "./assets/footerTop1.svg";
import topOils from "./assets/footerTop2.svg";
import topTools from "./assets/footerTop3.svg";
import toTopArrow from "./assets/footerTopArrow.svg";
import FooterElement from "./FooterElement";
import { Link } from "react-router-dom";
import goToTop from "../../utils/goToTop";
import iconWhatsApp from "../../Assets/whatsapp.png";

function Footer({ bgColor, setBgColor }) {
  // console log current page path
  const [footerEmail, setFooterEmail] = useState("biuro@pol-med.tech");
  const [path, setPath] = useState(window.location.pathname);
  const [footerPhone, setFooterPhone] = useState(null);
  const [top, setTop] = useState(topHome);

  useEffect(() => {
    if (path.includes("/Edukacja_i_badania")) {
      setTop(topEducation);
      setBgColor("#050f3a");
      setFooterEmail("edukacja@pol-med.tech");
    } else if (path === "/Oleje_UCO") {
      setTop(topOils);
      setBgColor("#020f36");
      setFooterEmail("oleje@pol-med.tech");
      setFooterPhone(
        <div>
          Oleje UCO: <a href="tel:+48 537 144 288">+48 537 144 288</a>
          <span className="inline-flex items-center gap-2 text-base bg-green-700/55 p-1.5 mx-4 rounded-bl-md rounded-tr-md rounded-tl-2xl rounded-br-2xl">
            (<img src={iconWhatsApp} className="w-6" alt="" /> WhatsApp )
          </span>
        </div>
      );
    } else if (path === "/Narzedzia") {
      setTop(topTools);
      setBgColor("#011a32");
      setFooterEmail("narzedzia@pol-med.tech");
    } else {
      setFooterEmail("biuro@pol-med.tech");
      setBgColor("#040030");
    }
  }, [path]);

  return (
    <footer
      className="flex text-primary-dark tracking-wide justify-center relative z-50  bg-secondary-dark"
      style={{ backgroundColor: bgColor }}
    >
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
                href="https://maps.app.goo.gl/rKBj2jozLHX2NQ9y5"
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
          p0={footerPhone}
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
              email: <a href={`mailto:${footerEmail}`}>{footerEmail}</a>
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
