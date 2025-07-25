import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage3D from './components/LandingPage3D';
import Register from './components/Register';
import Login from './components/Login';
import ChatbotPage from './components/ChatbotPage';


export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'register', 'login', 'chatbot'
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]); // In-memory storage for registered users

  // Check for existing token/user on app load
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const storedUser = localStorage.getItem('currentUser');
    if (token && storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
        setLoggedIn(true);
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // Clear token on logout
    localStorage.removeItem('currentUser'); // Clear user info on logout
    setLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'register':
        return <Register setCurrentPage={setCurrentPage} setRegisteredUsers={setRegisteredUsers} registeredUsers={registeredUsers} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} registeredUsers={registeredUsers} />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'landing':
      default:
        return (
          <>
            <LandingPage3D />
            {/* Placeholder sections for scrolling content */}
            <section id="features" className="features-section">
              <div className="section-container">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <h3 className="feature-card-title">Personalized Learning</h3>
                    <p className="feature-card-description">AI adapts to your pace and style, offering tailored content and exercises.</p>
                  </div>
                  <div className="feature-card">
                    <h3 className="feature-card-title">Instant Feedback</h3>
                    <p className="feature-card-description">Receive immediate, constructive feedback on your assignments and progress.</p>
                  </div>
                  <div className="feature-card">
                    <h3 className="feature-card-title">Intelligent Tutoring</h3>
                    <p className="feature-card-description">Get 24/7 access to an AI tutor ready to answer questions and explain concepts.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="about-section">
              <div className="section-container">
                <h2 className="section-title">About Our Platform</h2>
                <p className="about-description">
                  AI Educator is dedicated to transforming the educational landscape through cutting-edge artificial intelligence. We believe in making high-quality, personalized education accessible to everyone, everywhere. Our team of educators, engineers, and AI specialists are committed to building tools that empower both students and teachers to achieve their full potential.
                </p>
              </div>
            </section>

            <section id="contact" className="contact-section">
              <div className="section-container">
                <h2 className="section-title">Contact Us</h2>
                <p className="contact-description">
                  Have questions or want to learn more? Reach out to us!
                </p>
                <button className="contact-button">
                  Send a Message
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scroll */
          }

          /* General App Container */
          .app-container {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #1a202c; /* Equivalent to text-gray-900 */
          }

          /* Header Styles */
          .header {
            background-color: #1a202c; /* bg-gray-900 */
            color: #fff; /* text-white */
            padding: 1rem; /* p-4 */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .header-container {
            max-width: 1280px; /* container */
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
            display: flex;
            justify-content: space-between; /* justify-between */
            align-items: center; /* items-center */
          }

          .site-title {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700; /* font-bold */
            color: #818cf8; /* text-indigo-400 */
            cursor: pointer;
          }

          .nav-list {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 1.5rem; /* space-x-6 */
            align-items: center;
          }

          .nav-link {
            color: #fff;
            text-decoration: none;
            transition-property: color;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-link:hover {
            color: #a78bfa; /* hover:text-indigo-300 */
          }

          .chatbot-button {
            background-color: #059669; /* bg-green-600 */
            color: #fff;
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border-radius: 9999px; /* rounded-full */
            transition-property: background-color, transform, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
          }
          .chatbot-button:hover {
            background-color: #047857; /* hover:bg-green-700 */
          }

          .login-button {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border-radius: 9999px; /* rounded-full */
            transition-property: background-color, transform, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
          }
          .login-button:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
          }

          .register-button {
            background-color: #9333ea; /* bg-purple-600 */
            color: #fff;
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border-radius: 9999px; /* rounded-full */
            transition-property: background-color, transform, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
          }
          .register-button:hover {
            background-color: #7e22ce; /* hover:bg-purple-700 */
          }

          .welcome-message {
            color: #c7d2fe; /* text-indigo-200 */
          }

          .logout-button {
            background-color: #dc2626; /* bg-red-600 */
            color: #fff;
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border-radius: 9999px; /* rounded-full */
            transition-property: background-color, transform, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
          }
          .logout-button:hover {
            background-color: #b91c1c; /* hover:bg-red-700 */
          }

          /* Animated 3D Background Styles */
          .animated-3d-background {
            position: absolute;
            inset: 0; /* top:0, right:0, bottom:0, left:0 */
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          /* Specific styles for 3D canvas to ensure it fills the parent div */
          #ai-educator-website canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0; /* Ensure canvas is behind overlay content */
          }

          /* Landing Page Styles */
          .landing-page-container {
            position: relative;
            width: 100%;
            height: 100vh; /* h-screen */
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom right, #2d3748, #1a202c); /* bg-gradient-to-br from-gray-800 to-gray-900 */
          }

          .landing-overlay-content {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #fff;
            padding: 1rem; /* p-4 */
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.3); /* bg-black bg-opacity-30 */
          }

          .landing-title {
            font-size: 3rem; /* text-5xl */
            font-weight: 800; /* font-extrabold */
            margin-bottom: 1rem; /* mb-4 */
            text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* drop-shadow-lg */
            color: #a78bfa; /* text-indigo-300 */
          }
          @media (min-width: 768px) { /* md:text-7xl */
            .landing-title {
              font-size: 4.5rem;
            }
          }

          .landing-description {
            font-size: 1.125rem; /* text-lg */
            max-width: 42rem; /* max-w-2xl */
            margin-bottom: 2rem; /* mb-8 */
            line-height: 1.625; /* leading-relaxed */
          }
          @media (min-width: 768px) { /* md:text-xl */
            .landing-description {
              font-size: 1.25rem;
            }
          }

          .landing-button {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            font-weight: 700; /* font-bold */
            padding: 0.75rem 2rem; /* py-3 px-8 */
            border-radius: 9999px; /* rounded-full */
            font-size: 1.25rem; /* text-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            transform: scale(1);
            transition-property: transform, background-color, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            outline: none; /* focus:outline-none */
            border: none;
            cursor: pointer;
          }
          .landing-button:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }
          .landing-button:focus {
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5); /* focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 */
          }

          /* Auth Page (Register/Login) Styles */
          .auth-page-container {
            position: relative;
            min-height: 100vh; /* min-h-screen */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem; /* p-4 */
            /* Unique non-animated background for auth pages */
            background: linear-gradient(to bottom right, #374151, #1f2937); /* Darker gradient for auth pages */
          }

          .auth-form-overlay {
            position: relative;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.3); /* bg-black bg-opacity-30 */
            padding: 2rem; /* p-8 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-2xl */
            width: 100%;
            max-width: 28rem; /* max-w-md */
            transform: translateY(0);
            transition-property: transform, opacity;
            transition-duration: 700ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }

          .auth-form-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800; /* font-extrabold */
            text-align: center;
            color: #a78bfa; /* text-indigo-300 */
            margin-bottom: 2rem; /* mb-8 */
          }

          .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem; /* space-y-6 */
          }

          .form-field {
            transition-property: transform, opacity;
            transition-duration: 0.7s;
            transition-timing-function: ease-in-out;
            transform: translateY(100%);
            opacity: 0;
            animation: slideInUp 0.7s forwards; /* Apply animation here */
          }
          /* Specific animation delays for each field */
          .form-field:nth-child(1) { animation-delay: 0.1s; }
          .form-field:nth-child(2) { animation-delay: 0.2s; }
          .form-field:nth-child(3) { animation-delay: 0.3s; }
          .form-field:nth-child(4) { animation-delay: 0.4s; }


          .form-label {
            display: block;
            color: #fff; /* text-white */
            font-size: 0.875rem; /* text-sm */
            font-weight: 700; /* font-bold */
            margin-bottom: 0.5rem; /* mb-2 */
          }

          .form-input {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow */
            -webkit-appearance: none; /* appearance-none */
            -moz-appearance: none;
            appearance: none;
            border: 1px solid #e2e8f0; /* border */
            border-radius: 0.5rem; /* rounded-lg */
            width: 100%;
            padding: 0.75rem 1rem; /* py-3 px-4 */
            color: #4a5568; /* text-gray-700 */
            line-height: 1.25; /* leading-tight */
            outline: none; /* focus:outline-none */
            transition-property: border-color, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          .form-input:focus {
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5); /* focus:ring-2 focus:ring-indigo-500 */
          }

          .error-message {
            color: #fca5a5; /* text-red-300 */
            font-size: 0.875rem; /* text-sm */
            text-align: center;
            font-weight: 600; /* font-semibold */
            transition-property: transform, opacity;
            transition-duration: 300ms;
            transform: scale(1.05);
          }

          .success-message {
            color: #a7f3d0; /* text-green-300 */
            font-size: 0.875rem; /* text-sm */
            text-align: center;
            font-weight: 600; /* font-semibold */
            transition-property: transform, opacity;
            transition-duration: 300ms;
            transform: scale(1.05);
          }

          .form-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition-property: transform, opacity;
            transition-duration: 0.7s;
            transition-timing-function: ease-in-out;
            transform: translateY(100%);
            opacity: 0;
            animation: slideInUp 0.7s forwards; /* Apply animation here */
            animation-delay: 0.5s; /* Specific delay for actions */
          }

          .submit-button {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 9999px; /* rounded-full */
            outline: none; /* focus:outline-none */
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* focus:shadow-outline */
            transition-property: background-color, transform, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transform: scale(1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            width: 100%;
            border: none;
            cursor: pointer;
          }
          .submit-button:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }

          .auth-link-text {
            color: #e2e8f0; /* text-gray-200 */
            font-size: 0.875rem; /* text-sm */
          }

          .auth-link-button {
            color: #a78bfa; /* text-indigo-300 */
            font-weight: 700; /* font-bold */
            outline: none; /* focus:outline-none */
            background: none;
            border: none;
            cursor: pointer;
            transition-property: color;
            transition-duration: 300ms;
          }
          .auth-link-button:hover {
            color: #c7d2fe; /* hover:text-indigo-100 */
          }

          /* Chatbot Page Styles */
          .chatbot-page-container {
            position: relative;
            width: 100%;
            height: 100vh; /* h-screen */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom right, #2d3748, #1a202c); /* bg-gradient-to-br from-gray-800 to-gray-900 */
          }

          .chatbot-main-content {
            position: relative;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.5); /* bg-black bg-opacity-50 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
            padding: 1.5rem; /* p-6 */
            width: 91.666667%; /* w-11/12 */
            height: 83.333333%; /* h-5/6 */
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 768px) { /* md:w-3/4 */
            .chatbot-main-content {
              width: 75%;
            }
          }
          @media (min-width: 1024px) { /* lg:w-2/3 */
            .chatbot-main-content {
              width: 66.666667%;
            }
          }

          .chatbot-title {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700; /* font-bold */
            text-align: center;
            color: #a78bfa; /* text-indigo-300 */
            margin-bottom: 1rem; /* mb-4 */
          }

          .chat-history {
            flex: 1; /* flex-1 */
            overflow-y: auto;
            padding: 1rem; /* p-4 */
            margin-bottom: 1rem; /* mb-4 */
            background-color: #2d3748; /* bg-gray-800 */
            border-radius: 0.5rem; /* rounded-lg */
          }

          /* Custom scrollbar for chat history */
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #333;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          .chat-message {
            margin-bottom: 0.75rem; /* mb-3 */
            padding: 0.75rem; /* p-3 */
            border-radius: 0.5rem; /* rounded-lg */
            max-width: 80%;
          }

          .user-message {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            margin-left: auto; /* ml-auto */
          }

          .ai-message {
            background-color: #4a5568; /* bg-gray-700 */
            color: #e2e8f0; /* text-gray-200 */
            margin-right: auto; /* mr-auto */
          }

          .whitespace-pre-wrap {
            white-space: pre-wrap;
          }

          .chatbot-action-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem; /* gap-3 */
            margin-bottom: 1rem; /* mb-4 */
          }

          .action-button {
            font-weight: 700; /* font-bold */
            padding: 0.5rem 1rem; /* py-2 px-4 */
            border-radius: 9999px; /* rounded-full */
            transition-property: background-color, box-shadow;
            transition-duration: 300ms;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
            color: #fff;
          }

          .summary-button {
            background-color: #2563eb; /* bg-blue-600 */
          }
          .summary-button:hover {
            background-color: #1d4ed8; /* hover:bg-blue-700 */
          }

          .articles-button {
            background-color: #0d9488; /* bg-teal-600 */
          }
          .articles-button:hover {
            background-color: #0f766e; /* hover:bg-teal-700 */
          }

          .youtube-button { /* New style for YouTube button */
            background-color: #ff0000; /* YouTube Red */
          }
          .youtube-button:hover {
            background-color: #cc0000; /* Darker YouTube Red */
          }

          .interview-button {
            background-color: #ea580c; /* bg-orange-600 */
          }
          .interview-button:hover {
            background-color: #c2410c; /* hover:bg-orange-700 */
          }

          .quiz-button {
            background-color: #9333ea; /* bg-purple-600 */
          }
          .quiz-button:hover {
            background-color: #7e22ce; /* hover:bg-purple-700 */
          }

          .chat-input-area {
            display: flex;
          }

          .chat-input {
            flex: 1; /* flex-1 */
            padding: 0.75rem; /* p-3 */
            border-top-left-radius: 0.5rem; /* rounded-l-lg */
            border-bottom-left-radius: 0.5rem;
            background-color: #4a5568; /* bg-gray-700 */
            color: #fff;
            border: 1px solid #4a5568; /* border border-gray-600 */
            outline: none; /* focus:outline-none */
            transition-property: border-color, box-shadow;
            transition-duration: 300ms;
          }
          .chat-input:focus {
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5); /* focus:ring-2 focus:ring-indigo-500 */
          }
          .chat-input:disabled {
            opacity: 0.5; /* disabled:opacity-50 */
            cursor: not-allowed; /* disabled:cursor-not-allowed */
          }

          .send-button {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-top-right-radius: 0.5rem; /* rounded-r-lg */
            border-bottom-right-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition-property: background-color, transform, opacity;
            transition-duration: 300ms;
            border: none;
            cursor: pointer;
          }
          .send-button:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
          }
          .send-button:disabled {
            opacity: 0.5; /* disabled:opacity-50 */
            cursor: not-allowed; /* disabled:cursor-not-allowed */
          }

          /* Footer Styles */
          .footer {
            background-color: #1a202c; /* bg-gray-900 */
            color: #a0aec0; /* text-gray-400 */
            padding: 2rem; /* p-8 */
            text-align: center;
          }

          .footer-container {
            max-width: 1280px; /* container */
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
          }

          .footer-text {
            /* No direct Tailwind equivalent, just default paragraph style */
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 1rem; /* space-x-4 */
            margin-top: 1rem; /* mt-4 */
          }

          .footer-link {
            color: #a0aec0; /* text-gray-400 */
            text-decoration: none;
            transition-property: color;
            transition-duration: 300ms;
          }
          .footer-link:hover {
            color: #fff; /* hover:text-white */
          }

          /* Section Styles (Features, About, Contact) */
          .features-section {
            padding-top: 5rem; /* py-20 */
            padding-bottom: 5rem; /* py-20 */
            background-color: #f7fafc; /* bg-gray-100 */
            text-align: center;
          }

          .about-section {
            padding-top: 5rem; /* py-20 */
            padding-bottom: 5rem; /* py-20 */
            background-color: #fff; /* bg-white */
            text-align: center;
          }

          .contact-section {
            padding-top: 5rem; /* py-20 */
            padding-bottom: 5rem; /* py-20 */
            background-color: #f7fafc; /* bg-gray-100 */
            text-align: center;
          }

          .section-container {
            max-width: 1280px; /* container */
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
            padding-left: 1rem; /* px-4 */
            padding-right: 1rem; /* px-4 */
          }

          .section-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 700; /* font-bold */
            margin-bottom: 2rem; /* mb-8 */
            color: #2d3748; /* text-gray-800 */
          }

          .features-grid {
            display: grid;
            grid-template-columns: 1fr; /* grid-cols-1 */
            gap: 2rem; /* gap-8 */
          }
          @media (min-width: 768px) { /* md:grid-cols-3 */
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .feature-card {
            background-color: #fff; /* bg-white */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition-property: transform, box-shadow;
            transition-duration: 300ms;
            transform: translateY(0);
          }
          .feature-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
            transform: translateY(-0.25rem); /* hover:-translate-y-1 */
          }

          .feature-card-title {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 600; /* font-semibold */
            margin-bottom: 1rem; /* mb-4 */
            color: #4f46e5; /* text-indigo-600 */
          }

          .feature-card-description {
            color: #4a5568; /* text-gray-600 */
          }

          .about-description {
            font-size: 1.125rem; /* text-lg */
            max-width: 48rem; /* max-w-3xl */
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
            color: #4a5568; /* text-gray-700 */
            line-height: 1.625; /* leading-relaxed */
          }

          .contact-description {
            font-size: 1.125rem; /* text-lg */
            max-width: 42rem; /* max-w-2xl */
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
            color: #4a5568; /* text-gray-700 */
            margin-bottom: 2rem; /* mb-8 */
          }

          .contact-button {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            font-weight: 700; /* font-bold */
            padding: 0.75rem 2rem; /* py-3 px-8 */
            border-radius: 9999px; /* rounded-full */
            font-size: 1.25rem; /* text-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            transform: scale(1);
            transition-property: transform, background-color, box-shadow;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            outline: none; /* focus:outline-none */
            border: none;
            cursor: pointer;
          }
          .contact-button:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }
          .contact-button:focus {
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5); /* focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 */
          }

          /* Animation for form fields */
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .error-message-chat { /* New style for chatbot errors */
            background-color: #ef4444; /* bg-red-500 */
            color: #fff;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        `}
      </style>

      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        setCurrentPage={setCurrentPage}
      />

      {renderPage()}

      {/* Footer is always visible */}
      <Footer />
    </div>
  );
}
