"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ResumeCard } from "@/components/common/ResumeCard";
import { workExperience } from "@/data/workExperience";

export const Resume = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-white dark:bg-[#292727]">
      <div className="py-8 flex w-full bg-accentColor text-white dark:text-offwhite text-center justify-center items-center">
        <h1 className="text-2xl uppercase font-bold tracking-wider">
          Experience
        </h1>
      </div>

      <div className="flex justify-center flex-col space-y-16 items-center w-[450px] md:w-[600px] xl:hidden py-16 px-10">
        {workExperience.map(({ img, title, subtitle, description, time }) => (
          <ResumeCard
            key={subtitle}
            img={img}
            title={title}
            subtitle={subtitle}
            description={description}
            time={time}
          />
        ))}
      </div>

      <div className="hidden xl:flex xl:flex-row items-start xl:w-[1200px] py-16 justify-start space-y-0 space-x-8 px-10">
        {workExperience.map(({ img, title, subtitle, description, time }) => (
          <ResumeCard
            key={subtitle}
            img={img}
            title={title}
            subtitle={subtitle}
            description={description}
            time={time}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mb-16 mt-2">
        <button className="flex dark:bg-black bg-darkModeBg tracking-kd-wide text-white font-thin hover:font-extralight text-xs uppercase hover:cursor-pointer hover:shadow-lg transition-all">
          <a
            className="px-5 py-3"
            href="https://www.figma.com/file/EpU3WLrH5vQQciZ0nljETs/Figma-basics?type=design&node-id=1669%3A162202&mode=design&t=V3JEVu2Rjwm9n82f-1"
            target="_blank"
          >
            UI/UX Design Portfolio
          </a>
        </button>
      </div>
    </div>
  );
};
