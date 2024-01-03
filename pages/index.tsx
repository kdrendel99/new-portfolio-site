import Image from 'next/image'
import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { Resume } from '@/components/Resume'
import { Contact } from '@/components/common/Contact'
import { Separator } from '@/components/common/Separator'
import { SCROLL_ELEMENTS } from '@/enums/scroll-elements.enum'
import { selectNavState, setNavState } from '@/redux/navSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from 'react'
import React from 'react'
import { Education } from '@/components/Education'

export default function Home() {
  const navState = useSelector(selectNavState);
  const dispatch = useDispatch();
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const personalRef = useRef(null);
  const contactRef = useRef(null);


  const executeScroll = (ref: React.MutableRefObject<null>) => {
    // @ts-ignore 
    if (ref) ref.current.scrollIntoView()
  } 

  useEffect(() => {

    const setScrollingDestination = () => {
      switch (navState) {
        case SCROLL_ELEMENTS.ABOUT:
          executeScroll(aboutRef);
          break;
        case SCROLL_ELEMENTS.RESUME:
          executeScroll(resumeRef);
          break;
        case SCROLL_ELEMENTS.PERSONAL:
          executeScroll(personalRef);
          break;
        case SCROLL_ELEMENTS.CONTACT:
          executeScroll(contactRef);
          break;
      }
    }

    if (navState !== SCROLL_ELEMENTS.NONE){
      setScrollingDestination()
      dispatch(setNavState(SCROLL_ELEMENTS.NONE))
    }
  },[navState])

  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <section ref={aboutRef} className='flex w-full'>
          <About />
        </section>
        
        <section ref={resumeRef} className='flex w-full'>
          <Resume />
        </section>

        <section 
          // ref={educationRef} 
          className='flex w-full'
        >
          <Education />
        </section>

        <section ref={contactRef} className='flex w-full'>
          <Contact />
        </section>
      </div>
    </>
  )
}
