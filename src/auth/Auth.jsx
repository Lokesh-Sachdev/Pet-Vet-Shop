import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="auth_container">
      <h1>Login</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <p>And Now you can access CustomerPets & Services</p>
          <button className="sign_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="auth_content">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p className="error">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button className="sign_btn" onClick={() => handleLogin()}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
