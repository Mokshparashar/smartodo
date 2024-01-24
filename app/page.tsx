import Image from "next/image";
import Navbar from "./components/Navbar";

import Section from "./components/Section";
import Gradient from "./components/Gradient";

export default function Home() {
  return (
    <main>
      {/* <Gradient/> */}
      <Navbar />
      <Section />
    </main>
  );
}
