import React from 'react';
import { Movie } from '../interfaces/Movies';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface MovieItemProps {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
    return (
        <Card>
            <CardMedia component="img" height="300" image={movie.poster} alt={movie.title} />
            <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Button variant="contained" color="primary">
                    Add to favorites
                </Button>
            </CardContent>
        </Card>
    )
};

export default MovieItem;