/* eslint-disable no-unused-vars */

// import Cursor from "./components/Cursor";
// import BouncingFootball from "./components/BouncingFootball";

// import { DragCards } from "./event components/DragCards";
// import Page3 from "./event components/Page3.jsx";
import Page4 from "./event components/Page4.jsx";
import Page5 from "./event components/Page5.jsx";
import SmoothScroll from "./event components/SmoothScroll.jsx";
import InteractiveBackground from "./event components/Ball.jsx";
import Page3 from "./event components/Page3.jsx";
import "./Events.css"

const Events = () => {
  return (
    <div>
      {/* <DragCards/><Cursor /> */}
      <SmoothScroll>
        <InteractiveBackground>
          <Page3 />
        </InteractiveBackground>


        <Page4 />
        <Page5 />
      </SmoothScroll>
    </div>
  );
};

export default Events;
