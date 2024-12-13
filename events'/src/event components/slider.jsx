/* eslint-disable no-unused-vars */
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

    gsap.fromTo(
      heading,
      {  scale: 1, x: "-100%", y: "0%", opacity: 1 },
      {
        scale: 1,
        x: "0%", // Move horizontally from 0% to 50% on scroll
        y: "0%", // Keep vertical position fixed
        opacity: 1,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading, // Target the heading element
          scroller: "body", // Scrolling container (usually the body)
          start: "top center", // When the top of the heading hits the center of the viewport
          end: "bottom center", // When the bottom of the heading hits the center of the viewport
          scrub: 2, // Smooth linking between scroll position and animation
          // markers: true, // Add markers to visualize the start and end of the animation
          onUpdate: (self) => {
            // Optional: Add custom behavior or log values for debugging
            console.log("ScrollProgress:", self.progress);
          },
        },
      }
    );

    // // GSAP ScrollTrigger Animation
    // gsap.to(heading, {
    //   transform: "translateX(-150%)", // Move the <h1> horizontally
    //   duration: 2,
    //   ease: "power4.inOut",
    //   scrollTrigger: {
    //     trigger: page, // Target the container for scrolling
    //     scroller: "body", // Scrolling container (typically the body)
    //     // markers: true, // Debugging markers
    //     start: "top", // When the top of #page2 hits the top of the viewport
    //     end: "bottom", // End after scrolling -150% of the element's height
    //     scrub: true, // Smooth linking between scroll position and animation
    //     pin: true, // Pin the container while scrolling
    //     anticipatePin: 1,
    //   },
    // });
  }, []);

  return (
    <div data-scroll-section style={{backgroundColor:"black" }} >
      {/* <div style={{backgroundColor:"black", height:"100vh", width:"100%"}}></div> */}
    <div id="page2"  data-scroll data-scroll-speed="-3" ref={pageRef}>
      <h1 ref={headingRef}>Experiences</h1>
    </div>
    {/* <div style={{backgroundColor:"black", height:"100vh", width:"100%"}}></div> */}

  </div>
  );
};

export default Page2;
