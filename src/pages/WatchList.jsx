import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieDetails from './MovieDetails';
const WatchList = () => {

    console.log("WatchList component rendered");
     const watchlist = useSelector((state) => state.user.watchlist);
   

   
  return (
    
      <div>
   { watchlist.length === 0 ? (
        <h2>No items in watchlist yet.</h2>
      ) : (
        watchlist .map((imdbID) => (
          <MovieDetails key={imdbID} imdbID={imdbID} />
        ))
      )
    
   }
      </div>
   
  )
}

export default WatchList