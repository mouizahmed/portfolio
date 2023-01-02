import React from 'react'

import Music from '../components/Music.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Current from '../components/Current.jsx'
import About from '../components/About.jsx'


const Main = () => {

  return (
    <div id="home" className="max-w-3xl h-full mx-auto p-3 flex flex-col">
            
            <About />
            <Current />
            <Projects />
            <Experience />
            <Education />
            <Music />

    </div>
  )
}

export default Main