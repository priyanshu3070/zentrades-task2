import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';


function LoginDashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Password validation
    if (password === 'ZenTradesTest@123') {
      // Redirect to dashboard page
      navigate('/dashboard');
    } else {
      alert('Incorrect email or password. Please try again.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Construct the email link
    const subject = encodeURIComponent("Password Reset Request");
    const body = encodeURIComponent("Please reset my password.\n\nUsername: [Your Username]");
    const emailLink = `mailto:support@zentrades.pro?subject=${subject}&body=${body}`;

    
    window.location.href = emailLink;
  };

  return (
    <div className="container-wrapper">
    <div className="container">
      <h1>ZENTRADES</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit"> Sign In</button>
        <div>
          <a className='forgetPassword' href="#" onClick={handleForgotPassword}>Forgot your password?</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginDashboard;
