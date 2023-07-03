'use client';

import { createContext, useState } from 'react'


export const DarkThemeContext = createContext({})

export const DarkThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(window.localStorage.getItem("@theme"));

  return (
    <DarkThemeContext.Provider value={{
      theme,
      setTheme,
    }} >
      {children}
    </DarkThemeContext.Provider>
  )
}