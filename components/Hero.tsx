// "use client";

import React, { useState, useEffect, useCallback } from 'react';
import Typed from 'react-typed';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Hero = () => {
    // const getHeroPhoto = () => {
    //   // let photoToUse = ''

    //   // photoToUse = 'ak-6.png'
    //   // photoToUse = 'ak-4.png'
    //   // photoToUse = 'ak-5.png'
    //   // photoToUse = 'larch.jpg'

    //   // return `flex w-full flex-col justify-center items-start h-[90vh] md:h-[90vh] bg-[url('/${photoToUse}')] bg-cover bg-bottom bg-no-repeat z-10 xl:bg-center`
    // }

    // const typedText = ['software engineer', 'Graphic Designer', 'Creative Thinker']
    const typedText = ['software engineer', 'Full Stack Developer', 'Creative Thinker']

    return (
        // <div className={getHeroPhoto()}>
        <div className={`flex w-full flex-col justify-center items-start h-[90vh] md:h-[90vh] bg-hero-img bg-cover bg-bottom bg-no-repeat z-10 xl:bg-center`}>
          <div className="w-full flex justify-center md:px-24 pt-20">
            <div className='flex flex-col'>
              <div className='text-center flex flex-col justify-center items-center'>
                <h1 className='text-offwhite  text-4xl lg:text-6xl uppercase font-medium tracking-kd-wide font-bookletter md:text-5xl'>
                  Karlson <br/> Drendel
                </h1>
                <br/>
                <h1 className='text-[#c9c7c7] md:text-xl uppercase font-thin tracking-kd-wide'>
                  <Typed 
                    strings={typedText}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                  />
                </h1>
              </div>
              <div className='flex justify-center mt-2 pt-5 space-x-4 md:space-x-6 text-2xl items-center text-grey'>
                <a className='w-[18px]' href="https://github.com/kdrendel99" target='__blank'><FontAwesomeIcon icon={faGithubSquare}/></a>
                <a className='w-[18px]' href="https://twitter.com/karlsondrendel" target='__blank'><FontAwesomeIcon icon={faTwitterSquare}/></a>
                <a className='w-[18px]' href="https://www.linkedin.com/in/karlson-drendel/" target='__blank'><FontAwesomeIcon icon={faLinkedin}/></a>
              </div>
            </div>
          </div>
        </div>
    );
};
