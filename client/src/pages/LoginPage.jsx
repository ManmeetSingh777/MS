import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Google login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <button onClick={handleGoogleLogin} className="google-login-button">
          Log in with Google
        </button>
        {error && <p className="error-message">{error}</p>}
        <div className="additional-options">
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
          <p>
            <a href="/provider-login">Log in as a provider</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
