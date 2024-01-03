// "use client";

import React, { useState, useEffect, useCallback } from 'react';
import Typed from 'react-typed';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Hero = () => {

    const getHeroPhoto = () => {
      let photoToUse = ''

      photoToUse = 'ak-6.png'
      // photoToUse = 'ak-4.png'
      // photoToUse = 'ak-5.png'
      // photoToUse = 'larch.jpg'

      return `flex w-full flex-col justify-center items-start h-[90vh] bg-[url('/${photoToUse}')] bg-cover bg-no-repeat px-24 z-10`
      // return `flex w-full  justify-center items-center h-[90vh] bg-[url('/${photoToUse}')] bg-cover bg-no-repeat px-24 z-10`
    }

    return (
        // <div className="flex w-full flex-col justify-center items-start h-[90vh] bg-[url('/ak-6.png')] bg-cover bg-no-repeat px-24 z-10">
        <div className={getHeroPhoto()}>

          <div className='flex text-left'>
            <h1 className='text-offwhite md:text-3xl uppercase font-bold'>
              I am {' '}

              <Typed 
                strings={['Karlson Drendel', 'a software engineer', 'a Full-Stack Developer', 'a Creative Thinker']}
                typeSpeed={100}
                backSpeed={80}
                loop
              />
            </h1>
          </div>
          <div className='mt-3 text-[#c4c4c4] backdrop-blur-sm'>
            Software Engineer, Full-Stack Developer, Creative Thinker
          </div>
          <div className='flex justify-center mt-2 pt-5 space-x-4 md:space-x-6 text-2xl items-center text-offwhite'>
            <a className='w-[18px]' href="https://github.com/kdrendel99" target='__blank'><FontAwesomeIcon icon={faGithubSquare}/></a>
            <a className='w-[18px]' href="https://twitter.com/karlsondrendel" target='__blank'><FontAwesomeIcon icon={faTwitterSquare}/></a>
            <a className='w-[18px]' href="https://www.linkedin.com/in/karlson-drendel/" target='__blank'><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
    );
};
