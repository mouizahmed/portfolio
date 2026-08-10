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
                <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center cursor-pointer transition-opacity hover:opacity-75"
                    onClick={() => setTheme('light')}
                >
                    <BsFillSunFill className="w-4 h-4 fill-white" role="button" />
                </button>
            )
        } else {
            return (
                <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center cursor-pointer transition-opacity hover:opacity-75"
                    onClick={() => setTheme('dark')}
                >
                    <BsFillMoonFill className="w-4 h-4 fill-black" role="button" />
                </button>
            )
        }
    }

    const logo = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (!mounted) return null
        if (currentTheme === 'dark') {
            return (
                <Link href="/">
                    <div className="ml-7 flex h-9 w-9 items-center justify-center cursor-pointer transition-opacity hover:opacity-75">
                        <Image
                            src="/whitelogo.png"
                            alt="/"
                            width={187}
                            height={171}
                            className="h-5 w-auto cursor-pointer"
                        />
                    </div>
                </Link>
            )
        } else {
            return (
                <Link href="/">
                    <div className="ml-7 flex h-9 w-9 items-center justify-center cursor-pointer transition-opacity hover:opacity-75">
                        <Image
                            src="/logo.png"
                            alt="/"
                            width={84}
                            height={82}
                            className="h-[26px] w-auto cursor-pointer"
                        />
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
        <div className={`w-full flex flex-col`}>
            <div className="">
                <nav className="flex justify-between max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8">
                    <div className="">
                        {logo()}
                    </div>
                    <div className="float-left">
                        <ul className="hidden md:flex px-7 items-center transition-all group-hover">
                            {/* <Link href="/#about">
                                <li className="ml-5 text-sm uppercase hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg">About</li>
                            </Link>
                            <Link href="/#projects">
                                <li className="ml-5 text-sm uppercase hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg">Projects</li>
                            </Link> */}
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
