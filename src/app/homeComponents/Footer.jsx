import assets from "@/assets/allImages";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Footer.css";
import Head from "next/head";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const [bgClass, setBgClass] = useState("light");

  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });

  useEffect(() => {
    if (isLight) setBgClass("light");
    else setBgClass("dark");
  }, [isLight]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </Head>
      <div className={`relative ${bgClass} rounded-t-[30px]`}>
        <Image
          src={isLight ? assets.JustWavingPurple : assets.JustWaving}
          alt="loading.."
          className={`absolute bottom-0 w-full z-20 ${
            isLight ? "h-28" : "h-20"
          } `}
        />
        <div className={`rounded-lg w-fit mx-auto  px-5 sm:px-12 py-16  mt-14 z-10 ${!isLight ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="md:px-5 lg:px-28">
            <div className="m-auto space-y-6 font-semibold">
              <div className="border-2 border-primarybtn rounded-full px-4 py-2 w-fit mx-auto  sm:mx-auto flex justify-center items-center hover:scale-70 transition duration-500 ">
                <Image
                  src={assets.MainLogo}
                  alt="logo interviewExpress"
                  className="m-auto w-30 sm:w-80 "
                />
              </div>
              <ul
                role="list"
                className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
              >
                <li role="listitem">
                  <a href="#" className="text-primary">
                    Home
                  </a>
                </li>
                <li role="listitem">
                  <a href="#" className="text-primary">
                    Features
                  </a>
                </li>
                <li role="listitem">
                  <a href="#" className="text-primary">
                    Get started
                  </a>
                </li>
                <li role="listitem">
                  <a href="#" className="text-primary">
                    About us
                  </a>
                </li>
              </ul>

              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span>
                    <FaFacebook className="fab fa-facebook-f"></FaFacebook>
                  </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span>
                    <FaTwitter className="fab fa-twitter"></FaTwitter>
                  </span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span>
                    <FaSquareInstagram className="fab fa-instagram"></FaSquareInstagram>
                  </span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span>
                    <FaGithub className="fab fa-github"></FaGithub>
                  </span>
                </li>
                <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span>
                    <FaYoutube className="fab fa-youtube"></FaYoutube>
                  </span>
                </li>
              </ul>

              <div className="text-center">
                <span className="text-sm tracking-wide">
                  Copyright © InterviewExpress <span id="year"></span> | All
                  rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
