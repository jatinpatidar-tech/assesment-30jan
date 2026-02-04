import React, { use } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieDetails from './MovieDetails';
import './Favorites.css';
const Favorites = () => {

    console.log("Favouristes component rendered");
     const favs = useSelector((state) => state.user.favorites);
   

   
  return (
    
      <div className="favorites-container">
        {favs.length === 0 ? (
          <h2 className="favorites-empty">No favorites added yet.</h2>
        ) : (
          favs.map((imdbID) => (
            <MovieDetails key={imdbID} imdbID={imdbID} />
          ))
        )}
      </div>
   
  )
}

export default Favorites