import React from "react";

function BackgroundTop({ image }) {
  return (
    <img
      className="foreground3 pointer-events-none select-none"
      src={image}
      alt="Background Top Rectangle"
    />
  );
}

export default BackgroundTop;
