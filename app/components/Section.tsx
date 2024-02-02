import Image from "next/image";
import React from "react";
import img from "../../public/sectionImg.png";
import { FaQuoteLeft } from "react-icons/fa";

function Section() {
  return (
    <section className="w-full mt-10 md:mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-12 xl:px-20">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <FaQuoteLeft className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 text-gray-500" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase mb-2 md:mb-4 lg:mb-6 font-bold text-black">
          Elevate Your Productivity
        </h1>

        <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase mb-2 md:mb-4 lg:mb-6 font-bold text-black">
          Every Day | every hour
        </span>
        <span
          style={{ fontWeight: 900 }}
          className="text-green-600 text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-widest mt-2 md:mt-2 lg:mt-2"
        >
          with
        </span>

        <div
          style={{ fontWeight: 700 }}
          className="text-blue-600 text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-widest mt-2 md:mt-2 lg:mt-2"
        >
          Smartodo.
        </div>
        <p className="uppercase text-xs md:text-sm lg:text-base font-semibold mt-2 text-gray-600 leading-relaxed">
          Your daily task manager | Let Smartodo transform your daily routine,
          bringing efficiency and organization to every aspect of your work.
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src={img}
          alt=""
          className="w-full h-[300px] md:h-[450px] lg:h-[600px] xl:h-[750px]"
        />
      </div>
    </section>
  );
}

export default Section;
