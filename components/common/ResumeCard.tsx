"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface ResumeCardProps {
  img: string;
  title: string;
  subtitle: string;
  description: string[];
  time: string;
}
export const ResumeCard: React.FC<ResumeCardProps> = ({
  img,
  title,
  subtitle,
  description,
  time
}) => {

    return (
      <div className='flex justify-center items-center md:justify-start md:items-start md:flex-row flex-col xl:flex-col xl:justify-center xl:items-center'>

      <div className='flex justify-center items-center md:pt-1 mb-6 md:mb-0 overflow-visible md:h-[108px] border-10 border-accentColor dark:border-accentColor2 md:w-[108px] md:mr-6 md:mt-6 xl:mx-0 xl:my-0 xl:mb-2'>
        <img src={img} 
        className='drop-shadow-[0_0_0.3rem_#ffffff70] dark:drop-shadow-none relative min-w-[108px] max-w-[108px] object-cover object-top w-[108px] md:-mt-12 md:ml-12 xl:mx-0 xl:my-0'/>
      </div>

      <div className='md:pt-0 flex justify-center items-center md:items-start flex-col md:ml-10 xl:justify-center xl:items-center xl:mx-0'>
        <div className='flex text-left text-lg pb-2 flex-col xl:flex-row'>
          {/* <h1><span className='font-bold'>Covey.IO</span> - Software Engineer</h1> */}

          <div className='md:hidden text-center xl:flex xl:flex-col xl:justify-center xl:items-center'>
            <div className='font-bold xl:flex dark:text-offwhite'> {title} </div> 
            <div className='xl:flex dark:text-grey text-darkModeBg'>{ subtitle }</div>
            <div className='text-grey text-sm flex justify-center'>{time}</div>
          </div>

          <div className='hidden md:flex xl:hidden dark:text-offwhite'>
            <h1> <span className='font-bold'>{title} </span> - { subtitle } </h1>
          </div>
          <div className='text-grey text-sm hidden md:flex xl:hidden'>{time}</div>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='list-disc ml-5 dark:text-[#b5b5b5] text-darkGrey'>
          {description.map((c, idx) => {
                return (
                    <li
                        key={idx}
                        className=''
                    >
                      {c}
                    </li>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
    );
};
