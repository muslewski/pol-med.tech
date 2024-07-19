import React from "react";

function Hero({ children, customClass }) {
  const hasGapClass = customClass?.includes("gap");

  return (
    <div
      className={`flex flex-col translate-y-11 w-full ${
        !hasGapClass ? "gap-14" : ""
      } ${customClass}`}
    >
      {children}
    </div>
  );
}

export default Hero;
