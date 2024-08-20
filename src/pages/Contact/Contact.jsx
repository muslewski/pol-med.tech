import React, { useState } from "react";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";

import background from "./assets/backgroundContact.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Section from "../../components/Section";
import Input from "./Input";

function Contact() {
  // State for sending status
  const [isSend, setIsSend] = useState(false);

  return (
    <>
      <Background image={background} alt="Background Image of Oil Containers" />
      <header className="z-10 h-fit min-h-full">
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />

        {/* <BgBottomVector image={bottomVector} /> */}

        <div className="flex flex-col gap-28 h-fit items-center justify-start sm:justify-center translate-y-40 sm:translate-y-20 w-full z-30 text-xl font-raleway">
          <div className="w-full  max-w-full h-fit  flex flex-col sm:flex-row justify-center gap-28">
            <div className=" w-2/5 flex flex-col items-stretch gap-24">
              <div className="flex flex-col gap-6 text-white text-center bg-gradient-to-br from-[#222947]/85 to-indigo-900/25 shadow-contactInner  px-14 py-8 rounded-xl">
                <h1 className="text-xl sm:text-3xl xl:text-4xl 3xl:text-5xl font-bold text-shadow">
                  Zapraszamy do współpracy
                </h1>
                <hr className="h-2 bg-white rounded-[50%] drop-shadow-whiteText" />
                <h2 className="xl:text-2xl 3xl:text-3xl text-shadow font-exo">
                  Chętnie Ci pomożemy.
                </h2>
              </div>

              <div className="flex flex-col gap-16">
                <Input
                  name="message"
                  placeholder="Wiadomość"
                  send={isSend}
                  textarea
                />
                <div className="w-full flex justify-end gap-16 items-center ">
                  <h3 className="text-red-600 font-semibold text-shadow">
                    Wiadomość z błędem
                  </h3>
                  <button
                    onClick={() => setIsSend((prev) => !prev)}
                    className="border-white border-[3px] w-fit self-end px-16 py-4 rounded-3xl text-white font-bold bg-black/5 backdrop-blur-lg hover:scale-105 transition-transform"
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/5 flex flex-col gap-16 justify-center">
              <Input name="message" placeholder="Imię" send={isSend} />
              <Input name="message" placeholder="Email" send={isSend} />
              <Input
                name="message"
                placeholder="Numer Telefonu"
                inputType="tel"
                send={isSend}
              />
            </div>
          </div>
        </div>
      </header>

      <Section customClass="bg-gradient-to-b from-[#040E30] to-[#10295b]"></Section>
    </>
  );
}

export default Contact;
