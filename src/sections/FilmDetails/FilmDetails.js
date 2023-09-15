import "./FilmDetails.css";
// import Video from "./video.png";
import Ticket from "./tickets.svg";
import More from "./List.svg";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FilmDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
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
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });

    //     {

    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       })
    // }

    //   .then((data) => {
    //     setMovieDetails(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setLoading(false);
    //   });
    // }, [movieId]);

    // if (loading) {
    //     return <div>Loading...</div>;
    //   }

    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   }
  };

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
            <div className="title-flex">
              <p data-testid="movie-title">{movieDetails.title}</p>
              <p data-testid="movie-release-date">{movieDetails.release_date}</p>
            </div>

            <p className="movie-about">{movieDetails.overview}</p>
          </div>

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

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
