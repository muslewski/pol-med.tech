import React from "react";

function ListInfo({ title, children }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-exo font-semibold text-xl 2xl:text-[1.6rem]">
        {title}
      </h3>
      <ul className="font-exo text-lg 2xl:text-xl list-square list-inside gap-2 flex flex-col">
        {children}
      </ul>
    </div>
  );
}

export default ListInfo;
