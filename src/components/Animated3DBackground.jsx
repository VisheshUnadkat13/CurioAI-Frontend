import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

const Animated3DBackground = () => {
  const mountRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 });

  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true })); // alpha: true for transparent background

  const animate = useCallback(() => {
    // Rotate the main group of objects
    if (scene.current.children.length > 0) {
      const group = scene.current.children[0]; // Assuming the first child is the group
      group.rotation.x += 0.001;
      group.rotation.y += 0.002;
    }
    renderer.current.render(scene.current, camera.current);
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return; // Ensure mountRef is not null

    // Set up renderer
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.current.domElement);

    // Set up camera
    camera.current.position.z = 5;

    // Create a group to hold all objects for easier manipulation
    const group = new THREE.Group();
    scene.current.add(group);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    group.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    group.add(directionalLight);

    // Create abstract geometric shapes (representing data/knowledge)
    const geometry1 = new THREE.BoxGeometry(1, 1, 1);
    const material1 = new THREE.MeshStandardMaterial({ color: 0x6a0dad, roughness: 0.5, metalness: 0.8 }); // Purple
    const cube = new THREE.Mesh(geometry1, material1);
    cube.position.set(-1.5, 0.5, 0);
    group.add(cube);

    const geometry2 = new THREE.SphereGeometry(0.7, 32, 32);
    const material2 = new THREE.MeshStandardMaterial({ color: 0x4169e1, roughness: 0.7, metalness: 0.5 }); // Royal Blue
    const sphere = new THREE.Mesh(geometry2, material2);
    sphere.position.set(1.5, -0.5, 0);
    group.add(sphere);

    const geometry3 = new THREE.OctahedronGeometry(0.8);
    const material3 = new THREE.MeshStandardMaterial({ color: 0x00ced1, roughness: 0.3, metalness: 0.9 }); // Dark Turquoise
    const octahedron = new THREE.Mesh(geometry3, material3);
    octahedron.position.set(0, 1.5, -1);
    group.add(octahedron);

    // Add a particle system (representing flow of information)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10; // Spread particles in a 10x10x10 cube
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);

    // Handle window resizing
    const handleResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Start animation loop
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.current.domElement) {
        currentMount.removeChild(renderer.current.domElement);
      }
      // Dispose of Three.js objects to prevent memory leaks
      renderer.current.dispose();
      scene.current.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, [animate]);

  // Mouse interaction for camera rotation
  const onMouseDown = (e) => {
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    // Rotate the entire group based on mouse movement
    if (scene.current.children.length > 0) {
      const group = scene.current.children[0];
      group.rotation.y += deltaX * 0.005;
      group.rotation.x += deltaY * 0.005;
    }

    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  // Touch interaction for camera rotation
  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setPreviousMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const onTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    if (scene.current.children.length > 0) {
      const group = scene.current.children[0];
      group.rotation.y += deltaX * 0.005;
      group.rotation.x += deltaY * 0.005;
    }

    setPreviousMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const onTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={mountRef}
      className="animated-3d-background"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // Stop dragging if mouse leaves the area
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    ></div>
  );
};

// 3D Animated Landing Page Component
const LandingPage3D = () => {
  return (
    <div className="landing-page-container">
      <Animated3DBackground />
      {/* Overlay content */}
      <div className="landing-overlay-content">
        <h1 className="landing-title">
          Empower Your Learning with AI
        </h1>
        <p className="landing-description">
          Our AI-powered platform revolutionizes education, providing personalized learning paths, instant feedback, and intelligent tutoring for students and educators worldwide.
        </p>
        <button className="landing-button">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Animated3DBackground