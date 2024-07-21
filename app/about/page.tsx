import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section className='grid place-items-center my-5'>
      <div className='flex flex-col md:w-[70vw] w-[90vw]'>
        <div className='flex'>
          <div className='hidden md:grid place-items-center min-h-[400px] min-w-[300px] mr-10'>
            <Image
              src={'/portfolio.jpg'}
              alt='A portrait of myself'
              width={500}
              height={700}
            />
          </div>

          <div className='text-justify text-sm'>
            <p className='text-2xl text-lightGray font-medium'>Hi, I am Shady</p>
            <p>
              a computer science graduate and passionate frontend engineer with over 3 years of experience. I specialize in creating intuitive user interfaces that blend functionality and aesthetics.

              My skills include Vue JS, React JS, Next JS, Tailwind CSS, SCSS, and Typescript. I also enhance user experiences with animations using GSAP and Framer Motion.

              With a passion for innovation and excellence, I thrive in environments embracing modern technologies. Whether collaborating with teams or working independently, I aim to exceed user expectations with engaging web applications.
            </p>         
          </div>
        </div>
      </div>
    </section>
  )
}

export default page