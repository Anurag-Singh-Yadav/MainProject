"use client"
import './LogoTransition.css'
import assets from '@/assets/allImages';
import Image from 'next/image';

const LogoTransition = ({screenRatio}) => {
  return (
    <div className="container relative w-[100vw] h-[100vh] flex justify-center items-center">
      <Image className="absolute images w-64" src={assets.MainLogo}  alt="Your Image" />
    </div>
  );
};

export default LogoTransition;
