import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Grid } from '@mui/material';
import MovieItem from './MovieItem';

export const MovieList: React.FC = () => {
  const { movies, favorites, isFavoritesPage } = useContext(MovieContext);
  const displayedMovies = isFavoritesPage ? favorites : movies;

  return (
    <Grid container spacing={3} sx={{ mt: 0 }} role="list">
      {displayedMovies?.map((movie) => (
        <Grid item xs={5} sm={3} md={2} key={movie.id} role="listitem">
          <MovieItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
