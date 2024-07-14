import React from "react";

function BackgroundBottom({ image, mobileImage, alt }) {
  return (
    <>
      <img
        className="hidden md:block foreground2 pointer-events-none select-none"
        src={image}
        alt="Background Bottom Rectangle"
      />
      <img
        className="md:hidden foreground2 pointer-events-none select-none"
        src={mobileImage}
        alt="Background Bottom Rectangle"
      />
    </>
  );
}

export default BackgroundBottom;
