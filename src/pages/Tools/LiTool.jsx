import React from "react";

function LiTool({ children, index, chooseMe }) {
  return (
    <li
      className="border-l-[6px] border-[rgb(1,47,49)] bg-gradient-to-r backdrop-blur-md backdrop-brightness-200 sm:backdrop-brightness-150 shadow-glowingTools from-[#ffffffe0] to-[#ffffff72] rounded-xl pl-4 text-black max-w-xs h-fit font-raleway text-lg 2xl:text-xl p-2
      cursor-pointer hover:scale-105 hover:drop-shadow-glowingText transition-all duration-200 ease-in-out"
      onClick={() => chooseMe(index)}
    >
      {children}
    </li>
  );
}

export default LiTool;
