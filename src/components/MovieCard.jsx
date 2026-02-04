
import React, { use } from 'react'
import {FaHeart ,FaRegBookmark} from "react-icons/fa";
import  {IoBookmarkSharp} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite,toggleWatchlist } from '../store/slices/userSlice';
const MovieCard = ({ imdbID, Title, Year, Poster, handleDetails }) => {


   const [FavColor,setFavColor]=React.useState(useSelector((state) => state.user.favorites.includes(imdbID))    );
   const[WatchlistColor,setWatchlistColor]=React.useState(useSelector((state) => state.user.watchlist.includes(imdbID))    );

     
    const dispatchEvent = useDispatch();
     

      function handlefavorites(imdbID){
      
          dispatchEvent(toggleFavorite(imdbID));
      }
      function handleWatchlist(imdbID){
      
          dispatchEvent(toggleWatchlist(imdbID));
      }
   
    return (


        <div>

            <h2>{Title}</h2>
            <h3>Year: {Year}</h3>
            {Poster && <img src={Poster} alt={Title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />}
            <button onClick={() => handleDetails(imdbID)}>Details
            </button>
            
                  <button onClick={() => {handlefavorites(imdbID), setFavColor(!FavColor)}}><FaHeart color={ FavColor ? "red" : "grey" } /></button>
                <button onClick={() => {handleWatchlist(imdbID), setWatchlistColor(!WatchlistColor)}}><IoBookmarkSharp color={ WatchlistColor ? "red" : "grey" } /></button>
        </div>

    )
}

export default MovieCard


