import React from "react";
import GoodButton from "./GoodButton";

function FancyInfo({
  className,
  image,
  alt,
  title,
  description,
  col1,
  col2,
  buttonIcon,
  link,
}) {
  return (
    <div className={`flex flex-col gap-12 5xl:max-w-[45%] ${className}`}>
      <div className={`flex flex-col sm:flex-row gap-6 items-center`}>
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

      {buttonIcon && (
        <GoodButton
          icon={buttonIcon}
          link={link}
          className="scale-90 hover:scale-95"
        />
      )}
    </div>
  );
}

export default FancyInfo;
