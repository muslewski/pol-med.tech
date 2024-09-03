import React from "react";
import { useInView } from "react-intersection-observer";

function FooterElement({ icon, iconAlt = "", title, p0 = null, p1, p2, p3 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 animate-ease-in-out animate-delay-150 ${
        inView ? "animate-fade opacity-0" : "opacity-0"
      }`}
    >
      <h4 className="font-raleway font-bold text-xl sm:text-2xl flex gap-6 drop-shadow-homeCard items-center">
        <span>{title}</span> <img src={icon} className="w-9" alt={iconAlt} />
      </h4>
      <ul className="flex flex-col gap-4">
        {p0 && (
          <li className="font-exo font-medium text-base sm:text-lg">{p0}</li>
        )}
        <li className="font-exo font-medium text-base sm:text-lg">{p1}</li>
        <li className="font-exo font-medium text-base sm:text-lg">{p2}</li>
        <li className="font-exo font-medium text-base sm:text-lg">{p3}</li>
      </ul>
    </div>
  );
}

export default FooterElement;
