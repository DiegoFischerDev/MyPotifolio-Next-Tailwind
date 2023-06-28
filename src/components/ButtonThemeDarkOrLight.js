'use client';

import { useContext } from 'react';
import { SunIcon, MoonIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { DarkThemeContext } from '@/context/DarkThemeContext';



export default function ButtonThemeDarkOrLight() {

  const {theme, setTheme} = useContext(DarkThemeContext)

  const [mode, setMode] = useThemeSwitcher();

  return (
    <button onClick={() => { setMode(mode === "light" ? "dark" : "light"); setTheme(theme === "light" ? "dark" : "light") }}>

      {mode === "dark" ?
        <SunIcon className={"fill-dark w-16"} />
        :
        <MoonIcon className={"fill-dark w-16"} />
      }
    </button>
  );
}