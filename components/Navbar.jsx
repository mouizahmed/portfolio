/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {

const [nav, setNav] = useState(false)
const [shadow, setShadow] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow);
}, [])

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-white top-0 px-[5%] md:px-[5%] lg:px-[5%] xl:px-[10%] 2xl:px-[12%]" : "fixed w-full h-20 z-[100] top-0 px-[5%] md:px-[5%] lg:px-[5%] xl:px-[10%] 2xl:px-[12%]"}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16"> 
            <Image src="/../public/logo.png" alt="/" width='50' height='50' />
            <div>
                <ul className="hidden md:flex px-2 items-center">
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href="/#projects">
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase bg-[#353535] hover:bg-[#98999a] text-white font-bold py-2 px-4 rounded-full">Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}> 
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
        </div>



    </div>
  )
}

export default Navbar;
