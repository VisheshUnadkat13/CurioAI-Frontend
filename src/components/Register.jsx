import React, { useState } from 'react';
import Animated3DBackground from './Animated3DBackground';
const BACKEND_BASE_URL = 'http://localhost:5000';


// const Register = ({ setCurrentPage, setRegisteredUsers, registeredUsers }) => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');
//       setSuccess('');
  
//       if (!username || !email || !password || !confirmPassword) {
//         setError('All fields are required.');
//         return;
//       }
//       if (password !== confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }
//       if (password.length < 6) {
//         setError('Password must be at least 6 characters long.');
//         return;
//         }
//       if (registeredUsers.some(user => user.email === email)) {
//         setError('This email is already registered.');
//         return;
//       }
  
//       try {
//         // Simulate API call to backend register endpoint
//         const response = await fetch('/api/auth/public/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, email, password }),
//         });
  
//         if (response.ok) {
//           const newUser = { username, email, password };
//           setRegisteredUsers(prevUsers => [...prevUsers, newUser]);
//           setSuccess('Registration successful! Redirecting to login...');
//           setTimeout(() => {
//             setCurrentPage('login');
//           }, 2000); // Redirect after 2 seconds
//         } else {
//           const errorData = await response.text();
//           setError(`Registration failed: ${errorData}`);
//         }
//       } catch (apiError) {
//         setError(`Network error during registration: ${apiError.message}`);
//       }
//     };
  
//     return (
//       <div className="auth-page-container">
//         <Animated3DBackground />
//         <div className="auth-form-overlay">
//           <h2 className="auth-form-title">Register</h2>
//           <form onSubmit={handleSubmit} className="auth-form">
//             <div className="form-field animate-form-field-delay-1">
//               <label className="form-label" htmlFor="username">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-input"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Your Username"
//               />
//             </div>
//             <div className="form-field animate-form-field-delay-2">
//               <label className="form-label" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div className="form-field animate-form-field-delay-3">
//               <label className="form-label" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-input mb-3"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="********"
//               />
//             </div>
//             <div className="form-field animate-form-field-delay-4">
//               <label className="form-label" htmlFor="confirmPassword">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="form-input mb-3"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="********"
//               />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             {success && <p className="success-message">{success}</p>}
//             <div className="form-actions animate-form-field-delay-5">
//               <button
//                 type="submit"
//                 className="submit-button"
//               >
//                 Register
//               </button>
//             </div>
//             <div className="text-center animate-form-field-delay-6">
//               <p className="auth-link-text">
//                 Already have an account?{' '}
//                 <button
//                   type="button"
//                   onClick={() => setCurrentPage('login')}
//                   className="auth-link-button"
//                 >
//                   Login here
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
//   export default Register;





const Register = ({ setCurrentPage, setRegisteredUsers, registeredUsers }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
      }
    if (registeredUsers.some(user => user.email === email)) {
      setError('This email is already registered.');
      return;
    }

    try {
      // API call to backend register endpoint
      const response = await fetch(`${BACKEND_BASE_URL}/api/auth/public/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const newUser = { username, email, password };
        setRegisteredUsers(prevUsers => [...prevUsers, newUser]);
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          setCurrentPage('login');
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.text();
        setError(`Registration failed: ${errorData}`);
      }
    } catch (apiError) {
      setError(`Network error during registration: ${apiError.message}`);
    }
  };

  return (
    <div className="auth-page-container">
      {/* Removed Animated3DBackground */}
      <div className="auth-form-overlay">
        <h2 className="auth-form-title">Register</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-field animate-form-field-delay-1">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Username"
            />
          </div>
          <div className="form-field animate-form-field-delay-2">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-field animate-form-field-delay-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <div className="form-field animate-form-field-delay-4">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input mb-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <div className="form-actions animate-form-field-delay-5">
            <button
              type="submit"
              className="submit-button"
            >
              Register
            </button>
          </div>
          <div className="text-center animate-form-field-delay-6">
            <p className="auth-link-text">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setCurrentPage('login')}
                className="auth-link-button"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

