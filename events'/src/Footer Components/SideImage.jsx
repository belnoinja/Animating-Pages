// import React from 'react';
import PropTypes from 'prop-types';

const SideImage = ({ position, imageUrl, alt }) => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-y-0 w-16 ${
        position === 'left' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'
      } from-black to-transparent`}></div>
    </div>
  );
};

SideImage.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default SideImage;