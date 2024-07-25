import React from 'react'
import { ProjectCard } from '../components'
import { projects } from '../data/data'
import { unbounded } from '@/utils/fonts'

function page() {
    return (
        <section className='grid place-items-center my-5 md:mx-[100px]'>
            <p className={`text-2xl font-normal ${unbounded.className}`}>SELECTED PROJECTS</p>
            <div className='grid md:grid-cols-3 gap-4 p-4 grid-cols-1'>
                {
                    projects.map((project, idx) => (
                        <div key={idx}>
                            <ProjectCard imageSrc={project.imgUrl} projectName={project.name} projectLink={project.url} projectDescription={project.description} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default page