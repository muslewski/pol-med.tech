import React from "react";

function SimpleLi({ icon, iconAlt = "", children }) {
  return (
    <li className="flex flex-col sm:flex-row items-center text-xl 2xl:text-2xl p-5 border-l-4 hover:border-l-[7px] border-[#012F31] w-full rounded-lg hover:gap-5 [&>img]:hover:scale-105 transition-all gap-4 bg-gradient-to-r from-[#ffffffce] to-[#e2fffb7c] text-[#012F31]">
      <img className="h-16 transition-transform" src={icon} alt={iconAlt} />
      {children}
    </li>
  );
}

export default SimpleLi;
