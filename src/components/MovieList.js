import React from "react";
import MovieItem from "./MovieItem";

const MovieList = (props) => {
  console.log(props);
  return (
    <div className="main">
      {props.movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
