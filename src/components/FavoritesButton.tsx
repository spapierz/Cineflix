import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Button, Grid, Typography } from '@mui/material';
import { MovieFilter, Star, StarBorder } from '@mui/icons-material';

export const FavoritesButton: React.FC = () => {
    const { favorites, isFavoritesPage, toggleFavorites } = useContext(MovieContext);
  
    return (
        <>
            {!favorites.length ? (
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                    <Grid item>
                        <MovieFilter fontSize="large" color="primary" />
                    </Grid>
                    <Grid item>
                        <Button disabled={true} disableRipple={true} sx={{ textTransform: 'none', pr: 2, pl: 0 }}>
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
                            endIcon={<Star style={{ fontSize: 30 }} />}
                            onClick={toggleFavorites}
                            disabled={false}
                            disableRipple={true}
                            sx={{ textTransform: 'none', pr: 2, pl: 2 }}
                            aria-label={isFavoritesPage ? 'Show all movies' : 'Show favorites'}
                        >
                            <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }}>
                                {isFavoritesPage ? 'Show all movies' : 'Show favorites'}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default FavoritesButton;
