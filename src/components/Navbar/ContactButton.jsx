import React from "react";
import { Link } from "react-router-dom";
import kontaktSvg from "./assets/Kontakt.svg";

function ContactButton({ className }) {
  return (
    <Link
      to="/pol-med.tech/Kontakt"
      className={`animate-jump relative text-white font-bold z-10 mb-5 ml-5 [&_img]:hover:-left-1 [&_img]:hover:-bottom-2 w-fit ${className}`}
    >
      <img
        className="w-full h-full absolute -left-4 xl:-left-5 -bottom-3 xl:-bottom-4 -z-10 transition-all ease-in-out duration-500 pointer-events-none"
        src={kontaktSvg}
        alt=""
      />
      <div
        className="border-[3px] text-lg border-primary-dark py-3 xl:py-4 px-5 xl:px-7 rounded-full z-20 backdrop-blur-sm shadow-contactInner hover:scale-105 duration-500 transition-transform ease-in-out"
        style={{ backgroundColor: "rgb(4, 0, 48, 0.15)" }}
      >
        Skontaktuj się
      </div>
    </Link>
  );
}

export default ContactButton;
