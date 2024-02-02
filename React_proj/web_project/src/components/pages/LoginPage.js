import React, { useState } from 'react';
import './Login.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
    setUsername('');
    setPassword('');
    setEmail('');
    setError(null);
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let apiUrl = `http://localhost:8000/api/${showLogin ? 'login' : 'register'}/`;
      let bodyData = {
        username: username,
        password: password,
      };

      if (!showLogin) {
        apiUrl = 'http://localhost:8000/api/register/';
        bodyData.email = email;
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setSuccessMessage(showLogin ? 'Logged in successfully!' : 'Registered successfully!');

        const userInfoResponse = await fetch('http://localhost:8000/api/user-info/', {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json();
          setUserInfo(userInfo);
        } else {
          setError('Failed to fetch user information');
        }
      } else {
        setError('Invalid credentials or registration failed');
      }
    } catch (error) {
      setError('An error occurred during the authentication process');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className={showLogin ? 'login' : 'register'}>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">{showLogin ? 'Log in' : 'Register'}</label>

            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {!showLogin && (
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
          </form>
        </div>

        {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}

        {userInfo && (
          <div style={{ color: 'white', marginTop: '20px' }}>
            <h2>User Information:</h2>
            <p>ID: {userInfo.id}</p>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
          </div>
        )}

        {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

        {token && <p style={{ color: 'green', marginTop: '20px' }}>Token: {token}</p>}

        <button onClick={toggleForm}>Switch to {showLogin ? 'Register' : 'Log in'}</button>
      </div>
    </div>
  );
};

export default App;
