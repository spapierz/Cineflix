import React from 'react';
import { Movie } from '../interfaces/Movies';
import { Grid } from '@mui/material';
import MovieItem from './MovieItem';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item sm={6} md={4} key={movie.id}>
          <MovieItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
