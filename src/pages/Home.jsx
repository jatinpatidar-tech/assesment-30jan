import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
export default function Home() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  // TODO: Implement home page (instructions or trending)
    useEffect(() => {
    const fetchMovie = async () => {
      try {
        // setLoading(true);
        // setError(null);
        // const res = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=avengers&page=${page}`);
        // const res = await axios.get(`https://www.omdbapi.com/?apikey=39454d2a&s=avengers&page=${page}`);

       
          const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=avengers&page=${page}`
        );
       
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
   fetchMovie();
  }, [page]);

    function handleDetails(imdbID) {
    navigate(`/movie/${imdbID}`);
    }
  return (
    <div>
      <h1>Home Page</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        margin: '32px 0'
      }}>
        {data.Search && data.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} handleDetails={handleDetails} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Next page</button>
      <button onClick={() => setPage(page -1)}>Previous page</button>
    </div>
  )
}
