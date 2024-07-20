import React from "react";

function FancyInfo({ className, image, alt, title, description, col1, col2 }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-6 5xl:max-w-[45%] items-center ${className}`}
    >
      {image && <img className="h-24 sm:h-28" src={image} alt={alt} />}
      <div className="flex flex-col gap-3 min-h-full">
        <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem]">
          {title}
        </h3>
        <hr
          className={`h-1.5 w-full rounded-full border-none`}
          style={{
            background: `linear-gradient(to right, ${col1}, ${col2})`,
          }}
        />
        <p className="font-raleway text-lg 2xl:text-xl">{description}</p>
      </div>
    </div>
  );
}

export default FancyInfo;
