
// import Cursor from "./components/Cursor";
// import BouncingFootball from "./components/BouncingFootball";

// import { DragCards } from "./event components/DragCards";
import Page3 from "./event components/Page3.jsx";
import Page4 from "./event components/Page4.jsx";
import SmoothScroll from "./event components/SmoothScroll.jsx";
import "./Events.css";

const Events = () => {
  return (
    <div>
        {/* <DragCards/><Cursor /> */}
      <SmoothScroll>
      <Page3 />
      <Page4 />
      </SmoothScroll>
    </div>
  );
};

export default Events;
