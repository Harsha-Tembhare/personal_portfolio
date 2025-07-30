import React from 'react';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'Responsive website showcasing my work, built with HTML/CSS/JS.',
    live: '#',
    github: '#',
  },
  {
    name: 'AI Art Generator',
    description: 'React web app that creates art based on user emotion input.',
    live: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-slate-800">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <a href={proj.live} className="text-blue-400 hover:underline mr-4">Live Demo</a>
            <a href={proj.github} className="text-blue-400 hover:underline">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
