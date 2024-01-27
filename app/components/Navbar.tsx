"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo-transparent-svg.svg";
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
function Navbar() {
  const [currentUser, setCurrentUser] = useState<UserCredential>();
  const [userToken, setUserToken] = useState<any>();

  async function handleLoginClick() {
    const provider = await new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user.user);

    setCurrentUser(user);

    return user;
  }
  console.log(currentUser);

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Image src={logo} alt="Smartodo" width={250} height={250} />
      <div className="flex items-center justify-around">
        {currentUser ? (
          <Image
            src={
              currentUser.user.photoURL ??
              "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
            }
            alt={currentUser.user.displayName ?? "user"}
            width={50}
            height={50}
            className="rounded-full"
          />
        ) : (
          <>
            <button
              onClick={handleLoginClick}
              className="px-6 py-2  text-blue-500 border-blue-500 border-solid border-2 mx-2 font-medium rounded-md hover:opacity-75"
            >
              Login
            </button>
            <button className="px-6 py-2 border-green-500 border-solid border-2 text-white mx-2 font-medium bg-green-500 rounded-md hover:opacity-75">
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
