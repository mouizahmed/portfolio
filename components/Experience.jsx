import React from 'react'

import Image from 'next/image'
import Grid from '@mui/material/Grid';

const Experience = () => {
  return (
    <div className="pl-5 pr-5 pt-5">
                <h3 className="pb-5">Where I've been</h3>
                <Grid container spacing={2} columns={{ xs: 9, sm: 9, md: 9, lg: 9, xl: 9 }}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                        <Image src="/../public/lassonde.png" alt="/" width='30' height='30' className="rounded-xl"/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="flex justify-start">
                        <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                            <h3>Lassonde School of Engineering</h3>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <p>Academic Peer Support Assistant</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ textAlign: "right" }}>
                        <h3>Fall 2021</h3>
                    </Grid>
                </Grid>
            </div>
  )
}

export default Experience