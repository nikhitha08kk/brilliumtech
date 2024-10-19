import React, { useState } from 'react';
import './style.css'; // Import the CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here (e.g., authentication, API call)
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google clicked");
    // Add Google OAuth logic here
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          {/* Google Login Button */}
          <button className='google-login-btn' onClick={handleGoogleLogin}>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" /> 
            Continue with Google
          </button>
          <div className="divider">or</div>
          
          {/* Email Input */}
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='form-group'>
          {/* Password Input */}
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            required
          />
        </div>

        {/* Submit Button */}
        <button type='submit'>Create Account</button>
      </form>
    </div>
  );
}

export default Login;
