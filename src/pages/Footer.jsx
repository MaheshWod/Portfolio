import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";


// import natureImage from '../src/Assetss/nature.png'; // Import your image

const Footer = () => {
  return (
    <div className='max-w-screen-2xl md:h-[300px] container mx-auto px-4 md:px-20 bg-[#000000] bg-opacity-15 bg-[url("../src/Assetss/nature.png")] bg-cover '>
      <div className='flex justify-center m-[4px] p-[8px] font-bold text-white'>
        Mahesh_Dev
      </div>
      <div className='flex justify-between font-bold my-2'>
        <h1 className='text-white'>
          Company
          <p className='font-semibold text-white'>Web Designer</p>
          <p className='font-semibold text-white'>Marketer</p>
          <p className='font-semibold text-white'>Developer</p>
          <p className='font-semibold text-white'>Small Business</p>
          <p className='font-semibold text-white'>Online</p>
        </h1>

        <h1 className='text-white'>
          Sources
          <p className='font-semibold text-white'>Academic</p>
          <p className='font-semibold text-white'>Online Courses</p>
          <p className='font-semibold text-white'>Documentation</p>
          <p className='font-semibold text-white'>Blogs</p>
          <p className='font-semibold text-white'>Books</p>
        </h1>

        <h1 className='text-white'>
          Skills
          <p className='font-semibold text-white'>HTML</p>
          <p className='font-semibold text-white'>CSS</p>
          <p className='font-semibold text-white'>JavaScript</p>
          <p className='font-semibold text-white'>Graphic Design</p>
          <p className='font-semibold text-white'>React.js</p>
          <p className='font-semibold text-white'>Node.js</p>
        </h1>

        <h1 className='text-white'>
  Contacts
  <div className='flex items-center font-semibold text-white mt-2 cursor-pointer'>
    <MdAttachEmail className='mr-2' /> maheshwod1234@gmail.com
  </div>
  <div className='flex items-center font-semibold text-white mt-2 cursor-pointer'>
    <FaFacebook className='mr-2' /> Mahesh Wod
  </div>
  <div className='flex items-center font-semibold text-white mt-2 cursor-pointer'>
    <FaSquareGithub className='mr-2' /> Mahesh78
  </div>
  <div className='flex items-center font-semibold text-white mt-2 cursor-pointer'>
    <FaLinkedin className='mr-2' /> Mahesh Wod
  </div>
  <div className='flex items-center font-semibold text-white mt-2 cursor-pointer'>
    <FaPhoneVolume className='mr-2' /> 9868421078
  </div>
</h1>



      </div>
      <div className='max-w-screen-2xl h-12 bg-slate-200 rounded-sm flex justify-center items-center'>
  <div className='flex space-x-4 text-xl'>
    <a href="mailto:maheshwod1234@gmail.com" target="_blank">
      <MdAttachEmail />
    </a>
    <a href="tel:+977-9868421078" target="_blank">
      <FaPhoneVolume />
    </a>
    <a href="https://www.linkedin.com/in/mahesh-wod-822184302/" target="_blank">
      <FaLinkedin />
    </a>
    <a href="https://github.com/MaheshWod" target="_blank">
      <FaSquareGithub />
    </a>
    <a href="https://www.facebook.com/mahesh.wod.9" target="_blank">
      <FaFacebook />
    </a>
    <a href="https://web.whatsapp.com/9868421078" target="_blank">
      <FaWhatsappSquare />
    </a>
  </div>
  <div className='px-4 flex space-x-2 justify-center items-center ml-4 cursor-pointer '>
  <div><a href='https://www.lawimperial.com/copyright-law-in-nepal/' target='_blank'><FaRegCopyright className='cursor-pointer'/>
  </a></div>
<div>maheshwod_Copyright</div>
</div>
</div>


    </div>
  );
}

export default Footer;
