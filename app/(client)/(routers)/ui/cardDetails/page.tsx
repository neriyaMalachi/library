'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import BackCard from "@/assets/bg-card-back.png";
import FrontCard from "@/assets/bg-card-front.png";
import avatar from "@/assets/card-logo.svg";
import successIcon from "@/assets/icon-complete.svg";
const page = () => {

  const [validation, setValidation] = useState(false);
  const textSuccess = "We've added your card detals";
  const [creditDetails, setCreditDetails] = useState({
    Name: "",
    Number: "",
    month: "",
    year: "",
    threeDigits: "",
  });
  const ValidationCreditDetails = () => {
    console.log(creditDetails);
    setValidation(true);
  };
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 ">
    <div className="background relative h-[240px] md:w-full md:h-[100vh] md:grid md:grid-cols-2 md:grid-rows-12  ">
      {/* silver card */}
      <div className="relative md:col-start-1 md:row-start-7 md:row-end-10">
        <div className="absolute top-[100px] left-[75%] bg-transparent text-[10px] z-10  md:left-[150%] md:top-[123px] ">
          {creditDetails.threeDigits ? creditDetails.threeDigits : <p>000</p>}
        </div>
        <Image
          src={BackCard}
          alt="Back Card"
          className="w-[280px] md:w-[450px] inline-block z-0 absolute top-8 left-20 md:left-[67%] md:top-4 rounded-lg shadow-2xl "
        />
      </div>
      {/* red card */}
      <div className="w-[290px] absolute top-[50%] left-5  md:w-[420px] md:col-start-12 md:top-[20%] md:left-[24%] shadow-2xl ">
        <div className=" absolute md:w-[400px] md:h-48  ">
          <Image src={avatar} alt="avatar" className="p-4 " />
          <div className=" md:mt-16 h-30">
            <div className="flex justify-center text-[22px] mt-5 md:text-[33px]  ">
              {creditDetails.Number ? (
                creditDetails.Number
              ) : (
                <p>0000 0000 0000 0000</p>
              )}
            </div>
            <div className=" w-72  flex justify-between md:w-full md:h-11 md:items-end p-3 text-[10px] font-light ">
              <div className="ml-3">
                {creditDetails.Name ? (
                  creditDetails.Name
                ) : (
                  <p>JANE APPLESEED</p>
                )}
              </div>
              <div className="mr-2 flex">
                {creditDetails.month ? creditDetails.month : <p>00</p>}
                <p>/</p>
                {creditDetails.year ? creditDetails.year : <p>00</p>}
              </div>
            </div>
          </div>
        </div>
        <Image src={FrontCard} alt="Front Card" />
      </div>
    </div>
    {/* input field */}
    <div className=" mt-24 h-[55vh] grid grid-cols-12 grid-rows-5 text-black  md:col-start-2 md:row-start-1 md:mt-56 md:w-[550px]">
      {validation ? (
        <>
          <div className="flex justify-center items-center  col-start-5 col-span-4">
            <Image src={successIcon} alt="suuccess Icon" />
          </div>
          <h1 className="row-start-2 col-start-4 col-span-6 flex items-end justify-center  text-3xl">
            THANK YOU!
          </h1>
          <p className="row-start-3 col-start-2 col-span-10 flex items-center justify-center text-lg text-slate-500 ">
            {textSuccess}
          </p>
        </>
      ) : (
        <>
          <div className="col-start-2  col-span-10 row-start-1">
            <p className="p p-1  flex items-end ">CARDHOLDER NAME</p>
            <input
              className="input w-full h-12 rounded-md "
              placeholder="e.g Jane Appleseed"
              onChange={(e) => {
                setCreditDetails({ ...creditDetails, Name: e.target.value });
              }}
            />
          </div>
          <div className="col-start-2  col-span-10 row-start-2">
            <p className="p p-1 flex items-end ">CARD NUMBER</p>
            <input
              className="input w-full h-12 rounded-md "
              placeholder="e.g 1234 5678 9123 0000"
              onChange={(e) => {
                setCreditDetails({
                  ...creditDetails,
                  Number: e.target.value,
                });
              }}
            />
          </div>

          <div className=" col-start-2 col-span-12 row-start-3 row-end-5 grid grid-cols-4 grid-rows-4 gap-2 mt-3    ">
            <p className="p col-start-1 col-span-3 row-start-1 my-4 ">
              EXP. DATE (MM/YY){" "}
            </p>
            <input
              className="input col-start-1 col-span-1 row-start-2  h-10 rounded-md placeholder:p-2"
              placeholder="MM"
              onChange={(e) => {
                setCreditDetails({ ...creditDetails, month: e.target.value });
              }}
            />
            <input
              className="input  col-start-2 col-span-1 row-start-2 h-10 rounded-md placeholder:p-2"
              placeholder="YY"
              onChange={(e) => {
                setCreditDetails({ ...creditDetails, year: e.target.value });
              }}
            />
            <p className="p col-start-3  col-span-2 row-start-1 my-4  ">
              CVC
            </p>
            <input
              className=" input  col-start-3 col-span-2 row-start-2 h-10 rounded-md w-[80%] placeholder:p-2"
              placeholder="e.g. 123"
              onChange={(e) => {
                setCreditDetails({
                  ...creditDetails,
                  threeDigits: e.target.value,
                });
              }}
            />
          </div>
        </>
      )}
      {/* button confirm */}
      <div className="col-start-2 col-end-12 row-start-4 ">
        <button
          onClick={ValidationCreditDetails}
          className="button w-full h-12 rounded-md text-white mt-11 "
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
  )
}

export default page