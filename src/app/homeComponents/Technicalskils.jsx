import React from "react";
import './Technicalskills.css'
import IDE from "../technicalskillscomponents/IDE";
import './TechnicalSkills.css'
import Concept from "../technicalskillscomponents/Concept";
function Technicalskils() {
  return (
    <div>
      <div className="flex justify-center items-center technical1 font-semibold md:font-bold  text-3xl md:text-6xl py-2 skew-x-3">Technical Junction</div>
      
      <div className="technical2 flex justify-center items-center text-xl md:text-3xl px-4">Navigating Tech Challenges with Interview Express</div>

      <div className="technical3 font-normal text-xl mx-4 pb-4">Embrace the challenges, for in every tech puzzle lies an opportunity to shine. Navigating tech challenges with <span className="text-primarybtn font-bold text-2xl md:text-3xl italic cursor-pointer hover:underline hover:text-dark4">Interview Express</span> is not just a journey; it's a path to your ultimate success. So, gear up, tackle those complexities, and let your brilliance light the way to a brighter future.</div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <IDE></IDE>

        <div className="md:h-[100%] h-[900px] ml-1 md:ml-3 grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div className="relative bg-dark1 rounded-md hover:cursor-pointer hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Concept
                title={"Programming"}
                icon={"1"}
              ></Concept>
            </div>
            <div className="relative bg-dark2 rounded-md hover:cursor-pointer hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Concept
                title={"Data Structures"}
                icon={"2"}
              ></Concept>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            <div className="relative bg-dark3 rounded-md hover:cursor-pointer hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Concept
                title={"Advanced Topics"}
                icon={"3"}
              ></Concept>
            </div>
            <div className="relative bg-dark4 rounded-md hover:cursor-pointer hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Concept
                title={"Numbers Theory"}
                icon={"4"}
              ></Concept>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technicalskils;