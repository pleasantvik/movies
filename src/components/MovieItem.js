import React from "react";

const MovieItem = (props) => {
  function getRating(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movie">
      <img
        src={`${IMG_PATH}${props.movie.backdrop_path}`}
        alt={props.movie.title}
        className="movie__img"
      />
      <div className="movie-info">
        <h3 className="movie__title">{props.movie.title}</h3>
        <span className={getRating(props.movie.vote_average)}>
          {props.movie.vote_average}
        </span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {props.movie.overview}
      </div>
    </div>
  );
};

export default MovieItem;
