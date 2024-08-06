import React, { forwardRef } from "react";

const Section = forwardRef(
  ({ children, customClass = "", customClassInner = "", style }, ref) => {
    const hasGapClass = customClassInner?.includes("gap");
    const hasWClass = customClassInner?.includes("w-");

    const hasPbClass = customClass?.includes("pb");
    const hasPtClass = customClass?.includes("pt");

    return (
      <section
        className={`text-white px-10 text-2xl flex flex-col items-center justify-center relative ${customClass} ${
          !hasPbClass ? "pb-56 md:pb-72 3xl:pb-96" : ""
        } ${!hasPtClass ? "pt-20" : ""}`}
        style={style}
        ref={ref}
      >
        <div
          className={`w-full xl:w-[85%] flex flex-col items-center ${
            !hasGapClass ? "gap-40" : ""
          } ${!hasWClass ? "w-full xl:w-[85%]" : ""} ${customClassInner}`}
        >
          {children}
        </div>
      </section>
    );
  }
);

export default Section;
