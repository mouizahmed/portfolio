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
          tags={['C/C++', 'C#', '.NET', 'grblHAL']}
          description="Embedded control system for a portable CNC machine using a Teensy 4.1 controller, integrating closed-loop motion control to machine aluminum within +/- 0.05 mm tolerance."
        />
        <Project
          projectLink="https://github.com/mouizahmed/img-compressor"
          projectName="img-compressor"
          projectSubtitle="Quad-Tree Image Compression CLI"
          tags={['Rust']}
          description="Rust CLI for quad-tree image compression with O(1) variance queries, scaling to 6k x 9k images across 100k iterations in 7.6s."
        />
        <Project
          projectLink="https://github.com/mouizahmed/orion"
          projectName="orion"
          projectSubtitle="Cross-Platform AI Meeting Intelligence"
          tags={['Electron', 'React', 'TypeScript', 'Go', 'PostgreSQL', 'Redis', 'Pinecone']}
          description="Deployed an Electron desktop meeting workspace for live transcription, meeting notes, and AI workflows, with a Go backend for Google OAuth, WebSocket transcription, and semantic search over notes and transcripts."
        />
      </div>
    </section>
  );
};

export default Projects;
