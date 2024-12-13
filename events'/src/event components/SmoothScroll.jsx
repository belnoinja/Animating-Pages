/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust for scroll speed
    });

    // Cleanup on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ overflow: "hidden"}}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
