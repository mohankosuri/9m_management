import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CourseInstructor = () => {
  const cardData = [
    {
      id: 1,
      name: "Mr. Manish Agrawal",
      imageSrc: "ui-ux designer.jpg",
      role: "Managing Director",
    },
    {
      id: 2,
      name: "Mr. Ankit Agrawal",
      imageSrc: "ui-ux2.jpg",
      role: "Director",
    },
    {
      id: 3,
      name: "Mr. Vinay Agrawal",
      imageSrc: "ui-ux designer.jpg",
      role: "Director",
    },
    {
      id: 4,
      name: "Ms. Gajal Agrawal",
      imageSrc: "ui-ux designer.jpg",
      role: "Chief Finance Officer",
    },
    {
      id: 5,
      name: "Mrs. Khushbu Agrawal",
      imageSrc: "ui-ux2.jpg",
      role: "Director",
    },
  ];

  const [showIcons, setShowIcons] = useState([{}]);

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

  const handleMouseEnter = (id:any) => {
    setShowIcons((prevIcons) => ({
      ...prevIcons,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id:any) => {
    setShowIcons((prevIcons) => ({
      ...prevIcons,
      [id]: false,
    }));
  };

  

   
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
          MANAGEMENT
        </h2>
        <h1 className="text-4xl font-bold ml-10 mb-3 font-sans">
          Meet Our Management
        </h1>
        <p className="text-lg mx-[100px]">It is very well known fact that the upbringing and background of the promoter is the most important aspect responsible for a successful enterprise. The abilities, efforts, sincerity, and hard work of an entrepreneur can totally change the shape and scene of any enterprise. Key to any successful business is its strong promoter and professional management with a clear vision, focused activities and dare to dream.</p>
      </div>
      <div>
        <div className="container mt-4">
          <Slider {...slickSettings}>
            {cardData.map((item) => (
              <div
                key={item.id}
                className="p-4 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-[350px] flex flex-col">
                    <div className="card-content">
                      <img
                        src={item.imageSrc}
                        alt={`Card ${item.id}`}
                        className="object-cover transition-transform transform rounded-full w-40 h-40 ml-[60px]"
                      />
                      {showIcons[item.id] && (
                        
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4">
                          <Link href="#">
                            <BiLogoFacebook className="h-9 w-9 p-2 hover:bg-red-400 rounded-3xl hover:text-white" />
                          </Link>
                          <Link href="#">
                            <BiLogoLinkedin className="h-9 w-9 p-2 hover:bg-red-400 rounded-3xl hover:text-white" />
                          </Link>
                          <Link href="#">
                            <CiTwitter className="h-9 w-9 p-2 hover:bg-red-400 rounded-3xl hover:text-white" />
                          </Link>
                          <Link href="#">
                            <FaPinterestP className="h-9 w-9 p-2 hover:bg-red-400 rounded-3xl hover:text-white" />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mt-6">
                      <div className="text-lg text-black text-center">
                        {item.name}
                      </div>
                      <div className="font-bold text-sm text-red-500 text-center">
                        {item.role}
                      </div>
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
