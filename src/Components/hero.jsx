import { Link } from 'react-router-dom';
import React from 'react';
import image1 from '../Assets/image1.jpg';

const Hero = () => {
  return ( 
    <section className='flex flex-row px-20 pt-40 pb-20 font-body'>
      <div className='mr-28'>
        <div className="flex flex-col ">
          <div>
            <p className="text-lg text-black font-400">Frontend Developer</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-black text-[5rem] gap-5">Hi, I'm</p>
            </div>
            <div className="flex">
              <p className="text-green-700 text-[5rem] gap-5">Joshua Ayamba</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-md font-300 text-black">I excel at designing and crafting unique digital
              experiences. 
            </p>
            <p className="text-md font-300 text-black">I am proficient in various programming 
              languages and technologies.
            </p>
          </div>
          <div className="flex flex-row pt-10 gap-14">   
            <div className="flex">
              <a href='/my-cv.pdf' download='my-cv.pdf' className="btn">
                DOWNLOAD CV
                <i className="fa-solid fa-cloud-arrow-down"></i> 
              </a>
            </div>
            <div className="flex justify-center pt-2 md:justify-start space-x-4">
              <a href="https://github.com/JoshuAcode200" className="hover:text-green-700">
              <i class="fa-brands fa-github text-2xl"></i> 
              </a>
              <a href="#" className="hover:text-green-700">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/__joshu.a/" className="hover:text-green-700">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/joshua-ayamba-b88329214/" className="hover:text-green-700">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-[18rem] w-[18rem]'>
        <div className='absolute rounded-full border-4 border-dashed border-green-700 h-[18rem] w-[18rem] hover:animate-spin-continuous'></div>
        <img src={image1} alt='' className='rounded-full h-[16rem] w-[16rem] object-fill'/>
      </div>
    </section>
   );
}
 
export default Hero;