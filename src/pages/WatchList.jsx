import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';
import './WatchList.css';
const WatchList = () => {

  
     const watchlist = useSelector((state) => state.user.watchlist);
   

   
  return (
    
      <div className="watchlist-container">
        {watchlist.length === 0 ? (
          <h2 className="watchlist-empty">No items in watchlist yet.</h2>
        ) : (
          watchlist.map((imdbID) => (
            <MovieDetails key={imdbID} imdbID={imdbID} />
          ))
        )}
      </div>
   
  )
}

export default WatchList