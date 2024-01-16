import React from "react";
import Image from "next/image";
import logo from "../../public/logo-transparent-svg.svg";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Image src={logo} alt="Smartodo" width={250} height={250} />
      <div className="flex items-center justify-around">
        <button className="px-6 py-2 bg-blue-500 text-white border-blue-500 border-solid border-2 mx-2 font-medium rounded-md hover:opacity-75">
          Login
        </button>
        <button className="px-6 py-2 border-blue-500 border-solid border-2 text-blue-500 mx-2 font-medium rounded-md hover:opacity-75">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
