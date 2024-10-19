import React, { useState } from 'react';
import './style.css';
import Login from './Login'; // Import the Login component

const LoginHeader = () => {
  // State to toggle login form
  const [showLogin, setShowLogin] = useState(false);

  // Handle the button to show/hide login form
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google clicked");
    // Add Google OAuth logic here
  };

  return (
    <div className='login-header'>
      <button className='log-but' onClick={toggleLogin}>
        {showLogin ? 'Close Login' : 'Login or Create Account'}
      </button>

      {showLogin && <Login />} {/* Conditionally render the login form */}
       <button className='google' onClick={()=>handleGoogleLogin}>
      <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" /> 
            Continue with Google
          </button>
    </div>
  );
};

export default LoginHeader;
