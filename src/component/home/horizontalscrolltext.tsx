import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const HorizontalScrollText = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: "india-flag.avif",
    },
    {
      id: 2,
      imageSrc: "india-flag.avif",
    },
    {
      id: 3,
      imageSrc: "afgnstn-flag.jpg",
    },
    {
      id: 4,
      imageSrc: "india-flag.avif",
    },
    {
      id: 5,
      imageSrc: "india-flag.avif",
    },
    {
      id: 6,
      imageSrc: "flag12.webp",
    },
  ];

   

  const CustomPrevArrow = (props:any) => (
    <div
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      style={{ left: "-30px", zIndex: 1 }}
    >
      <FaArrowLeft className="text-3xl text-gray-500" />
    </div>
  );
  
  const CustomNextArrow = (props:any) => (
    <div
      className="slick-arrow slick-next"
      onClick={props.onClick}
      style={{ right: "-30px", zIndex: 1 }}
    >
      <FaArrowRight className="text-3xl text-gray-500" />
    </div>
  );
  

   
  const slickSettings = {
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 3,  
    slidesToScroll: 1,  
    prevArrow: <CustomPrevArrow />,  
    nextArrow: <CustomNextArrow />,  
  };

  

  return (
    <div className="p-[100px]">
      <div className="container text-center">
        <h2 className="font-bold text-black text-center text-lg mb-2">
        CLIENTS
        </h2>
        <h1 className="text-4xl font-bold ml-10 mb-3 font-sans">
        Collaboration with clients across the countries
        </h1>
      </div>
      <div>
        <div className="container mt-4">
          <Slider {...slickSettings}>
            {cardData.map((item) => (
              <div
                key={item.id}
                className="p-4 cursor-pointer"
                 
              >
                <div className="relative">
                  <div className="bg-white rounded-lg  p-6 h-[200px] flex flex-col">
                    <div className="card-content">
                      <img
                        src={item.imageSrc}
                        alt={`Card ${item.id}`}
                        className="object-cover transition-transform transform rounded-full w-40 h-40 ml-[60px]"
                      />
                       
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
