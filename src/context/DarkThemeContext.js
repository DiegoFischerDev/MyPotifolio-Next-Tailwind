'use client';

import { createContext, useState } from 'react'


export const DarkThemeContext = createContext({})

export const DarkThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");

  return (
    <DarkThemeContext.Provider value={{
      theme,
      setTheme,
    }} >
      {children}
    </DarkThemeContext.Provider>
  )
}