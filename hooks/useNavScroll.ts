import React, { useEffect, useState } from "react";


export const useNavScroll = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  useEffect(() => {
    if (scrollPosition >= 100){
      setShowNav(true);
    } else setShowNav(false)
  },[scrollPosition])


  return showNav 
}