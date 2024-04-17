// SignUpSuccessful.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './SignUpSuccessful.css'; // Import CSS file for styling

const SignUpSuccessful = () => {
    return (
        <div className="signup-successful-container">
            <h2>Sign Up Successful</h2>
            <Link to="/login">Login</Link> {/* Link to Login page */}
        </div>
    );
};

export default SignUpSuccessful;
