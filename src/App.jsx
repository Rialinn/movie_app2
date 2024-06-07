import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

function App() {
  const apiKey = "";
  const [movie, setMovie] = useState(null);

  //
  const getMovie = async (searchTerm) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`,
    );

    const data = await res.json();

    console.log(data);
    setMovie(data);
  };

  return (
    <>
      <h1>Movies App</h1>
      <Form moviesearch={getMovie} />
      { movie && <MovieDisplay movie={movie}/> }
    </>
  );
}

export default App;