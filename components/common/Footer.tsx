import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'react'
import React from 'react'

export const Footer = () => {
  return (
    // <div className='flex pb-20 flex-col justify-center pt-10 text-grey bg-accentColor dark:bg-[#000] space-y-10'>
    <div className='flex pb-20 flex-col justify-center pt-10 text-grey dark:text-grey bg-offwhite dark:bg-[#1D1D1D] space-y-10'>

      <div className='flex space-x-8 md:space-x-6 text-3xl lg:text-3xl items-center justify-center'>
        <a className='' href="https://github.com/kdrendel99" target='__blank'><FontAwesomeIcon icon={faGithubSquare}/></a>
        <a className='' href="https://twitter.com/karlsondrendel" target='__blank'><FontAwesomeIcon icon={faTwitterSquare}/></a>
        <a className='' href="https://www.linkedin.com/in/karlson-drendel/" target='__blank'><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>

      <div className='flex flex-col space-y-5 justify-center items-center uppercase tracking-kd-wide font-light text-[10px] lg:text-[10px] dark:text-grey text-grey'>
        <h1 className='flex'>Designed by Karlson Drendel</h1>
        <a className='flex text-accentColor dark:text-accentColor font-semibold' href="mailto:kdrendel99@gmail.com?subject=Let's get in touch!">Contact Me</a>
      </div>
    </div>
  )
}