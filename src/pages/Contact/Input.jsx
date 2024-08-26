import React, { forwardRef, useEffect, useState } from "react";

const Input = forwardRef(
  (
    {
      name,
      placeholder = "",
      textarea = false,
      inputType = "text",
      errorText = "",
      send = false,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      setValue("");
    }, [send]);

    function handleChange(event) {
      setValue(event.target.value);
      event.target.setCustomValidity("");
    }

    let className =
      "p-5 rounded-3xl bg-white/95  backdrop-brightness-175 backdrop-blur-2xl text-slate-950 placeholder-indigo-950 shadow-glowingInput transition-all focus:outline-offset-4 outline-white";

    return (
      <div className="flex flex-col gap-4">
        {textarea ? (
          <textarea
            ref={ref}
            name={name}
            placeholder={placeholder}
            rows="6"
            className={className + " w-full min-h-80 resize-none"}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <input
            ref={ref}
            name={name}
            placeholder={placeholder}
            type={inputType}
            className={className + " w-full sm:min-w-80 lining-nums"}
            value={value}
            onChange={handleChange}
          />
        )}

        {errorText && (
          <span className="text-blue-300 animate-shake font-exo">
            {errorText}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
