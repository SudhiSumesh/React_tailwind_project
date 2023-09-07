import React from "react";

function Cards() {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto   grid md:grid-cols-3 gap-8 ">
          {/* card-1 */}
          <div className="w-[300px] b shadow-xl bg-white border border-[#cfc7c7] rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 duration-300">
            <div className="h-[50px] w-[50px]  bg-white border border-[#766b6b] m-4 flex justify-center items-center ">
              <div className="bg-[#171212] w-[30px] h-[30px] rounded-full"></div>
            </div>
            <h2 className="text-center font-bold text-2xl">Single User</h2>
            <p className="py-2 text-2xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b border-b-[#868383bf]">
                500 GB Storage
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                1 Granted USer
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                Send up to 2 GB
              </p>
            </div>
            <button className=" text-black hover:text-white font-semibold  bg-main-color rounded-md w-[150px] h-10 m-4 ">
              Start Trial
            </button>
          </div>
          {/* card-2 */}
          <div className="w-[300px] b shadow-xl bg-[white] border border-[#cfc7c7] rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 duration-300">
            <div className="h-[50px] w-[50px]  bg-white border border-[#766b6b] m-4 flex justify-center items-center ">
              <div className="bg-[#171212] w-[30px] h-[30px] rounded-full"></div>
            </div>
            <h2 className="text-center font-bold text-2xl">Single User</h2>
            <p className="text-center text-2xl font-bold">$149</p>
            <div>
              <p className="py-2 border-b border-b-[#868383bf]">
                500 GB Storage
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                1 Granted USer
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                Send up to 2 GB
              </p>
            </div>
            <button className=" text-black hover:text-white font-semibold  bg-main-color rounded-md w-[150px] h-10 m-4 ">
              Start Trial
            </button>
          </div>
          {/* card-3 */}
          <div className="w-[300px]  shadow-xl bg-[whilte] border border-[#cfc7c7] rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 duration-300">
            <div className="h-[50px] w-[50px]  bg-white border border-[#766b6b] m-4 flex justify-center items-center ">
              <div className="bg-[#171212] w-[30px] h-[30px] rounded-full"></div>
            </div>
            <h2 className="text-center font-bold text-2xl">Single User</h2>
            <p className="text-center text-2xl font-bold">$149</p>
            <div>
              <p className="py-2 border-b border-b-[#868383bf]  mx-auto mt-8">
                500 GB Storage
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                1 Granted USer
              </p>
              <p className="py-2 border-b border-b-[#868383bf]">
                Send up to 2 GB
              </p>
            </div>
            <button className=" text-black hover:text-white font-semibold  bg-main-color rounded-md w-[150px] h-10 m-4 ">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
