import React from "react";

function TextBox({ text = "Type your text", icon, iconAlt = "" }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center bg-slate-500/15 px-10 py-7 sm:py-4 rounded-lg border-4 border-indigo-950/20">
      <img className="h-16" src={icon} alt={iconAlt} />
      <h3 className="text-base text-center lg:text-xl 2xl:text-2xl  font-bold">
        {text}
      </h3>
    </div>
  );
}

export default TextBox;
