import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects">
      <h3 className="type-section mb-6">Featured Projects</h3>
      <div className="space-y-8">
        <Project
          projectLink="https://github.com/mouizahmed/img-compressor"
          projectName="img-compressor"
          projectSubtitle="Quad-Tree Image Compression CLI"
          tags={['Rust']}
          description="Rust CLI for quad-tree image compression with O(1) variance queries, scaling to 6k x 9k images across 100k iterations in 7.6s."
        />
        <Project
          projectLink="https://github.com/mouizahmed/sunless"
          projectName="sunless"
          projectSubtitle="AI Meeting Notepad Desktop App"
          tags={['Electron', 'React', 'TypeScript', 'Go', 'PostgreSQL', 'Redis', 'Pinecone']}
          description="Deployed an Electron desktop meeting workspace for live transcription, collaborative notes, and AI workflows, with a Go backend for Google OAuth, WebSocket transcription, and semantic search over notes and transcripts."
        />
        <Project
          projectLink="https://github.com/mouizahmed/portable-cnc-machine"
          projectName="portable-cnc-machine"
          projectSubtitle="CNC Machine Embedded Control System"
          tags={['C/C++', 'C#', 'grblHAL']}
          description="Embedded control system for a portable CNC machine across Pico 2 W and Teensy 4.1 controllers, integrating closed-loop motion control to machine aluminum within +/- 0.05 mm tolerance."
        />
        <Project
          projectLink="https://github.com/mouizahmed/ratethatclass"
          projectName="ratethatclass.com"
          projectSubtitle="Course Reviews Web Application"
          tags={['Next.js', 'React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker']}
          description="Deployed a full-stack course reviews platform for anonymous class reviews, reaching 200+ users and 100+ reviews at peak usage."
        />
      </div>
    </section>
  );
};

export default Projects;
