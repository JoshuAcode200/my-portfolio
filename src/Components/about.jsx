import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import image2 from '../Assets/image2.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about px-8 md:px-20 py-10 font-body">
      
      {/* Education Section */}
      <section className="education mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Education</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
          <div className="mr-5">
            <a href='https://covenantuniversity.edu.ng/' className='flex items-center'> 
              <img src={image2} alt='Covenant University' className='h-[4rem] w-[5rem] pr-2 border-r-2 border-gray-400' />
            </a>
          </div>
          <div className="2">
            <h3 className="text-2xl font-semibold">B.Eng, Civil Engineering</h3>
            <p className="text-lg -pl-2">Covenant University, Ota, Nigeria</p>            
            <p className="pt-0 text-sm text-gray-600 pb-10">Graduation Year: 2024</p>
            <h3 className="text-2xl font-semibold">High School Certificate</h3>
            <p className="text-lg">Hillcrest College, Calabar, Nigeria</p>
            <p className="text-sm text-gray-600">Graduation Year: 2019</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-20 l-[5rem] items-center ml-20">
          <div className="flex flex-col items-center w-[4rem]">
            <FaHtml5 className="text-6xl text-orange-600" />
            <p className="text-lg mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center w-[4rem]">
            <FaCss3Alt className="text-6xl text-blue-600" />
            <p className="text-lg mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center w-[5rem]">
            <FaJsSquare className="text-6xl text-yellow-500" />
            <p className="text-lg mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center w-[4rem]">
            <FaReact className="text-6xl text-cyan-500" />
            <p className="text-lg mt-2">React</p>
          </div>
          <div className="flex flex-col items-center w-[5rem]">
            <SiTailwindcss className="text-6xl text-blue-400" />
            <p className="text-lg mt-2">Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="details">
        <h2 className="text-3xl font-bold text-green-700 mb-3">Details</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-4">
          <p className='text-xl'><strong>Height:</strong> 6'1ft</p>
          <p className='text-xl'><strong>Weight:</strong> 82kg</p>
          <p className='text-xl'><strong>Nationality:</strong> Nigerian</p>
          <p className='text-xl'><strong>Languages:</strong> English </p>
          <p className='text-xl'><strong>Phone:</strong> +234 7059706171</p>
          <p className='text-xl'><strong>Email:</strong> joshua.ayamba@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default About;
