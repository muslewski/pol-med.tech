import React from "react";
import PolicyTitle from "./PolicyTitle";

function PolicyObject({ title, icon, children }) {
  return (
    <div className="flex flex-col justify-start items-center gap-12 sm:gap-16 lining-nums ">
      <PolicyTitle icon={icon}>{title}</PolicyTitle>
      <div className="flex flex-col gap-7 font-exo [&_b]:font-semibold text-base 2xl:text-2xl leading-normal 2xl:leading-normal font-normal sm:w-11/12">
        {children}
      </div>
    </div>
  );
}

export default PolicyObject;
