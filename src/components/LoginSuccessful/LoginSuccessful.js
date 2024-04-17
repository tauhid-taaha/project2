
// LoginSuccessful.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './LoginSuccessful.css'; // Import CSS file for styling

const LoginSuccessful = () => {
    return (
        <div className="login-successful-container">
            <h2>Login Successful</h2>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default LoginSuccessful;
