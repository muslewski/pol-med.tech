import React from "react";

function GlowingTitle({ children, customClass = "" }) {
  return (
    <div className={`max-w-full sm:max-w-[85%] w-full ${customClass}`}>
      <h2
        className={`border-4 text-xl text-center lg:text-2xl 2xl:text-3xl max-w-64 sm:max-w-fit w-fit px-12 py-6 leading-relaxed tracking-wide rounded-full border-primary-dark/15 drop-shadow-navigationAccent font-bold `}
      >
        {children}
      </h2>
    </div>
  );
}

export default GlowingTitle;
