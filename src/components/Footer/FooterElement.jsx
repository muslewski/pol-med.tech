import React from "react";

function FooterElement({ icon, title, p1, p2, p3 }) {
  return (
    <div className="flex flex-col gap-6 ">
      <h4 className="font-raleway font-bold text-2xl sm:text-3xl flex gap-6 drop-shadow-homeCard items-center">
        <span>{title}</span> <img src={icon} className="w-9" alt={title} />
      </h4>
      <ul className="flex flex-col gap-4">
        <li className="font-exo font-bold text-base sm:text-lg">{p1}</li>
        <li className="font-exo font-bold text-base sm:text-lg">{p2}</li>
        <li className="font-exo font-bold text-base sm:text-lg">{p3}</li>
      </ul>
    </div>
  );
}

export default FooterElement;
