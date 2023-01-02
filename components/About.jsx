import React from 'react'
import Image from 'next/image'

import Grid from '@mui/material/Grid';

const About = () => {
  return (
    <div>
        <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 4, lg: 4, xl: 4 }}>
                <Grid item xs={1} sm={1} md={3} lg={3} xl={3}>
                <div className="pl-5 pr-5">
                <h1 className="tracking-normal typing text-4xl">Mouiz Ahmed</h1>
                <p className="">Software Engineering Student @ YorkU</p>
                
                {/* <p className="uppercase text-md tracking-widest ">Software Engineering Student</p>
                <p className="uppercase text-md tracking-widest ">York University</p> */}
                
            </div>
            <div className="pl-5 pr-5 pt-5 text-[#edede8]">
                <p className="">Hey 👋!</p>
                <p>I'm a third-year Software Engineering Co-op student seeking Summer 2023 Internship Positions for Front-End, Full Stack, Mobile Development and UI/UX Design.</p>
            </div>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <div className="pl-5 pr-5">
                <Image src="/../public/profile.jpg" alt="/" width='500' height='400' className="rounded-lg"/>
                </div>
                </Grid> 

            </Grid>
    </div>
  )
}

export default About