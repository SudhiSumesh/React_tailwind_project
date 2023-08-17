import React from "react";

function Landing() {
  return (
    <>
      <div className="text-white text-center flex  justify-center  flex-col w-full h-screen  mt-[-96px] ">
        <p className="text-main-color md:text-xl font-bold">
          React + Vite + Tailwind
        </p>
        <h1 className="md:text-6xl md:m-4 sm:text-4xl text-3xl font-bold md">
          Get some knowledge
        </h1>
        <div>
          {" "}
          <p className="md:text-4xl md:m-4 sm:text-2xl mt-2 mb-2 text-xl">
            Fast,Flexible
          </p>
        </div>
        <p className="md:text-lg sm:text-lg text-sm font-bold text-zinc-700">
          Tailwind and React are two leading technologies in theie sphere.Vite
          simplifies the bundling process
        </p>
        <button
          type="button"
          className=" text-black font-semibold  bg-main-color border-2 border-zinc-700 rounded-[2rem] w-[140px] mx-auto py-2 mt-4  md:py-4 md:w-[200px] md:text-xl sm:py-3 sm:w-[150px]"
        >
          {" "}
          Get Started
        </button>
      </div>
    </>
  );
}

export default Landing;
