import { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './MovieBox.js'


function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=75e56e367638197e80213e05dfb7feb2";
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])

  return (
    <div>
      {movies.map((movieReq) =>
        <MovieBox key={movieReq.id} {...movieReq} />)}
    </div>
  );
}

export default App;
