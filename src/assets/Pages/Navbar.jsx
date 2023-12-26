import { useState } from "react";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [nav, SetNav] = useState(true);

  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    // nav for larger device
    <div className="text-white flex justify-center items-center h-24 max-w-[1240px] mx-auto pl-4">
      <h1 className="text-main-color font-bold w-full text-3xl ">KNOCK.</h1>
      <ul className="  hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* condition for nav icon- mobile device  */}
      <div onClick={handleNav} className=" md:hidden">
        {!nav ? (
          <AiOutlineClose size={25} className=" mr-4 " />
        ) : (
          <AiOutlineMenu size={25} className="mr-4" />
        )}
      </div>
      {/* mobile navmenu | */}
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[60%] border-r border-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] ease-in-out duration-300"
        }
      >
        <h1 className="text-main-color font-bold w-full text-3xl m-4 ">
          KNOCK.
        </h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
