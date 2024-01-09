import React from "react";
import indianCricketers from "../../../public/dummyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const ReviewCard = () => {
  const responsive = {
    superLargeDesktop: {
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
  return (
    <div className="overflow-x-hidden overflow-y-clip mb-3 pt-3 h-fit">
      <div className="flex justify-center items-center font-serif font-normal sm:font-medium md:font-lg lg:font-bold text-xl sm:text-2xl md:text-3xl py-4">
        Visitor Reviews
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
      >
        {indianCricketers.map((review, index) => (
          <div
            key={index}
            className="mb-7 hover:scale-105 transition-transform duration-2000 px-4"
          >
            <div className="border-[2px] border-emerald-200 bg-light5 text-dimWhite rounded-md min-h-[250px] cursor-pointer px-4 py-3">
              <div className="flex  justify-start gap-2 items-center mb-3">
                <Image
                  src={review.imageUrl}
                  className="h-[70px] rounded-full border border-emerald-200  aspect-square"
                  alt={review.name}
                  width={70}
                  height={200}
                />
                <div className="md:text-2xl md:font-semibold text-yellow-300">
                  {review.name}
                </div>
              </div>
              <div>{review.description}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCard;
