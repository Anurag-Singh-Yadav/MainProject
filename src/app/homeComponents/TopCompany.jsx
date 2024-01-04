import React from "react";
import Image from "next/image";
import assets from "@/assets/allImages";
import { useSelector } from "react-redux";
function TopCompany() {
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });
  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-2 items-center font-serif text-4xl pl-2 pt-2 rounded-md bg-primarybtn">
        <div className="font-semibold flex justify-end items-center text-white pb-2">Top Tech Companies</div>
        <div className={`text-primarybtn font-bold rounded-tl-[110px] pl-6 pr-2 ${isLight ? 'bg-dimWhite' : 'bg-black text-white'}`}>Hire Students</div>
      </div>
      <div className="flex flex-wrap gap-4 px-8 justify-evenly items-center my-3">
        <Image src={assets.microsoft} width={144} height={36} alt="microsoft" />
        <Image src={assets.google} width={144} height={36} alt="google" />
        <Image src={assets.amazon} width={144} height={36} alt="amazon" />
        <Image src={assets.facebook} width={144} height={36} alt="facebook" />
        <Image src={assets.gs} width={144} height={36} alt="goldmansachs" />
        <Image src={assets.netflix} width={144} height={36} alt="netflix" />
        <Image src={assets.samsung} width={144} height={36} alt="samsung" />
      </div>
    </div>
  );
}

export default TopCompany;
