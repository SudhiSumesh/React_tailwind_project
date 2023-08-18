import React from "react";

function Content() {
  return (
    <div className="bg-white w-full ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* left section||image section started */}
        <div className="w-[250px] h-[300px] bg-[#150f0ffe] m-14 rounded-md flex justify-center items-center">
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
        <div>
          {" "}
          <p>dive into it</p>
          <h1>What IS React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi
            sequi hic ullam adipisci minima quisquam reiciendis rem cumque quam,
            quasi laudantium debitis pariatur tempora a dolore iste fugiat
            eveniet?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
