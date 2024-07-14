import React from "react";

function Background({
  image,
  bgColor = " bg-secondary-dark",
  alt = "Background Image",
}) {
  return (
    <img
      className="background pointer-events-none select-none"
      src={image}
      alt={alt}
    />
  );
}

export default Background;
