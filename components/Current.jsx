import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { AiFillAlert } from 'react-icons/ai'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

const Current = () => {

    const [fading, setFading] = useState(" opacity-0 ease-in ");

    useEffect(() => {
        setFading(" opacity-100 easin-in ");
    }, [])

    return (
        <div className={"pl-5 pr-5 pt-5 transition-opacity duration-600 delay-1100" + fading}>
            <h3 className="pb-5">Currently</h3>
            <Card className="rounded-xl border-transparent border-2 hover:border-white pr-5" style={{ backgroundColor: "#4da64d" }}>
                <CardContent>
                    <Grid container spacing={2} columns={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                            {/* <Image src="/../public/yorku.png" alt="/" width='30' height='30' className="rounded-xl"/> */}
                            <AiFillAlert className="w-[30px] h-[30px] fill-white" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="flex justify-start">
                            <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                                    <h3 className="text-[white]">Seeking Internship Positions </h3>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <p className="text-[white]">Full Stack, Mobile Development, Data Science</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ textAlign: "right" }}>
                            <h3 className="text-[white]">Summer/Fall 2023</h3>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}

export default Current