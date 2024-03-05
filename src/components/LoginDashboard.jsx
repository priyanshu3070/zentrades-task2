import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';
import Logo from '../assets/zentrades-logo.png';

function LoginDashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
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
    <div className='bg-black w-screen min-h-screen'>
    <form
        className='h-screen flex flex-col justify-center items-center w-96 mx-auto'
        onSubmit={handleOnSubmit}
    >
        <img src={Logo} width={320} alt="Zentrades Logo" />
        <div className='w-5/6 mt-12 mb-6'>
            <input
                type="text"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full rounded-t-lg p-4 active:border-primary'
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full rounded-b-lg p-4'
            />
        </div>

        <div className='text-white flex items-center gap-1 justify-center'>
            <input
                type="checkbox"
                className='block border-none rounded-sm checked:bg-secondary hover:bg-secondary active:bg-secondary checked:hover:bg-secondary checked:active:bg-secondary checked:hover:border-none checked:active:border-none'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p>Remember Me</p>
        </div>
        <button 
            type='submit' 
            className='w-5/6 mt-2 mb-6 p-4 rounded bg-[#EE5569] hover:bg-red-400 text-white'
        >Sign In</button>
        <a
            href='mailto:support@zentrades.pro?subject=Password%20Reset'
            target='_blank'
            className='text-white text-sm'
        >Forgot your Password?</a>
       
    </form>
</div>
  );
}

export default LoginDashboard;
