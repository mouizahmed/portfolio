import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Grid from '@mui/material/Grid';
import Project from "./Project"

const Projects = () => {

    const [fading, setFading] = useState(" opacity-0 ease-in ");

    useEffect(() => {
        setFading(" opacity-100 easin-in ");
    }, [])


    return (
        <div className={"pl-5 pr-5 pt-5 transition-opacity duration-600 delay-1200" + fading} id="projects" >
            <h3 className="pb-5">Featured Projects</h3>
            <div>
                <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }} className="">

                    <Project imagePath={"/catchgpt_pic.png"} projectLink={"https://github.com/mouizahmed/CatchGPT"} title={"CatchGPT"} tags={['Python', 'Flask', 'Hugging Face API', 'Torch', 'HTML/CSS']} description={"A web tool that allows educators to determine if a piece of text was AI generated or human made."} />

                    <Project imagePath={"/flashstudy_pic.png"} projectLink={"https://github.com/mouizahmed/flashstudy"} title={"FlashStudy"} tags={['Java', 'Maven', 'MVC Architecture', 'MySQL', 'OpenAI API', 'CircleCI']} description={"A Java Swing Application that allows users to study efficiently with flash cards. It employs features such as AI definition autocompletion, fact check, and quiz question generation."} />

                    <Project imagePath={"/course_reviews_pic.png"} projectLink={"https://github.com/mouizahmed/course_reviews"} title={"Course Reviews"} tags={['MySQL', 'ExpressJS', 'ReactJS', 'NodeJS', 'MUI', 'GCP', 'JWT', 'Cloudinary']} description={"A web application that allows users to create course reviews for their respective post-secondary schools and ease their struggles within the course selection process."} />

                    <Project imagePath={"/ponderful_pic.png"} projectLink={"https://github.com/mouizahmed/ponderful"} title={"ponderful."} tags={['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'MUI']} description={"A web application that eases the struggles of making plans or group decisions with a large group of friends."} />


                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className="flex items-center justify-end">
                        <Link href="https://github.com/mouizahmed"><div className="dark:bg-[#4B5563] bg-[#d5d5d1] flex p-1 h-10 w-35 rounded-lg justify-center items-center border-transparent border-2 hover:border-white cursor-pointer"><h4>View More </h4> <FiArrowUpRight /></div></Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Projects