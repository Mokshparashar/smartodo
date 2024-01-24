import Image from "next/image";
import React from "react";
import img from "../../public/sectionImg.png";
import { FaQuoteLeft } from "react-icons/fa";
function Section() {
  return (
    <section className="w-full mt-20 md:mt-0 flex items-center justify-between px-32 ">
      <div className="w-1/2">
        <FaQuoteLeft className="text-6xl mb-8" />
        <h1 className="text-black  text-5xl uppercase mb-6 tracking-widest font-bold">
          Manage your
        </h1>
        <span className="font-extrabold text-blue-600 text-8xl uppercase">
          day
        </span>
        <span className="text-black  text-5xl uppercase tracking-widest font-bold ml-6">
          with
        </span>

        <div className="text-green-600 font-extrabold text-7xl uppercase tracking-widest mt-8">
          Smartodo.
        </div>
        <p className="uppercase  font-semibold">
          your daily task manager | Let him assist you in your daily working.
        </p>
      </div>
      <Image src={img} alt="" className="w-1/2 h-1/2" />
    </section>
  );
}

export default Section;
