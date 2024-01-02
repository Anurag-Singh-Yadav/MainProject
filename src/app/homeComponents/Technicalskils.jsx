import React from "react";
import './Technicalskills.css'
import IDE from "../technicalskillscomponents/IDE";
import Concept from "../technicalskillscomponents/Concept";
function Technicalskils() {
  return (
    <div>
      <div className="flex justify-center items-center technical1 font-semibold md:font-bold text-primarybtn text-3xl md:text-6xl py-2 md:py-3">Technical Junction</div>
      <div className="technical2 my-2 flex justify-center items-center text-xl md:text-3xl py-2 px-4">Navigating Tech Challenges with Interview Express</div>
      <div>Embrace the challenges, for in every tech puzzle lies an opportunity to shine. Navigating tech challenges with Interview Express is not just a journey; it's a path to your ultimate success. So, gear up, tackle those complexities, and let your brilliance light the way to a brighter future.</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <IDE></IDE>

        <div className="md:h-[100%] h-[900px] ml-1 md:ml-3 grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            <div className="relative bg-light1 rounded-md">
              <Concept
                bgColor={"light1"}
                title={"Programming"}
                icon={"1"}
              ></Concept>
            </div>
            <div className="relative bg-light2 rounded-md">
              <Concept
                bgColor={"light2"}
                title={"Data Structures"}
                icon={"2"}
              ></Concept>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            <div className="relative bg-light3 rounded-md">
              <Concept
                bgColor={"light4"}
                title={"Advanced Topics"}
                icon={"3"}
              ></Concept>
            </div>
            <div className="relative bg-light4 rounded-md">
              <Concept
                bgColor={"light4"}
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