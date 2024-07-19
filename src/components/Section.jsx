import React, { forwardRef } from "react";

const Section = forwardRef(({ children, customClass = "", style }, ref) => {
  const hasGapClass = customClass?.includes("gap");

  return (
    <section
      className={`text-white px-10 pt-20 pb-56 md:pb-72 3xl:pb-96 text-2xl flex flex-col items-center justify-center relative ${
        !hasGapClass ? "gap-40" : ""
      } ${customClass}`}
      style={style}
      ref={ref}
    >
      {children}
    </section>
  );
});

export default Section;
