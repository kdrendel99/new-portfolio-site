"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ResumeCard } from '@/components/common/ResumeCard';

export const Resume = () => {
    const covey =  <ResumeCard 
        img = "/resume/covey-logo-resume.png"
        title = "Software Engineer"
        subtitle = "Covey.IO"
        description = {[
          "Lead developer for Covey.IO's main product 'Training Club' - a web-based mock portfolio-builder application",
          "Built multiple client-facing systems for users to place financial trades on the Ethereum blockchain",
          "Designed and built admin interface for automating monthly crypto payouts",
          "Single-handedly undertook site-wide rebranding/reskinning based on Figma mock-ups from designers",
          "Consistently worked to implement and maintain scalable data storage for user's financial data",
          "Increased overall speed for users' financial performance charts by 5X",
          "Node, Next, React, Typescript/Javascript, CSS, Tailwind, HTTP, JSON"
        ]}
        time = 'Feb 2022 - Sept 2023'
    />

    const ascend = <ResumeCard 
        img = "/resume/ascend.png"
        title = "Software Engineer Intern"
        subtitle = "Ascend Software LLC"
        description = {[
          "Assisted in development of AI-driven accounts payable automation software for medium to large enterprises.",
          "Designed and built React-based UI components for production-build, currently used by thousands of clients daily",
          "Personally created and implemented editing functionality for client profiles in databases"
        ]}
        time = 'Sept 2021 - Feb 2022'
    />

    const epicodus =  <ResumeCard 
        img = "/resume/epicodus.png"
        title = "Engineering Tutor"
        subtitle = "Epicodus"
        description = {[
          "Worked individually with students to optimize and debug web applications",
          "Assisted in teaching students full-stack development fundamentals and best practices",
        ]}
        time='June 2020 - March 2022'
    />


    const mobileOrder = () => {
      return (
        <>
          {covey}
          {ascend}
          {epicodus}
        </>
      )
    }

    const desktopOrder = () => {
      return (
        <>
          {covey}
          {ascend}
          {epicodus}
        </>
      )
    }

    return (  
      <div className='w-full flex justify-center items-center flex-col bg-white dark:bg-[#292727]'>
        <div className='py-8 flex w-full bg-accentColor text-white dark:text-offwhite text-center justify-center items-center'>
          <h1 className='text-2xl uppercase font-bold tracking-wider'>Experience</h1>
        </div>
        
        <div className='flex justify-center flex-col space-y-16 items-center w-[450px] md:w-[600px] xl:hidden py-16 px-10'>
          {mobileOrder()}
        </div>

        <div className='hidden xl:flex xl:flex-row items-start xl:w-[1200px] py-16 justify-start space-y-0 space-x-8 px-10'>  
        {desktopOrder()}
        </div>
      </div>
    );
};
