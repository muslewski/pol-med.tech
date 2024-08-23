import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../../lotties/contact2.json";
import arrowAnimation from "../../lotties/arrow.json";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import ArrowDown from "./assets/Arrow.svg";
import ArrowMobile from "./assets/arrowMobile.svg";

import background from "./assets/backgroundContact.jpg";
import rectangleBottom from "./assets/rectangleBottom.svg";
import rectangleBottomMobile from "./assets/rectangleBottomMobile.svg";
import rectangleTop from "./assets/rectangleTop.svg";
import bottomVector from "./assets/bottomVector.svg";
import Section from "../../components/Section";
import Input from "./Input";
import SendButton from "./SendButton";
import GlowingTitle from "../../components/GlowingTitle";
import ListInfo from "./ListInfo";
import Hero from "../../components/Hero";
import HeroCard from "../../components/HeroCard";
import ContactButton from "../../components/Navbar/ContactButton";

function Contact() {
  // State for sending status
  const [isSend, setIsSend] = useState(false);

  const contactRef = useRef(null);
  const executeScrollContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Background image={background} alt="Background Image of Oil Containers" />
      <header className="z-10 h-fit min-h-full max-h-full">
        <BackgroundBottom
          image={rectangleBottom}
          mobileImage={rectangleBottomMobile}
        />
        <BackgroundTop image={rectangleTop} />

        {/* <BgBottomVector image={bottomVector} /> */}

        <Hero customClass="translate-y-2 sm:translate-y-11 gap-16">
          <HeroCard
            boxCustom="items-center"
            titleCustom=" text-center"
            title="Zapraszamy do współpracy"
            col1="rgba(26,21,76,0.2)"
            col2="rgba(23,27,80,0.8)"
          >
            <hr className="hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText" />
            <div className="flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ">
              <h2 className="animate-fade-down  animate-duration-1000">
                Chętnie Ci pomożemy.
              </h2>
            </div>

            <Lottie
              animationData={arrowAnimation}
              loop={false}
              className="hidden lg:flex top-[50%] -translate-y-1/2 left-[105%] w-12 sm:w-44 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/85 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              onClick={executeScrollContact}
            />
          </HeroCard>

          {/* Mobile ⬇️ */}
          <div
            onClick={executeScrollContact}
            className="sm:hidden min-w-[60%] relative text-secondary-dark bg-gradient-to-l from-primary-dark to-primary-dark/95 rounded-l-[8rem] w-fit self-end py-8 px-8 border-8 border-[#00000049] backdrop-blur-lg  border-r-0 animate-fade-left animate-duration-1000 animate-ease-in-out"
          >
            <Lottie
              animationData={arrowAnimation}
              loop={false}
              className="sm:hidden absolute right-[85%] top-20 h-24 w-52 animate-fade-down animate-delay-500"
              onClick={executeScrollContact}
            />

            <h2 className="text-lg font-exo font-bold text-center">
              Formularz kontaktowy
            </h2>
          </div>
        </Hero>
      </header>

      <Section
        customClass="bg-gradient-to-b from-[#040E30] to-[#10295b] min-h-full"
        customClassInner="gap-48"
        ref={contactRef}
      >
        <div className="flex flex-wrap w-full  gap-24 self-start">
          <GlowingTitle customClass="hidden sm:flex">
            Formularz kontaktowy
          </GlowingTitle>
          <div className="flex flex-col h-fit items-center justify-start sm:justify-center w-full z-30 text-lg 2xl:text-xl font-medium font-raleway">
            <div className="w-full  max-w-full h-fit  flex flex-col xl:flex-row justify-start items-stretch gap-12 xl:gap-28">
              <div className=" xl:w-3/5 flex flex-col items-stretch gap-24">
                <div className="flex flex-col gap-12">
                  <Input
                    name="message"
                    placeholder="Wiadomość"
                    send={isSend}
                    textarea
                  />
                </div>
                <SendButton first />
              </div>
              <div className="xl:max-w-4xl xl:w-3/12 flex flex-col md:flex-row items-center  gap-20 justify-start">
                <div className="flex flex-col gap-12 xl:gap-16 w-full">
                  <Input name="message" placeholder="Imię" send={isSend} />
                  <Input name="message" placeholder="Email" send={isSend} />
                  <Input
                    name="message"
                    placeholder="Numer Telefonu"
                    inputType="tel"
                    send={isSend}
                  />
                </div>
                <SendButton />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-24 gap-y-24 gap-x-32 self-start">
          <GlowingTitle>Dane kontaktowe</GlowingTitle>
          <ListInfo title="Adresy email:">
            <li>biuro@pol-med.tech</li>
            <li>edukacja@pol-med.tech</li>
            <li>oleje@pol-med.tech</li>
            <li>narzedzia@pol-med.tech</li>
          </ListInfo>

          <ListInfo title="Numery Telefonu:">
            <li>Główny: +48 52 5000 260</li>
            <li>Główny 2: +48 601 78 75 77</li>
            <li>Oleje UCO: 123 456 789</li>
          </ListInfo>
        </div>
      </Section>
    </>
  );
}

export default Contact;
