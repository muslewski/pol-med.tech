import React from "react";
import { Link } from "react-router-dom";
import GoodButton from "../../components/GoodButton";
import iconRightArrow from "../../Assets/rightArrow.webp";

function StationObject({ title, description, image, id }) {
  if (description.length > 200)
    description = description.substring(0, 200) + "...";

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 max-w-full lg:max-w-3xl bg-gradient-to-br from-[rgba(209,226,255,0.08)] px-6 py-9 rounded-3xl">
      <div className="flex flex-col-reverse sm:flex-col max-w-xs gap-4 items-center">
        <Link
          to={`/pol-med.tech/Edukacja_i_badania/` + id}
          className="hover:scale-[102%] [&>img]:hover:drop-shadow-homeCard transition-transform ease-in-out"
        >
          <img
            className="rounded-3xl  drop-shadow-none transition-all duration-500 ease-in-out"
            src={image}
            alt=""
          />
        </Link>
      </div>

      <div className={`flex flex-col gap-6`}>
        <div className={`flex flex-col sm:flex-row gap-6 items-center`}>
          <div className="flex flex-col gap-3 min-h-full">
            <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem]">
              {title}
            </h3>
            <hr
              className={`h-1.5 w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500/25 border-none`}
            />
            <p className="font-raleway text-lg 2xl:text-xl">{description}</p>
          </div>
        </div>
        <GoodButton
          link={`/pol-med.tech/Edukacja_i_badania/` + id}
          className="scale-90 hover:scale-95 -ml-3"
          icon={iconRightArrow}
        />
      </div>
    </div>
  );
}

export default StationObject;
