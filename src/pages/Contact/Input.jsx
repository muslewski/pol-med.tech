import React, { useEffect } from "react";

function Input({ textarea = false, errorText, send }) {
  useEffect(() => {
    setValue("");
  }, [send]);

  return (
    <div>
      {textarea ? (
        <textarea
          name={name}
          rows="6"
          className={classStyling}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          name={name}
          type="text"
          className={classStyling}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Input;
