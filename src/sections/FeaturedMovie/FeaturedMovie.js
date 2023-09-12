import React from 'react'
import { useEffect,  useState } from 'react';
import "./FeaturedMovie.css"


const FeaturedMovie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=63ee159357e6b5a78c640c9765b97d27')
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
            setLoading(false);
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
  return (
    <div className='featuredmovie-container'>
       
       <div> 
       <h1 className='featuredmovie-heading'> Featured Movie </h1>
       </div>

       <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <ul className='list'>
          {movies.slice(0, 10).map((movie) => (
            <li key={movie.id}>
                <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='movie-image' alt="" />
                
                <p className='release-date'>{movie.release_date}</p>
              <p className='movie-title'>{movie.title}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>




    </div>
  )
}

export default FeaturedMovie