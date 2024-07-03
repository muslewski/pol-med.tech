import React from "react";

function NavElement({ children }) {
  return (
    <li className="drop-shadow-navigationAccent hover:scale-105 transition-all ease-in-out duration-500">
      {children}
    </li>
  );
}

export default NavElement;
