/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
// import Page3 from './Page3';

const InteractiveBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const NUM_PARTICLES = 100;
  const PARTICLE_SIZE = 5;
  const MOUSE_ATTRACTION_STRENGTH = 0.05; // How strongly particles are attracted to the mouse
  const MOUSE_RADIUS = 150; // Distance within which particles are affected by mouse

  // Particle class to handle individual particle behavior
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = PARTICLE_SIZE;
      this.speed = Math.random() * 1 + 0.5;
      this.directionAngle = Math.random() * 2 * Math.PI;
      this.velocity = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
    }

    move() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Bounce off the canvas edges
      if (this.x <= 0 || this.x >= canvasSize.width) this.velocity.x = -this.velocity.x;
      if (this.y <= 0 || this.y >= canvasSize.height) this.velocity.y = -this.velocity.y;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#00FF00';
      ctx.fill();
    }

    // Attract the particle towards the mouse position
    attractToMouse() {
      const dx = mousePosition.current.x - this.x;
      const dy = mousePosition.current.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_RADIUS) {
        const angle = Math.atan2(dy, dx);
        const force = MOUSE_ATTRACTION_STRENGTH * (1 - distance / MOUSE_RADIUS);

        this.velocity.x += Math.cos(angle) * force;
        this.velocity.y += Math.sin(angle) * force;
      }
    }
  }

  // Handle mouse movement
  const handleMouseMove = (event) => {
    mousePosition.current = { x: event.clientX, y: event.clientY };
  };

  // Handle mouse hover state
  const handleMouseOver = () => setIsMouseOver(true);
  const handleMouseOut = () => setIsMouseOver(false);

  // Handle window resizing
  const handleResize = () => {
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Drawing and animating particles
  const drawParticles = (ctx) => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height); // Clear canvas

    particles.current.forEach((particle) => {
      particle.move();

      // If mouse is hovering, attract particles towards the mouse
      if (isMouseOver) {
        particle.attractToMouse();
      }

      particle.draw(ctx);

      // Draw lines to nearby particles (optional)
      particles.current.forEach((otherParticle) => {
        if (otherParticle !== particle) {
          const distance = Math.sqrt(
            (particle.x - otherParticle.x) ** 2 + (particle.y - otherParticle.y) ** 2
          );
          if (distance < 100) { // If the distance between two particles is small enough
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    });
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawParticles(ctx);
    requestAnimationFrame(animate); // Keep animating
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Initialize particles
    particles.current = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const x = Math.random() * canvasSize.width;
      const y = Math.random() * canvasSize.height;
      particles.current.push(new Particle(x, y));
    }

    // Start animation loop
    animate();

    // Listen to mouse events
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseOver);
    canvas.addEventListener('mouseleave', handleMouseOut);

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseOver);
      canvas.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasSize]); // Re-run effect when canvasSize changes

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' ,backgroundColor:"black" }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
       { children }
      </div>
    </div>
  );
};

export default InteractiveBackground;