import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import { Box, Pagination } from "@mui/material";
import { LIMIT } from "../utils/const";
import Filter from "../components/Filter";
import { useMovieContext } from "../contexts/MovieContext";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getMovies, pageTotalCount, page, setPage } = useMovieContext();

  useEffect(() => {
    getMovies();
  }, [searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);

  return (
    <div>
      <Filter />
      <MovieList />
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "50px auto",
          backgroundColor: "#FBDCC4",
          borderRadius: "10px",
        }}
      >
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ color: "#31112C" }}
        />
      </Box>
    </div>
  );
};

export default MoviesPage;
