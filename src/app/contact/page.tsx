import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/about.jpg";
import ContactImage from '../../../public/contact.jpg'
const Contact = () => {
  return (
    <>
    <div className=" relative flex flex-col gap-5">
      <Image className="w-[100%]" src={aboutImage} alt="about-image" />
      <h1 className="absolute z-10 top-[40%] xl:[56%] md:left-[43%] left-[30%] text-white font-bold text-4xl">
        Contact Us
      </h1>
    </div>
    
    <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex-1 flex items-center flex-col gap-5 p-5">
            <p className="text-[30px]">Contact Us</p>
            <h1 className="text-[20px]">Our Corporate office</h1>
            <span>street 44, california</span>
            <p>Tel : (022) 23 34 43 32</p>
            <p>CIN : L659875GJ34009WE21</p>
        </div>
        <div className="flex-1 flex justify-center items-center p-5">
            <Image className="h-[200px] w-[200px]" src={ContactImage} alt="about-bank"/>
        </div>
    </div>
    </>
  );
};

export default Contact;