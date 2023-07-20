import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import { useMovieContext } from "../contexts/MovieContext";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getMovies } = useMovieContext();

  useEffect(() => {
    getMovies();
  }, [searchParams]);

  return (
    <div>
      <Filter />
      <MovieList />
    </div>
  );
};

export default MoviesPage;
