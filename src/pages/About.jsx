import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
<Navbar>
<div className="w-full max-w-7xl px-4 mx-auto sm:px-8 md:my-8 my-2 ">
  <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xloo">
    
    <img src="./mahesh.jpg" alt='images' className='md:w-full md:h-full w-full h-72 px-2'/>

    <article className="relative p-6 md:p-8 md:col-span-2 ">
      <svg className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
        height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
          stroke="currentColor" strokeWidth="8">
        </path>
      </svg>

      <div className="space-y-8">
        <p className=" md:text-2xl">
        Hi, I'm Mahesh Wod, a frontend developer passionate about crafting innovative web solutions. I recently completed my Bachelor's degree in engineering at Pokhara University and am eagerly awaiting my results. With a strong foundation in frontend development, I am dedicated to building user-friendly and cutting-edge applications that drive impactful experiences.
        </p>

        {/* <footer className="flex items-center space-x-4 md:space-x-0">
          <img className="w-12 h-12 rounded-full md:hidden" src="../Assetss/mahesh.jpg" />
          <span className="font-bold text-lg">Mahesh </span>
        </footer> */}
      </div>
    </article>
  </blockquote>
</div>
</Navbar>

    </>
    

  )
}

export default About