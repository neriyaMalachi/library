"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());


  useQuery({
    queryKey: ["date"],
    queryFn: () => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    },
  });

  return (
    <div className=" flex flex-col max-h-full  w-full justify-evenly  items-center">
      <div className=" flex flex-col font-black border-solid  ">
        <div> {time.toLocaleTimeString()}</div>
        <div> {time.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default Clock;
