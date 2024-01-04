import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleDarkMode from '@/components/common/ToggleDarkMode';
import { useEffect, useState } from 'react';
import { SCROLL_ELEMENTS } from '@/enums/scroll-elements.enum';
import { selectNavState, setNavState } from '@/redux/navSlice'
import { useDispatch, useSelector } from "react-redux"
import { useNavScroll } from '@/hooks/useNavScroll';

export const Nav = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const shouldShowNav = useNavScroll()
  const toggleHamburger = () => setIsOpenHamburger(!isOpenHamburger);
  const navState = useSelector(selectNavState);
  const dispatch = useDispatch();

  const getLogoFont = () => {
    // return 'dark:text-offwhite font-nwt'
    return 'dark:text-offwhite font-bookletter'
  }

  const handleMobileNavClick = (destination: SCROLL_ELEMENTS) => {
    dispatch(setNavState(destination));
    toggleHamburger()
  }

  return (<div></div>)

  return (
    // <div className={`${shouldShowNav ? 'top-0 sticky' : 'hidden'} z-50 transition-all duration-500`}>
    // <div className={getNavClass()} style={{marginTop:'-54px'}}>
      <div className={`${shouldShowNav ? 'top-0' : '-mt-[54px] md:-mt-[60px]'} fixed w-full bg-white dark:bg-darkModeBg z-50 transition-all ease-in-out duration-500`}>

      <div className='block w-full py-1 bg-white dark:bg-darkModeBg md:hidden'>
          <nav
              className='relative z-50 flex items-center justify-between pl-4 bg-white dark:bg-darkModeBg'
              id='kdNav'
              role='navigation'
              aria-label='Main Navigation'
          >
            <div className={`flex justify-start items-center text-3xl  ${getLogoFont()}`}>
              Karlson Drendel
            </div>

            <div className='flex flex-row'>
              <div className="flex justify-center items-center pr-5" >
                  <ToggleDarkMode />
                </div>
              <div className='relative flex items-center justify-center'>
                  <div
                      className='transition-all duration-300 flex flex-col justify-center items-center group box-border m-3 cursor-pointer h-[22px] w-[22px]'
                      onClick={() => toggleHamburger()}
                  >
                      <div
                          className={`box-border group-hover:bg-accentColor h-[2px] w-full transition-all duration-300 
                      ${
                          isOpenHamburger
                              ? 'rotate-[135deg] bg-white dark:bg-darkModeBg'
                              : 'bg-grey hover:bg-accentColor'
                      } diagonal_part_1`}
                      />

                      <div
                          className={`box-border h-[2px] group-hover:bg-accentColor w-full float-left transition-all duration-300 
                      ${
                          isOpenHamburger
                              ? 'transition-all duration-300 box-border opacity-0 mt-[3px] bg-white dark:bg-darkModeBg'
                              : 'mt-[5px] bg-grey hover:bg-accentColor'
                      } horizontal_p`}
                      />

                      <div
                          className={`box-border group-hover:bg-accentColor h-[2px] w-full transition-all duration-300 float-left  
                      ${
                          isOpenHamburger
                              ? 'rotate-[-135deg] -mt-[7px] bg-white dark:bg-darkModeBg'
                              : 'mt-[5px] bg-grey hover:bg-accentColor'
                      } diagonal_part_2`}
                      />
                  </div>
              </div>
            </div>
          </nav>
          <div className={`relative z-50 h-[0px] ${
            isOpenHamburger ? '' : 'hidden'
            }`}>
              <div
                  className={`fixed inset-0 bg-black opacity-40 h-screen overscroll-none backdrop-blur-xl ${
                      isOpenHamburger ? 'block' : 'hidden'
                  }`}
                  onClick={() => toggleHamburger()}
              />
              <nav
                  className={`fixed top-[44px] -right-[384px] bottom-0 ${
                      isOpenHamburger ? 'navbar-slide-in' : 'navbar-slide-out'
                  } flex flex-col w-[384px] max-w-sm px-6 py-6 border-r border-r-white bg-white dark:bg-darkModeBg`}
              >
                  <div className='text-black uppercase font-america dark:text-grey'>
                          <ul>
                              <li className='mb-1 hover:cursor-pointer'>
                                Home
                              </li>
                              <li className='mb-1 hover:cursor-pointer' onClick={() => handleMobileNavClick(SCROLL_ELEMENTS.ABOUT)}>
                                About
                              </li>
                              <li className='mb-1 hover:cursor-pointer' onClick={() => handleMobileNavClick(SCROLL_ELEMENTS.RESUME)}>
                                Resume
                              </li>
                              {/* <li className='mb-1 hover:cursor-pointer' onClick={() => handleMobileNavClick(SCROLL_ELEMENTS.PERSONAL)}>
                                Blog/Photo
                              </li> */}
                              <li className='mb-1 hover:cursor-pointer' onClick={() => handleMobileNavClick(SCROLL_ELEMENTS.CONTACT)}>
                                Contact
                              </li>
                          </ul>
                  </div>
                  <div className='mt-auto'>
                      {/* <div className='pt-6'>
                          <div className='block py-3 mb-3 text-xs text-center'>
                              Drendel.co
                          </div>
                      </div> */}
                      <p className='my-4 text-xs text-center text-gray-400 uppercase font-america'>
                          <span>Copyright © 2023</span>
                      </p>
                  </div>
              </nav>
          </div>
      </div>


      <div className="hidden md:flex w-full items-center justify-center px-6 sticky top-0 dark:backdrop-blur-md z-50 bg-white dark:bg-darkModeBg">
        <div className='flex w-full justify-between'>
          <div className='flex w-full justify-center'>
            <div 
            className="flex justify-between items-center text-darkGrey w-full px-3 h-[60px] md:pr-8">
              <div className={`flex justify-start items-center text-3xl ${getLogoFont()}`}>
                Karlson Drendel
              </div>

              <div className="text-grey flex justify-between space-x-10 items-center">
                <div className="flex hover:cursor-pointer hover:text-darkModeBg hover:font-normal dark:hover:text-white">
                  <a href="https://karlson-drendel.com/">Home</a>
                </div>
                <div className="flex hover:cursor-pointer hover:text-darkModeBg hover:font-normal dark:hover:text-white" onClick={() => dispatch(setNavState(SCROLL_ELEMENTS.ABOUT))}>
                  About
                </div>
                <div className="flex hover:cursor-pointer hover:text-darkModeBg hover:font-normal dark:hover:text-white" onClick={() => dispatch(setNavState(SCROLL_ELEMENTS.RESUME))}>
                  Resume
                </div>
                {/* <div className="flex hover:cursor-pointer hover:text-darkModeBg hover:font-normal dark:hover:text-white" onClick={() => dispatch(setNavState(SCROLL_ELEMENTS.PERSONAL))}>
                  Blog/Photo
                </div> */}
                <div className="flex hover:cursor-pointer hover:text-darkModeBg hover:font-normal dark:hover:text-white" onClick={() => dispatch(setNavState(SCROLL_ELEMENTS.CONTACT))}>
                  Contact
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" >
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}