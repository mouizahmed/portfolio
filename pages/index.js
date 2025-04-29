import Head from 'next/head';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

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
          <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          {/* <Current seeking={false} focus={""} logoPath={"/ericsson.png"} companyName={"Ericsson"} title={"5G Software Developer"} timeline={"Present"} /> */}
          <Experience />
          <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          <Education />
          <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          <Projects />
          <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          <Music />
          <Divider className="my-5" sx={{ borderColor: 'grey.200', opacity: 0.5 }} />
          <Chess />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
