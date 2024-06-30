import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/polmed-router/">Home</Link>
        </li>
        <li>
          <Link to="/polmed-router/Education">Education</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
