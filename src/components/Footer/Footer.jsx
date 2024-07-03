import React from "react";
import arrow from "./assets/footerArrow.svg";
import phone from "./assets/footerPhone.svg";
import link from "./assets/footerLink.svg";
import top from "./assets/footerTop.svg";
import FooterElement from "./FooterElement";

function Footer() {
  return (
    <footer className="flex text-primary-dark tracking-wide justify-center relative">
      <img src={top} alt="" className="absolute bottom-full w-full " />

      <div className="flex w-9/12  flex-wrap  pb-20 pt-20 h-full justify-between">
        {" "}
        <FooterElement
          title="Pol-Med"
          p1={<p>ul. Leśna 38</p>}
          p2={<p>86-031 Osielsko</p>}
          p3={<p>Polska 🇵🇱</p>}
          icon={arrow}
        />
        <FooterElement
          title="Kontakt"
          p1={<p>tel. +48 525 000 260</p>}
          p2={<p>tel. +48 601 78 75 77</p>}
          p3={<p>email: biuro@pol-med.tech</p>}
          icon={phone}
        />
        <FooterElement
          title="Linki"
          p1={<p>Formularz kontaktowy</p>}
          p2={<p>Polityka prywatności</p>}
          p3={<p>Prawa autorskie</p>}
          icon={link}
        />
      </div>
    </footer>
  );
}

export default Footer;
