import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useMovieContext } from "../contexts/MovieContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ item }) => {
  const { deleteMovies } = useMovieContext();
  const navigate = useNavigate();

  return (
    <div class="card">
      <div class="card-img">
        <img src={item.img} alt="#" width={200} />
      </div>
      <div class="card-info">
        <p
          class="title"
          onClick={() => {
            navigate(`/details/${item.id}`);
          }}
        >
          {item.title}
        </p>
        <p class="subtitle">{item.description}</p>
        <p class="subtitle" style={{ fontSize: "12px", fontWeight: "400" }}>
          Director: {item.director}
        </p>
        <p class="subtitle">Rating: {item.rating} ⭐</p>

        <Button
          endIcon={<DeleteIcon />}
          sx={{ textTransform: "capitalize", color: "red" }}
          onClick={() => deleteMovies(item.id)}
        >
          Delete
        </Button>
        <Button
          endIcon={<EditOutlinedIcon />}
          sx={{ textTransform: "capitalize", color: "midnightblue" }}
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default MovieItem;
