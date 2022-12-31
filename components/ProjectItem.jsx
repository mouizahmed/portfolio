import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, stack, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#353535] to-[#88898a]">
                    <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" width="600" height="400" />
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
                        <Link href={projectUrl}>
                            <p className="text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer">More Info</p>
                        </Link>
                    </div>
    </div>
  )
}

export default ProjectItem