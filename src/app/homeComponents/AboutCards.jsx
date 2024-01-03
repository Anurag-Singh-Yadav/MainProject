"use client"

import React from "react";
import FlipCard from "./flipCard";
import assets from "@/assets/allImages";
import './AboutCards.css'
import Image from "next/image";

function AboutCards() {
  return (
    <div className="py-4 flex flex-col justify-between items-center gap-4">
     <div className="flex justify-center gap-2 items-center">
     <p className="font-bold text-center text-2xl">Exciting features</p>
      <Image src={assets.exciting} alt={'loadig..'} height={100} width={100} />
     </div>
     <p className="text-center font-semibold">Get used to our daily challenges, well curated dsa sheets, and Interview-crash course based on latest reviews of aspirants across the country.</p>
      <div className=" w-[80%] sm:w-full parent-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        <FlipCard img={assets.challengeYourself2} text={"Deep dive your leaning journey and compete with your colleagues with our exciting challenges."} />
        <FlipCard img={assets.problemSolving} text={"Boost your problem solving with our concisely curated problem sheets."} />
        <FlipCard img={assets.InterviewExperience} text={"Get interview experience of thousands of aspirants."} />
      </div>
    </div>
  );
}

export default AboutCards;
