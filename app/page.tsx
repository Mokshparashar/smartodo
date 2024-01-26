import Image from "next/image";
import Navbar from "./components/Navbar";

import Section from "./components/Section";
import Gradient from "./components/Gradient";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

async function postUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Moksh",
      last: "parashar",
      born: 2003,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
postUser();
export default function Home() {
  return (
    <main>
      {/* <Gradient/> */}
      <Navbar />
      <Section />
    </main>
  );
}
