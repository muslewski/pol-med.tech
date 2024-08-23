import React, { useEffect, useState } from "react";

function SendButton({ first = false }) {
  const className = first
    ? `w-full justify-end gap-16 items-center hidden xl:flex`
    : `w-full justify-start gap-16 items-center flex xl:hidden h-fit flex-col-reverse xl:flex-row`;

  return (
    <div className={className}>
      <h3 className="text-red-500  self-start xl:self-center xl:mr-auto font-semibold text-shadow border-l-4 border-red-500 bg-gradient-to-br from-red-950/35 px-4 py-2 rounded-md">
        Wiadomość z błędem
      </h3>
      <button
        onClick={() => setIsSend((prev) => !prev)}
        className="border-white border-[3px] w-fit self-start xl:self-center px-16 py-4 rounded-3xl text-white font-bold bg-black/5 backdrop-blur-lg hover:scale-105 transition-transform"
      >
        Wyślij
      </button>
    </div>
  );
}

export default SendButton;
