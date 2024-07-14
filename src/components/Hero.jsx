import React from "react";

function Hero({ children, customClass }) {
  const hasGapClass = customClass?.includes("gap");

  return (
    <div
      className={`flex flex-col w-full sm:w-fit ${
        !hasGapClass ? "gap-14" : ""
      } ${customClass}`}
    >
      {children}
    </div>
  );
}

export default Hero;
