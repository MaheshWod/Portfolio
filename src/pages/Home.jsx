import React from 'react';
// import Navbar from '../components/Navbar';
import mahesh from '../Assetss/mahesh.jpg';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
// import Skills from './Skills';
// import Portfolio from './Portfolio';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>

      <Navbar>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-3">
        {/* Flex container that changes direction based on screen size */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          
          {/* Text content: Appears first on larger screens, but second on small devices */}
          <div className="md:w-1/2 md:mt-24 mt-12 gap-2 text-center md:text-left">
            <span className="text-xl">Welcome To My Feed</span>

            <div className="flex md:gap-2 gap-0 justify-center md:justify-start">
              <h1 className="md:text-4xl font-semibold">Hello, I'm a</h1>
              <span className="text-red-700 font-bold md:text-4xl min-w-[100px]">
                <ReactTyped
                  strings={['Developer']}
                  typeSpeed={100}
                  backSpeed={100}
                  loop={true}
                />
              </span>
            </div>

            <br />
            <p className="text-sm md:text-lg text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            </p>

            <Link to="./HireMe">
              <button className="p-2 px-6 mt-6 bg-slate-400 font-bold text-white rounded hover:bg-green-300 hover:text-black">
                Hire Me
              </button>
            </Link>
          </div>

          {/* Image content: Moves to top on small screens and left side on larger screens */}
          <div className="md:w-1/2 flex justify-center items-center mb-1 md:mb-0 md:mt-9 md:ml-20 ">
            <img
              src={mahesh}
              alt="photo"
              className="rounded-full  md:w-[300px] md:h-[300px] w-[280px] h-[280px] border-2 border-gray-400 object-cover"
            />
          </div>
        </div>
      </div>
      <br />
      <hr className="md:border-t-2 border-gray-300 md:mt-8" />
  
      </Navbar>
    </>
  );
};

export default Home;
