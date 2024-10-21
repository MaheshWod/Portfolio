import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import mahesh from '../Assetss/mahesh.jpg'

import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll'

const Navbar = () => {
const [toggle,setToggle] = useState(false)

  return (
    <>

      <div className='navbar bg-slate-700 max-w-[100%] h-14 font-bold flex items-center justify-between px-4 sticky top-0 z-20 '>
        {/* Centered Logo and Name */}
        <div className='flex items-center md:mx-10'>
          <div className='w-12 h-12 overflow-hidden rounded-full flex justify-center  last:items-center border-2 border-gray-200 '>
            <img src={mahesh} alt='logo' className='object-cover w-full h-full' />
          </div>

          <Link to="/" className='text-2xl font-bold text-white px-2 hover:text-purple-400'>
            Mahesh
          </Link>
        </div>
        {
          toggle ? 
          <IoCloseSharp onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
          : <IoMdMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block '/>
        }

       

        {/* Right-aligned Navigation Links */}
        <ul className='hidden md:flex items-center text-white gap-8 ml-auto mr-6'>
          <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          <li><Link to="/portfolio" className="hover:text-purple-400">Portfolio</Link></li>
          <li><Link to="/skills" className="hover:text-purple-400 ">Skills</Link></li>
         
        </ul>
        {/* Responsive */}
        <ul  className={` duration-300 md:hidden w-full h-screen  text-white  bg-slate-500 opacity-3 fixed bg-b  top-[56px] ${toggle ? 'left-[0]' : 'left-[-100%]'}
        ` }>
          <li className='p-4'><Link to="/about" className="hover:text-purple-400">About</Link></li>
          <li className='p-4'><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          <li className='p-4'><Link to="/portfolio" className="hover:text-purple-400">Portfolio</Link></li>
          <li className='p-4'><Link to="/skills" className="hover:text-purple-400 ">Skills</Link></li>
         
        </ul>
      </div>
    </>
  );
}

export default Navbar;
