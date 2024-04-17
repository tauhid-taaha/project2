import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './home/home';
import MovieList from './components/movielist/movielist';
import Movie from './components/movieDetail/movie';
import Login from './components/Login/Login';
import LoginSuccessful from './components/LoginSuccessful/LoginSuccessful';
import Signup from './components/Signup/Signup'; // Import the Signup component
import SignUpSuccessful from './components/SignUpSuccessful/SignUpSuccessful'; 
import LoginError from './components/LoginError/LoginError'; // Import the SignUpSuccessful component





function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/movies/:type" element={<MovieList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login-successful" element={<LoginSuccessful />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup-successful" element={<SignUpSuccessful />} /> 
                    <Route path="/login-error" element={<LoginError />} />
                    <Route path="/*" element={<h1>Error</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
