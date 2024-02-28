'use client'
import React from "react";

const Louding = () => {
  return (
    <div className="flex flex-col  w-full justify-evenly items-center">
      <ul>
      {/* {[...Array(15).keys()].map((i:number) => (
          <li key={i} className="w-full  flex justify-around ">
            <span
              className="inline-block h-5 bg-slate-600 animate-pulse w-80 m-1"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}
            />
          </li>
      ))} */}
      </ul>
    </div>
  );
};

export default Louding;
