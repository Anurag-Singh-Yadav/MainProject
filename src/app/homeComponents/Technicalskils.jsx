import React from "react";
import IDE from "../technicalskillscomponents/IDE";
import Concept from "../technicalskillscomponents/Concept";
function Technicalskils() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <IDE></IDE>

      <div className="md:h-[100%] h-[900px] ml-1 md:ml-3 grid grid-cols-1 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">

          <div className="relative bg-light1">
            <Concept
              bgColor={"light1"}
              title={"Programming"}
              icon={"1"}
            ></Concept>
          </div>
          <div className="relative bg-light2">
            <Concept
              bgColor={"light2"}
              title={"Data Structures"}
              icon={"2"}
            ></Concept>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">

          <div className="relative bg-light3">
            <Concept
              bgColor={"light4"}
              title={"Advanced Topics"}
              icon={"3"}
            ></Concept>
          </div>
          <div className="relative bg-light4">
            <Concept
              bgColor={"light4"}
              title={"Numbers Theory"}
              icon={"4"}
            ></Concept>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technicalskils;
