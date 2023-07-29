import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Grid } from '@mui/material';
import MovieItem from './MovieItem';

const MovieList: React.FC = () => {
    const { movies } = useContext(MovieContext);

    return (
        <Grid container spacing={2}>
            {movies?.map((movie) => (
            <Grid item sm={6} md={4} key={movie.id}>
                <MovieItem movie={movie} />
            </Grid>
        ))}
    </Grid>
  );
};

export default MovieList;
