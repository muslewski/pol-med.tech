import React from "react";

function NavElement({ children, className }) {
  return (
    <li
      className={`drop-shadow-navigationAccent hover:scale-105 transition-all ease-in-out duration-500 ${className}`}
    >
      {children}
    </li>
  );
}

export default NavElement;
