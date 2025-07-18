import React from 'react'
import Grid from '@mui/material/Grid';
import Project from "./Project"

const Projects = () => {
    return (
        <div id="projects">
            <h3 className="pb-5">Featured Projects</h3>
            <Grid container spacing={2} columns={{ xs: 9, sm: 9, md: 9, lg: 9, xl: 9 }}>
                <Project
                    projectLink="https://github.com/mouizahmed/ratethatclass"
                    projectName="ratethatclass.com"
                    projectSubtitle="Course Reviews Web Application"
                    tags={["React.js (Next.js)", "Node.js", "Express.js", "Python", "PostgreSQL", "Docker"]}
                    description="A full-stack web application for students to anonymously review their classes. At its peak, it had over 200+ users with over 100+ reviews."
                />
                <Project
                    projectLink="https://github.com/mouizahmed/img-compressor"
                    projectName="img-compressor"
                    projectSubtitle="Quad-Tree Image Compression CLI"
                    tags={["Rust"]}
                    description="Fast quad-tree + prefix sum matrix based image compression CLI."
                />
                <Project
                    projectLink="https://github.com/mouizahmed/writeitout"
                    projectName="justwriteitout.com"
                    projectSubtitle="Video Transcription Service"
                    tags={["Golang", "React.js (Next.js)", "TypeScript", "PostgreSQL", "ffmpg", "GCP", "Docker"]}
                    description="Instantly transform any video into speaker-tagged, searchable transcripts."
                />
                {/* <Project
                    projectLink="https://github.com/yourusername/project3"
                    title="Project 3"
                    tags={["TypeScript", "Next.js", "Tailwind"]}
                    description="A modern web application with a beautiful UI."
                /> */}
            </Grid>
            {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className="flex items-center justify-end">
                <Link href="https://github.com/mouizahmed">
                    <div className="dark:bg-[#4B5563] bg-[#d5d5d1] flex p-1 h-10 w-35 rounded-lg justify-center items-center border-transparent border-2 hover:border-white cursor-pointer">
                        <h4>View More </h4> <FiArrowUpRight />
                    </div>
                </Link>
            </Grid> */}
        </div>
    )
}

export default Projects