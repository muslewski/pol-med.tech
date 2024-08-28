import React from "react";
import { Link } from "react-router-dom";
import GoodButton from "../../components/GoodButton";

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
      className="flex flex-col max-w-lg 3xl:max-w-[30rem]  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out relative hover:shadow-homeCard [&_.mainImage]:hover:bottom-4 [&_.mainImage]:hover:right-2"
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
          alt={title}
        />
      </Link>
      <div className="flex flex-wrap gap-3 sm:gap-6 w-fit">
        <h3 className="text-xl sm:text-2xl font-exo font-bold leading-normal">
          {title}
        </h3>
        <p className="text-base md:text-lg 3xl:text-xl leading-normal">
          {description}
        </p>
      </div>
      <GoodButton link={linkHref} icon={buttonIcon} />
    </div>
  );
}

export default SectionCard;
