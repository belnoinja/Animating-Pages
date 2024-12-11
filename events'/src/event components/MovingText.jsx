import { useEffect } from "react";
import "../event components css/MovingText.css"; // Import your CSS file

const MovingText = () => {
  useEffect(() => {
    // You can initialize any JavaScript libraries or functions here
    // For example, if you need to initialize Locomotive Scroll or any other library
  }, []);

  return (
    <div id="moving-text">
      <div className="con">
        <h1>INITIATE</h1>
        <div className="gola"></div>
        <h1>SPORTS</h1>
        <div className="gola"></div>
        <h1>INCULBATE</h1>
        <div className="gola"></div>
      </div>
      <div className="con">
        <h1>INITIATE</h1>
        <div className="gola"></div>
        <h1>SPORTS</h1>
        <div className="gola"></div>
        <h1>INCULBATE</h1>
        <div className="gola"></div>
      </div>
      <div className="con">
        <h1>INITIATE</h1>
        <div className="gola"></div>
        <h1>SPORTS</h1>
        <div className="gola"></div>
        <h1>INCULBATE</h1>
        <div className="gola"></div>
      </div>
      
    </div>
  );
};

export default MovingText;
