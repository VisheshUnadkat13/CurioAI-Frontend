import React from 'react';
import Animated3DBackground from './Animated3DBackground';


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
export default LandingPage3D;