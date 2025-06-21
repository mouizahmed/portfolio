import React from 'react'
import Image from 'next/image'

import { AiFillAlert } from 'react-icons/ai'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

const Current = ({ seeking, focus, logoPath, companyName, title, color, timeline }) => {

    return (
        <div className="pl-5 pr-5 pt-5">
            <h3 className="pb-5">Currently</h3>
            {seeking ? (
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
                                        <p className="text-[white]">{focus}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ textAlign: "right" }}>
                                <h3 className="text-[white]">Summer/Fall 2023</h3>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            ) : (
                <Card className="rounded-xl border-transparent border-2 hover:border-white pr-5 bg-black dark:bg-white">
                    <CardContent>
                        <Grid container spacing={2} columns={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                                <Image src={logoPath} alt="/" width='30' height='30' className="rounded-xl dark:border dark:border-black" />
                                {/* <AiFillAlert className="w-[30px] h-[30px] fill-white" /> */}
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="flex justify-start">
                                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                                        <h3 className="text-white dark:text-[black]">{companyName}</h3>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                        <p className="text-white dark:text-[black]">{title}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ textAlign: "right" }}>
                                <h3 className="text-white dark:text-[black]">{timeline}</h3>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}

        </div>
    )
}

export default Current