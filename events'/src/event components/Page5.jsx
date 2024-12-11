// import { forwardRef } from "react";
import { useState } from 'react';
import '../event components css/Page5.css';



function App (){
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const [expandedElem, setExpandedElem] = useState(null);

  const handleMouseEnter = (image) => {
    if (hoverEnabled && !expandedElem) { // Ensure the fixed image shows only if no element is expanded
      document.getElementById('fixed-image').style.display = 'block';
      document.getElementById('fixed-image').style.backgroundImage = `url(${image})`;
    }
  };

  const handleMouseLeave = () => {
    if (hoverEnabled && !expandedElem) { // Ensure the fixed image hides if no element is expanded
      document.getElementById('fixed-image').style.display = 'none';
    }
  };

  const handleClick = (elemId) => {
    setHoverEnabled(false);
    const element = document.getElementById(elemId);
    const overlay = element.querySelector('.overlay');

    // Close previously expanded elements and collapse content
    if (expandedElem) {
      const prevElem = document.getElementById(expandedElem);
      prevElem.classList.remove('expanded');
      prevElem.querySelector('.content').style.maxHeight = '0px';
      prevElem.querySelector('.overlay').style.display = 'flex';
    }

    if (expandedElem === elemId) {
      // If the clicked element is already expanded, collapse it
      setExpandedElem(null);
      setTimeout(() => {
        setHoverEnabled(true);
        document.getElementById('fixed-image').style.display = 'flex';
        overlay.style.display = 'flex';
      }, 500);
    } else {
      // Expand the clicked element
      setExpandedElem(elemId);
      setTimeout(() => {
        setHoverEnabled(false);
        element.classList.add('expanded');
        element.querySelector('.content').style.maxHeight = '700px';
        document.getElementById('fixed-image').style.display = 'none';
        setHoverEnabled(true);
        overlay.style.display = 'none';
      }, 500);
    }
  };

  const elems = [
    {
      id: 'elem1',
      title: 'Cricket',
      image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp',
      content: 'This is detailed content about Makers Studio HOI.',
      smalldata:"djdshfjsdhfo",
      largedata:"dsjfhihf"
    },
    {
      id: 'elem2',
      title: 'Football',
      image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
      content: 'This is detailed content about Makers Studio HOI.',
      smalldata:"djdshfjsdhfo",
      largedata:"dsjfhihf"
    },
    {
      id: 'elem3',
      title: 'Volleyball',
      image: 'https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0=',
      content: 'This is detailed content about Makers Studio HOI.',
      smalldata:"djdshfjsdhfo",
      largedata:"dsjfhihf"  
    },
  ];

  return (
    <div id="main" data-scroll-section>
      <div id="part3" >
        <div className="element-container">
          {elems.map((element) => (
            <div
              key={element.id}
              id={element.id}
              className="element"
              data-image={element.image}
              onMouseEnter={() => handleMouseEnter(element.image)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(element.id)}
            >
              <div className="overlay">
                <p>
                  {element.smalldata}<span>{element.largedata}</span>
                </p>
              </div>
              <h2>{element.title}</h2>
              <div className="content">
                <div className="text-section">
                  <p>{element.content}</p>
                </div>
                <div className="image-section">
                  <img src={element.image} alt="Detailed Image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="fixed-image"></div>
    </div>
  );
}
export default App;
