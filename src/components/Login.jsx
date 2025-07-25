import React, { useState } from 'react';
import Animated3DBackground from './Animated3DBackground';
const BACKEND_BASE_URL = 'http://localhost:5000';

// const Login = ({ setCurrentPage, setLoggedIn, setCurrentUser, registeredUsers }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');
  
//       if (!email || !password) {
//         setError('Email and password are required.');
//         return;
//       }
  
//       const user = registeredUsers.find(u => u.email === email && u.password === password);
  
//       if (user) {
//         try {
//           // Simulate API call to backend login endpoint
//           const response = await fetch('/api/auth/public/login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//           });
  
//           if (response.ok) {
//             // Assuming backend returns some user data or success message
//             // For now, we'll just use the in-memory user object
//             setLoggedIn(true);
//             setCurrentUser(user);
//             setCurrentPage('landing'); // Redirect to landing page after successful login
//           } else {
//             const errorData = await response.text();
//             setError(`Login failed: ${errorData}`);
//           }
//         } catch (apiError) {
//           setError(`Network error during login: ${apiError.message}`);
//         }
//       } else {
//         setError('Invalid email or password.');
//       }
//     };
  
//     return (
//       <div className="auth-page-container">
//         <Animated3DBackground />
//         <div className="auth-form-overlay">
//           <h2 className="auth-form-title">Login</h2>
//           <form onSubmit={handleSubmit} className="auth-form">
//             <div className="form-field animate-form-field-delay-1">
//               <label className="form-label" htmlFor="loginEmail">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="loginEmail"
//                 className="form-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div className="form-field animate-form-field-delay-2">
//               <label className="form-label" htmlFor="loginPassword">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="loginPassword"
//                 className="form-input mb-3"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="********"
//               />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             <div className="form-actions animate-form-field-delay-3">
//               <button
//                 type="submit"
//                 className="submit-button"
//               >
//                 Login
//               </button>
//             </div>
//             <div className="text-center animate-form-field-delay-4">
//               <p className="auth-link-text">
//                 Don't have an account?{' '}
//                 <button
//                   type="button"
//                   onClick={() => setCurrentPage('register')}
//                   className="auth-link-button"
//                 >
//                   Register here
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
// export default Login;  




// const Login = ({ setCurrentPage, setLoggedIn, setCurrentUser, registeredUsers }) => {
//   // const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Email and password are required.');
//       return;
//     }

//     const user = registeredUsers.find(u => u.email === email && u.password === password);

//     if (user) {
//       try {
//         // API call to backend login endpoint
//         const response = await fetch(`${BACKEND_BASE_URL}/api/auth/public/login`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//           // Assuming backend returns some user data or success message
//           // For now, we'll just use the in-memory user object
//           setLoggedIn(true);
//           setCurrentUser(user);
//           setCurrentPage('landing'); // Redirect to landing page after successful login
//         } else {
//           const errorData = await response.text();
//           setError(`Login failed: ${errorData}`);
//         }
//       } catch (apiError) {
//         setError(`Network error during login: ${apiError.message}`);
//       }
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   return (
//     <div className="auth-page-container">
//       <Animated3DBackground />
//       <div className="auth-form-overlay">
//         <h2 className="auth-form-title">Login</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
//           {/* <div className="form-field animate-form-field-delay-1">
//             <label className="form-label" htmlFor="loginEmail">
//               Email
//             </label>   
//             <input
//               type="email"
//               id="loginEmail"
//               className="form-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="your@email.com"
//             />
//           </div> */}
//         <div className="form-field animate-form-field-delay-1">
//             <label className="form-label" htmlFor="username">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="form-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Your Username"
//             />
//           </div>

//           <div className="form-field animate-form-field-delay-2">
//             <label className="form-label" htmlFor="loginPassword">
//               Password
//             </label>
//             <input
//               type="password"
//               id="loginPassword"
//               className="form-input mb-3"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="********"
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <div className="form-actions animate-form-field-delay-3">
//             <button
//               type="submit"
//               className="submit-button"
//             >
//               Login
//             </button>
//           </div>
//           <div className="text-center animate-form-field-delay-4">
//             <p className="auth-link-text">
//               Don't have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setCurrentPage('register')}
//                 className="auth-link-button"
//               >
//                 Register here
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




const Login = ({ setCurrentPage, setLoggedIn, setCurrentUser, registeredUsers }) => {
  const [username, setUsername] = useState('');
  //const [email, setEmail] = useState(''); // Changed from username to email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) { // Check for email, not username
      setError('Email and password are required.');
      return;
    }

    try {
      // API call to backend login endpoint
      const response = await fetch(`${BACKEND_BASE_URL}/api/auth/public/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (response.ok) {
        const responseData = await response.json(); // Assuming backend returns JSON with token
        const jwtToken = responseData.jwtToken; // Adjust 'jwtToken' to match your backend's key
        const username = responseData.username || email; // Assuming backend returns username, fallback to email

        localStorage.setItem('jwtToken', jwtToken); // Store the JWT token
        localStorage.setItem('currentUser', JSON.stringify({ username, email })); // Store user info

        setLoggedIn(true);
        setCurrentUser({ username, email }); // Set current user details
        setCurrentPage('landing'); // Redirect to landing page after successful login
      } else {
        const errorData = await response.text();
        setError(`Login failed: ${errorData}`);
      }
    } catch (apiError) {
      setError(`Network error during login: ${apiError.message}`);
    }
  };

  return (
    <div className="auth-page-container">
      {/* Removed Animated3DBackground */}
      <div className="auth-form-overlay">
        <h2 className="auth-form-title">Login</h2>
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
            <label className="form-label" htmlFor="loginPassword">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              className="form-input mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="form-actions animate-form-field-delay-3">
            <button
              type="submit"
              className="submit-button"
            >
              Login
            </button> 
          </div>
          <div className="text-center animate-form-field-delay-4">
            <p className="auth-link-text">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setCurrentPage('register')}
                className="auth-link-button"
              >
                Register here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



// const Login = ({ setCurrentPage, setLoggedIn, setCurrentUser, registeredUsers }) => {
//   //const [email, setEmail] = useState(''); // Changed from username to email
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) { // Check for email, not username
//       setError('Email and password are required.');
//       return;
//     }

//     try {
//       // API call to backend login endpoint
//       const response = await fetch(`${BACKEND_BASE_URL}/api/auth/public/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }), // Send email and password
//       });

//       if (response.ok) {
//         const responseData = await response.json(); // Assuming backend returns JSON with token
//         const jwtToken = responseData.jwtToken; // Adjust 'jwtToken' to match your backend's key
//         const username = responseData.username || email; // Assuming backend returns username, fallback to email

//         localStorage.setItem('jwtToken', jwtToken); // Store the JWT token
//         localStorage.setItem('currentUser', JSON.stringify({ username, email })); // Store user info

//         setLoggedIn(true);
//         setCurrentUser({ username, email }); // Set current user details
//         setCurrentPage('landing'); // Redirect to landing page after successful login
//       } else {
//         const errorData = await response.text();
//         setError(`Login failed: ${errorData}`);
//       }
//     } catch (apiError) {
//       setError(`Network error during login: ${apiError.message}`);
//     }
//   };

//   return (
//     <div className="auth-page-container">
//       <Animated3DBackground />
//       <div className="auth-form-overlay">
//         <h2 className="auth-form-title">Login</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
          
//           <div className="form-field animate-form-field-delay-1">
//          <label className="form-label" htmlFor="username">
//               Username
//            </label>
//             <input
//               type="text"
//               id="username"
//               className="form-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Your Username"
//             />
//           </div>

//           <div className="form-field animate-form-field-delay-2">
//             <label className="form-label" htmlFor="loginPassword">
//               Password
//             </label>
//             <input
//               type="password"
//               id="loginPassword"
//               className="form-input mb-3"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="********"
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <div className="form-actions animate-form-field-delay-3">
//             <button
//               type="submit"
//               className="submit-button"
//             >
//               Login
//             </button>
//           </div>
//           <div className="text-center animate-form-field-delay-4">
//             <p className="auth-link-text">
//               Don't have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setCurrentPage('register')}
//                 className="auth-link-button"
//               >
//                 Register here
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Login;






