import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Grid from '@mui/material/Grid';

const About = () => {
    const [copied, setCopied] = useState(false);
    const [fadeState, setFadeState] = useState("opacity-0");

    const email = () => {
        navigator.clipboard.writeText("mouiza@my.yorku.ca")
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    useEffect(() => {
        // About component appears first
        setTimeout(() => {
            setFadeState("opacity-100");
        }, 100);
    }, []);

    return (
        <div id="about" className={`transition-opacity duration-600 ${fadeState}`}>
            <Grid container spacing={4} columns={{ xs: 1, sm: 1, md: 12, lg: 12, xl: 12 }}>
                <Grid item xs={1} sm={1} md={7} lg={7} xl={7}>
                    <div className="pl-5 pr-5">
                        <h1 className="tracking-normal typing text-4xl">Mouiz Ahmed</h1>
                        <p>Software Engineering Student @ YorkU</p>
                    </div>
                    <div className="pl-5 pr-5 pt-5 dark:text-[#edede8]">
                        <div>
                            <p>Hello! I&apos;m a final year Software Engineering student at York University.</p>
                            <br></br>
                            <p>To put it simply: I&apos;m passionate about coding, innovation, and problem-solving.</p>
                            <br></br>
                            <p>My goal is to leverage technology to enable people and businesses to become better at what they do.</p>
                        </div>
                    </div>
                    <div className="pl-5 pr-5 pt-5 dark:text-[#edede8]">
                        <p>Let&apos;s Connect!</p>
                    </div>
                    <div className="pl-5 pr-5 pt-5">
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex items-center gap-2">
                                <Link href="https://github.com/mouizahmed" className="hover:opacity-75 transition-opacity text-blue-500 dark:text-blue-400">github</Link>
                                <span>/</span>
                                <Link href="https://www.linkedin.com/in/mouizahmed/" className="hover:opacity-75 transition-opacity text-blue-500 dark:text-blue-400">linkedin</Link>
                                <span>/</span>
                                <Link href="https://www.instagram.com/mxu.1z/" className="hover:opacity-75 transition-opacity text-blue-500 dark:text-blue-400">instagram</Link>
                                <span>/</span>
                                <Link href="/resume.pdf" className="hover:opacity-75 transition-opacity text-blue-500 dark:text-blue-400">resume</Link>
                            </div>
                            <div className="w-full sm:w-auto sm:inline-flex items-center gap-2">
                                <button onClick={email} className="group relative inline-flex items-center">
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-800 text-white dark:bg-gray-700 px-2 py-1 rounded">
                                        {copied ? "Copied!" : "Click to copy"}
                                    </span>
                                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm hover:opacity-75 transition-opacity">
                                        mouiza@my.yorku.ca
                                    </code>
                                </button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1} sm={1} md={5} lg={5} xl={5} className="flex items-center">
                    <div className="w-full h-full pl-2 pr-5">
                        <Image
                            src={"/pfp.jpg"}
                            priority
                            alt="Profile picture"
                            width={800}
                            height={800}
                            className="rounded-lg border-transparent border-2 hover:border-white w-full h-auto object-cover"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About