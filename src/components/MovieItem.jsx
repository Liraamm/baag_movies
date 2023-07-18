import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useMovieContext } from "../contexts/MovieContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const MovieItem = ({ item }) => {
  const { deleteMovies } = useMovieContext();

  return (
    <div class="card">
      <div class="card-img">
        <img src={item.img} alt="#" />{" "}
      </div>
      <div class="card-info">
        <p class="title">{item.title}</p>
        <p class="subtitle">{item.description}</p>
        <p class="subtitle">Director: {item.director}</p>
        <p class="subtitle">Rating: {item.rating}</p>
        <Button
          endIcon={<DeleteIcon />}
          sx={{ textTransform: "capitalize", color: "red" }}
          onClick={() => deleteMovies(item.id)}
        >
          Delete
        </Button>
        <Button
          endIcon={<EditOutlinedIcon />}
          sx={{ textTransform: "capitalize", color: "black" }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default MovieItem;
