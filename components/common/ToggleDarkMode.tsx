import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun as farSun } from '@fortawesome/free-regular-svg-icons';
import { faGitSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTheme} from 'next-themes'
import { useEffect, useState } from 'react';

export default function ToggleDarkMode() {
  const {theme, setTheme} = useTheme()
  const [isLight, setIsLight] = useState<boolean>()

  useEffect(() => {
    if (theme == 'dark') setIsLight(false)
    else setIsLight(true)
  },[theme])

  return (

      <div className="w-[15px]" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {/* { theme == 'dark' ? 
          <FontAwesomeIcon 
            icon={faMoon} 
            // size="lg" 
            className='fa-theme hover:cursor-pointer'
          />
        :
        <FontAwesomeIcon 
          icon={farMoon} 
          // size="lg" 
          className='fa-theme hover:cursor-pointer'
        />
      } */}

        { isLight ? 
          <FontAwesomeIcon 
            icon={farMoon} 
            // size="lg" 
            className='fa-theme hover:cursor-pointer'
          />
        :
        <FontAwesomeIcon 
          icon={faMoon} 
          className='fa-theme hover:cursor-pointer'
          // style={{color: '#6F7259'}}
        />
      }
    </div>
  )
}
