
import React from 'react'

const MovieCard = ({ imdbID, Title, Year, Poster, handleDetails }) => {
    return (


        <div>
            {/* <h1>hyy</h1> */}
            <h2>{Title}</h2>
            <h3>Year: {Year}</h3>
            {Poster && <img src={Poster} alt={Title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />}
            <button onClick={() => handleDetails(imdbID)}>Details</button>
        </div>

    )
}

export default MovieCard


