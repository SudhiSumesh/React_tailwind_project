import React from "react";

function Content() {
  return (
    <div className="bg-white w-full ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* left section||image section started */}
        <div className="w-[250px] h-[300px]  bg-[#c6c2c251]  mx-auto border-solid border-2 border-[#3b38385d] m-14 rounded-md flex justify-center items-center">
          <div className="w-[50px] h-[30px] bg-slate-800 "></div>
          <div className="w-[50px] h-[50px] bg-slate-800  flex justify-center items-center rounded ">
            <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
          </div>
          <div className="w-[50px] h-[30px] bg-slate-800  "></div>
          <div className="w-[50px] h-[50px] bg-slate-800  flex justify-center items-center rounded">
            <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
          </div>
          <div className="w-[50px] h-[30px] bg-slate-800  "></div>
        </div>
        {/* right section ||paragraph section started */}
        <div className="flex flex-col justify-center sm:ml-2 ml-2 md:m-0">
          {" "}
          <p className="text-main-color uppercase font-bold md:text-xl">
            dive into it
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  md:py-6 sm:py-4 py-2  ">
            What IS React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi
            sequi hic ullam adipisci minima quisquam reiciendis rem cumque quam,
            quasi laudantium debitis pariatur tempora a dolore iste fugiat
            eveniet?
          </p>
          <button
            type="button"
            className=" text-main-color  font-semibold  bg-black  rounded-[.4rem] w-[120px] mx-auto py-2 m-4  md:py-4 md:w-[150px] md:h-[55px] md:text-lg md:mx-0 sm:py-3 sm:w-[150px]"
          >
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
