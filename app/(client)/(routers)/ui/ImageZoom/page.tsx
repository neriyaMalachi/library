"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageForZoomFile from "@/assets/imageForZoomFile.png";

const page = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const HandleMouseHover = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };
  
  return (
    <div
      className="imgMagnifierContainer"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={HandleMouseHover}
    >
      <Image
        id="magnifierImg"
        src={imageForZoomFile}
        alt="imageForZoomFile"
        className="magnifierImg"
      />

      {showMagnifier && (
        <div
          style={{
            position:"absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents:"none"
          }}
        >
          <div
            style={{
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
            className="magnifierImage"
          />
        </div>
      )}
    </div>
  );
};

export default page;
