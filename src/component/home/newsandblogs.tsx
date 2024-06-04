import React from "react";
import { SlCalender } from 'react-icons/sl';

export const NewsandBlogs = () => {
  const cardData = [
    {
      id: 1,
      name: "Education",
      heading: "Join ATD 2021 International Conference & Export",
      imageSrc: "mobie2.jpg",
      content: "Explore all of our courses and pick your suitable ones to enroll and start learning",
    },
    {
      id: 2,
      name: "Education",
      heading: "Join ATD 2021 International Conference & Export",
      imageSrc: "mobie2.jpg",
      content: "Explore all of our courses and pick your suitable ones to enroll and start learning",
    },
    {
      id: 3,
      name: "Education",
      heading: "Join ATD 2021 International Conference & Export",
      imageSrc: "mobie2.jpg",
      content: "Explore all of our courses and pick your suitable ones to enroll and start learning",
    },
  ];

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center">EVENTS & BLOGS</h2>
        <h1 className="text-3xl font-bold text-center">Our EVENTS</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {cardData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={item.imageSrc}
              alt={`Card ${item.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600">{item.name}</p>
              <p className="text-lg font-semibold">{item.heading}</p>
              <p className="text-gray-700 mt-2">{item.content}</p>
              <div className="flex items-center mt-4">
                <SlCalender className="text-red-400 w-6 h-6" />
                <h3 className="text-sm text-red-500 ml-2">2021-05-06</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
