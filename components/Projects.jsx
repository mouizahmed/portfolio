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
          description="Rust CLI for quad-tree image compression using prefix-sum matrices for faster region queries."
        />
        <Project
          projectLink="https://github.com/mouizahmed/sunless"
          projectName="sunless"
          projectSubtitle="AI Meeting Notepad Desktop App"
          tags={['Electron', 'React', 'TypeScript', 'Go', 'PostgreSQL', 'WebSockets', 'Vector Database']}
          description="Desktop meeting workspace for live transcription, real-time collaboration, AI note enhancement, semantic search across notes and transcripts, and calendar-aware workflows."
        />
        <Project
          projectLink="https://github.com/mouizahmed/portable-cnc-machine"
          projectName="portable-cnc-machine"
          projectSubtitle="CNC Machine Embedded Control System"
          tags={['Embedded C/C++', 'Microcontrollers', 'Motor Control', 'Hardware Integration']}
          description="Embedded control system for a portable CNC machine, focused on low-level control logic and hardware integration for reliable operation."
        />
        <Project
          projectLink="https://github.com/mouizahmed/ratethatclass"
          projectName="ratethatclass.com"
          projectSubtitle="Course Reviews Web Application"
          tags={['Next.js', 'React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker']}
          description="Full-stack course reviews platform for students to anonymously review classes, reaching 200+ users and 100+ reviews at peak usage."
        />
      </div>
    </section>
  );
};

export default Projects;
