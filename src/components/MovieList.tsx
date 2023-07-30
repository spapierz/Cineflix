import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Button, Grid } from '@mui/material';
import MovieItem from './MovieItem';

const MovieList: React.FC = () => {
    const { movies, favorites } = useContext(MovieContext);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        if (favorites.length === 0) {
            setShowFavorites(false);
        }
    }, [favorites]);

    const toggleFavorites = () => {
        setShowFavorites(prevShowFavorites => !prevShowFavorites);
    };

    const displayedMovies = showFavorites ? favorites : movies;

    return (
        <div style={{ margin: '20px 0' }}>
            { favorites.length ? (
                <Button
                    onClick={toggleFavorites}
                    variant="contained"
                    style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        borderRadius: '3px',
                        textTransform: 'none',
                        fontWeight: 500,
                        marginTop: '8px',
                        marginBottom: '16px',
                    }}
                >                    
                    {showFavorites ? 'Show All Movies' : 'Show Favorites'}
                </Button>
            ) : null}
            <Grid container spacing={3}>
                {displayedMovies?.map((movie) => (
                    <Grid item xs={5} sm={3} md={2} key={movie.id}>
                        <MovieItem movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default MovieList;
