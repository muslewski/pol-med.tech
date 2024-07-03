import React from "react";
import { useLocation } from "react-router-dom";

const routesConfig = [
  {
    path: "/pol-med.tech/Edukacja_i_badania",
    color50: "rgba(4, 14, 48, 0.5)",
    color15: "rgba(4, 14, 48, 0.15)",
    color5: "rgba(4, 14, 48, 0.05)",
  },
  {
    path: "/pol-med.tech/Oleje_UCO",
    color50: "rgba(4, 14, 48, 0.5)",
    color15: "rgba(4, 14, 48, 0.15)",
    color5: "rgba(4, 14, 48, 0.05)",
  },
  {
    path: "/pol-med.tech/Narzedzia",
    color50: "rgba(4, 14, 48, 0.5)",
    color15: "rgba(4, 14, 48, 0.15)",
    color5: "rgba(4, 14, 48, 0.05)",
  },
  {
    path: "/pol-med.tech/O_nas",
    color50: "rgba(4, 14, 48, 0.5)",
    color15: "rgba(4, 14, 48, 0.15)",
    color5: "rgba(4, 14, 48, 0.05)",
  },
  {
    path: "/pol-med.tech/Kontakt",
    color50: "rgba(4, 14, 48, 0.5)",
    color15: "rgba(4, 14, 48, 0.15)",
    color5: "rgba(4, 14, 48, 0.05)",
  },
];

function HeroCard({ boxCustom = "", titleCustom = "", title, children }) {
  const location = useLocation();
  const currentRoute = routesConfig.find(
    (route) => route.path === location.pathname
  );

  const bg50SecondaryClass = currentRoute
    ? currentRoute.color50
    : "rgba(4, 0, 48, 0.5)";

  const bg15SecondaryClass = currentRoute
    ? currentRoute.color15
    : "rgba(4, 0, 48, 0.15)";

  const bg5SecondaryClass = currentRoute
    ? currentRoute.color5
    : "rgba(4, 0, 48, 0.05)";

  return (
    <div
      className={`text-primary-dark flex flex-col gap-10 max-w-[60%] shadow-contactInner drop-shadow-homeCard  items-start bg-gradient-to-br from-[${bg5SecondaryClass}] to-[${bg50SecondaryClass}] backdrop-blur-md pl-[16%] pr-24 py-24 
    rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out ${boxCustom}`}
      style={{
        background: `linear-gradient(45deg, ${bg5SecondaryClass}, ${bg50SecondaryClass})`,
      }}
    >
      <h1
        className={`text-5xl leading-tight font-raleway font-bold ${titleCustom}`}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}

export default HeroCard;
