import React from "react";

function TextBoxLi({ children, borderCol, bgCol }) {
  return (
    <li
      className="border-l-[6px] px-6 py-3 rounded-lg text-white text-base lg:text-xl 2xl:text-2xl  font-medium backdrop-blur-md"
      style={{
        borderColor: borderCol,
        background: `linear-gradient(90deg, ${bgCol},  #00000000)`,
      }}
    >
      {children}
    </li>
  );
}

export default TextBoxLi;
