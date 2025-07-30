import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-slate-900 border-t border-slate-700 text-sm text-gray-500">
      © {new Date().getFullYear()} Harsha Tembhare. All rights reserved.
    </footer>
  );
};

export default Footer;