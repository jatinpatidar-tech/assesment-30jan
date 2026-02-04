import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './SearchResults.css';
import { useParams } from 'react-router-dom';
const SearchResults = () => {
   const { search } = useParams();
  const [array, setArray] = useState({Search: []});

  useEffect(() => {
    console.log("SearchResults component rendered with search:", search);
    try {
      axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
        .then((res) => {
          console.log("searcsults", res.data);
          setArray(res.data);
        }).catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }


  }, [search]);
  return (
    <div className="search-results-container">
      {array.Search && array.Search.length > 0 ? (
        array.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))
      ) : (
        <div className="search-results-empty">No results found.</div>
      )}
    </div>
  );
}

export default SearchResults