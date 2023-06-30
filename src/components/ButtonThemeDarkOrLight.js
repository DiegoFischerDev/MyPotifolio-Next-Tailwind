'use client';

import { useContext } from 'react';
import { SunIcon, MoonIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { DarkThemeContext } from '@/context/DarkThemeContext';



export default function ButtonThemeDarkOrLight({className=""}) {

  const {theme, setTheme} = useContext(DarkThemeContext)

  const [mode, setMode] = useThemeSwitcher();

  return (
    <button aria-label="Change Color Theme Button" onClick={() => { setMode(mode === "light" ? "dark" : "light"); setTheme(theme === "light" ? "dark" : "light") }} className={`w-16 h-16 ${className}`}>

      {mode === "dark" ?
        <SunIcon className={"fill-dark"} />
        :
        <MoonIcon className={"fill-dark"} />
      }
    </button>
  );
}