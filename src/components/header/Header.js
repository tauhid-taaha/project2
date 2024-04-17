// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import cineplexLogo from './CINEPLEX.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header__icon"
                        src={cineplexLogo}
                        alt="CINEPLEX LOGO"
                    />
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span>Home</span>
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
                    <span>Popular</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
                    <span>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
                    <span>Upcoming</span>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <span>Login</span>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <span>Sign Up</span> {/* Add this link */}
                </Link>
            </div>
        </div>
    );
};

export default Header;
