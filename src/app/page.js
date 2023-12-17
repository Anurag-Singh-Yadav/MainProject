"use client";
import LogoTransition from "./homeComponents/LogoTransition";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLight } from "./GlobalRedux/Features/GlobalStateSlice";

import "./page.css";

export default function Home() {
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });

  console.log(isLight);

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFlag(true);
      }, 3000);
    };
    timer();
  }, []);

  useEffect(() => {
    // Check if window is defined before using it
    if (typeof window !== "undefined") {
      setTimeout(function () {
        document.getElementById("fadeInDiv").classList.add("active");
      }, 3100);
    }
  }, []);

  return ( 
    <div>
      {flag && (
        <div id="fadeInDiv" className="body-background min-h-screen fade-in">
            <div className="bg-white flex justify-between items-center px-16 container-1">
              <div className="">
                <div className="">Boost your dream career with Us</div>
                <button className="bg-primarybtn flex px-4 py-1 my-3 getStarted">
                  <span>Get Started</span>
                  <div className=" pl-2 pt-2">
                    <svg className="arrows" viewBox="0 0 60 72" width="15" height="20" >
                      <path className="a1" d="M0 0 L30 32 L60 0"></path>
                      <path className="a2" d="M0 20 L30 52 L60 20"></path>
                      <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div>
                <video autoPlay width="500" loop muted>
                  <source src="hero-globe.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
        </div>
      )}
      {!flag && <LogoTransition />}
    </div>
  );
  
}
