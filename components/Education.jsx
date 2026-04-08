import React from 'react';
import TimelineItem from './TimelineItem';

const schools = [
  {
    title: 'York University',
    subtitle: 'B.Eng Software Engineering',
    timeline: '2020-2026 (Oct)',
  },
];

const Education = () => {
  return (
    <section>
      <h3 className="type-section mb-6">Education</h3>
      <div className="flex flex-col gap-y-8">
        {schools.map(school => (
          <TimelineItem
            key={`${school.title}-${school.timeline}`}
            title={school.title}
            subtitle={school.subtitle}
            timeline={school.timeline}
            note={school.note}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
