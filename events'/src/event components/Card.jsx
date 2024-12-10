/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Events.css";

const Card = ({ title, imageUrl, color,text }) => {
  // State to track whether the card is being hovered
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic styles for the h2 element based on hover state
  const titleStyle = {
    backgroundColor: isHovered ? "transparent" : color,
    color: isHovered ? "aliceblue" : "black",
  };

  return (
    <div
      className="elem"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <h2 style={titleStyle}>{title}</h2>
      <p >{text}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Card;
