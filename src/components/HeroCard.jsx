import React from "react";
function HeroCard({
  boxCustom = "",
  titleCustom = "",
  description,
  title,
  col1 = "rgba(26,21,76,0.2)",
  col2 = "rgba(23,27,80,0.8)",
  children,
}) {
  return (
    <div
      className={`text-primary-dark flex flex-col gap-6 2xl:gap-8 3xl:gap-10 max-w-[95%] md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl shadow-contactInner drop-shadow-homeCard  items-start backdrop-blur-sm sm:backdrop-blur-none pl-8 sm:pl-16 md:pl-44 xl:pl-56 2xl:pl-80 pr-8 sm:pr-16 xl:pr-24 py-8 sm:py-14 xl:py-20 3xl:py-24 
    rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out ${boxCustom}`}
      style={{
        background: `linear-gradient(45deg, ${col1}, ${col2} 70%)`,
      }}
    >
      <h1
        className={`text-xl sm:text-3xl xl:text-4xl 3xl:text-5xl leading-snug xl:leading-snug 2xl:leading-snug 3xl:leading-snug font-raleway font-bold ${titleCustom}`}
      >
        {title}
      </h1>
      {children}
      {description && (
        <h2 className="flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ">
          {description}
        </h2>
      )}
    </div>
  );
}

export default HeroCard;
