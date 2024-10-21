import React from 'react';
import mongodb from '../Assetss/mongodb.jpg';
import express from '../Assetss/express.png';
import java from '../Assetss/java.png';
import javascript from '../Assetss/javascript.png';
import css from '../Assetss/css.jpg';
import html from '../Assetss/html.png';
import reactjs from '../Assetss/reactjs.png';
import node from '../Assetss/node.png';
import photoshop from '../Assetss/photoshop.jpg';
import figma from '../Assetss/figma.png';
import xdjpg from '../Assetss/xdjpg.jpg';
import illustrator from '../Assetss/illustrator.png';

const Skills = () => {
  const cardItems = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React.js" },
    { id: 5, logo: mongodb, name: "MongoDB" },
    { id: 6, logo: express, name: "Express" },
    { id: 7, logo: node, name: "Node.js" },
    { id: 8, logo: java, name: "Java" },
    { id: 9, logo: photoshop, name: "Photoshop" },
    { id: 10, logo: illustrator, name: "Illustrator" },
    { id: 11, logo: xdjpg, name: "XD" },
    { id: 12, logo: figma, name: "Figma" },
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-8'>
        <div>
          <h1 className='flex text-3xl font-bold mb-5 justify-center items-center'>Skills</h1>
          <p className='font-semibold flex justify-center items-center'>Work Experiences</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-7 my-3 lg:grid-cols-3'>
          {cardItems.map(({ id, logo, name }) => (
            <div key={id} className='flex flex-col items-center justify-center border-[2px] rounded-md shadow-md p-1 cursor-pointer hover:scale-110 duration-200'>
              <img src={logo} alt={name} className='w-[100px] h-[100px] p-3 rounded-full border-[2px] mt-1' />
              <h2 className='m-1 font-bold'>{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
