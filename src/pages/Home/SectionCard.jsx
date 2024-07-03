import React from "react";
import { Link } from "react-router-dom";
import buttonPattern from "./assets/buttonPattern.svg";

function SectionCard({
  image,
  buttonIcon,
  title,
  description,
  gradient,
  shadow,
  linkHref,
}) {
  return (
    <div
      className="flex flex-col max-w-lg  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out relative hover:shadow-homeCard [&_.mainImage]:hover:bottom-4 [&_.mainImage]:hover:right-2"
      style={{
        background: `linear-gradient(-60deg, ${gradient}, transparent 60%)`,
      }}
    >
      <Link
        to={linkHref}
        className="w-4/5 self-center hover:drop-shadow-homeCard transition-all duration-500 ease-in-out"
      >
        <img
          className="mainImage object-cover rounded-3xl transition-all duration-500 ease-in-out relative bottom-0 right-0"
          style={{ filter: `drop-shadow(0 6px 6px ${shadow})` }}
          src={image}
          alt=""
        />
      </Link>
      <div className="flex flex-wrap gap-6 w-fit ">
        <h3 className="text-3xl font-exo font-bold leading-normal">{title}</h3>
        <p className="text-xl leading-normal">{description}</p>
      </div>
      <Link
        to={linkHref}
        className="relative z-10 [&_img]:hover:-left-1 [&_img]:hover:-bottom-3 w-fit"
      >
        <img
          className="w-full h-full absolute -left-5 -bottom-4 transition-all ease-in-out duration-500 pointer-events-none"
          src={buttonPattern}
          alt=""
        />
        <div className="relative z-10 text-xl border-[3px] backdrop-blur-lg font-semibold border-primary-dark py-[12pt] px-[20pt] rounded-full w-fit flex items-center gap-6">
          Przejdź dalej
          <img className="h-11" src={buttonIcon} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default SectionCard;
