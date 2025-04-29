import Head from 'next/head';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';

import { Poppins } from '@next/font/google';

import Navbar from '../components/Navbar.jsx';
import Music from '../components/Music.jsx';
import Education from '../components/Education.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Chess from '../components/Chess.jsx';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

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
    // Match the timing with the components
    setTimeout(() => setDividerStates(prev => ({ ...prev, navbar: 'opacity-100' })), 100);
    setTimeout(() => setDividerStates(prev => ({ ...prev, about: 'opacity-100' })), 500);
    setTimeout(() => setDividerStates(prev => ({ ...prev, experience: 'opacity-100' })), 800);
    setTimeout(() => setDividerStates(prev => ({ ...prev, education: 'opacity-100' })), 1500);
    setTimeout(() => setDividerStates(prev => ({ ...prev, projects: 'opacity-100' })), 1600);
    setTimeout(() => setDividerStates(prev => ({ ...prev, music: 'opacity-100' })), 2900);
    setTimeout(() => setDividerStates(prev => ({ ...prev, chess: 'opacity-100' })), 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/header.png" />
      </Head>

      <main className={poppins.className}>
        <div className={`transition-opacity duration-600 ${dividerStates.navbar}`}>
          <Navbar />
        </div>
        {/* <Main /> */}
        <div className="max-w-3xl h-full mx-auto p-7 flex flex-col mb-3">
          <div className={`transition-opacity duration-600 ${dividerStates.about}`}>
            <About />
            <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          </div>
          {/* <Current seeking={false} focus={""} logoPath={"/ericsson.png"} companyName={"Ericsson"} title={"5G Software Developer"} timeline={"Present"} /> */}
          <div className={`transition-opacity duration-600 ${dividerStates.experience}`}>
            <Experience />
            <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.education}`}>
            <Education />
            <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.projects}`}>
            <Projects />
            <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          </div>
          <div className={`transition-opacity duration-600 ${dividerStates.music}`}>
            <Music />
            <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
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
