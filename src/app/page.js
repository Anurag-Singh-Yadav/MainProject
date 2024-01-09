"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./page.css";
import ReviewCard from "./homeComponents/ReviewCard";
import TopicSlider from "./homeComponents/TopicSlider";
import TechnicalSkills from "./homeComponents/TechnicalSkills";
import InterviewExperi from "./homeComponents/InterviewExperi";
import AboutCards from "./homeComponents/AboutCards";
import Footer from "./homeComponents/Footer";
import TopCompany from "./homeComponents/TopCompany";
 
export default function Home() {
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(function () {
        let b = document.getElementsByClassName("fadeInDiv");
        for (let i = 0; i < b.length; i++) {
          b[i].classList.add('active');
        }
        
      }, 2200);
    }
  }, []);

  return ( 
    <div className={`${isLight ? 'lightBg' : 'darkBg'} p-2 transition duration-1000 `}>
   
        <div className="body-background min-h-screen fade-in fadeInDiv">
            <div className="flex justify-between items-center px-16 container-1 bg-white">
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
            {isLight && (
              <video autoPlay width="500" loop muted>
                <source src="hero-globe.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {!isLight && (
              <video autoPlay width="500" loop muted>
                <source src="hero-globe-dark.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
            </div>
            <TopCompany></TopCompany>
            <TechnicalSkills></TechnicalSkills>
            <TopicSlider />
            <InterviewExperi></InterviewExperi>
            <ReviewCard></ReviewCard>
            <AboutCards />
            <Footer />
        </div>
    </div>
  );
  
}