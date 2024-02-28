"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/store";
import { useRouter } from "next/navigation";

const List = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [typeFeature, setTypeFeature] = useState([
    "calendar",
    "clock",
    "louding",
    "spinner",
    "lineMuv",
    "changeColor",
    "login",
    "tags",
    "Avatar",
    "ImageZoom",
    "flip",
    "animation",
  ]);
  console.log(search);

  return (
    <div className=" h-full  items-start flex-col shadow-lg ">
      <input
        placeholder=" search..."
        className="bg-gray-100  w-52 m-2 border-b-4 border-x-stone-600 "
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className=" text-gray-700 h-5/6 w-56 overflow-auto   ">
        {typeFeature
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.toLowerCase().includes(search);
          })
          .map((items, index) => (
            <div key={index} className="font-extralight flex  flex-col">
              <button
                onClick={() => router.push(items)}
                className=" p-1 text-left hover:font-black "
              >
                {items}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
