import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const links = [
  { href: 'mailto:mouizahmed1@gmail.com', label: 'email' },
  { href: 'https://github.com/mouizahmed', label: 'github' },
  { href: 'https://www.linkedin.com/in/mouizahmed/', label: 'linkedin' },
  { href: 'https://www.instagram.com/mza.vii/', label: 'instagram' },
];

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-0 sm:pr-8">
          <h1 className="type-display mb-1">Mouiz Ahmed</h1>
          <p className="type-subtitle mb-4 mt-2 font-mono">/mo-ēz/</p>
          <p className="type-body mb-4">
            I grew up in Toronto, Canada. I&apos;m a recent Software Engineering graduate from York University.
          </p>
          <p className="type-body mb-4">
            I&apos;m currently interested in AI agents, embedded systems, and distributed systems.
          </p>
        </div>
        <div className="mb-6 w-full max-w-[340px] sm:mb-0 sm:mt-0 sm:max-w-[240px]">
          <Image
            src="/pfp.jpg"
            priority
            alt="Profile picture"
            width={800}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <p className="type-body mt-4">
        Actively seeking full-time software engineering opportunities. Feel free to reach out!{' '}
        mouizahmed1<span className="text-xs">[at]</span>gmail<span className="text-xs">[dot]</span>com
      </p>
      <div className="mt-4">
        <div className="flex w-full flex-wrap items-center justify-between gap-y-3">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1 text-sm text-blue-500 transition-opacity hover:underline dark:text-blue-400"
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
