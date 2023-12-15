"use client"
import './LogoTransition.css'
import assets from '@/assets/allImages';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LogoTransition = ({screenRatio}) => {
  const [flag,setFlag] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() =>{
      setFlag(true);
    } , 700)
  })

  return (
    <div className="container relative w-[100vw] h-[100vh] flex justify-center items-center">
      {flag && <div className='flex justify-center items-center'><div className='absolute text-box text-xs font-bold text-center'>Take a journey</div></div>}
      {flag && <Image className="absolute colorChangeDiv  images shadow-md rounded-full px-6  w-control w-[70%]  z-10 bg-white border-2 border-[#7e30e1]" src={assets.MainLogo}  alt="Your Image" />}
      {!flag && <Image className="absolute transition  shadow-md rounded-full px-6 bouncingDiv  w-control w-[70%]  z-10 bg-white border-2 border-[#7e30e1] " src={assets.MainLogo}  alt="Your Image" />}
    </div>
  );
};

export default LogoTransition;
