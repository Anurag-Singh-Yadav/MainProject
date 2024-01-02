"use client";
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Signup from "./Signup/Signup";
import LogoTransition from "./homeComponents/LogoTransition";
import {toggleLight} from './GlobalRedux/Features/GlobalStateSlice.js'



const roadMaps = ['DSA' , 'Web Development' , 'App Development' ]
const tutorials = ['DSA' , 'Web Development' , 'App Development']
const practice = ['Mock Interview' , 'DSA round' , 'Aptitude questions']


export default function NavBar() {

  const [flag, setFlag] = useState(false);


  const [showBanner, setShowBanner] = useState(true);
  const [signInBtn, setSignInBtn] = useState(false);
  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFlag(true);
      }, 2000);
    };
    timer();

    let b = document.getElementById('navBar')

    if(isLight){
      b.classList.remove('darkBg');
      b.classList.add('lightBg');
    }
    else{
      b.classList.remove('lightBg');
      b.classList.add('darkBg');
    }

  }, [isLight]);


  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggleLight());
  }

  const [roadmapFlag , setRoadMapFlag] = useState(false)
  const [tutorialFlag , setTutorialFlag] = useState(false)
  const [practiceFlag , setPracticeFlag] = useState(false)


  let firstFlag = true , secondFlag = true , thirdFlag = true;


  return (
    <div>


      {!flag && <LogoTransition />}

      {signInBtn && (
        <div className="absolute w-full z-50 py-2 h-full popup">
          <Signup setSignInBtn={setSignInBtn} />
        </div>
      )}

      <div className="fade-in fadeInDiv">
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

        <div id="navBar" className={`grid grid-cols-1 md:grid-cols-6 gap-6 px-4  py-1 navbar items-center transition duration-1000  `}>
          <div className="flex justify-around items-center col-span-2">
            <div className="flex justify-center items-center relative" onMouseEnter={() => {firstFlag = true; setTimeout(()=>{if(firstFlag)setRoadMapFlag(true);} , 200)}} onMouseLeave={() => { firstFlag = false; }} >
              <span>RoadMap</span> <RiArrowDropDownLine />
              {
              roadmapFlag && 
              <div className="flex flex-col absolute top-0 pt-10 font-semibold " onMouseLeave={() => setRoadMapFlag(false)}>
                {
                  roadMaps.map((obj , index) => {
                      return <p className=" hover:cursor-pointer border-y bg-[#e5e5f7] border-[#ffffffff] px-3 py-1 rounded-md" name={obj} onClick={() => {  }} key={index}>{obj}</p>
                  })
                }
              </div>}
            </div>
            <div className="flex justify-center items-center relative" onMouseEnter={() => {secondFlag = true; setTimeout(()=>{if(secondFlag)setTutorialFlag(true);} , 200)}} onMouseLeave={() => { secondFlag = false; }} >
              <span>Tutorials</span> <RiArrowDropDownLine />

              {
              tutorialFlag && 
              <div className="flex flex-col absolute border-1 border-black -top-0 pt-10  font-semibold " onMouseLeave={()=>setTutorialFlag(false)}>
                {
                  tutorials.map((obj , index) => {
                      return <p className=" hover:cursor-pointer border-y bg-[#e5e5f7] border-[#ffffffff] px-3 py-1 rounded-md" name={obj} onClick={() => {  }} key={index}>{obj}</p>
                  })
                }
              </div>}

            </div>
            <div className="flex justify-center items-center relative" onMouseEnter={() => {thirdFlag = true;setTimeout(()=>{if(thirdFlag)setPracticeFlag(true);} , 200)}} onMouseLeave={() => { thirdFlag = false; }} >
              <span>Practice</span> <RiArrowDropDownLine />

              {
              practiceFlag && 
              <div className="flex flex-col absolute border-1 border-black -top-0 pt-10 font-semibold " onMouseLeave={()=>setPracticeFlag(false)}>
                {
                  practice.map((obj , index) => {
                      return <p className=" hover:cursor-pointer border-y bg-[#e5e5f7] border-[#ffffffff] px-3 py-1 rounded-md" name={obj} onClick={() => {  }} key={index}>{obj}</p>
                  })
                }
              </div>}

            </div>
          </div>

          <p className="mx-auto py-2 col-span-2 rounded-lg border font-bold text-2xl font-serif px-4">
            InterviewExpress
          </p>

          <div className="flex justify-end pr-4 items-center col-span-2">
            <IoSearchOutline className="mx-4" />
            <div className="pr-4" onClick={toggleHandler}>{!isLight ? <MdSunny className=" hover:cursor-pointer"/> : <IoMdMoon className=" hover:cursor-pointer"/>}</div>
            <button
              className="px-4 bg-red-200 py-2 "
              onClick={() => setSignInBtn(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
