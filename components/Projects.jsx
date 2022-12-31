/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import ProjectItem from './ProjectItem.jsx'

import project1Img from '../public/project.png'
import project2Img from '../public/project.png'
import project3Img from '../public/project.png'
import project4Img from '../public/project.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16 px-[5%] md:px-[5%] lg:px-[5%] xl:px-[10%] 2xl:px-[12%]">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase">Projects</p>
            <div className="grid md:grid-cols-2 gap-8 py-4">
                
                <div>
                    <h2 className="py-4">Project 1</h2>
                    <p className="py-2 break-all">dgfdfgsdgdfkgdfjgghjkdfjkfdgdsgdfhdfhfghfghgjfhgfjgfjgfhj dsgdfgfd</p>
                </div>
                <ProjectItem 
                    title="Project 1" 
                    backgroundImg={project1Img}
                    stack="ReactJS" 
                    projectUrl="/project1" 
                />
                
                <ProjectItem 
                    title="Project 2" 
                    backgroundImg={project2Img}
                    stack="Java" 
                    projectUrl="/project2" 
                />
                <div>
                    <h2 className="py-4">Project2</h2>
                    <p className="py-2 break-all">dgfdfgsdgdfkgdfjgghjkdfjkfdgdsgdfhdfhfghfghgjfhgfjgfjgfhj dsgdfgfd</p>
                </div>
                <div>
                    <h2 className="py-4">Project 3</h2>
                    <p className="py-2 break-all">dgfdfgsdgdfkgdfjgghjkdfjkfdgdsgdfhdfhfghfghgjfhgfjgfjgfhj dsgdfgfd</p>
                </div>
                <ProjectItem 
                    title="Project 3" 
                    backgroundImg={project3Img}
                    stack="Python" 
                    projectUrl="/project3" 
                />

                <ProjectItem 
                    title="Project 4" 
                    backgroundImg={project4Img}
                    stack="MERN" 
                    projectUrl="/project4" 
                />
                <div>
                    <h2 className="py-4">Project 4</h2>
                    <p className="py-2 break-all">dgfdfgsdgdfkgdfjgghjkdfjkfdgdsgdfhdfhfghfghgjfhgfjgfjgfhj dsgdfgfd</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects