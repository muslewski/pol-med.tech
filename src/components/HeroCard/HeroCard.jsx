import React from "react";
import { useLocation } from "react-router-dom";

const routesConfig = [
  {
    path: "/pol-med.tech/Edukacja_i_badania",
    color60: "rgba(12, 37, 90, 0.7)",
    color20: "rgba(12, 37, 90, 0.2)",
  },
  {
    path: "/pol-med.tech/Oleje_UCO",
    color60: "rgba(5, 31, 58, 0.7)",
    color20: "rgba(5, 31, 58, 0.2)",
  },
  {
    path: "/pol-med.tech/Narzedzia",
    color60: "rgba(4, 14, 48, 0.7)",
    color20: "rgba(4, 14, 48, 0.2)",
  },
  {
    path: "/pol-med.tech/O_nas",
    color60: "rgba(4, 14, 48, 0.7)",
    color20: "rgba(4, 14, 48, 0.2)",
  },
  {
    path: "/pol-med.tech/Kontakt",
    color60: "rgba(4, 14, 48, 0.7)",
    color20: "rgba(4, 14, 48, 0.2)",
  },
];

function HeroCard({
  boxCustom = "",
  titleCustom = "",
  description,
  title,
  children,
}) {
  const location = useLocation();
  const currentRoute = routesConfig.find(
    (route) => route.path === location.pathname
  );

  const bg60SecondaryClass = currentRoute
    ? currentRoute.color60
    : "rgba(26, 21, 76, 0.9)";

  const bg20SecondaryClass = currentRoute
    ? currentRoute.color20
    : "rgba(26, 21, 76, 0.2)";

  return (
    <div
      className={`text-primary-dark flex flex-col gap-6 2xl:gap-8 3xl:gap-10 max-w-[95%] md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl shadow-contactInner drop-shadow-homeCard  items-start bbackdrop-blur- pl-8 sm:pl-16 md:pl-44 xl:pl-56 2xl:pl-80 pr-8 sm:pr-16 xl:pr-24 py-8 sm:py-14 xl:py-20 3xl:py-24 
    rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out ${boxCustom}`}
      style={{
        background: `linear-gradient(45deg, ${bg20SecondaryClass}, ${bg60SecondaryClass} 70%)`,
      }}
    >
      <h1
        className={`text-xl sm:text-3xl xl:text-4xl 3xl:text-5xl leading-snug xl:leading-snug 2xl:leading-snug 3xl:leading-snug font-raleway font-bold ${titleCustom}`}
      >
        {title}
      </h1>
      {children}
      {description && (
        <h2 className="flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ">
          {description}
        </h2>
      )}
    </div>
  );
}

export default HeroCard;
