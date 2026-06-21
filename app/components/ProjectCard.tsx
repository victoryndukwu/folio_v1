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
    isFeatured?: boolean,
}
function ProjectCard({ imageSrc, projectName, projectLink, projectDescription, isFeatured = false }: ProjectCardProps) {


    return (
        <div className={`group relative bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-2 md:p-3 rounded-[24px] w-full shadow-lg backdrop-blur-2xl transition-all duration-500 hover:bg-white/80 dark:hover:bg-white/10 font-primary overflow-hidden ${isFeatured ? "md:h-[360px]" : "h-[300px]"}`}>
            <NextLink href={projectLink} target='_blank' className="flex flex-col h-full relative z-10">
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-black/5 dark:bg-white/5">
                    <Image
                        src={imageSrc}
                        alt={`${projectName} thumbnail`}
                        fill
                        className="object-cover group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-75 transition-all duration-500 ease-out"
                    />
                    
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 p-4 rounded-xl flex justify-between items-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-sm">
                        <p className="font-semibold text-lg font-header text-black dark:text-white">{projectName}</p>
                        <p className="font-normal text-black/70 dark:text-white/70 mt-1">{projectDescription}</p>
                    </div>
                </div>
            </NextLink>
        </div>
    )
}

export default ProjectCard