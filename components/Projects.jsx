import React from 'react'
import Image from 'next/image'

import { FiArrowUpRight } from 'react-icons/fi'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

const Projects = () => {
  return (
    <div className="pl-5 pr-5 pt-5 transition-opacity duration-600" >
                <h3 className="pb-5">Featured Projects</h3>
                <div>
                    <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2}}>
                        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
                        <Card className="bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer">
                            <CardContent className="p-0">
                                <Grid container>
                                    <Grid item>
                                        <Image src="/../public/placeholder.png" alt="/" width='400' height='400' className=""/>
                                    </Grid>
                                    <Grid item>
                                        <h3 className="p-5">Course Reviews</h3>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
                        <Card className="bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer">
                            <CardContent className="p-0">
                                    <Grid container>
                                        <Grid item>
                                            <Image src="/../public/placeholder.png" alt="/" width='400' height='400' className=""/>
                                        </Grid>
                                        <Grid item>
                                            <h3 className="p-5">ponderful.</h3>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className="flex items-center justify-end">
                            <div className="bg-[#4B5563] flex p-1 h-10 w-35 rounded-lg justify-center items-center border-transparent border-2 hover:border-white cursor-pointer"><h4>View More </h4> <FiArrowUpRight /></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
  )
}

export default Projects