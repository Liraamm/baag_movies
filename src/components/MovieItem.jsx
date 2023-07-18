import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const MovieItem = ({ item }) => {
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
      <Card.Body>
        {/* Сделай баттоны плиз */}
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
