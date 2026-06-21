'use client'
import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { unbounded } from '@/utils/fonts'

type ProjectCardProps = {
    imageSrc: string,
    projectName: string,
    projectLink: string,
    projectDescription: string,
}
function ProjectCard({ imageSrc, projectName, projectLink, projectDescription }: ProjectCardProps) {


    return (
        <div className="group bg-white dark:bg-darkerGray border border-transparent dark:border-white/10 p-2 rounded-2xl w-full shadow-lg hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300 ease-out font-primary">
            <NextLink href={projectLink} target='_blank' className="block h-full">
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: 'easeIn' }} className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray/20">
                    <Image
                        src={imageSrc}
                        alt={`${projectName} thumbnail`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </motion.div>
                <div className="flex justify-between p-3 mt-2">
                    <div className="text-sm">
                        <p className="font-semibold text-lg font-header">{projectName}</p>
                        <p className="font-normal text-darkGray mt-1">{projectDescription}</p>
                    </div>
                </div>
            </NextLink>
        </div>
    )
}

export default ProjectCard