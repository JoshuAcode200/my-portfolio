import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return ( 
      <div className='flex flex-row bg-green-800 justify-between gap-32 top-0 left-0 fixed shadow-md z-50 w-full'>
        <div className="text-[3rem] text-white ml-10 font-body py-5">
          <Link to='/home'>Joshua.</Link>
        </div>
        <ul className=" navbar flex flex-row items-center list-none text-lg gap-10 text-white my-4 ml-20 mr-auto">
          <li className='relative'><Link to="/home">Home</Link></li>
          <li className='relative'><Link to="/about">About</Link></li>
          <li className='relative'><Link to="/experience">Experience</Link></li>
          <li className='relative'><Link to="/skill">Skills</Link></li>
          <li className='relative'><Link to="/projects">Projects</Link></li>
          <li className='relative'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>  
    );
}
 
export default Navbar;