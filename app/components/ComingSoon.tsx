'use client'
import React from 'react'
import Image from 'next/image'
import { easeIn, easeOut, motion } from 'framer-motion'

function ComingSoon() {
    return (
        <section className='grid place-items-center my-5'>
            <div className='flex flex-col md:w-[70vw] md-[90vw]'>
                <div className='flex'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: -20

                        }}
                        transition={{
                            delay: 3,
                            duration: 1,
                            type: "easeIn"
                        }}

                        className='hidden md:grid place-items-center min-h-[400px] min-w-[300px] mr-10'>
                        <Image
                            src={'/portfolio.jpg'}
                            alt='A portrait of myself'
                            width={500}
                            height={700}
                        />
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 3.5,
                            type: "easeOut"
                        }}

                        className='text-justify text-sm text-darkGray w-[90vw]'>
                        <p className='text-2xl font-medium'>Hi, I am Victory</p>
                        <p>
                            a computer science graduate and passionate frontend engineer with over 3 years of experience. I specialize in creating intuitive user interfaces that blend functionality and aesthetics.

                            My skills include Vue JS, React JS, Next JS, Tailwind CSS, SCSS, and Typescript. I also enhance user experiences with animations using GSAP and Framer Motion.

                            With a passion for innovation and excellence, I thrive in environments embracing modern technologies. Whether collaborating with teams or working independently, I aim to exceed user expectations with engaging web applications.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon