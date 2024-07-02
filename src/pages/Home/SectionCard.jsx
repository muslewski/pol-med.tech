import React from "react";

function SectionCard({
  image,
  buttonIcon,
  title,
  description,
  gradient,
  shadow,
}) {
  return (
    <div
      className="flex flex-col max-w-lg  gap-12 py-12 px-8 rounded-[4rem] transition-all duration-500 ease-in-out hover:drop-shadow-homeCard  hover:shadow-homeCard  [&>img]:hover:-translate-y-4"
      style={{
        background: `linear-gradient(-60deg, ${gradient}, transparent 60%)`,
      }}
    >
      <img
        className="self-center w-4/5  object-cover rounded-3xl transition-all duration-500 ease-in-out"
        style={{ filter: `drop-shadow(0 6px 6px ${shadow})` }}
        src={image}
        alt=""
      />
      <div className="flex flex-wrap gap-6 w-fit ">
        <h3 className="text-3xl font-exo font-bold leading-normal">{title}</h3>
        <p className="text-xl leading-normal">{description}</p>
      </div>
      <a className=" border-[3px] font-semibold border-primary-dark py-[12pt] px-[25pt] rounded-full w-fit flex items-center gap-6">
        Przejdź dalej
        <img className="h-12" src={buttonIcon} alt="" />
      </a>
    </div>
  );
}

export default SectionCard;
