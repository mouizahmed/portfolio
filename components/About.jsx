import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai'
import { MdContactPage } from 'react-icons/md'

import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

const About = () => {

  const [copied, setCopied] = useState(false);

  const email = () => {
    navigator.clipboard.writeText("mouiza@my.yorku.ca")
    setCopied(true);
  }

  return (
    <div id="about">
        <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 4, lg: 4, xl: 4 }}>
                <Grid item xs={1} sm={1} md={3} lg={3} xl={3}>
                    <div className="pl-5 pr-5">
                        <h1 className="tracking-normal typing text-4xl">Mouiz Ahmed</h1>
                        <p className="">Software Engineering Student @ YorkU</p>
                        
                        {/* <p className="uppercase text-md tracking-widest ">Software Engineering Student</p>
                        <p className="uppercase text-md tracking-widest ">York University</p> */}
                        
                    </div>
                    <div className="pl-5 pr-5 pt-5 dark:text-[#edede8]">
                        <p className="">Hey 👋!</p>
                        <p>I&apos;m a third-year Software Engineering Co-op student seeking Summer 2023 Internship Positions for Front-End, Full Stack, Mobile Development and UI/UX Design.</p>
                    </div>
                    <div className="pl-5 pr-5 pt-5 dark:text-[#edede8]">
                        <p>Let&apos;s Connect!</p>
                    </div>
                    <Grid container spacing={2} className="pl-5 pr-5 pt-5">
                        <Grid item>
                            <Link href="https://www.linkedin.com/in/mouizahmed/">
                                <div className="bg-[#D5D5D1] dark:bg-[#4B5563] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer">
                                    <AiFillLinkedin className="w-4 h-4 dark:fill-white fill-black" role="button" />
                                </div>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://github.com/mouizahmed">
                                <div className="bg-[#d5d5d1] dark:bg-[#4B5563] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer">
                                    <AiFillGithub className="w-4 h-4 dark:fill-white fill-black" role="button" />
                                </div>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/resume.pdf">
                                <div className="bg-[#d5d5d1] dark:bg-[#4B5563] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer">
                                    <MdContactPage className="w-4 h-4 dark:fill-white fill-black" role="button" />
                                </div>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title={ !copied ? ("Click to copy") : "Copied!" } arrow>
                                <div className="bg-[#d5d5d1] dark:bg-[#4B5563] h-9 w-[220px] rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer" onClick={() => email()}>
                                    <AiOutlineMail className="w-4 h-4 dark:fill-white fill-black" role="button" /><p className="pl-2">mouiza@my.yorku.ca</p>
                                </div>
                            </Tooltip>
                                
        
                        
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <div className="pl-5 pr-5">
                <Image src={"/profile.jpg"} priority alt="/" width='500' height='400' className="rounded-lg border-transparent border-2 hover:border-white"/>
                </div>
                </Grid> 

            </Grid>
    </div>
  )
}

export default About