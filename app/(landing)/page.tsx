"use client"
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import "@/globals.css"
const Landing = () => {
  const router = useRouter();

  return (
    
    <div className=" bg-yellow-50 flex flex-col w-full h-screen text-black ">
      <div className=" h-40 flex justify-between  items-center">
        <Image className="w-40" src={logo} alt="logoImage" />
        <button className="bg-purple-400 font-medium rounded-lg w-24 m-5 p-2">Login</button>
      </div>


      <div className="flex w-full h-full  ">
        <div className="flex flex-col justify-between   items-end   h-full w-3/5">
          <div className=" flex flex-col justify-evenly  h-4/6  items-end ">
          <div className="tracking-wide  flex flex-col items-baseline  justify-evenly h-3/5 w-4/6">
            <h1 className="font-black text-5xl ">
              Library for next.ts and Tailwind
            </h1>
            <p className=" w-4/6">
              A software designed to provide a quick response to developers to
              design the software in an agile and professional manner
            </p>
          </div>
          <div className="w-3/6">
            <button
            onClick={()=> router.push("/ui/calendar")}
            className="bg-purple-400 font-medium w-32 h-10 rounded-md ">
              start
            </button>
          </div>
          </div>
          <div className="flex w-full  h-36   ">
            <div className="bg-yellow-200  w-36 rounded-tr-full "></div>
          </div>
        </div>



        <div className="flex flex-col justify-end  items-end w-2/5 ">
          <div className="bg-yellow-200 h-3/6 w-2/5 rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
