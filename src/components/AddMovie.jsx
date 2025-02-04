

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddMovie.css'; 

const AddMovie = () => {
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterImage: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieDetails);
    navigate('/'); 
  };

  const handleCancel = () => {
    navigate('/'); 
  };

  return (
    <div className="add-movie-container">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={movieDetails.title}
            onChange={handleChange}
            placeholder="Enter movie title"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Director</label>
          <input
            type="text"
            name="director"
            value={movieDetails.director}
            onChange={handleChange}
            placeholder="Enter director's name"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <select
            name="genre"
            value={movieDetails.genre}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        <div className="form-group">
          <label>Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={movieDetails.releaseYear}
            onChange={handleChange}
            placeholder="Enter release year"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Synopsis</label>
          <textarea
            name="synopsis"
            value={movieDetails.synopsis}
            onChange={handleChange}
            placeholder="Enter movie synopsis"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Poster Image URL</label>
          <input
            type="url"
            name="posterImage"
            value={movieDetails.posterImage}
            onChange={handleChange}
            placeholder="Enter poster image URL"
            className="input-field"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
