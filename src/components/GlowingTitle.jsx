import React from "react";

function GlowingTitle({ children, customClass = "", customClassH2 = "" }) {
  return (
    <div className={`max-w-full sm:max-w-[85%] w-full ${customClass}`}>
      <h2
        className={`border-4 text-xl text-white text-center lg:text-2xl 2xl:text-3xl max-w-64 sm:max-w-fit w-fit px-8 sm:px-12 py-4 sm:py-6 leading-relaxed tracking-normal rounded-full border-primary-dark/15 drop-shadow-glowingText font-bold ${customClassH2}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default GlowingTitle;
