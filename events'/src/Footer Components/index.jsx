// import React from 'react';
import Title from './Title';
import FooterContent from './FooterContent';
// import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className="bg-black text-[#F5F5DC] relative">
      <Title />
      <FooterContent />
      {/* <Copyright /> */}
    </footer>
  );
};

export default Footer;