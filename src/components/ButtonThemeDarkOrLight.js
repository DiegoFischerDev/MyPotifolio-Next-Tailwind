'use client';

import { useContext } from 'react';
import { SunIcon, MoonIcon } from './Icons';
import { DarkThemeContext } from '@/context/DarkThemeContext';


export default function ButtonThemeDarkOrLight({className=""}) {

  const {theme, setTheme} = useContext(DarkThemeContext);

  return (
    <button aria-label="Change Color Theme Button" onClick={() => { setTheme(theme === "light" ? "dark" : "light") }} className={`w-16 h-16 ${className}`}>

      {theme === "dark" ?
        <SunIcon className={"fill-dark"} />
        :
        <MoonIcon className={"fill-dark"} />
      }
    </button>
  );
}