// import Cursor from "./components/Cursor";
// import BouncingFootball from "./components/BouncingFootball";

// import { DragCards } from "./event components/DragCards";
// import MovingText from "./event components/MovingText.jsx";
// import "./Events.css"
// import { _horizontal } from "gsap/Observer.js";
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"
import Page3 from "./event components/Page3.jsx";
import Page4 from "./event components/Page4.jsx";
import Page5 from "./event components/Page5.jsx";
import SmoothScroll from "./event components/SmoothScroll.jsx";
import InteractiveBackground from "./event components/Ball.jsx";
// import Page2 from "./event components/slider.jsx";

const Events = () => {
  return (
    <div>
       <SmoothScroll>
       <Navbar/>
       <InteractiveBackground>
          <Page3 />
        </InteractiveBackground>
        {/* <Page2/> */}
        <Page4 />
        <Page5 /> 
        <Footer/>
      </SmoothScroll>
    </div>
  );
};

export default Events;
