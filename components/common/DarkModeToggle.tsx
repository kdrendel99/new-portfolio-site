import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import { useMediaQuery } from "react-responsive";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    // <Toggle
    //   checked={isDark}
    //   onChange={({ target }) => setIsDark(target.checked)}
    //   icons={{ checked: "🌙", unchecked: "🔆" }}
    //   aria-label="Dark mode toggle"
    // />

    <FontAwesomeIcon 
      icon={farMoon} 
      size="lg" 
      // style={{color: "#999999",}}
      className='fa-moon'
      onChange={() => setIsDark(!isDark)}
      aria-label="Dark mode toggle"
    />
  );
};