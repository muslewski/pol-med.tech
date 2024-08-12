import React from "react";

function AdvancedBox({ title, icon, description }) {
  return (
    <div className="flex flex-col gap-7 border-4 border-double border-white shadow-glowingTitle max-w-7xl bg-white/85 backdrop-brightness-150 backdrop-blur-sm rounded-3xl px-5 sm:px-10 py-5 sm:py-7">
      <div className="flex flex-col sm:flex-row items-center gap-7 w-fit border-dashed border-[#1C375B] rounded-2xl border-4 p-6">
        <img className="h-20" src={icon} alt="" />
        <h3 className="font-exo text-center font-semibold text-[#1C375B] text-xl 2xl:text-[1.6rem]">
          {title}
        </h3>
      </div>

      <p className="font-raleway text-lg text-secondary-darkEducation 2xl:text-xl">
        {description}
      </p>
    </div>
  );
}

export default AdvancedBox;
