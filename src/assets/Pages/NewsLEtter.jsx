import React from "react";

function NewsLEtter() {
  return (
    <div className="text-white w-full py-16">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 m-2">
            Want daily upadate to optimize your flow?
          </h1>
          <p className="md:text-lg sm:text-lg text-sm font-bold text-zinc-700 m-2">
            Sign up to our news letter stay up to date
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your Email "
              className="flex w-full rounded-md text-black h-10 font-semibold m-2 p-1 "
            />
            <button className=" text-black hover:text-white font-semibold  bg-main-color border-2 border-zinc-700 rounded-md w-[150px] h-10 m-4">
              {" "}
              Notify me
            </button>
          </div>
          <p className="  text-center ">
            We care about your data. Read our{" "}
            <span className="text-main-color">Privacy Policy</span>.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLEtter;
