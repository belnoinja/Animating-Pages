import { useEffect } from "react";
import gsap from "gsap";
import "../Events.css";

const Page3 = () => {
  useEffect(() => {
    gsap.fromTo(
      "#colon1",
      { scale: 1.2, x: "-400%", y: "-400%", opacity: 0 },
      { scale: 1, x: "-75%", y: "-25%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      "#colon2",
      { scale: 1.2, x: "400%", y: "400%", opacity: 0 },
      { scale: 1, x: "75%", y: "25%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Fade-in effect for the paragraph text
    gsap.fromTo(
      "p", 
      { opacity: 0 }, 
      { opacity: 1, duration: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <div id="page3" data-scroll-section>
      <p data-scroll data-scroll-speed="2">
        Our aim may be as high as the endless sky, but we should have a resolve in our minds to walk
        ahead, hand-in-hand, for victory will be ours.
      </p>
      <img
        id="colon1"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt="Left Quote"
        data-scroll
        data-scroll-speed="3"
      />
      <img
        id="colon2"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt="Right Quote"
        data-scroll
        data-scroll-speed="-3"
      />
    </div>
  );
};

export default Page3;
