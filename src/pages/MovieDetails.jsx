import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/slices/userSlice';
// import { toggleWatchlist } from '../store/slices/userSlice';
const MovieDetails = ({ imdbID }) => {

//   const { imdbID} = useParams();
  if(!imdbID){
    imdbID=useParams().imdbID;
  }
  const [data, setData] = useState({});
  
        const dispatchEvent = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (imdbID) fetchMovie();
  }, [imdbID]);


  function handlefavorites(imdbID){
  
      dispatchEvent(toggleFavorite(imdbID));
  }
  function handleWatchlist(imdbID){
  
      dispatchEvent(toggleWatchlist(imdbID));
  }
  return (
    <div>
        <h1>Movie Details</h1>
      <h1>{data.Title}</h1>
      <h2>Year: {data.Year}</h2>
      <h3>Rated: {data.Rated}</h3>
      <h3>Released: {data.Released}</h3>
      <h3>Runtime: {data.Runtime}</h3>
      <h3>Genre: {data.Genre}</h3>
      <h3>Director: {data.Director}</h3>
      <h3>Actors: {data.Actors}</h3>
      <h4>Plot: {data.Plot}</h4>
      <h4>IMDB Rating: {data.imdbRating}</h4>
      {data.Poster && <img  className="movie-poster" src={data.Poster} alt={data.Title} />}
        <button onClick={() => {handlefavorites(data.imdbID)}}>Favorites</button>
        <button onClick={() => {handleWatchlist(data.imdbID)}}>Watchlist</button>
       
    </div>

  );
};

export default MovieDetails;