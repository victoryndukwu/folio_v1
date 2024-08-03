'use client'
import React from 'react'
import Image from 'next/image'
import { easeIn, easeOut, motion } from 'framer-motion'
import { michroma, unbounded, quicksand } from '@/utils/fonts'

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
                            priority={true}
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
                        className={`text-justify text-sm text-darkGray w-[90vw] ${quicksand.className}`}>
                        <div className={`flex flex-col text-justify my-2`}>
                            <p className={`text-base font-medium `}>Frontend Engineer with over 3 years professional experience building web applications. With a strong foundation in computer science, I specialize in creating performant user interfaces that blend functionality and aesthetics. <br /> <br />
                                My skillset include React JS, Next JS, Vue JS, Tailwind CSS, SCSS, and Typescript. I also enhance user experiences with seamless animations using GSAP and Framer Motion.
                                With a passion for innovation and excellence, I thrive in environments embracing modern technologies. Whether collaborating with teams or working independently, I aim to exceed user expectations with engaging web applications. <br /> <br />
                                <div className="text-start">
                                    <p className={`text-xl font-bold`}>Contact</p>
                                    <p><a href="mailto:victoryndukwu7@gmail.com" className='text-blue-600 '>victoryndukwu7@gmail.com</a></p>
                                </div>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon