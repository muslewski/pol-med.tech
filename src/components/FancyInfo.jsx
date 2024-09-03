import React from "react";
import GoodButton from "./GoodButton";
import { useInView } from "react-intersection-observer";

function FancyInfo({
  className,
  image,
  alt = "",
  title,
  description,
  col1,
  col2,
  buttonIcon,
  buttonIconAlt = "",
  link,
  isBox = false,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className={`flex  flex-col gap-12 5xl:max-w-[45%] ${className} `}>
      <div
        ref={ref}
        className={`flex  rounded-3xl animate-ease-in-out animate-delay-150
      ${inView ? "animate-fade opacity-0" : "opacity-0"}`}
        style={{
          background: isBox
            ? `linear-gradient(45deg, ${col2}, transparent)`
            : "none",
          padding: isBox ? "2rem" : "0",
          boxShadow: isBox ? `15px 15px 20px -19px ${col1}` : "none",
        }}
      >
        <div
          className={`flex flex-col sm:flex-row gap-6 items-center [&_hr]:hover:shadow-contactInner`}
        >
          {image && <img className="h-24 sm:h-28" src={image} alt={alt} />}
          <div className="flex flex-col gap-3 min-h-full">
            <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem]">
              {title}
            </h3>
            <hr
              className={`h-1.5 w-full rounded-full border-none transition-shadow duration-200`}
              style={{
                background: `linear-gradient(to right, ${col1}, ${col2})`,
              }}
            />
            <p className="font-raleway text-lg 2xl:text-xl">{description}</p>
          </div>
        </div>
      </div>

      {buttonIcon && (
        <GoodButton
          icon={buttonIcon}
          iconAlt={buttonIconAlt}
          link={link}
          className="scale-90 hover:scale-95"
        />
      )}
    </div>
  );
}

export default FancyInfo;
