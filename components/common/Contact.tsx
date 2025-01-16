import React, { useState, useEffect, useCallback } from "react";
import { Mailer } from "../Mailer";

export const Contact = () => {
  return (
    <div className="flex pt-20 pb-28 flex-col justify-center items-center w-full dark:bg-mutedBlack">
      <div className="flex lg:flex-row lg:justify-between justify-center md:justify-start flex-col items-start w-[400px] sm:w-[520px] md:w-[696px] lg:w-[960px]">
        <div className="flex flex-col space-y-2 text-darkGrey mb-12">
          <div className="flex">
            <p className="text-accentColor uppercase text-2xl font-bold tracking-wider mb-4">
              Contact Me
            </p>
          </div>
          <p>Vancouver WA, United States</p>
          <p>(360)-553-8451</p>
          {/* <p>kdrendel99@gmail.com</p> */}
          <a
            className="hover:underline"
            href="mailto:kdrendel99@gmail.com?subject=Let's get in touch!"
          >
            kdrendel99@gmail.com
          </a>
          <a
            className="text-accentColor2 dark:text-accentColor hover:underline hover:cursor-pointer"
            href="/Karlson Drendel Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <Mailer />
      </div>
    </div>
  );
};
