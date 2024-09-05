import React from 'react';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return ( 
    <div className="projects py-16 bg-gray-100 font-body">
      <div className="container mx-auto px-4 items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Skills</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[0.9] w-[25rem] h-[17rem] ml-72 justify-center hover:bg-green-700 hover:text-white group">
          <p className="text-5xl pt-20 ml-10">Web</p>
          <p className="text-5xl ml-10">Development</p>
        </div>
        <div className="flex justify-center pt-2 md:justify-start space-x-8 ml-80">
          <a href="https://github.com/JoshuAcode200" className="opacity-0 group-hover:animate-[pop_0.3s_0.1s_forwards]">
            <i className="fa-brands fa-github text-2xl"></i> 
          </a>
          <a href="#" className="opacity-0 group-hover:animate-[pop_0.3s_0.2s_forwards]">
            <i className="fa-brands fa-react text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/__joshu.a/" className="opacity-0 group-hover:animate-[pop_0.3s_0.3s_forwards]">
            <i className="fa-brands fa-html5 text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ayamba-b88329214/" className="opacity-0 group-hover:animate-[pop_0.3s_0.4s_forwards]">
            <i className="fa-brands fa-css3 text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ayamba-b88329214/" className="opacity-0 group-hover:animate-[pop_0.3s_0.5s_forwards]">
            <i className="fa-brands fa-js text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ayamba-b88329214/" className="opacity-0 group-hover:animate-[pop_0.3s_0.6s_forwards]">
            <SiTailwindcss className="text-2xl" />
          </a>
        </div>
      </div>
    </div> 
  );
}
 
export default Skills;


