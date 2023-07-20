import React, { useEffect } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { Box } from "@mui/system";
import MovieItem from "./MovieItem";
import { CircularProgress } from "@mui/material";
import back from "../assets/wave_background.svg";

const MovieList = () => {
  const { movies, getMovies } = useMovieContext();
  useEffect(() => {
    getMovies();
  }, []);

  const sortedMovies = movies.sort((a, b) => (+a.rating > +b.rating ? -1 : 1));

  return (
    <div className="back">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-evenly",
          height: "600px",
          paddingTop: "100px",
        }}
      >
        {sortedMovies.length > 0 ? (
          sortedMovies.map((item) => <MovieItem key={item.id} item={item} />)
        ) : (
          <div>
            <CircularProgress
              sx={{ mx: "auto", mt: 5, displaY: "block" }}
              size={100}
            />
          </div>
        )}
      </Box>
    </div>
  );
};

export default MovieList;
