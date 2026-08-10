import React from 'react';
import TimelineItem from './TimelineItem';

const jobs = [
  {
    title: 'Ericsson',
    subtitle: 'Software Engineering Intern',
    timeline: 'Sept 2023-Aug 2024',
  },
  {
    title: 'Chatbase',
    subtitle: 'Software Engineering Intern',
    timeline: 'Apr 2023-Aug 2023',
  },
  {
    title: 'York University',
    subtitle: 'Teaching Assistant',
    timeline: 'Sept 2021-Dec 2021',
  },
];

const Experience = () => {
  return (
    <section>
      <h3 className="type-section mb-6">Where I&apos;ve Been</h3>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col" id="blogs">
          {jobs.map(job => (
            <TimelineItem
              key={`${job.title}-${job.timeline}`}
              title={job.title}
              subtitle={job.subtitle}
              timeline={job.timeline}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
