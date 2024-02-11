"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import List from "./List";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
const NavBar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex bg-gray-300 w-full h-20 justify-between p-3 rounded-md items-center">
      <div className="lg:hidden">
        <RxHamburgerMenu onClick={openModal} />
        {isOpen && (
          <div className="fixed inset-0  flex bg-none justify-start items-start  z-10 ">
            <div className="flex items-end justify-end min-h-screen text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-400 opacity-70"></div>
              </div>
              <div
                className=" h-screen     overflow-hidden transform transition-all   sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="text-right p-2  bg-white">
                <button
                  onClick={closeModal}
                  className="text-black rounded-lgp-2"
                >
                  <TiDeleteOutline />
                </button>
                </div>
                <div className="bg-white rounded-br-lg w-full flex flex-col ">
                  <List  />
                  <div className="flex justify-around w-44"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="font-bold">LIBRARY</div>
      <Image
        onClick={() => router.push("/")}
        className="w-32"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default NavBar;
