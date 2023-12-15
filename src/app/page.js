"use client";

import LogoTransition from "./homeComponents/LogoTransition";
import { useEffect, useState } from "react";
export default function Home() {
  const [screenRatio, setScreenRatio] = useState(0);

  useEffect(() => {
    // Function to calculate and log the viewport ratio
    const calculateViewportRatio = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ratio = w / h;
      setScreenRatio(ratio);
      console.log(`Viewport Width: ${w}px`);
      console.log(`Viewport Height: ${h}px`);
      console.log(`Viewport Ratio: ${ratio}`);
    };

    calculateViewportRatio();
    window.addEventListener("resize", calculateViewportRatio);
    return () => {
      window.removeEventListener("resize", calculateViewportRatio);
    };
  }, []);
  return (
    <div className="body-background min-h-screen">
      {/* <LogoTransition screenRatio = {screenRatio}></LogoTransition> */}

      <div>
        {/* navbar */}
        <div className="w-full h-10 top-banner flex justify-center text-center items-center ">
          <marquee direction="right">
            Crack the code, unlock your dream career
          </marquee>
        </div>

        <div className="bg-white flex flex-wrap justify-between items-center">
        <div>
            
        </div>
          <div>
            <video autoPlay width="500" loop muted>
              <source src="hero-globe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
