import React, { useRef, useState } from "react";
import EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import contactAnimation from "../../lotties/contact2.json";
import arrowAnimation from "../../lotties/arrow.json";
import Background from "../../components/Objects/Background";
import BackgroundBottom from "../../components/Objects/BackgroundBottom";
import BackgroundTop from "../../components/Objects/BackgroundTop";
import BgBottomVector from "../../components/Objects/BgBottomVector";
import ArrowDown from "./assets/Arrow.svg";
import ArrowMobile from "./assets/arrowMobile.svg";
import iconWhatsApp from "../../Assets/whatsapp.png";

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
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("Contact");

  // State for sending status
  const [isSend, setIsSend] = useState(false);

  // State for disabling the button before we find out if the message was sent
  const [buttonClicked, setButtonClicked] = useState(false);

  // States that are used for displaying error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  // New state to track if phone error was displayed
  const [phoneErrorDisplayed, setPhoneErrorDisplayed] = useState(false);

  // Scroll to contact form
  const contactRef = useRef(null);
  const executeScrollContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  // Ref that is responsible for sending form
  const form = useRef(null);

  // Refs for validating the input value
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  // Handle sending email
  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Reset the error messages
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setMessageError("");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    // Check if input values are correct
    if (message.length < 1) {
      // If there is no message
      messageRef.current.focus();
      setMessageError("input_error_1");
    } else if (name.length < 1) {
      // If there is no name
      setNameError("input_error_2");
      nameRef.current.focus();
    } else if (email.length < 1) {
      // If there is no email
      setEmailError("input_error_3");
      emailRef.current.focus();
    } else if (!email.includes("@")) {
      // If email don't have @
      emailRef.current.focus();
      setEmailError("input_error_4");
    } else if (!EmailValidator.validate(email)) {
      // If email is valid
      emailRef.current.focus();
      setEmailError("input_error_5");
    } else if (phone.length < 1 && !phoneErrorDisplayed) {
      // If there is no phone
      phoneRef.current.focus();
      setPhoneError("input_error_6");
      setTimeout(() => {
        setPhoneErrorDisplayed(true); // Set phoneErrorDisplayed to true after displaying the error
      }, 1000);
    } else {
      setButtonClicked(true);

      // Heart of the message sending
      emailjs
        .sendForm(
          "service_u3f8fy9",
          "template_erj6s3w",
          form.current,
          "XeDaxKDYwvWpoAeQo"
        )
        .then((result) => {
          console.log(result.text);
          setIsSend(true);
          setTimeout(() => {
            setIsSend(false);
            setButtonClicked(false);
          }, 2500);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <>
      <Background image={background} alt={t("hero_background_alt")} />
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
            title={t("hero_title")}
            col1="rgba(26,21,76,0.2)"
            col2="rgba(23,27,80,0.8)"
          >
            <hr className="hidden sm:flex h-2 2xl:h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent drop-shadow-whiteText" />
            <div className="flex justify-evenly xl:text-xl 3xl:text-2xl w-full font-exo ">
              <h2 className="animate-fade-down  animate-duration-1000">
                {t("hero_description")}
              </h2>
            </div>

            <Lottie
              animationData={arrowAnimation}
              loop={false}
              className="hidden lg:flex top-[50%] -translate-y-1/2 left-[105%] w-12 sm:w-44 translate-x-1/2 rounded-tl-3xl rounded-tr-3xl rounded-bl-[50px] rounded-br-[50px]  bg-gradient-to-tr border-blue-900/15 shadow-navigation from-indigo-950/85 to-blue-950/5 px-8 py-6 absolute cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              onClick={() => {
                executeScrollContact();
                // Wait for the animation to finish
                setTimeout(() => {
                  messageRef.current.focus();
                }, 550);
              }}
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
              {t("section_title_1")}
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
            {t("section_title_1")}
          </GlowingTitle>
          <div className="flex flex-col h-fit items-center justify-start sm:justify-center w-full z-30 text-lg 2xl:text-xl font-medium font-raleway">
            <form
              ref={form}
              className="w-full  max-w-full h-fit  flex flex-col xl:flex-row justify-start items-stretch gap-12 xl:gap-28"
              onSubmit={handleSendEmail}
            >
              <div className=" xl:w-3/5 flex flex-col items-stretch gap-24">
                <div className="flex flex-col gap-12">
                  <Input
                    ref={messageRef}
                    name="message"
                    placeholder={t("input_placeholder_1")}
                    errorText={messageError}
                    send={isSend}
                    textarea
                  />
                </div>
                <SendButton first clicked={buttonClicked} sendStatus={isSend} />
              </div>
              <div className="xl:max-w-4xl xl:w-3/12 flex flex-col md:flex-row items-center  gap-20 justify-start">
                <div className="flex flex-col gap-12 xl:gap-16 w-full">
                  <Input
                    ref={nameRef}
                    name="user_name"
                    placeholder={t("input_placeholder_2")}
                    errorText={nameError}
                    send={isSend}
                  />
                  <Input
                    ref={emailRef}
                    name="user_email"
                    placeholder={t("input_placeholder_3")}
                    errorText={emailError}
                    send={isSend}
                  />
                  <Input
                    ref={phoneRef}
                    name="user_phone"
                    placeholder={t("input_placeholder_4")}
                    errorText={phoneError}
                    inputType="tel"
                    send={isSend}
                  />
                </div>
                <SendButton clicked={buttonClicked} sendStatus={isSend} />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap gap-24 gap-y-24 gap-x-32 self-start magicAUnderline">
          <GlowingTitle>{t("section_title_2")}</GlowingTitle>
          <ListInfo title={t("list_info_title_1")}>
            <li>
              <a href="mailto:biuro@pol-med.tech">biuro@pol-med.tech</a>
            </li>
            <li>
              <a href="mailto:edukacja@pol-med.tech">edukacja@pol-med.tech</a>
            </li>
            <li>
              <a href="mailto:oleje@pol-med.tech">oleje@pol-med.tech</a>
            </li>
            <li>
              <a href="mailto:narzedzia@pol-med.tech">narzedzia@pol-med.tech</a>
            </li>
          </ListInfo>

          <ListInfo title={t("list_info_title_2")}>
            <li>
              {t("list_info_2_li_1")}{" "}
              <a href="tel:+48 52 5000 260">+48 52 5000 260</a>
            </li>
            <li>
              {t("list_info_2_li_2")}{" "}
              <a href="tel:+48 601 78 75 77">+48 601 78 75 77</a>
            </li>
            <li>
              {t("list_info_2_li_3")}{" "}
              <a href="tel:+48 537 144 288">+48 537 144 288</a>
              <span className="inline-flex items-center gap-2 text-base bg-green-700/55 p-1.5 mx-4 rounded-bl-md rounded-tr-md rounded-tl-2xl rounded-br-2xl">
                (
                <img
                  src={iconWhatsApp}
                  className="w-6"
                  alt={t("list_info_2_li_3_alt")}
                />{" "}
                WhatsApp )
              </span>
            </li>
          </ListInfo>
        </div>
      </Section>
    </>
  );
}

export default Contact;
