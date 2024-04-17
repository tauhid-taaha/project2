// Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Signup.css'; 

const Signup = () => {
    //  form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //  handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve existing sign-up information from local storage
        const existingSignupInfo = JSON.parse(localStorage.getItem('signupInfo')) || [];
        // Add new signup information to array
        const newSignupInfo = [...existingSignupInfo, { name, email, password }];
        // Store updated sign-up information array in local storage
        localStorage.setItem('signupInfo', JSON.stringify(newSignupInfo));
       
        window.location.href = "/signup-successful";
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                {/* Link to SignUpSuccessful page */}
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default Signup;
