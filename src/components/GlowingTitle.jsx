import React from "react";
import { useInView } from "react-intersection-observer";

function GlowingTitle({ children, customClass = "", customClassH2 = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className={`max-w-full w-full ${customClass}`}>
      <h2
        ref={ref}
        className={`border-4 text-xl text-white text-center lg:text-2xl 2xl:text-3xl max-w-64 sm:max-w-fit w-fit px-8 sm:px-12 py-4 sm:py-6 
          leading-relaxed tracking-normal rounded-full border-primary-dark/15 drop-shadow-glowingText font-bold font-raleway ${customClassH2}
          ${inView ? "animate-fade-right opacity-0" : "opacity-0"}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default GlowingTitle;
