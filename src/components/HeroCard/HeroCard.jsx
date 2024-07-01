import React from "react";

function HeroCard() {
  return (
    <div
      className=" text-primary-dark flex flex-col gap-10 max-w-6xl text-center items-center bg-gradient-to-br from-secondary-dark/5 to-secondary-dark/40 backdrop-blur-md pl-[16%] pr-24 py-24 
  rounded-r-[8rem] border-secondary-dark/15 border-8 border-l-0 animate-fade-right animate-duration-1000 animate-ease-in-out"
    >
      <h1 className="text-5xl leading-tight font-raleway font-bold drop-shadow-whiteText">
        Profesjonalne wsparcie dla Twojego biznesu i edukacji!
      </h1>
      <hr className="h-3 w-3/4 rounded-[100%] bg-gradient-to-b from-primary-dark to-transparent  backdrop-blur-md shadow-navigationBlack" />
      <div className="flex justify-evenly text-2xl w-full font-exo ">
        <h2 className="">Technologia</h2>
        <h2>Badania</h2>
        <h2>Przemysł</h2>
      </div>
    </div>
  );
}

export default HeroCard;
