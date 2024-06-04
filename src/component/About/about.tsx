
import React,{useState} from "react";
import {BiLogoFacebook} from "react-icons/bi";
import {BiLogoLinkedin} from "react-icons/bi";
import {CiTwitter} from 'react-icons/ci';
import {FaPinterestP} from 'react-icons/fa';
import Link from "next/link";
import { CourseInstructor } from "../home/courseinstructor";
 

export const About = () => {
    const cardData = [
        {
          id: 1,
          name:"Mr. Manish Agrawal",
          imageSrc: "ui-ux designer.jpg",
          role:"Managing Director",
        },
        {
          id: 2,
          name:"Mr. Ankit Agrawal",
          imageSrc: "ui-ux2.jpg",
          role:"Director",
        },
        {
          id: 3,
          name:"Mr. Vinay Agrawal",
          imageSrc: "ui-ux designer.jpg",
          role:"Director",
        },
        {
          id: 4,
          name:"Ms. Gajal Agrawal",
          imageSrc: "ui-ux designer.jpg",
          role:"Chief Finance Officer",
        },
        {
          id: 5,
          name:"Mrs. Khushbu Agrawal",
          imageSrc: "ui-ux2.jpg",
          role:"Director",
        },
      ];
      const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <div className='bg-gray-400 h-40 w-full '>
      <h1 className='font-bold text-5xl pt-6  text-center'>About Us</h1>
      <p className='text-lg font-semibold mt-6 text-center '>Home / About</p>
      </div>
      <div className="flex flex-wrap bg-gray-100 ">
    <div className="w-full md:w-2/3 p-4">
      <div className="text-center md:text-left mt-10">
        <span className='text-black font-bold text-3xl ml-10 font-sans'>About 9M</span>
       
        <p className="text-lg ml-12 mt-4">
        9M as an organization has been established with the purpose of Respecting Life’s and to make healthcare more affordable locally and globally. Driven by the same objective, 9M has established first of its kind state-of-art infrastructure facility for Pharmaceutical Formulation with fully equipped in house analytical laboratory in the state of Chhattisgarh, India complying WHO & GMP Norms. The manufacturing facility is located near industrial area of Birkoni, Mahasamund which is well connected with rail, road and air.
        </p>
        <p className="text-lg ml-12 mt-4">
        Our complete spectrum of finished products ranges from
        </p>
        <p className='ml-14'>- External Ointment /Cream</p>
        <p className='ml-14'>- External Lotion/Liquid</p>
        <p className='ml-14'>- Oral Powder</p>
        <p className="text-lg ml-12 mt-4">Each category of product is processed in a separate section, which is equipped with the latest machinery. All sections are supported by a centralized quality assurance department which has different segments. Each segment is equipped with the latest scientific machinery, ingredients, and trained staff supported by SOP.</p>

<p className="text-lg ml-12 mt-4">The company's prospect is very bright as the company has strong management, high-quality control system and massive production capacity to produce high-quality products, thus removing all hindrances in the company's growth. There is a massive pharmaceutical market in India and the world over to fetch, thus motivating the company to achieve its high goals of growth and developing new formulations.</p>

        
      </div>
    </div>
    <div className="w-full md:w-1/3 p-4">
      <img src='ab-01.png' alt="Image" className="w-[800px] h-full " />

    </div>
    
  </div>

        <div className="flex flex-wrap bg-gray-200 p-10 mt-14 mb-10 ">
        <div className="w-full md:w-1/2 p-2">
      <img src='mis.png' alt="Image" className="w-[800px] h-[350px] mt-4 " />

    </div>
    <div className="w-full md:w-1/2 p-4">
      <div className="text-center md:text-left mt-6">
      <span className='text-black font-bold text-4xl font-sans ml-6'>Mission</span>
        
        <p className="text-lg ml-9 mt-3 mb-8">
        Our mission is to create the best quality products and satisfied consumers. Supporting India's growth in the Pharma segment through speed, efficiency and innovation.


        </p>
        <span className='text-black font-bold text-4xl font-sans ml-6'>Vision</span>
        
        <p className="text-lg ml-9 mt-3">
        Our mission is to create the best quality products and satisfied consumers. Supporting India's growth in the Pharma segment through speed, efficiency and innovation.


        </p>
      
        
      </div>
    </div>
    
    
  </div>
   <div>
   
    <CourseInstructor/>
   </div>
    </>
  )
}








