import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/about.jpg";
import aboutbank from '../../../public/aboutbank.jpg'
const About = () => {
  return (
    <>
    <div className=" relative flex flex-col gap-5">
      <Image className="w-[100%]" src={aboutImage} alt="about-image" />
      <h1 className="absolute z-10 top-[40%] xl:[56%] md:left-[43%] left-[30%] text-white font-bold text-4xl">
        About Us
      </h1>
    </div>
    
    <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex-1 flex items-center flex-col gap-5 p-5">
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis ratione commodi vero suscipit expedita non reiciendis illo repellendus maxime perferendis, eius necessitatibus fugiat amet neque explicabo, odit consectetur minus fuga dignissimos! Quos, fugit corrupti vero quia nesciunt reprehenderit cupiditate facilis ea similique quisquam cumque nihil. Sint ipsum laudantium omnis? Nesciunt dignissimos sunt unde velit suscipit illum similique, accusamus ullam maiores iusto ea, numquam ipsa culpa quasi recusandae alias incidunt, porro delectus harum voluptate. Optio debitis omnis id nulla placeat voluptas! Alias fuga possimus at a rerum. Repudiandae voluptatem eos id aut pariatur? Asperiores, atque necessitatibus voluptate ipsam animi ex.</p>
        </div>
        <div className="flex-1 flex justify-center items-center p-5">
            <Image className="h-[200px] w-[200px]" src={aboutbank} alt="about-bank"/>
        </div>
    </div>
    </>
  );
};

export default About;

