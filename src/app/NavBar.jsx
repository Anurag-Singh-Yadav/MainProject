"use client";
import React, { useState } from "react";
import "./NavBar.css";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
export default function NavBar() {
  const [showBanner, setShowBanner] = useState(true);
  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });
  const [query, setQuery] = useState("");
  return (
    <div>
      {showBanner && !isLogin && (
        <div className="w-full h-10 top-banner flex justify-center text-center items-center ">
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
      {/* navbar */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-4 bg-red-400 py-2 navbar text-xl font-semibold items-center">

        <div className="flex justify-around items-center col-span-2">
          <div>Roadmap</div>
          <div>Tutorials</div>
          <div>Practice</div>
        </div>

        <div className="w-48 mx-auto col-span-2 rounded-lg border font-bold text-2xl font-serif">
          InterviewExpress
        </div>

        <div className="flex justify-end pr-4 items-center col-span-2">
          <IoSearchOutline className="mx-4" />
          <div className="pr-4">{!isLight ? <MdSunny /> : <IoMdMoon />}</div>
          <button className="px-4 bg-red-200 py-2 ">Sign In</button>
        </div>
      </div>
    </div>
  );
}
