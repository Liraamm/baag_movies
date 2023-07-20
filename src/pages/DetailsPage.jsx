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
    <div style={{ backgroundColor: "rgb(242, 160, 123, 0.7)", margin: "0px" }}>
      {movie && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "80px",
          }}
        >
          <img width={400} src={movie.img} style={{ padding: "20px" }} />
          <div
            style={{
              textAlign: "start",
              fontSize: "60px",
              fontFamily: "sans-serif",
              marginLeft: "40px",
              color: "white",
            }}
          >
            <p>{movie.title}</p>
            <p style={{ fontSize: "30px" }}>{movie.description}</p>
            <p style={{ fontSize: "30px" }}>Director: {movie.director}</p>
            <p style={{ fontSize: "30px" }}>Rating: {movie.rating} ⭐</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
