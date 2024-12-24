import  { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialMedia = [
    { Icon: Instagram, label: 'Instagram', url: '#', color: '#E1306C' },
    { Icon: Facebook, label: 'Facebook', url: '#', color: '#4267B2' },
    { Icon: Twitter, label: 'Twitter', url: '#', color: '#1DA1F2' }
  ];

  return (
    <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-2xl font-semibold text-[#E8DCC4] text-center md:text-left">Connect With Us</h4>
      <div className="flex justify-center md:justify-start space-x-4">
        {socialMedia.map(({ Icon, label, url, color }) => (
          <a
            key={label}
            href={url}
            className="group relative bg-[#1A1A1A] p-3 rounded-full hover:bg-[#2A2A2A] transition-all duration-300"
            onMouseEnter={() => setHoveredIcon(label)}
            onMouseLeave={() => setHoveredIcon(null)}
            aria-label={label}
          >
            <Icon 
              className="w-6 h-6 transition-all duration-300"
              style={{ color: hoveredIcon === label ? color : '#D4C5A9' }}
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;