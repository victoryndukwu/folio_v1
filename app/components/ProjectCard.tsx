'use client'
import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

type ProjectCardProps = {
    imageSrc: string,
    projectName: string,
    projectLink: string,
    projectDescription: string,
}
function ProjectCard({ imageSrc, projectName, projectLink, projectDescription }: ProjectCardProps) {


    return (
        <div className='bg-white p-2 rounded-[10px] md:w-[320px] md:h-[220px] w-[90vw]'>
            <NextLink href={projectLink} target='_blank'>
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: 'easeIn' }} className='bg-slate-600 md:max-h-[135px] max-h-[150px]'>
                    <Image
                        src={imageSrc}
                        alt="A descriptive alt text"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </motion.div>
                <div className='flex justify-between p-2'>
                    <div className='text-sm'>
                        <p className='font-semibold'>{projectName}</p>
                        <p className=''>{projectDescription}</p>
                    </div>
                </div>
            </NextLink>

        </div>
    )
}

export default ProjectCard