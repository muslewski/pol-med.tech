import React from "react";

function PolicyTitle({ children, icon, iconAlt = "" }) {
  return (
    <div>
      <h2
        className={`border-4 text-xl text-white text-left lg:text-2xl 2xl:text-3xl sm:max-w-fit w-fit px-8 sm:px-12 py-4 
            sm:py-6 leading-relaxed tracking-normal rounded-xl border-primary-dark/15 drop-shadow-glowingTextSubtle shadow-glowingInput font-bold font-raleway flex
            flex-col-reverse  sm:flex-row items-center gap-4`}
      >
        {children}
        <img className="h-16" src={icon} alt={iconAlt} />
      </h2>
    </div>
  );
}

export default PolicyTitle;
