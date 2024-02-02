import React, { useState } from 'react';
import './Login.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
    setUsername('');
    setPassword('');
    setEmail('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let apiUrl = 'http://localhost:8000/api/login/';
      let bodyData = {
        username: username,
        password: password,
      };

      if (!showLogin) {
        apiUrl = 'http://localhost:8000/api/register/';
        bodyData = {
          username: username,
          password: password,
          email: email,
        };
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
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222',
    alignItems: 'center',
  };

  const mainStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222',
    width: '300px', // Adjust the width as needed
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '7px 7px 10px 3px #24004628',
    marginTop: '20px', // Adjust the margin as needed for spacing from the navbar
  };

  const checkboxStyle = {
    display: 'none',
    backgroundColor: '#222',
  };

  const formContainerStyle = {
    // Add your styles for form container if needed
  };

  const formStyle = {
    // Add your styles for form if needed
  };

  const labelStyle = {
    // Add your styles for label if needed
  };

  const inputStyle = {
    // Add your styles for input if needed
  };

  const toggleButtonStyle = {
    background: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="container login" style={containerStyle}>
      <div className="main" style={mainStyle}>
        <input type="checkbox" id="chk" aria-hidden="true" style={checkboxStyle} />

        <div className={showLogin ? "login" : "register"} style={formContainerStyle}>
          <form className="form" style={formStyle} onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true" style={labelStyle}>
              {showLogin ? "Log in" : "Register"}
            </label>
            {showLogin ? (
              <>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  style={inputStyle}
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  style={inputStyle}
                />
              </>
            ) : (
              <>
                <input
                  className="input"
                  type="text"
                  name="txt"
                  placeholder="Username"
                  required
                  style={inputStyle}
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  style={inputStyle}
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  style={inputStyle}
                />
              </>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>

        <button onClick={toggleForm} style={toggleButtonStyle}>
          {showLogin ? "Switch to Register" : "Switch to Log in"}
        </button>
      </div>
    </div>
  );
};

export default App;
