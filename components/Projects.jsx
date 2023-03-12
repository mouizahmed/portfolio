import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FiArrowUpRight } from 'react-icons/fi'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

const Projects = () => {

    const [fading, setFading] = useState(" opacity-0 ease-in ");

    useEffect(() => {
        setFading(" opacity-100 easin-in ");
    }, [])


  return (
    <div className={"pl-5 pr-5 pt-5 transition-opacity duration-600 delay-1200" + fading} id="projects" >
                <h3 className="pb-5">Featured Projects</h3>
                <div>
                    <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2}} className="">
                    <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className="group">
                        <Link href="https://github.com/mouizahmed/ponderful">
                        <Card className="h-[625px] bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer md:hover:shadow-2xl md:hover:scale-105 transition">
                            <CardContent className="p-0">
                                    <Grid container>
                                        <Grid item>
                                            <Image src="/catchGPT.png" priority alt="/" width='480' height='480' className="align-top"/>
                                        </Grid>
                                        <Grid item>
                                            <h3 className="text-xl pt-5 pl-5">CatchGPT</h3>
                                        </Grid>
                                        <Grid>
                                            <h3 className="pl-5 pr-5 pb-5">Python • Flask • Hugging Face API • Torch • HTML/CSS</h3>
                                        </Grid>
                                        <Grid>
                                            <h6 className="pl-5 pr-5">A web tool that allows educators to determine if a piece of text was AI generated or human made.</h6>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                        </Card>
                        </Link>
                        {/* <Card className="ml-4 opacity-0 rounded-xl w-3xl bg-[#000000] hover:opacity-50 transition ease-out duration-300 cursor-pointer absolute bottom-0 top-4 left-0 right-0">
                            <CardContent className="p-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                    
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex items-center justify-center h-[475px]">
                                        <h3 className="text-[#ffffff]">More Information</h3>
                                    </Grid>
                                    
                                </Grid>
                            </CardContent>
                            
                        </Card> */}
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className="group">
                        <Link href="https://github.com/mouizahmed/ponderful">
                        <Card className="h-[625px] bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer md:hover:shadow-2xl md:hover:scale-105 transition">
                            <CardContent className="p-0">
                                    <Grid container>
                                        <Grid item>
                                            <Image src="/ponderful.png" priority alt="/" width='400' height='400' className=""/>
                                        </Grid>
                                        <Grid item>
                                            <h3 className="text-xl pt-5 pl-5">ponderful.</h3>
                                        </Grid>
                                        <Grid>
                                            <h3 className="pl-5 pr-5 pb-5">MongoDB • ExpressJS • ReactJS • NodeJS • MUI</h3>
                                        </Grid>
                                        <Grid>
                                            <h6 className="pl-5 pr-5">A web application that eases the struggles of making plans or group decisions with a large group of friends.</h6>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                        </Card>
                        </Link>
                        {/* <Card className="ml-4 opacity-0 rounded-xl w-3xl bg-[#000000] hover:opacity-50 transition ease-out duration-300 cursor-pointer absolute bottom-0 top-4 left-0 right-0">
                            <CardContent className="p-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                    
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex items-center justify-center h-[475px]">
                                        <h3 className="text-[#ffffff]">More Information</h3>
                                    </Grid>
                                    
                                </Grid>
                            </CardContent>
                            
                        </Card> */}
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className="group">
                        <Link href="https://github.com/mouizahmed/course_reviews">
                        <Card className="h-[625px] bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer md:hover:shadow-2xl md:hover:scale-105 transition">
                            <CardContent className="p-0">
                                <Grid container>
                                    <Grid item>
                                        <Image src="/placeholder.png" priority alt="/" width='400' height='400' className=""/>
                                    </Grid>
                                    <Grid item>
                                        <h3 className="text-xl pt-5 pl-5">Course Reviews</h3>
                                    </Grid>
                                    <Grid item>
                                        <h3 className="pl-5 pr-5 pb-5">MySQL • ExpressJS • ReactJS • NodeJS • MUI • Google Cloud Platform • JWT • Cloudinary</h3>
                                    </Grid>
                                    <Grid item>
                                        <h6 className="pl-5 pr-5 font-thick">A web application that allows users to create course reviews for their respective post-secondary schools and ease their struggles within the course selection process.</h6>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            
                        </Card>
                        </Link>
                        {/* <Card className="ml-4 opacity-0 rounded-xl w-3xl bg-[#000000] hover:opacity-50 transition ease-out duration-300 cursor-pointer absolute bottom-0 top-4 left-0 right-0">
                            <CardContent className="p-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                    
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex items-center justify-center h-[475px]">
                                        <h3 className="text-[#ffffff]">More Information</h3>
                                    </Grid>
                                    
                                </Grid>
                            </CardContent>
                            
                        </Card> */}
                    
                        </Grid>
                       
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className="flex items-center justify-end">
                            <Link href="https://github.com/mouizahmed"><div className="dark:bg-[#4B5563] bg-[#d5d5d1] flex p-1 h-10 w-35 rounded-lg justify-center items-center border-transparent border-2 hover:border-white cursor-pointer"><h4>View More </h4> <FiArrowUpRight /></div></Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
  )
}

export default Projects