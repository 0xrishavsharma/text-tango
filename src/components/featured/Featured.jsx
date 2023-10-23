import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className=''>
      <h1>
        <b>Hey, Rishav Sharma here! </b>
        Dive into my world and pickup useful nuggets.
      </h1>
      <div className='flex justify-center mt-7'>
        <div>
          <Image src="/p1.jpeg" fill alt='' />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-8xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
          <p className='text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus veritatis qui tempore perspiciatis, cumque saepe sint officiis aliquid pariatur.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured