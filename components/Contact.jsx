import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const links = [
  { href: 'mailto:mouizahmed1@gmail.com', label: 'email' },
  { href: 'https://github.com/mouizahmed', label: 'github' },
  { href: 'https://www.linkedin.com/in/mouizahmed/', label: 'linkedin' },
  { href: 'https://www.instagram.com/mza.vii/', label: 'instagram' },
  { href: '/resume.pdf', label: 'resume' },
];

const Contact = () => {
  return (
    <section>
      <h3 className="type-section mb-6">Contact</h3>
      <p className="type-body mb-4">
        My greatest ideas have come from interactions with people of the most different
        perspectives. So always feel free to reach out!
      </p>
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
    </section>
  );
};

export default Contact;
