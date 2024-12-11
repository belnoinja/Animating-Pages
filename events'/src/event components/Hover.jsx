/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const InteractiveHoverEffect = () => {
  const meshRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Custom shader code for texture displacement and hover effect
  const fragmentShader = `
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform sampler2D u_texture;
    varying vec2 v_uv;

    void main() {
      // Create a distortion based on mouse position and time
      float dist = distance(v_uv, u_mouse);
      vec2 uvDistortion = v_uv + sin(v_uv.y * 10.0 + u_time) * 0.05;

      // Sample the texture with distortion
      vec3 color = texture2D(u_texture, uvDistortion).rgb;
      
      // Apply smooth transition effect based on distance from the mouse
      float intensity = smoothstep(0.4, 0.0, dist);
      color = mix(color, vec3(1.0, 0.6, 0.2), intensity); // Color effect for interaction

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const vertexShader = `
    varying vec2 v_uv;

    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Shader uniforms
  const uniforms = {
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_time: { value: 0 },
    u_texture: { value: new THREE.TextureLoader().load("https://t4.ftcdn.net/jpg/05/85/80/01/360_F_585800164_y7T6DimEn1Ke3pkJpoyu1Jxqv7oPs53v.jpg") }, // Texture for distortion
  };

  // Mouse movement handler
  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = 1.0 - event.clientY / window.innerHeight; // Inverted Y for canvas mapping
    setMouse({ x, y });
  };

  // Animate shader uniform values
  useFrame(({ clock }) => {
    uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_mouse.value = new THREE.Vector2(mouse.x, mouse.y);

    if (meshRef.current) {
      // Add subtle scaling effect
      const scale = hovered ? 1.2 : 1.0;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, scale, 0.1)
      );
    }
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[3, 3, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const HoverEffectApp = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <InteractiveHoverEffect />
      </Canvas>
    </div>
  );
};

export default HoverEffectApp;
