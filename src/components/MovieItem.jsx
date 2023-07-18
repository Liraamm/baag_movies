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
    <div className="card">
      <div className="card-img">
        <img src={item.img} alt="#" />{" "}
      </div>
      <div className="card-info">
        <p className="title">{item.title}</p>
        <p className="subtitle">{item.description}</p>
        <p className="subtitle" style={{ fontSize: "10px" }}>
          Director: {item.director}
        </p>
        <p className="subtitle">Rating: {item.rating}</p>
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
