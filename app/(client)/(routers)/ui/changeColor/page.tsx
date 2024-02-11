"use client";
import React, { useState } from "react";

const Colors = () => {
  const [UIColor, setUIColor] = useState("silver");
  return (
    <div className="flex flex-col  w-full  justify-evenly   items-center">
      <h1 className="text-lg font-bold" style={{color: `${UIColor}`}} >colors: {UIColor}</h1>

      <div className="w-96 h-72 rounded-lg flex justify-center items-center " style={{ background: `${UIColor}` }}>{UIColor}</div>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={(e: any) => {
          setUIColor(e.target.value);
        }}
        value={UIColor}
        className="rounded-lg bg-slate-300 p-1"
      />
    </div>
  );
};

export default Colors;
