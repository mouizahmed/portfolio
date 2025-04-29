/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

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
    }, [])

    return (
        <div className={`w-full flex flex-col opacity-0 animate-fade-in`}>
            <div className="">
                <nav className="flex justify-between max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8">
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
        </div>
    )
}

export default Navbar;
