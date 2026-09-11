import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects">
      <h3 className="type-section mb-4">Featured Projects</h3>
      <div className="space-y-8">
        <Project
          projectLink="https://github.com/mouizahmed/sshstate"
          projectName="sshstate"
          projectSubtitle="Encrypted SSH Environment Synchronization"
          tags={['Go', 'Cryptography', 'Distributed Systems', 'CLI', 'Docker']}
          description="In progress: a CLI-first, self-hostable vault that securely synchronizes SSH hosts, keys, known_hosts, and topology across machines while remaining compatible with native OpenSSH."
        />
        <Project
          projectLink="https://github.com/mouizahmed/portable-cnc-machine"
          projectName="portable-cnc-machine"
          projectSubtitle="CNC Machine Embedded Control System"
          tags={['C/C++', 'C#', '.NET', 'Avalonia', 'KiCad', 'grblHAL']}
          description="Led electronics and software development for a portable CNC machine achieving ±0.05 mm accuracy in aluminum. Built Teensy 4.1 motion-control firmware, an Avalonia/.NET app for 3D toolpath visualization and machine control, a custom controller PCB, and enclosure wiring."
        />
        <Project
          projectLink="https://github.com/mouizahmed/img-compressor"
          projectName="img-compressor"
          projectSubtitle="Quad-Tree Image Compression CLI"
          tags={['Rust']}
          description="Rust CLI for quad-tree image compression with O(1) variance queries, scaling to 6k x 9k images across 100k iterations in 7.6s."
        />
        <Project
          projectLink="https://github.com/mouizahmed/ratethatclass"
          projectName="ratethatclass.com"
          projectSubtitle="Course Reviews Web Application"
          tags={['Next.js', 'React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker']}
          description="Built and deployed an anonymous course review platform with course search, detailed ratings, community voting, and admin moderation. Developed 11 university-specific scrapers to normalize 60,038 courses into a searchable PostgreSQL database."
        />
      </div>
    </section>
  );
};

export default Projects;
