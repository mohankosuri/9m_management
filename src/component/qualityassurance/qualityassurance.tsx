import React from 'react';

const ListItem = ({ text }:any) => (
  <li className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
    </svg>
    {text}
  </li>
);

export const QualityAssurance = () => {
  return (
    <>
      <div className="bg-gray-400 h-40 w-full">
        <h1 className="font-bold text-5xl pt-6  text-center">Quality Assurance</h1>
        <p className="text-lg font-semibold mt-6 text-center">Home / Quality Assurance</p>
      </div>

      <div className="bg-white p-10">
        <div className="w-full p-4">
          <h1 className="font-bold text-3xl pt-6 mb-3">QUALITY CONTROL</h1>
          <p className="text-lg">The Quality Control policy of 9M is to ensure that the quality of the product is to satisfy the requirements of customer and society according to current good laboratory and manufacturing practices.</p>
          
          <h1 className="font-bold text-3xl pt-6 mb-3">Quality Objectives:</h1>
          <ul className="list-decimal list-inside">
            <ListItem text="To manufacture the product remembering the requirements of customer and society." />
            <ListItem text="To achieve the quality with current Good Manufacturing and Laboratory practices." />
            <ListItem text="To maintain the work place and environment neat and clean." />
            <ListItem text="To apply the corrective changes for implementing the system." />
          </ul>
          
          <h1 className="font-bold text-3xl pt-6 mb-3">Responsibility of Quality Assurance:</h1>
          <ul className="list-decimal list-inside">
            <ListItem text="To authorize the written procedures and other documents including amendments." />
            <ListItem text="To follow the current Good Laboratory practices." />
            <ListItem text="To monitoring the compliance of the quality of product with cGMP requirements." />
            <ListItem text="Rejection / monitoring and approvals of supplier’s materials." />
            <ListItem text="Rejection / monitoring and approvals of manufacturers and suppliers." />
            <ListItem text="Inspect and analyze the received materials and manufactured goods as per written specifications and STPs." />
            <ListItem text="Validation of processes and calibration of measuring instruments and devices." />
            <ListItem text="Maintain the Hygienic condition in work place and laboratory areas." />
            <ListItem text="Monitor and control of manufacturing environment." />
            <ListItem text="Conduct the stability testing as per procedure." />
            <ListItem text="Control of Documentation and records." />
            <ListItem text="Handling the complaints of products." />
            <ListItem text="Planning of environment control and standardization of working standards and solution." />
            <ListItem text="Inspection and records of control samples." />
            <ListItem text="Take corrective and preventive action in favour of quality of the products and received materials." />
            <ListItem text="Monitoring and signing on MPCR and BPCR." />
          </ul>
          
          <h1 className="font-bold text-3xl pt-6 mb-3">Elements of Quality Assurance System:</h1>
          <ul className="list-decimal list-inside">
            <ListItem text="Organization." />
            <ListItem text="Quality control resources." />
            <ListItem text="Quality Management procedure and documents." />
          </ul>
        </div>
      </div>
    </>
  );
};


