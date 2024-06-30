'use client'
import React from 'react'
import Image from 'next/image'

function ComingSoon() {
    return (
        <section className='grid place-items-center my-5'>
            <div className='flex flex-col md:w-[70vw]'>
                <div className='flex'>
                    <div className='hidden md:grid place-items-center min-h-[400px] min-w-[300px] mr-10'>
                        <Image
                            src={'/portfolio.jpg'}
                            alt='A portrait of myself'
                            width={500}
                            height={700}
                        />
                    </div>

                    <div className='text-justify text-sm text-darkGray'>
                        <p className='text-2xl font-medium'>Hi, I am Victory</p>
                        <p>Hello! I am Victory, a passionate frontend engineer with a solid foundation in computer science and over 3 years of professional experience. My journey began with a deep curiosity for crafting intuitive user interfaces that seamlessly blend functionality with aesthetics.</p>

                        <p>My skill set is versatile, ranging from <strong>Vue JS</strong>, <strong>React JS</strong>, and <strong>Next JS</strong> for robust frontend development, to <strong>Tailwind CSS</strong> and <strong>SCSS</strong> for creating responsive and stylish designs. I thrive in environments that embrace modern technologies, leveraging <strong>Typescript</strong> for enhanced code quality and maintainability.</p>

                        <p>Beyond functionality, I specialize in enhancing user experiences through animations and interactions, utilizing <strong>GSAP</strong> and <strong>Framer Motion</strong> to bring interfaces to life. My goal is to not only meet technical requirements but to exceed user expectations with fluid and engaging web applications.</p>

                        <p>As a computer science graduate, I continuously seek opportunities to innovate and improve. Whether collaborating with teams or independently driving projects forward, I approach challenges with creativity and a commitment to excellence.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon