import Image from "next/image";
import React from "react";
import img from "../../public/sectionImg.png";
function Section() {
  return (
    <section className="w-full mt-20 md:mt-0 flex items-center justify-between px-32 ">
      <div className="w-1/2">
        <h1 className="text-white font-light text-4xl uppercase mb-4 tracking-widest">
          Manage your day with
        </h1>
        <span className="text-green-500 font-extrabold mt-4 text-6xl uppercase tracking-widest">
          Smartodo.
        </span>
        <p>
          your daily task manager | Let him assist you in your daily working.
        </p>
      </div>
      <Image src={img} alt="" className="w-1/2 h-1/2" />
    </section>
  );
}

export default Section;
