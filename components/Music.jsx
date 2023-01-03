import React from 'react'
import Image from 'next/image'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

const Music = () => {
  return (
    <div className="pl-5 pr-5 pt-5 pb-5">
        <h3>What I&apos;m Listening To</h3>
        <div className="flex justify-center pt-5">
            <Card className="rounded-xl">
                <CardContent>
                    <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
dfgdfg
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
dfgdg
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Music