import React from "react";
import { useInView } from "react-intersection-observer";

function SeriousInfo({ icon, iconAlt = "", title, description }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 max-w-6xl border-l-4 p-5 sm:p-7 animate-ease-in-out animate-delay-150
    ${inView ? "animate-fade opacity-0" : "opacity-0"}`}
    >
      <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem] flex gap-6 items-end">
        {title}
        <img className="h-16" src={icon} alt={iconAlt} />
      </h3>
      <div className="font-raleway text-base sm:text-lg 2xl:text-xl">
        {description}
      </div>
    </div>
  );
}

export default SeriousInfo;
