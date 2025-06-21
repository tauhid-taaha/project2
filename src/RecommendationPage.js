import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import movieList from './movie_list.json';
import similarity from './similarity.json';
import './RecommendationPage.css';
import Cards from './components/card/card'; // Import the Cards component

const fetchMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const recommend = (movieName) => {
    const index = movieList.findIndex(item => item.title.toLowerCase() === movieName.toLowerCase());
    if (index === -1) {
        return []; // Return an empty array if the movie is not found
    }

    const distances = similarity[index];
    const sortedDistances = distances
        .map((distance, i) => ({ index: i, distance }))
        .sort((a, b) => b.distance - a.distance);

    const recommendedMovieIds = [];
    for (const item of sortedDistances.slice(1, 7)) {
        const movie = movieList[item.index];
        recommendedMovieIds.push(movie.movie_id); // Get movie_id instead of the full movie object
    }

    return recommendedMovieIds;
};

const RecommendationPage = () => {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    const handleSearch = async () => {
        const recommendedMovieIds = recommend(selectedMovie);
        const recommendedMoviesDetails = await Promise.all(recommendedMovieIds.map(id => fetchMovieDetails(id)));
        setRecommendedMovies(recommendedMoviesDetails);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const getSuggestionValue = (suggestion) => suggestion.title;

    const renderSuggestion = (suggestion) => (
        <div>
            {suggestion.title}
        </div>
    );

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : movieList.filter(movie =>
            movie.title.toLowerCase().slice(0, inputLength) === inputValue
        ).slice(0, 5); // Show only 5 suggestions
    };

    return (
        <div className="container">
            <h1>Recommendation Page</h1>
            <div className="input-container">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                        placeholder: 'Enter Movie Name',
                        value: selectedMovie,
                        onChange: (e, { newValue }) => setSelectedMovie(newValue),
                        className: 'react-autosuggest__input' // Apply className to the input field
                    }}
                    className="react-autosuggest__container" // Apply className to the Autosuggest container
                    renderSuggestionsContainer={({ containerProps, children }) => (
                        <div {...containerProps} className="react-autosuggest__suggestions-container">
                            {children}
                        </div>
                    )}
                />
                <button className="search" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="recommended-movies">
               <div className='r'> <h2>Recommended Movies for {selectedMovie}</h2></div>
                <div className="list__cards">
                    {recommendedMovies.map((movie, index) => (
                        <Cards key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationPage;
