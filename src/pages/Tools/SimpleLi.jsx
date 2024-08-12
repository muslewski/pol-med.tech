import React from "react";

function SimpleLi({ icon, children }) {
  return (
    <li className="flex flex-col sm:flex-row items-center text-xl 2xl:text-2xl p-5 border-l-4 border-[#012F31] w-full rounded-lg gap-4 bg-gradient-to-r from-[#ffffffce] to-[#e2fffb7c] text-[#012F31]">
      <img className="h-16" src={icon} alt="" />
      {children}
    </li>
  );
}

export default SimpleLi;
