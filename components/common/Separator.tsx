import React, { useState, useEffect, useCallback } from 'react';
// import '../../styles/components/separator.css'
import styles from '@/styles/components/separator.module.css'

// interface Shape {
//   line: 'LINE';
//   curve: 'CURVE';
// }


interface SeparatorProps {
  // shape: 'LINE' | 'CURVE';
  // direction: 'TopLeft' | 'TopRight'
  // topColor: string;
  // bottomColor:string;
  // topColorDark: string;
  // bottomColorDark: string;
}



// export const Separator: React.FC<SeparatorProps> = ({

  // shape,
  // direction,
  // topColor,
  // bottomColor,
  // topColorDark,
  // bottomColorDark
// }) => {

export const Separator = () => {

    return (  
      // <div className='flex py-20 flex-col justify-center items-center w-full px-20 dark:bg-[#212121]'>
      // </div>

    <div className='flex w-full justify-center items-center -mb-1'>
      {/* <div className={`${styles.separator} w-full h-[100px] relative`}></div> */}

      <div className={`${styles.separator} flex dark:hidden w-full h-[100px] relative`}></div>
      <div className={`${styles.separatorDark} dark:flex hidden w-full h-[100px] relative`}></div>
    </div>

    );
};
