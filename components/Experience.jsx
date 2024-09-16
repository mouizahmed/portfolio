import React from 'react'
import Grid from '@mui/material/Grid';
import Job from "./Job"

const Experience = () => {
    return (
        <div className="pl-5 pr-5 pt-5">
            <h3 className="pb-5">Where I&apos;ve been</h3>
            <Grid container spacing={2} columns={{ xs: 9, sm: 9, md: 9, lg: 9, xl: 9 }}>

                <Job logoPath={"/ericsson.png"} companyName={"Ericsson"} position={"5G Software Developer"} timeline={"Sept 2023 - Aug 2024"} />
                <Job logoPath={"/chatbase.png"} companyName={"Chatbase"} position={"Software Developer"} timeline={"Apr 2023 - Aug 2023"} />
                <Job logoPath={"/lassonde.png"} companyName={"Lassonde School of Engineering"} position={"Academic Peer Support Assistant"} timeline={"Sept 2021 - Dec 2021"} />

            </Grid>
        </div>
    )
}

export default Experience