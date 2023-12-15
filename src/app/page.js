import LogoTransition from "./homeComponents/LogoTransition";
import { useEffect, useState } from "react";
export default function Home() {
  const [screenRatio, setScreenRatio] = useState(0);

  useEffect(() => {
    // Function to calculate and log the viewport ratio
    const calculateViewportRatio = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ratio = width / height;
      setScreenRatio(ratio);
      console.log(`Viewport Width: ${width}px`);
      console.log(`Viewport Height: ${height}px`);
      console.log(`Viewport Ratio: ${ratio}`);
    };

    // Calculate and log the initial viewport ratio
    calculateViewportRatio();

    // Add event listener for window resize to recalculate ratio
    window.addEventListener("resize", calculateViewportRatio);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateViewportRatio);
    };
  }, []);
  return (
    <div className="">
      <LogoTransition screenRatio = {screenRatio}></LogoTransition>
    </div>
  );
}
