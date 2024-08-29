import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function SendButton({ first = false, sendStatus, clicked }) {
  const { t } = useTranslation("ContactSubmitButton");

  const className = first
    ? `w-full justify-end gap-16 items-center hidden xl:flex`
    : `w-full justify-start gap-16 items-center flex xl:hidden h-fit flex-col-reverse xl:flex-row`;

  return (
    <div className={className}>
      {sendStatus && (
        <h3 className="text-green-400 animate-fade-right  self-start xl:self-center xl:mr-auto font-semibold text-shadow border-l-4 border-green-400 bg-gradient-to-br from-green-950/35 px-4 py-2 rounded-md">
          {t("send_message")}
        </h3>
      )}
      <button
        className={
          clicked
            ? "pointer-events-none border-white/75 border-[3px] w-fit self-start xl:self-center px-16 py-4 rounded-3xl text-white/75 font-bold bg-black/5 backdrop-blur-lg hover:scale-105 hover:shadow-contactInner transition-all"
            : "border-white border-[3px] w-fit self-start xl:self-center px-16 py-4 rounded-3xl text-white font-bold bg-black/5 backdrop-blur-lg hover:scale-105 hover:shadow-contactInner transition-all"
        }
      >
        {t("button_text")}
      </button>
    </div>
  );
}

export default SendButton;
