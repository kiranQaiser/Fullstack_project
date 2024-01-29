import React, { useState } from 'react';
import './Page.css';
const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: '24px',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="main" style={mainStyle}>
        <input type="checkbox" id="chk" aria-hidden="true" style={checkboxStyle} />

        <div className={showLogin ? "login" : "register"} style={formContainerStyle}>
          <form className="form" style={formStyle}>
            <label htmlFor="chk" aria-hidden="true" style={labelStyle}>{showLogin ? "Log in" : "Register"}</label>
            {showLogin ? (
              <>
                <input className="input" type="email" name="email" placeholder="Email" required style={inputStyle} />
                <input className="input" type="password" name="pswd" placeholder="Password" required style={inputStyle} />
              </>
            ) : (
              <>
                <input className="input" type="text" name="txt" placeholder="Username" required style={inputStyle} />
                <input className="input" type="email" name="email" placeholder="Email" required style={inputStyle} />
                <input className="input" type="password" name="pswd" placeholder="Password" required style={inputStyle} />
              </>
            )}
            <button style={buttonStyle}>Submit</button>
          </form>
        </div>

        <button onClick={toggleForm} style={toggleButtonStyle}>
          {showLogin ? "Switch to Register" : "Switch to Log in"}
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const mainStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#240046',
  width: '300px', // Adjust the width as needed
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '7px 7px 10px 3px #24004628',
  marginTop: '20px', // Adjust the margin as needed for spacing from the navbar
};

const checkboxStyle = {
  display: 'none',
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  marginTop: '20px',
};

const labelStyle = {
  margin: '5% 0 5%',
  color: '#fff',
  fontSize: '2rem',
  justifyContent: 'center',
  display: 'flex',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '.5s ease-in-out',
};

const inputStyle = {
  width: '100%',
  height: '40px',
  background: '#e0dede',
  padding: '10px',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
};

const buttonStyle = {
  width: '85%',
  height: '40px',
  margin: '12px auto 10%',
  color: '#fff',
  background: '#573b8a',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: '.2s ease-in',
};

const toggleButtonStyle = {
  background: 'transparent',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default App;
