import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Grid, Typography, Button } from '@mui/material';
import MovieItem from './MovieItem';
import { MovieFilter, Star, StarBorder } from '@mui/icons-material';

const MovieList: React.FC = () => {
    const { movies, favorites } = useContext(MovieContext);
    const [isFavoritesPage, setIsFavoritesPage] = useState(false);

    useEffect(() => {
        if (!favorites.length) {
            setIsFavoritesPage(false);
        }
    }, [favorites]);

    const toggleFavorites = () => {
        setIsFavoritesPage(prevIsFavoritesPage => !prevIsFavoritesPage);
    };

    const displayedMovies = isFavoritesPage ? favorites : movies;

    return (
        <>
            {/* TODO: place favorites button in its own component and add showFavorites to context provider */}
            {!favorites.length ? (
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                    <Grid item>
                        <MovieFilter fontSize="large" color="primary" />
                    </Grid>
                    <Grid item>
                        <Button
                            disabled={true}
                            disableRipple={true}
                            sx={{ textTransform: 'none', pr: 2, pl: 0 }}
                        >
                            <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }}>
                                No favorite movies yet.
                            </Typography>
                        </Button>
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
                                { isFavoritesPage ? 'Show All Movies' : 'Show Favorites'}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            )}
            {/* TODO: movie this into its own component that tracks user search to remove this title */}
            {!isFavoritesPage ? 
                <Grid container justifyContent="left" alignItems="bottom">
                    <Grid item>
                        <Typography color="textSecondary" sx={{ fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.4)' }}>
                            Today's Popular Movies
                        </Typography> 
                    </Grid>
                </Grid> : null
            }
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
