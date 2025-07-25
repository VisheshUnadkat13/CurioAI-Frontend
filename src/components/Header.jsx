
import React from 'react';

const Header = ({ isLoggedIn, currentUser, onLogout, setCurrentPage }) => {
    return (
      <header className="header">
        <div className="header-container">
          <div className="site-title" onClick={() => setCurrentPage('landing')}>CurioAI</div>
          <nav>
            <ul className="nav-list">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
              <li>
                <button
                  onClick={() => setCurrentPage('chatbot')}
                  className="chatbot-button"
                >
                  Chatbot
                </button>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="welcome-message">Welcome, {currentUser.username}!</li>
                  <li>
                    <button
                      onClick={onLogout}
                      className="logout-button"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => setCurrentPage('login')}
                      className="login-button"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage('register')}
                      className="register-button"
                    >
                      Register
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  };
export default Header;  