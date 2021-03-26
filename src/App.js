import React, { useState } from "react";
import "./App.css";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MovieList from "./Components/MovieList/MovieList";
import AddingModal from "./Components/AddingModal/AddingModal";

function App() {
    let allmovies = [
        {
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            movieRate: 5,
        },
        {
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            movieRate: 2,
        },
        {
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            movieRate: 5,
        },
        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            movieRate: 4,
        },
        {
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            movieRate: 2,
        },
        {
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            movieRate: 3,
        },
        {
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            movieRate: 2,
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            movieRate: 3,
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "In the film, Hanks is a Civil War veteran who agrees to take a girl, captured by the Kiowa people years ago, for her aunt and uncle, against her will. They travel hundreds of kilometers and face serious dangers along the way. The film brings together Greengrass and Hanks; they joined Captain Phillips, who received six Oscar nominations, including Best Picture. ",
            posterUrl:
                "https://fr.web.img4.acsta.net/pictures/20/10/23/09/16/1906110.jpg",
            movieRate: 4,
        },
    ];

    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(0);
    const [movies, setMovies] = useState(allmovies);

    let AddMovie = (newMovie) => {
        setMovies([...allmovies, newMovie]);
    };
    // console.log(movies);

    // "Titanic" ,"The Lord of the Rings: The Return of the King", "The Lord of the Rings: The Return of the King" , "Pulp Fiction",  "Schindler's List" "12 Angry Men",   "The Dark Knight" ,  "The Godfather " , "The Shawshank Redemption"
    return (
        <div className="App">
            <MyNavBar setSearch={setSearch} setRate={setRate} />
            <AddingModal className="button" AddMovie={AddMovie} />
            <MovieList moviesData={movies} search={search} rate={rate} />
        </div>
    );
}

export default App;
