// import React from 'react';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import SideImage from './SideImage';

const FooterContent = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-12">
        {/* Left Side Image */}
        <div className="hidden lg:block lg:w-1/4">
          <SideImage 
            position="left" 
            imageUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Sports event"
          />
        </div>

        {/* Center Content */}
        <div className="w-full lg:w-2/4 space-y-8 lg:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <QuickLinks />
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block lg:w-1/4">
          <SideImage 
            position="right" 
            imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Sports competition"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterContent;