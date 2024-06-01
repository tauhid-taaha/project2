// GenrePage.js

import React, { useEffect, useState } from 'react';
import Cards from './components/card/card';
import './genre.css';

const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
];

const GenrePage = () => {
    const [movieList, setMovieList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genreName, setGenreName] = useState('');

    useEffect(() => {
        if (selectedGenre) {
            const getData = async () => {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectedGenre}`);
                    const data = await response.json();
                    setMovieList(data.results);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            getData();
        }
    }, [selectedGenre]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre.id);
        setGenreName(genre.name);
    };

    return (
        <div className="genre-page">
            <div className="genres-container">
                <h2>Genres</h2>
                <div className="genre-buttons">
                    {genres.map(genre => (
                        <button key={genre.id} className="button-86" onClick={() => handleGenreClick(genre)}>
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="main-content">
                {selectedGenre && (
                    <h2 className="genre__title">{genreName.toUpperCase()}</h2>
                )}
                <div className="list__cards">
                    {movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenrePage;
