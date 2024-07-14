import React from "react";

function BgBottomVector({ image }) {
  return (
    <img
      className="absolute w-screen -bottom-10 min-h-24 object-cover pointer-events-none select-none"
      src={image}
      alt="Background Bottom Vector"
    />
  );
}

export default BgBottomVector;
