/*import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import movieList from './movie_list.json';
import './Blog.css';

const Blog = ({ loggedInUser }) => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState('');
    const [loading, setLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:3001/blogs");
            if (response.ok) {
                const data = await response.json();
                setBlogs(data);
                setLoading(false);
            } else {
                console.error("Error fetching blogs:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handlePostBlog = async () => {
        try {
            const response = await fetch("http://localhost:3001/post-blog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: loggedInUser, content: newBlog })
            });
            if (response.ok) {
                setNewBlog('');
                await fetchBlogs();
            } else {
                console.error("Error posting blog:", response.statusText);
            }
        } catch (error) {
            console.error("Error posting blog:", error);
        }
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

    const onSuggestionSelected = (event, { suggestion }) => {
        const movieTag = `[movie:${suggestion.movie_id}:${suggestion.title}]`;
        setNewBlog(prevBlog => `${prevBlog} ${movieTag}`);
        setSelectedMovie('');
    };

   /* const renderBlogContent = (content) => {
        const movieTagRegex = /\[movie:(\d+):(.+?)\]/g;
        const parts = content.split(movieTagRegex);

        return parts.map((part, index) => {
            if (index % 3 === 1) {
                const movieId = parts[index - 1];
                const isMovieIdValid = movieId && !isNaN(movieId);

                if (isMovieIdValid) {
                    return (
                        <React.Fragment key={index}>
                            <div>{part}</div>
                            <div>
                                <span>#</span>
                                <span>{part}</span>
                                <span> (ID: {movieId})</span>
                            </div>
                        </React.Fragment>
                    );
                }
            }
            return <span key={index}>{part}</span>;
        });
    };*/

   /* return (
        <div className="blog-container">
            <h2>Blog</h2>
            <div className="blog-form">
                <textarea
                    value={newBlog}
                    onChange={(e) => setNewBlog(e.target.value)}
                    placeholder="Write your blog here..."
                    rows="4"
                ></textarea>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                        placeholder: 'Tag a movie...',
                        value: selectedMovie,
                        onChange: (e, { newValue }) => setSelectedMovie(newValue)
                    }}
                    onSuggestionSelected={onSuggestionSelected}
                />
                <div className='b'><button onClick={handlePostBlog}>Post</button></div>
            </div>
            {loading ? (
                <p>Loading blogs...</p>
            ) : (
                <div className="blog-list">
                    {blogs.map(blog => (
                        <div key={blog.id} className="blog-item">
                            <div className='box'>
                                <div className='upper'>
                                    <div className='inside'>User: {blog.username}</div>
                                    <div className='inside'>Time: {blog.created_time}</div>
                                    <hr className='separator' />  /*
                                    <div className='inside'>{blog.content}</div>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog; */
 