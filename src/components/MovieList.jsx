import React, { useEffect } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { Box } from "@mui/system";
import MovieItem from "./MovieItem";
import { CircularProgress } from "@mui/material";

const MovieList = () => {
  const { movies, getMovies } = useMovieContext();
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        columnGap: "12px",
        margin: "100px 40px",
      }}
    >
      {movies.length > 0 ? (
        movies.map((item) => <MovieItem key={item.id} item={item} />)
      ) : (
        <div>
          <CircularProgress
            sx={{ mx: "auto", mt: 5, displaY: "block" }}
            size={100}
          />
        </div>
      )}
    </Box>
  );
};

export default MovieList;
