import React from "react";

function SpecialProductLi({ children, icon }) {
  return (
    <li className="text-lg sm:text-xl flex flex-col sm:flex-row gap-6 items-center">
      <img className="h-16" src={icon} alt="" />
      <span className="border-l-4 pl-6">{children}</span>
    </li>
  );
}

export default SpecialProductLi;
