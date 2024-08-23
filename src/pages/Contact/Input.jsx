import React, { useEffect, useState } from "react";

function Input({
  name,
  placeholder = "",
  textarea = false,
  inputType = "text",
  errorText = "",
  send = false,
}) {
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
    <div className="bg-white/95 rounded-3xl flex">
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="6"
          className={className + " w-full min-h-80 resize-none"}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          type={inputType}
          className={className + " w-full sm:min-w-80"}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Input;
