import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../event components css/slider.css";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const pageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const heading = headingRef.current;

    // GSAP ScrollTrigger Animation
    gsap.to(heading, {
      transform: "translateX(-150%)", // Move the <h1> horizontally
      duration: 2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: page, // Target the container for scrolling
        scroller: "body", // Scrolling container (typically the body)
        // markers: true, // Debugging markers
        start: "top", // When the top of #page2 hits the top of the viewport
        end: "bottom", // End after scrolling -150% of the element's height
        scrub: true, // Smooth linking between scroll position and animation
        pin: true, // Pin the container while scrolling
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div style={{backgroundColor:"black" }}>
      {/* <div style={{backgroundColor:"black", height:"100vh", width:"100%"}}></div> */}
    <div id="page2" data-scroll-section ref={pageRef}>
      <h1 ref={headingRef}>Experiences</h1>
    </div>
    {/* <div style={{backgroundColor:"black", height:"100vh", width:"100%"}}></div> */}

  </div>
  );
};

export default Page2;
