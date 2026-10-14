import React from "react";
import { Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { CirclePlay } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section id="signin" className=" bg-[#070b17] h-screen flex justify-center items-center flex-col text-white mt-17">
        <div className="text-[#b69feb] font-semibold bg-gray-900 rounded-4xl py-1.5 text-xs px-5 uppercase">
          <span className="flex items-center gap-2">
            <Rocket size={20} color="#aa93de" />
            Empowering 45,000+ Future Tech Leaders
          </span>
        </div>

        <div className="flex justify-center items-center">

          <h1 className="mt-8 font-extrabold text-7xl">
            Master Modern Skills With  <br />
            <span className="text-[#a98ceb] px-25">World-Class Mentors </span>
          </h1>

         </div>
          
          <div>
          <h4 className="mt-6 text-xl text-gray-400">
            Accelerate your career growth with interactive courses, real-world
            projects, and an <br />
          <span className="px-40">inspiring global community of tech professionals.</span>  
          </h4>
          </div>
       

        <div className="flex gap-4 mt-12">

         <button className="bg-[#4f46e5] hover:bg-[#4338ca] py-5 px-7 rounded-xl font-lg  
          transition-all duration-300 transform hover:-translate-y-0.5 hover:text-shadow-gray-100 
          font-semibold flex gap-3 ">
            Explore Courses

           <ArrowRight 
           color="white"
           size={20}
           className="mt-1"
           />
           </button>

         <button className="bg-[#232324] hover:bg-[#3d3d3f] py-5 px-8 rounded-xl font-lg
          transition-all duration-300 transform hover:-translate-y-0.5 hover:text-shadow-gray-100 
          font-semibold flex gap-3">

         <CirclePlay 
         size={20} 
         color="#a98ceb" 
         className="mt-1"
         />
         Watch Platform Overview
         </button>
       </div>

      </section>
    </div>
  );
};

export default Home;
