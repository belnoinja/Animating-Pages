// import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contacts = [
    { 
      Icon: Mail, 
      text: 'twaran2024@iiitm.ac.in', 
      href: 'mailto:fest2024@college.edu',
      animation: 'hover:-translate-y-1'
    },
    { 
      Icon: Phone, 
      text: '+91 98765 43210', 
      href: 'tel:+919876543210',
      animation: 'hover:scale-105'
    },
    { 
      Icon: MapPin, 
      text: 'ABV-IIITM, Gwalior', 
      href: '#location',
      animation: 'hover:translate-x-1'
    }
  ];

  return (
    <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-2xl font-semibold text-[#E8DCC4] text-center md:text-left">Contact Us</h4>
      <div className="space-y-3">
        {contacts.map(({ Icon, text, href, animation }) => (
          <a
            key={text}
            href={href}
            className={` text-xl flex items-center space-x-3 group hover:bg-[#1A1A1A] p-2 rounded-lg transition-all duration-300 ${animation}`}
          >
            <Icon className="w-7 h-7 text-[#D4C5A9] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-[#D4C5A9] group-hover:text-[#F5F5DC] transition-colors duration-300">
              {text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;