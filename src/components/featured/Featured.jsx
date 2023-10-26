import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl'>
                <span className='font-bold'>Hey, Rishav Sharma here! </span>
                <span className='font-thin'>
                    Dive into my world and pickup useful nuggets.
                </span>
            </h1>
            <div className='flex flex-col sm:flex-row gap-8 mt-12 space-between'>
                {/* <div className='flex gap-8 mt-12 space-between'> */}
                <div className='relative flex-1 h-64  md:h-96'>
                    <Image
                        src='/p1.jpeg'
                        className='relative left-0 right-0 top-0 bottom-0 object-cover'
                        fill
                        alt=''
                    />
                </div>
                <div className='flex flex-col justify-center flex-1 gap-3'>
                    <h1 className='text-2xl font-bold'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    </h1>
                    <p className='text-sm font-light text-[var(--softTextColor)]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo minus veritatis qui tempore perspiciatis,
                        cumque saepe sint officiis aliquid pariatur. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Odit,
                        aspernatur!
                    </p>
                    <button className='py-2 px-3 rounded text-xs w-max text-[var(--bg)] bg-[var(--textColor)]'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
