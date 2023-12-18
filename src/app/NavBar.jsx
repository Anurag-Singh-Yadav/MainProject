"use client";
import React, { useState } from "react";
import "./NavBar.css";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Signup from "./Signup/Signup";
export default function NavBar() {
  const [showBanner, setShowBanner] = useState(true);
  const [signInBtn, setSignInBtn] = useState(false);
  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });
  return (
    <div>
      {
        signInBtn && <div className="absolute w-full z-50 py-2 bg-red-100 h-[100wh] popup"><Signup setSignInBtn={setSignInBtn}/></div>
      }

      {showBanner && !isLogin && (
        <div className="w-full h-10 top-banner flex justify-center text-center items-center">
          <marquee direction="right">
            Crack the code, unlock your dream career
          </marquee>
          <MdClose
            className="text-2xl mr-3 hover:bg-slate-500 cursor-pointer"
            onClick={(e) => {
              setShowBanner(false);
            }}
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-4 bg-red-400 py-1 navbar items-center">

        <div className="flex justify-around items-center col-span-2">
          <div className="flex justify-center items-center gap-3"><span>RoadMap</span> <RiArrowDropDownLine /></div>
          <div className="flex justify-center items-center gap-3"><span>Tutorials</span> <RiArrowDropDownLine /></div>
          <div className="flex justify-center items-center gap-3"><span>Practice</span> <RiArrowDropDownLine /></div>
        </div>

        <p className="mx-auto py-2 col-span-2 rounded-lg border font-bold text-2xl font-serif px-4">
          InterviewExpress
        </p>

        <div className="flex justify-end pr-4 items-center col-span-2">
          <IoSearchOutline className="mx-4" />
          <div className="pr-4">{!isLight ? <MdSunny /> : <IoMdMoon />}</div>
          <button className="px-4 bg-red-200 py-2 " onClick={()=>setSignInBtn(true)}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
