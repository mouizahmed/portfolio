import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Link from 'next/link'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center px-[5%] md:px-[5%] lg:px-[5%] xl:px-[10%] 2xl:px-[12%]">
        <div className="max-w-[1240px] w-full h-full mx-auto p-3 flex flex-col justify-center items-center ">
            <div className="flex flex-col p-3">
                <h1 className="py-4 tracking-normal typing">Mouiz Ahmed</h1>
                <p className="uppercase text-md tracking-widest ">Software Engineering Student</p>
                <p className="uppercase text-md tracking-widest ">York University</p>
                
            </div>
            <div className="">
                <button className="bg-[#353535] hover:bg-[#98999a] text-white font-bold py-2 px-4 rounded-full">
                    Resume
                </button>
            </div>
            <div class="animate-bounce w-12 h-12 absolute bottom-0 cursor-pointer">
                <Link href="/#about">
                    <AiOutlineArrowDown />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Main