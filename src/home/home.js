import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../components/movielist/movielist";
import Cards from "../components/card/card";



// Declare your API key here
const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";

const Home = () => {
    
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchChange = (evt) => {
        setSearchInput(evt.target.value);
    };

    const handleSearchMovie = async () => {
        if (!searchInput.trim()) return; // Don't perform search if input is empty
        setLoading(true);
        setError(null);
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
            .catch(error => console.error('Error fetching popular movies:', error));
    }, []);

    return (
        <>
            <div className="poster">
            <div className="search-container">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                        placeholder="Search for movies..."
                    />
                    <button
    className="button-85"
    onClick={handleSearchMovie}
    disabled={!searchInput.trim()}
>
    Search
</button>
<button
    className="button-85"
    onClick={() => setSearchInput("")}
>
    Clear
</button>


                </div>
                {loading && (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                )} {/* Loading indicator */}
                {error && <div>Error: {error}</div>} {/* Error message */}
                <div className="search-results">
                    {searchResults.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))}
                </div>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="no pic" />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie.original_title}</div>
                                <div className="posterImage__runtime">
                                    <span className="posterImage__releaseDate">Release Date: {movie.release_date}</span> <br />

                                    <span className="posterImage__rating">Rating: {movie.vote_average} <i className="fas fa-star" /></span>
                                </div>
            
                                <div className="posterImage__description">{movie.overview}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <MovieList />
            </div>
        </>
    );
};

export default Home;