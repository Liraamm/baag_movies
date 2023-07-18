import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../utils/const";
import axios from "axios";

const movieContext = createContext();

export function useMovieContext() {
  return useContext(movieContext);
}

const init = {
  movies: [],
  movie: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.movies:
      return { ...state, movies: action.payload };
    case ACTIONS.movie:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}

const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  async function getMovies() {
    try {
      const { data } = await axios.get(API);
      dispatch({
        type: ACTIONS.movies,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addMovie(newData) {
    try {
      await axios.post(API, newData);
    } catch (error) {
      console.log(error);
    }
  }

  const value = { movies: state.movies, getMovies };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

export default MovieContext;
