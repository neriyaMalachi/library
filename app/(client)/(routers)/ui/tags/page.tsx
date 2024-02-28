"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const Tags = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full h-full flex flex-col justify-around p-3">
      {/* inpute */}
      <div>
        <fieldset className="border border-zinc-600 w-72 h-16 p-1">
          <legend className="px-1">Name</legend>
          <input
            type="text"
            autoFocus
            className="w-full h-full bg-[transparent] border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
          />
        </fieldset>
      </div>
      {/* shopingCart */}
      <div>
        <div className="flex my-14">
          <div className="w-5 p-1 ">
            <ShoppingCart />
          </div>
          <sub className="pl-1">5</sub>
        </div>
      </div>
      {/* module */}
      <div>
        <button
          className="border-2 border-rose-600 rounded-lg p-1"
          onClick={() => {
            if (toggle === false) setToggle(true);
            else {
              setToggle(false);
            }
          }}
        >
          open modale
        </button>
        <dialog open={toggle}>
          <div className="p-4 w-96 h-52 border border-zinc-400 rounded-lg">
            <button
              className="border-2 border-rose-600 rounded-lg p-1"
              onClick={() => setToggle(false)}
            >
              close
            </button>
            hello
          </div>
        </dialog>
      </div>

      {/* button */}
      <div>
        <button className="bg-slate-200 p-3 rounded-md font-bold hover:bg-slate-100 ">
          click me
        </button>
      </div>
    </div>
  );
};

export default Tags;
