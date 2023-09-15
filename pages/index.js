import Head from 'next/head'
import Image from 'next/image'

import { Poppins } from '@next/font/google';

import Navbar from '../components/Navbar.jsx'
import Music from '../components/Music.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Current from '../components/Current.jsx'
import About from '../components/About.jsx'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200']
})

export default function Home() {

  

  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/header.png" />
      </Head>

      <main className={poppins.className}>
        <Navbar />
        {/* <Main /> */}
        <div className="max-w-3xl h-full mx-auto p-3 flex flex-col mb-3">
            <About />
            <Current seeking={false} focus={""} logoPath={"/../public/ericsson.png"} companyName={"Ericsson"} title={"5G Software Developer"} timeline={"Present"} />
            <Projects />
            <Experience />
            <Education />
            <Music />
        </div>

        
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
