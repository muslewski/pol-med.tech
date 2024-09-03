import React from "react";
import { useInView } from "react-intersection-observer";

function TextBox({ text = "Type your text", icon, iconAlt = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row gap-6 items-center bg-slate-500/15 px-10 py-7 sm:py-4 rounded-lg border-4 border-indigo-950/20 ${
        inView ? "animate-fade opacity-0" : "opacity-0"
      }  animate-ease-in-out animate-delay-150`}
    >
      <img className="h-16" src={icon} alt={iconAlt} />
      <h3 className="text-base text-center lg:text-xl 2xl:text-2xl  font-bold">
        {text}
      </h3>
    </div>
  );
}

export default TextBox;
