/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Navbar = () => {
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

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav aria-label="Theme controls" className="shrink-0">
            {renderThemeChanger()}
        </nav>
    )
}

export default Navbar;
