"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import "./TopicSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { data } from "./dummyTopicsData";
import Image from "next/image";
import assets from "@/assets/allImages";

function TopicSlider(props) {
  const colors = [
    "dsa",
    "webDevelopment",
    "competitive",
    "appDevelopment",
    "machineLearning",
    "dataScience",
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });

  useEffect(() => {
    const fetchData = async () => {
      // fetch data
      // setData(data)
    };

    fetchData();
  }, []);

  return (
    <div className={` ${!isLight ? "text-white" : "text-black"} p-3 bg-none`}>
      <div className="flex justify-center gap-2 items-center px-3">
        <div>
          <p className="text-base sm:text-xl md:text-3xl font-[500] topics-header">
            Complete your learning journey with InterviewExpress !
          </p>
          <p>
            We are dedicated to provide the most concise, but complete courses
            for your tech interviews.
          </p>
        </div>
        <Image src={assets.TechImage2} height={200} width={200} alt="topics" />
      </div>

      {data.map((obj, index) => {
        const { name, img, topics } = obj;

        return (
          <div key={index} className="py-5">
            <div className="flex justify-center gap-3 items-center overflow-visible p-3">

              <p className="font-semibold text-xl">{name}</p>

              <Image
                src={img}
                alt="Loading.."
                width={150}
                height={150}
                loading="lazy"
                className="overflow-hidden rounded-full"
              />
            </div>

            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              showDots={false}
              className="p-2"
            >
              {topics.map((item, ind) => {
                const { title, content, link } = item;

                return (
                  <div
                    className={`flex flex-col justify-between gap-4 py-3 rounded-md items-center p-2 mx-3 light${index % topics.length + 1} topic-card  transition duration-300`}
                    key={ind}
                  >
                    <p className="text-lg font-semibold">{title}</p>
                    <p>{content}</p>
                    <a href={link} className="px-4 py-2 rounded-full border-2 bg-green-700 border-green-700 text-white hover:text-green-700 hover:bg-white transition duration-300">Read more</a>
                  </div>
                );
              })}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
}
export default TopicSlider;
