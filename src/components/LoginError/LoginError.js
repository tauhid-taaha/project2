// LoginError.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './LoginError.css'; // Import CSS file for styling

const LoginError = () => {
    return (
        <div className="login-error-container">
            <h2>Login Error</h2>
            <p>Your email or password is incorrect. Please try again.</p>
            <Link to="/login">Go back to Login</Link>
        </div>
    );
};

export default LoginError;
