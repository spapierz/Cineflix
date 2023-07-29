import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Grid } from '@mui/material';
import MovieItem from './MovieItem';

const MovieList: React.FC = () => {
    const { movies } = useContext(MovieContext);

    return (
        <Grid container spacing={3}>
            {movies?.map((movie) => (
                <Grid item xs={5} sm={3} md={2} key={movie.id}>
                    <MovieItem movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;
