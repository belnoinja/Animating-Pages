// import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-2xl font-semibold text-[#E8DCC4] text-center md:text-left">Quick Links</h4>
      <ul className="space-y-3">
        {links.map(({ name, href }) => (
          <li key={name} className="group">
            <a 
              href={href}
              className="flex items-center text-[#D4C5A9] text-xl hover:text-[#F5F5DC] transition-colors duration-200 group"
            >
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
              <span className="group-hover:translate-x-2 transition-transform duration-300">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;