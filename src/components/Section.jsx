import React, { forwardRef } from "react";

const Section = forwardRef(
  ({ children, customClass = "", customClassInner = "", style }, ref) => {
    const hasGapClass = customClass?.includes("gap");

    return (
      <section
        className={`text-white px-10 pt-20 pb-56 md:pb-72 3xl:pb-96 text-2xl flex flex-col items-center justify-center relative ${customClass}`}
        style={style}
        ref={ref}
      >
        <div
          className={`w-full xl:w-[85%] flex flex-col items-center ${
            !hasGapClass ? "gap-40" : ""
          } ${customClassInner}`}
        >
          {children}
        </div>
      </section>
    );
  }
);

export default Section;
