import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
      <div id='about' className='w-full h-screen p-2 flex items-center py-16 px-[5%] md:px-[5%] lg:px-[5%] xl:px-[10%] 2xl:px-[12%]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className="uppercase text-xl tracking-widest">About</p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 break-all">dgfdfgsdgdfkgdfjgghjkdfjkfdgdsgdfhdfhfghfghgjfhgfjgfjgfhj dsgdfgfd</p>
            <Link href="/#projects">
              <p className="py-2 underline cursor-pointer">Check out some of my latest projects.</p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src="/../public/default.jpg" alt="/" width="500" height="500"/>
          </div>

        </div>
        

    </div>
  )
}

export default About