"use client";

import LogoTransition from "./homeComponents/LogoTransition";
import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";

import { toggleLight } from "./GlobalRedux/Features/GlobalStateSlice";

import "./page.css";

export default function Home() {
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  })

  console.log(isLight);

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFlag(true);
      }, 3000);
    };
    timer();
  }, []);

  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('fadeInDiv').classList.add('active');
    }, 3100);
  });
  
  return (
    <div>
      {flag && (
        <div id="fadeInDiv" className="body-background min-h-screen fade-in">
          {/* <LogoTransition screenRatio = {screenRatio}></LogoTransition> */}

          <div>
            {/* navbar */}
            <div className="w-full h-10 top-banner flex justify-center text-center items-center ">
              <marquee direction="right">
                Crack the code, unlock your dream career
              </marquee>
            </div>

            <div className="bg-white flex flex-wrap justify-between items-center">
              <button onClick={()=>{
                dispatch(toggleLight());
              }}>Toggle</button>
              <div>
                <video autoPlay width="500" loop muted>
                  <source src="hero-globe.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
      {!flag && <LogoTransition />}
    </div>
  );
  
}
