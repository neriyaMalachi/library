"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png';
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const Futer = () => {
  const router = useRouter();

  return (
    <div className='flex w-full bg-gray-300 rounded-md h-20 items-center justify-start p-2  ' >
     
        <div className='flex justify-between w-24'>

        <FaWhatsapp />
        <FaYoutube />
        <FaLinkedin />
        </div>
        </div>
  )
}

export default Futer