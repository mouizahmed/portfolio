import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';

export default function Home() {
  const [dividerStates, setDividerStates] = useState({
    about: 'opacity-0',
    projects: 'opacity-0',
  });

  useEffect(() => {
    // Consistent timing with 200ms intervals and 600ms duration
    setTimeout(() => setDividerStates(prev => ({ ...prev, about: 'opacity-100' })), 300);
    setTimeout(() => setDividerStates(prev => ({ ...prev, projects: 'opacity-100' })), 900);
  }, []);

  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/header.png" />
      </Head>

      <main>
        <div className="max-w-3xl h-full mx-auto p-7 pt-12 flex flex-col space-y-8 mb-3">
          <div className={`transition-opacity duration-600 ${dividerStates.about}`}>
            <About />
          </div>
          {/* <Current seeking={false} focus={""} logoPath={"/ericsson.png"} companyName={"Ericsson"} title={"5G Software Developer"} timeline={"Present"} /> */}
          <div className={`transition-opacity duration-600 ${dividerStates.projects}`}>
            <Projects />
            {/* <Divider sx={{ borderColor: 'grey.200', opacity: 0.5, my: 3 }} /> */}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
