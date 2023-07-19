import React, { useEffect } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { getOneMovie, movie } = useMovieContext();
  const { id } = useParams();

  console.log(movie, "movie");

  useEffect(() => {
    getOneMovie(id);
  }, []);

  return (
    <div style={{ backgroundColor: "#F2A07B", margin: "0px" }}>
      {movie && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "80px",
          }}
        >
          <img width={400} src={movie.img} />
          <div style={{ textAlign: "start", fontSize: "60px" }}>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating} ⭐</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
