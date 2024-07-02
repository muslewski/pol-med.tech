import React from "react";

function SectionCard({ image, title, description }) {
  return (
    <div
      className="flex flex-col max-w-md  2xl:max-w-xl  gap-12 py-12 px-8 rounded-[4rem] "
      style={{
        background: "linear-gradient(-60deg, #113C63, #237ac900 60%)",
      }}
    >
      <img
        className="self-center w-4/5  object-cover drop-shadow-[0_6px_6px_rgba(117,158,255,0.5)]"
        src={image}
        alt=""
      />
      <div className="flex flex-wrap gap-6 w-fit ">
        <h3 className=" font-exo font-bold leading-normal">{title}</h3>
        <p className="text-xl leading-normal">{description}</p>
      </div>
      <a className=" border-[3px] border-primary-dark py-[12pt] px-[20pt] rounded-full w-fit ">
        Przejdź dalej
      </a>
    </div>
  );
}

export default SectionCard;
