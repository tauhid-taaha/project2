
import React, { useEffect, useState } from "react";
import "./movielist.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
                const data = await response.json();
                setMovieList(data.results);
            } catch (error) {
                console.error("Error fetching jdata:", error);
            }
        };

        getData(); // Call getData function

    }, [type]); // Include type in the dependency array

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;
