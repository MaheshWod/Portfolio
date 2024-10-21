


import React from 'react';
import Navbar from '../components/Navbar';
import mahesh from '../Assetss/mahesh.jpg'
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import Skills from './Skills';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-8 ">
        {/* Flex container that changes direction based on screen size */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          
          {/* Text content: Appears first on larger screens, but second on small devices */}
          <div className="md:w-1/2 md:mt-24 mt-12 gap-2 text-center md:text-left">
            <span className="text-xl">Welcome To My Feed</span>

            <div className="flex gap-2 justify-center md:justify-start">
              <h1 className="md:text-4xl font-semibold">Hello, I'm a</h1>
              <span className="text-red-700 font-bold md:text-4xl min-w-[130px]">
                <ReactTyped
                  strings={['Developer']}
                  typeSpeed={100}
                  backSpeed={100}
                  loop={true}
                />
              </span>
            </div>

            <br />
            <p className="text-sm md:text-lg text-justify ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            </p>

            {/* <Link to="./HireMe">
              <button className="p-2 px-6 mt-6 bg-rose-500 text-white rounded-full">
                Hire Me
              </button>
            </Link> */}
          </div>

          {/* Image content: Moves to top on small screens and right side on larger screens */}
          <div className="md:w-1/2 flex justify-center mb-1 md:mb-0 md:ml-12">
            <img
              src={mahesh}
              alt="photo"
              className="rounded-full object-cover md:w-[450px] md:h-[450px] w-[280px] h-[280px] border-2 border-grey-400"
            />
          </div>
        </div>
      </div>
      <br/>
      <hr  className="md:border-t-2 border-gray-300 md:mt-8 "/>
      <Portfolio/>
      <Skills/>
      
    </>
  );
};

export default Home;

