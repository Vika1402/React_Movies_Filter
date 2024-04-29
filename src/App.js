import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import moviesData from './data/movies_Data';



function App() {
  const [movies, setMovies] = useState(moviesData);

  const filterMovies = (filters) => {
    let filteredMovies = [...moviesData];

    if (filters.language !== 'All') {
      filteredMovies = filteredMovies.filter(movie => movie.movielanguages.includes(filters.language));
    }

    if (filters.country !== 'All') {
      filteredMovies = filteredMovies.filter(movie => movie.moviecountries.includes(filters.country));
    }

    if (filters.genre !== 'All') {
      filteredMovies = filteredMovies.filter(movie => movie.moviegenres.includes(filters.genre));
    }

    setMovies(filteredMovies);
  };

  return (
    <div>
      <h1 style={{textAlign:'center',padding:'20px'}}>Movie App</h1>
      <Filter filterMovies={filterMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

