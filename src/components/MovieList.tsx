import React, { useContext } from 'react';
import { Movie } from '../interfaces/Movies';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.map((movie) => (
                <Card key={movie.imdbID} style={{ margin: '10px', minWidth: '300px' }}>
                    <Typography variant="h5">{movie.title}</Typography>
                    <CardMedia image={movie.poster} title={movie.title} />
                    <CardContent>
                        <Typography variant="body2">{movie.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default MovieList;
