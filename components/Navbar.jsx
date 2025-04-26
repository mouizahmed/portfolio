/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useTheme } from 'next-themes'

import Popover from '@mui/material/Popover'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [fadeState, setFadeState] = useState("opacity-0");
    const [anchorEl, setAnchorEl] = useState(null);

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (!mounted) return null
        if (currentTheme === 'dark') {
            return (
                <div className="bg-[#4B5563] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer" onClick={() => setTheme('light')}>
                    <BsFillSunFill className="w-4 h-4 fill-white" role="button" />
                </div>
            )
        } else {
            return (
                <div className="bg-[#d5d5d1] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer" onClick={() => setTheme('dark')}>
                    <BsFillMoonFill className="w-4 h-4 fill-black" role="button" />
                </div>
            )
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const logo = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (!mounted) return null
        if (currentTheme === 'dark') {
            return (
                <Link href="/">
                    <div className="bg-[#4B5563] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer ml-7">
                        <Image src="/whitelogo.png" alt="/" width='20' height='20' className="cursor-pointer fill-white" />
                    </div>
                </Link>
            )
        } else {
            return (
                <Link href="/">
                    <div className="bg-[#d5d5d1] h-9 w-9 rounded-lg flex items-center justify-center border-transparent border-2 hover:border-white cursor-pointer ml-7">
                        <Image src="/logo.png" alt="/" width='50' height='50' className="cursor-pointer " />
                    </div>
                </Link>
            )
        }
    }

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        setMounted(true)

        // Navbar appears last
        setTimeout(() => {
            setFadeState("opacity-100");
        }, 3600);
    }, [])

    return (
        <div className={`w-full flex flex-col transition-opacity duration-600 ${fadeState}`}>
            <div className="">
                <nav className="flex justify-between max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 ">
                    <div className="">
                        {logo()}
                    </div>
                    <div className="float-left">
                        <ul className="hidden md:flex px-7 items-center transition-all group-hover">
                            <Link href="/#about">
                                <li className="ml-5 text-sm uppercase hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg">About</li>
                            </Link>
                            <Link href="/#projects">
                                <li className="ml-5 text-sm uppercase hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg">Projects</li>
                            </Link>
                            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <li className="ml-5 text-sm uppercase hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg">Resume</li>
                            </Link>
                            <li className="ml-5">{renderThemeChanger()}</li>
                        </ul>
                        <div onClick={handleNav} className="md:hidden px-7">
                            {renderThemeChanger()}
                        </div>
                    </div>
                </nav>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{ width: '100%' }}
            >
                {/* <h3 className="p-5">The content of the Popover.</h3> */}
                <div className="p-5">
                    {renderThemeChanger()}
                </div>
            </Popover>

            {/* <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}> 
                <div className={nav ? "md:hidden fixed left-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen bg-[#ecf0f3] p-10" 
                                    : "fixed left-[-100%] top-0"}>
                    <div className="">
                        <div className="flex w-full items-center justify-between">
                            <Image src="/../public/logo.png" alt="/" width='50' height='50' />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center h-screen py-4 border-b border-t border-gray-300 my-4">
                            <ul className="uppercase flex-col flex items-center justify-center">
                                <Link href="/">
                                    <li className="py-4 text-sm">Home</li>
                                </Link>
                                <Link href="/#about">
                                    <li className="py-4 text-sm">About</li>
                                </Link>
                                <Link href="/#projects">
                                    <li className="py-4 text-sm">Projects</li>
                                </Link>
                                <Link href="/#contact">
                                    <li className="py-4 text-sm">Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                                <div className="flex items-center justify-between my-4 w-full">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                </div>
                
            </div> */}



        </div>
    )
}

export default Navbar;
