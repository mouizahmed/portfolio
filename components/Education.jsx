import React from 'react'

import Image from 'next/image'
import Grid from '@mui/material/Grid';

const Education = () => {
  return (
    <div className="pl-5 pr-5 pt-5">
                <h3 className="pb-5">Education</h3>
                <Grid container spacing={2} columns={{ xs: 9, sm: 9, md: 9, lg: 9, xl: 9 }}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                        <Image src="/../public/yorku.png" alt="/" width='30' height='30' className="rounded-xl"/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="flex justify-start">
                        <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                            <h3>York University</h3>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <p>B.Eng Software Engineering (Co-op) </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ textAlign: "right" }}>
                        <h3>2020-Present</h3>
                    </Grid>
                </Grid>
            </div>
  )
}

export default Education