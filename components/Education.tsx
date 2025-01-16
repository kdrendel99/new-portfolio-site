// "use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ResumeCard } from '@/components/common/ResumeCard';

export const Education = () => {

    const epicodus =  <ResumeCard 
        img = "/resume/epicodus.png"
        title = "Certification in Full Stack Development"
        subtitle = "Epicodus Code School"
        description = {[

          "Certificate in Web and Mobile Development",
          "10 months and 2,000+ hours of learning, programming, and hands-on building of web-based apps using React, Typescript/JavaScript, C#.NET, HTML, and CSS.",
          "Engaged in daily pair-programming and collaborative problem solving.",
          "Consistently maintained 40+ hour work weeks solely dedicated to studying and practicing application development/programming concepts.",
        ]}
        time = 'Dec 2020 - Oct 2021'
    />

    const clark = <ResumeCard 
        img = "/resume/clark.png"
        title = "Associates in Arts & Design"
        subtitle = "Clark College"
        description = {[
          "Participated in weekly graphic design meet-ups, and analog photo-club.",
          "Created, taught, and maintained curriculum for Photography Special Projects courses",
        ]}
        time = 'Aug 2016 - Dec 2019'
    />

    const mobileOrder = () => {
      return (
        <>
          {epicodus}
          {clark}
        </>
      )
    }

    const desktopOrder = () => {
      return (
        <>
          {clark}
          {epicodus}
        </>
      )
    }

    return (  
      <div className='w-full flex justify-center items-center flex-col bg-white dark:bg-softBlack'>
        <div className='py-8 flex w-full bg-accentColor text-white dark:text-offwhite text-center justify-center items-center'>
          <h1 className='text-2xl uppercase font-bold tracking-wider'>Education</h1>
        </div>
        
        <div className='flex px-10 justify-center flex-col space-y-16 items-center w-[450px] md:w-[600px] xl:hidden py-16'>
          {mobileOrder()}
        </div>

        <div className='hidden px-10 xl:flex xl:flex-row items-start xl:w-[1200px] py-16 justify-start space-y-0 space-x-8'>  
        {desktopOrder()}
        </div>
      </div>
    );
};
