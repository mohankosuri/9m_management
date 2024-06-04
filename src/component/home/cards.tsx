import React from "react";

export const Part2 = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: "stu11.jpg",
      content: "Card 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageSrc: "tech1.jpg",
      content: "Card 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageSrc: "tech2.jpg",
      content: "Card 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <>
    {/* <div className="course-div2">
         <div className="course-sub-container">
      <div className="course-data">
        {cardData.map((item) => (
          <div key={item.id} className="cards-width">
            <div className="relative">
             <div className="card-background">
              <div className="card-content">
                <img
                  src={item.imageSrc}
                  alt={`Card ${item.id}`}
                  className="card-image"
                />
              </div>
                 <p className="mt-4">{item.content}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div> */}
    </>
  );
};



