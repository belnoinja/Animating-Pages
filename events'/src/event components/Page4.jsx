// import   { useEffect } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MovingText from "./MovingText";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  return (
    <div id="page4" data-scroll-section>
      {/* <MovingText/> */}
      <div className="card-container">
        <Card
          title="Cricket"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#FF5733"
        
        />
        <Card
          title="Football"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#FF5733"
         
        />
        <Card
          title="Tennis"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#D3D3D3"
          
        />
        <Card
          title="Volleyball"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#708090"
          
        />
        <Card
          title="Basketball"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#F5F5DC"
          
        />
        <Card
          title="Archery"
          imageUrl="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          color="#A52A2A"
          
        />
      </div>
    </div>
  );
};

export default Page4;
