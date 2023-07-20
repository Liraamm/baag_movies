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
      const { data } = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: ACTIONS.movies,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovies(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getMovies();
    } catch (e) {
      console.log(e);
    }
  }

  async function addMovie(newData) {
    try {
      await axios.post(API, newData);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneMovie(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.movie,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function editMovie(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    movies: state.movies,
    movie: state.movie,
    getMovies,
    deleteMovies,
    addMovie,
    getOneMovie,
    editMovie,
  };

  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

export default MovieContext;
