// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    // Function  form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve stored sign-up information from local storage
        const signupInfo = JSON.parse(localStorage.getItem('signupInfo')) || [];
        
        const foundUser = signupInfo.find(user => user.email === email && user.password === password);
        if (foundUser) {
            
            window.location.href = "/login-successful";
        } else {
            
            setLoginError(true);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {loginError && <p className="login-error">Login unsuccessful. Please check your email and password.</p>}
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
