import React from "react";

function SeriousInfo({ icon, iconAlt, title, description }) {
  return (
    <div className="flex flex-col gap-6 max-w-6xl border-l-4 p-5 sm:p-7">
      <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem] flex gap-6 items-end">
        {title}
        <img className="h-16" src={icon} alt="" />
      </h3>
      <div className="font-raleway text-lg 2xl:text-xl">{description}</div>
    </div>
  );
}

export default SeriousInfo;
