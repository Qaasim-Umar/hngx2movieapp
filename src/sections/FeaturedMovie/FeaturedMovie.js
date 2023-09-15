import React from "react";
import { useEffect, useState } from "react";
import "./FeaturedMovie.css";
import { Link } from "react-router-dom";

const FeaturedMovie = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from the api endpoint

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=63ee159357e6b5a78c640c9765b97d27"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })

      // Setting an error message if an error occurred

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="featuredmovie-container">
      <div>
        <h1 className="featuredmovie-heading"> Featured Movie </h1>
      </div>
      <div>
        {loading ? (

            // shows Loading while api is still fetching

          <p>Loading...</p>
        ) : (
          <div>
            <ul className="list">
              {movies
               .filter((movie) =>
               movie.title.toLowerCase().includes(searchQuery.toLowerCase())
             )
              .slice(0, 10).map((movie) => (
                // used the sliced method to select and dispaly just the 10 needed movies from the api
                
                <li key={movie.id}>
                  <Link to={`movie/${movie.id} `} key={movie.id}>
                    <div className="card" data-testid="movie-card">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        className="movie-image"
                        alt=""
                        data-testid="movie-poster"
                      />
                      <p
                        className="release-date"
                        data-testid="movie-release-date"
                      >
                        {movie.release_date}
                      </p>
                      <p className="movie-title" data-testid="movie-title">
                        {movie.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
