import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./MovieItem.css";

function MovieItem({ movie, index }) {
  const genres = movie.moviegenres.join(", ");
  const languages = movie.movielanguages.join(", ");
  const countries = movie.moviecountries.join(", ");

  return (
    <div className="movies-item">
      <Card style={{ width: "18rem" }} className="Is-Card">
        <Card.Img variant="top" src={movie.moviemainphotos} />
        <Card.Body>
          <Card.Title> {movie.movietitle} </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Language: {languages}</ListGroup.Item>
          <ListGroup.Item>Country: {countries}</ListGroup.Item>
          <ListGroup.Item>Genre: {genres}</ListGroup.Item>
          <ListGroup.Item>IMDB ID: {movie.imdbmovieid}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default MovieItem;
