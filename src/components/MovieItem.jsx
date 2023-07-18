import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useMovieContext } from "../contexts/MovieContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const MovieItem = ({ item }) => {
  const { deleteMovies } = useMovieContext();

  return (
    <Card
      style={{
        width: "18rem",
        height: "50vh",
        backgroundColor: "black",
        color: "white",
        borderRadius: "12px",
      }}
    >
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Director: {item.director}</ListGroup.Item>
        <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
      </ListGroup>

      <Button
        endIcon={<DeleteIcon />}
        sx={{ textTransform: "capitalize", color: "red" }}
        onClick={() => deleteMovies(item.id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default MovieItem;
