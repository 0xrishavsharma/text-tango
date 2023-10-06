"use client"
import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext()

const getFromLocalStorage = () => {
  if (typeof window != "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light"
  }
}
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage()
  })

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
}