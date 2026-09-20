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
          projectSubtitle="SSH Environment Manager"
          tags={['Go', 'OpenSSH', 'SQLite', 'Cryptography', 'Docker']}
          description="Released an open-source Go CLI for managing SSH hosts, connection options, keys, and trusted host keys across macOS and Linux. An optional self-hosted relay syncs the environment with client-side encryption and explicit conflict review. An encrypted local vault and SSH agent keep managed private keys off disk in plaintext while OpenSSH handles connections."
        />
        <Project
          projectLink="https://github.com/mouizahmed/portable-cnc-machine"
          projectName="portable-cnc-machine"
          projectSubtitle="CNC Machine Embedded Control System (In Progress)"
          tags={['C/C++', 'C#', '.NET', 'Avalonia', 'KiCad', 'grblHAL']}
          description="A modular, portable CNC mill intended to let remote First Nations communities fabricate replacement parts locally, targeting ±0.05 mm accuracy in aluminum. Designed to operate offline, it uses a Teensy 4.1 controller that extends grblHAL to run G-code from an SD card and verify axis position, while an Avalonia/.NET app lets operators preview toolpaths in OpenGL and control the mill. Its fabricated electronics enclosure will house the power, motor, spindle, and emergency-stop systems."
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
          description="Launched an anonymous course review platform with course search, detailed ratings, community voting, and admin moderation. Developed 11 university-specific scrapers to normalize 60,038 courses into a searchable PostgreSQL database."
        />
      </div>
    </section>
  );
};

export default Projects;
