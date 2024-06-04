import React from "react";

export const Part4 = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: "powder.svg",
      heading: "ORAL POWDER",
      description: "Oral powders are preparations consisting of solid, loose, dry particles of varying degrees of fineness. They contain one or more active ingredients..."
    },
    {
      id: 2,
      imageSrc: "liq.svg",
      heading: "ORAL LIQUID AND EXTERNAL LIQUID",
      description: "Oral powders are preparations consisting of solid, loose, dry particles of varying degrees of fineness. They contain one or more active ingredients..."
    },
    {
      id: 3,
      imageSrc: "cream.svg",
      heading: "EXTERNAL SEMI-SOLID OINTMENT & CREAM",
      description: "Pharmaceutical preparations for treatment of conditions such as rashes, skin irritation, stings, fungal infections, etc..."
    },
    {
      id: 4,
      imageSrc: "pare.svg",
      heading: "SMALL VOLUME PARENTERALS",
      description: "Parenteral Preparations are the preparations intended for administration by injections, infusions or implementations into the body and directly..."
    },
  ];

  return (
    <>
      <h1 className="clients-heading">OUR PRODUCTS</h1>
      <div className="products-div">
        {cardData.map((item) => (
          <div key={item.id} className="products-cards-div">
            <div className="product-cards">
              <div className="product-img-background">
                <img
                  src={item.imageSrc}
                  alt={`Card ${item.id}`}
                  className="h-16 w-20"
                />
              </div>
              <div className="product-content-div">
                <p className="font-bold">{item.heading}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



