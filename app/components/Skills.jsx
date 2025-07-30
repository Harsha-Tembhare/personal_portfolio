import React from 'react';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'GitHub', 'Figma', 'Tailwind CSS'];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-300">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-slate-700 py-2 px-4 rounded text-center">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
