import React, { useState } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';
import Button from 'react-bootstrap/Button';

function MovieList({ movies }) {
  const [visibleMovies, setVisibleMovies] = useState(9); 

  const loadMore = () => {
    setVisibleMovies(prevVisibleMovies => prevVisibleMovies + 9); 
  };

  return (
    <div className="movie-list">
      <div className="row">
        {movies.slice(0, visibleMovies).map((movie, index) => ( 
          <div className="col-md-4" key={movie.id}>
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
      {visibleMovies < movies.length && ( 
        <div className="load-more">
          <Button variant="primary" onClick={loadMore}>More</Button>
        </div>
      )}
    </div>
  );
}

export default MovieList;
