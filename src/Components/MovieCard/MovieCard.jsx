import React from "react";
import { Card, Button } from "react-bootstrap";
function MovieCard({ movieData }) {
    // console.log(movieData);
    return (
        <div>
            {/* <img src={el.posterUrl} alt="movie Poster" />
            <img src={props.MoviesData.posterUrl} alt="movie"></img> */}
            <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={movieData.posterUrl} />
                <Card.Body>
                    <Card.Title>
                        <h3>{movieData.title}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h5>{movieData.description}</h5>
                    </Card.Text>
                    <Button variant="primary">Watch now</Button>
                    <p>{"⭐".repeat(movieData.movieRate)}</p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
