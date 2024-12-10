import  { useState, useEffect, useRef } from 'react';
import '../components css/BouncingFootball.css';

const BouncingFootball = () => {
  const [ballPosition, setBallPosition] = useState({ x: 200, y: 0 }); // Initial position (start at top)
  const [velocity, setVelocity] = useState(0); // Vertical speed (starts at 0)
  const [isBouncing, setIsBouncing] = useState(false); // Check if the ball is bouncing

  const ballRef = useRef(null);
  const gravity = 0.5; // Gravity pulling the ball down
  const bounceFactor = 0.7; // How much the ball bounces back

  const groundLevel = 300; // Position where the ball hits the ground

  // Handle the ball's movement
  useEffect(() => {
    const handleMovement = () => {
      setVelocity((prevVelocity) => prevVelocity + gravity); // Apply gravity (acceleration)

      setBallPosition((prevPosition) => {
        const newY = prevPosition.y + velocity;

        if (newY >= groundLevel) {
          // Ball hits the ground, start bouncing
          setVelocity((prevVelocity) => -prevVelocity * bounceFactor);
          return { x: prevPosition.x, y: groundLevel };
        }

        return { x: prevPosition.x, y: newY };
      });
    };

    // If the ball is falling, start updating the position
    const interval = setInterval(() => {
      if (!isBouncing) {
        handleMovement();
      }
    }, 16); // Update every frame (roughly 60fps)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [velocity, isBouncing]);

  const handleMouseTouch = (e) => {
    // Check if the mouse is near the ball and bounce it
    const ballRect = ballRef.current.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(e.clientX - (ballRect.left + ballRect.width / 2), 2) +
        Math.pow(e.clientY - (ballRect.top + ballRect.height / 2), 2)
    );

    // If the mouse is close to the ball, bounce it
    if (distance < 50) {
      setVelocity((prevVelocity) => prevVelocity * -bounceFactor); // Reverse direction and reduce velocity
      setIsBouncing(true); // Trigger bouncing
    }
  };

  // Listen for mouse events to trigger bounce on touch
  useEffect(() => {
    const handleMouseMove = (e) => {
      handleMouseTouch(e);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="football-container">
      <div
        ref={ballRef}
        className="football"
        style={{
          left: `${ballPosition.x}px`,
          top: `${ballPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default BouncingFootball;
