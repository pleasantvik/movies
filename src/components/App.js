import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import MovieList from "./MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67c2c5de8f98b7a053bf1468a1290d61&page=1";

  useEffect(() => {
    const getMovies = async () => {
      const data = await axios.get(API_URL);
      setMovies(data.data.results);
    };
    getMovies();
  }, []);

  const handleForm = (term) => {
    const search = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=67c2c5de8f98b7a053bf1468a1290d61&query=${term}`
      );
      setMovies(data.data.results);
    };
    if (term === "") {
      alert("Please input a movie title");
    } else {
      search();
    }
  };

  return (
    <div>
      <Header handleForm={handleForm} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
