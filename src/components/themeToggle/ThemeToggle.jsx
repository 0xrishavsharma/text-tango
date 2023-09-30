import React from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball} width={14} height={14}>

      </div>
      <Image src="/sun.png" alt="" width={16} height={16} />
    </div>
  )
}

export default ThemeToggle