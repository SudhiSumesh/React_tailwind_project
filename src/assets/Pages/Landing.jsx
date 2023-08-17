import React from "react";

function Landing() {
  return (
    <>
      <div className="text-white text-center flex  justify-center flex-col w-full h-screen max-w-[1240px] mt-[-96px]">
        <p className="text-main-color font-bold">React + Vite + Tailwind</p>
        <h1 className="md:text-6xl sm:xl text-3xl font-bold">
          Get some knowledge
        </h1>
        <div>
          {" "}
          <p>Fast,Flexible</p>
        </div>
        <p>
          Tailwind and React are two leading technologies in theie sphere.Vite
          simplifies the bundling process
        </p>
      </div>
    </>
  );
}

export default Landing;
