import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-0 sm:pr-8">
          <h1 className="type-display mb-1">Mouiz Ahmed</h1>
          <h2 className="type-subtitle mb-4 mt-2">Software Engineering Student @ YorkU</h2>
          <p className="type-body mb-4">It&apos;s pronounced &apos;mo-eez&apos;!</p>
          <p className="type-body mb-4">
            I&apos;m a final year Software Engineering student at York University.
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
    </section>
  );
};

export default About;
