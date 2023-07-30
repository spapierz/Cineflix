import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Grid, Typography, Button } from '@mui/material';
import MovieItem from './MovieItem';
import { AutoAwesome, Favorite, FavoriteBorder, MovieFilter, Star, StarBorder } from '@mui/icons-material';

const MovieList: React.FC = () => {
    const { movies, favorites } = useContext(MovieContext);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        if (!favorites.length) {
            setShowFavorites(false);
        }
    }, [favorites]);

    const toggleFavorites = () => {
        setShowFavorites(prevShowFavorites => !prevShowFavorites);
    };

    const displayedMovies = showFavorites ? favorites : movies;

    return (
        <>
            {!favorites.length ? (
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                    <Grid item>
                        <MovieFilter fontSize="large" color="primary" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }}>
                            No favorite movies yet.
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container justifyContent="center" alignItems="bottom" spacing={1} sx={{ mt: 3 }}>
                    <Grid item>
                        <Button
                            startIcon={<StarBorder />}
                            endIcon={<Star />}
                            onClick={toggleFavorites}
                            disabled={false}
                            disableRipple={true}
                            sx={{ textTransform: 'none', pr: 2, pl: 2 }}
                        >
                            <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }}>
                                {showFavorites ? 'Show All Movies' : 'Show Favorites'}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            )}
            <Grid container spacing={3} sx={{ mt: 0 }}>
                {displayedMovies?.map((movie) => (
                    <Grid item xs={5} sm={3} md={2} key={movie.id}>
                        <MovieItem movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default MovieList;
