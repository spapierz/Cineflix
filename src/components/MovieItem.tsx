import React, { useState } from 'react';
import { Movie } from '../interfaces/Movies';
import { Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { StarBorder } from '@mui/icons-material';

interface MovieItemProps {
    movie: Movie;
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };
    console.log(movie)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
            <img
                src={`${imageBaseUrl}${movie.backdrop_path}`}
                alt={movie.title}
                style={{
                    height: '229px',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    cursor: 'pointer'
                }}
                onClick={handleOpenDialog}
            />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: 'white', padding: '8px 8px 8px 0', borderRadius: '0 0 10px 10px' }}>
                <Typography variant="subtitle2" gutterBottom>
                    <strong>{movie.title}</strong>
                </Typography>
                <div style={{ position: 'absolute', bottom: 70, right: 10 }}>
                    <IconButton>
                        <StarBorder style={{ color: 'white', fontSize: '24px', border: '2px solid white', borderRadius: '50%', padding: '5px', opacity: 0.8 }} />
                    </IconButton>
                </div>
            </div>
            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle>{movie.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        {movie.overview}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default MovieItem;
