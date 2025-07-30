import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-800 py-10 text-center">
      <h1 className="text-4xl font-bold">Harsha Tembhare</h1>
      <p className="text-lg mt-2 text-blue-400">Frontend Web Developer</p>
      <a href="#projects" className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition">
        See My Work
      </a>
    </header>
  );
};

export default Header;