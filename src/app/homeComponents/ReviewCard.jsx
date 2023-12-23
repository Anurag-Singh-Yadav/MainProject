import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import indianCricketers from "../../../public/dummyData";
const ReviewCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    cssEase: "linear",
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <div>Review of my website</div>
      <div>
        <Slider {...settings}>
          {indianCricketers.map((review, index) => (
            <div key={index} className="slider-item min-h-fit bg-primarybtn text-white px-2 mx-6">
              <div className="flex justify-start gap-2 items-center">
                <img
                  src={review.imageUrl}
                  className="h-[80px] rounded-full"
                  alt={review.name}
                />
                <div>{review.name}</div>
              </div>
              
              <div>{review.description}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewCard;
