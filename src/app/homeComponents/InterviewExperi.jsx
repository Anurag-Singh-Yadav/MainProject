import React from "react";
import "./TechnicalSkills.css";
import interviewData from "../../../public/interviewData";
import InterviewCard from "../Interviewcomponents/InterviewCard";
function InterviewExperi() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-4 justify-between items-center px-4 md:px-8 py-2">
        <div className="col-span-3">
          <div className="px-4 mx-2 font-bold text-xl pb-4 sm:text-3xl md:text-4xl">
            Most Recent Interview <span className="technical1">Experience</span>
            ...🚀
          </div>
          <div className="px-4 col-span-1 font-sans font-medium sm:text-xl text-normal">
            Keep Your Edge Sharp: Read and Learn from Diverse Interview
            Journeys.
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <button className="px-4 py-2 bg-[#7043e3] rounded-lg font-bold text-white hover:border-[2px] hover:bg-[#c8b3fc] hover:text-primarybtn hover:border-primarybtn">
            Read more...
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 px-2 md:px-4 gap-3 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <InterviewCard
            key={i}
            name={interviewData[i].name}
            userPhoto={interviewData[i].userPhoto}
            company={interviewData[i].company}
            linkedin_id={interviewData[i].linkedin_id}
            created_on={interviewData[i].created_on}
            selected={interviewData[i].selected}
            position={interviewData[i].position}
            round={interviewData[i].round}
            company_logo={interviewData[i].company_logo}
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewExperi;
