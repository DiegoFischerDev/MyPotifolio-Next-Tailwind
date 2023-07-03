'use client';

import { createContext, useEffect, useState } from 'react'


export const DarkThemeContext = createContext({})

export const DarkThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(null);
  const preferDarkQuery = "(prefer-color-scheme: dark)"

  useEffect(() => {

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("@theme");

    if (userPref) {
      setTheme(userPref)
    } else {
      let check = mediaQuery.matches ? "dark" : "light";
      setTheme(check);
    }

  }, [])

  useEffect(() => {

    if (theme === "dark") {
      window.localStorage.setItem("@theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("@theme", "light");
      document.documentElement.classList.remove("dark");
    }

  }, [theme])


  return (
    <DarkThemeContext.Provider value={{
      theme,
      setTheme,
    }} >
      {children}
    </DarkThemeContext.Provider>
  )
}