import { useEffect } from "react";
import gsap from "gsap";
import "../Events.css";

const Page3 = () => {
  useEffect(() => {
    gsap.fromTo(
      "#colon1",
      { scale: 1.5, x: "-400%", y: "-400%", opacity: 0.5 },
      { scale: 1, x: "-25%", y: "-25%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      "#colon2",
      { scale: 1.5, x: "400%", y: "400%", opacity: 0.5 },
      { scale: 1, x: "25%", y: "25%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div id="page3" data-scroll-section>
      <p data-scroll data-scroll-speed="2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi eum animi maxime fugiat dolorum ex aspernatur! Atque fugit culpa saepe unde et, obcaecati voluptatem?
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
