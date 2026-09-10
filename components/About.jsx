import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from './Navbar';

const links = [
  { href: 'mailto:mouizahmed1@gmail.com', label: 'email' },
  { href: 'https://github.com/mouizahmed', label: 'github' },
  { href: 'https://www.linkedin.com/in/mouizahmed/', label: 'linkedin' },
  { href: 'https://www.instagram.com/mza.vii/', label: 'instagram' },
];

const About = () => {
  return (
    <section id="about">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="type-display mb-1">Mouiz Ahmed</h1>
          <p className="type-subtitle mb-4 mt-2 font-mono">/mo-ēz/</p>
          <p className="type-body mb-4">
            I grew up in Toronto, Canada. I&apos;m a recent Software Engineering graduate from York University.
          </p>
          <p className="type-body mb-4">
            Previously a Software Engineering Intern at{' '}
            <Link href="https://www.ericsson.com/" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline dark:text-violet-400">
              Ericsson
            </Link>{' '}
            and{' '}
            <Link href="https://www.chatbase.co/" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline dark:text-violet-400">
              Chatbase
            </Link>
            , and a Teaching Assistant at{' '}
            <Link href="https://www.yorku.ca/" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline dark:text-violet-400">
              York University
            </Link>
            .
          </p>
          <p className="type-body mb-4">
            I&apos;m currently interested in AI agents, embedded systems, and distributed systems.
          </p>
        </div>
        <Navbar />
      </div>
      <div className="mt-4">
        <div className="flex w-full flex-wrap items-center justify-between gap-y-3">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1 text-[13px] text-violet-700 transition-opacity hover:underline dark:text-violet-400"
            >
              <span>{link.label}</span>
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
