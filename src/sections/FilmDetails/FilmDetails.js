import "./FilmDetails.css";
// import Video from "./video.png";
import Ticket from "./tickets.svg";
import More from "./List.svg";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FilmDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  //   Using params for dynamic routing
  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=63ee159357e6b5a78c640c9765b97d27`
    )
      .then((response) => {
        if (!response.ok) {
          // Check if the response status is not OK (e.g., 404, 500)
          throw new Error(`Failed to fetch data (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        setError(error.message);
        // Set the error message in case of an error
      });
  };
  // Check for errors and display an error message if one exists
  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="filmdetails-container">
      <div>
        <div className="video-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="details-img"
            alt=""
          />
        </div>

        <div className="head-flex">
          <div>
            <div className="runtime-flex">
              <div className="title-flex">
                <p data-testid="movie-title">{movieDetails.title}</p>
                <p data-testid="movie-release-date">
                  {movieDetails.release_date}
                </p>
              </div>
              <div className="runtime" data-testid="movie-runtime">{movieDetails.runtime} Minutes</div>
            </div>
          </div>

          <div className="overview-flex">
            <p className="movie-about" data-testid="movie-overview">{movieDetails.overview}</p>
            <div>
              <p>
                <button className="button1">
                  {" "}
                  <img src={Ticket} alt="" /> See Showtimes
                </button>
              </p>
              <button className="button2">
                {" "}
                <img src={More} alt="" /> More watch Options{" "}
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
