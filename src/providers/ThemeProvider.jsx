// We could have supplied the themeContext to any child in the Layout.js file but then we 
// would have to make the layout file a client component to use contextAPI but we don't want to 
// do that because it is a server component and we are using metadata in the layout file.
"use client"
import { ThemeContext } from '@/context/ThemeContext'
import { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useContext(ThemeContext)

  // We are using this useEffect as some browsers might face issues related to local storage
  // So, we are checking if the component is mounted first then only we are rendering the whole
  // application on the web page
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted &&
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider