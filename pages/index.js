import Head from 'next/head';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar.jsx';
import Music from '../components/Music.jsx';
import Education from '../components/Education.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Chess from '../components/Chess.jsx';

export default function Home() {
  const [dividerStates, setDividerStates] = useState({
    navbar: 'opacity-0',
    about: 'opacity-0',
    experience: 'opacity-0',
    education: 'opacity-0',
    projects: 'opacity-0',
    music: 'opacity-0',
    chess: 'opacity-0',
  });

  useEffect(() => {
    // Consistent timing with 200ms intervals and 600ms duration
    setTimeout(() => setDividerStates(prev => ({ ...prev, navbar: 'opacity-100' })), 100);
    setTimeout(() => setDividerStates(prev => ({ ...prev, about: 'opacity-100' })), 300);
    setTimeout(() => setDividerStates(prev => ({ ...prev, experience: 'opacity-100' })), 500);
    setTimeout(() => setDividerStates(prev => ({ ...prev, education: 'opacity-100' })), 700);
    setTimeout(() => setDividerStates(prev => ({ ...prev, projects: 'opacity-100' })), 900);
    setTimeout(() => setDividerStates(prev => ({ ...prev, music: 'opacity-100' })), 1100);
    setTimeout(() => setDividerStates(prev => ({ ...prev, chess: 'opacity-100' })), 1300);
  }, []);

  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/header.png" />
      </Head>

      <main>
        <div className={`transition-opacity duration-600 ${dividerStates.navbar}`}>
          <Navbar />
        </div>
        {/* <Main /> */}
        <div className="max-w-3xl h-full mx-auto p-7 flex flex-col mb-3">
          <div className={`transition-opacity duration-600 ${dividerStates.about}`}>
            <About />
            <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} />
          </div>
          {/* <Current seeking={false} focus={""} logoPath={"/ericsson.png"} companyName={"Ericsson"} title={"5G Software Developer"} timeline={"Present"} /> */}
          <div className={`transition-opacity duration-600 ${dividerStates.experience}`}>
            <Experience />
            <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.education}`}>
            <Education />
            <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.projects}`}>
            <Projects />
            <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.music}`}>
            <Music />
            <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.chess}`}>
            <Chess />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
