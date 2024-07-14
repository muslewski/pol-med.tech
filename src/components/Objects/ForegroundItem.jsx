import React from "react";

function ForegroundItem({ image, alt }) {
  return (
    <img
      className="foreground2 carStationForeground pointer-events-none select-none"
      src={image}
      alt={alt}
    />
  );
}

export default ForegroundItem;
