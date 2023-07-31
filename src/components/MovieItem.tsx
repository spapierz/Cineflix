import React, { useState, useEffect, useContext } from 'react';
import { Movie } from '../interfaces/Movies';
import { Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { MovieContext } from '../context/MovieContext';

interface MovieItemProps {
  movie: Movie;
}

const logo = "./assets/images/theater-icon.png";
const imageBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToFavorites, removeFromFavorites, favorites } = useContext(MovieContext);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsFavorite(favorites.some((favMovie) => favMovie.id === movie.id));
  }, [favorites, movie.id]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    setIsFavorite(!isFavorite);
  };

  const formattedReleaseDate = new Date(movie.release_date)?.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : logo}
        alt={movie.title}
        style={{
          height: '229px',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={handleOpenDialog}
      />
      <div style={{
        position: 'absolute',
        top: 168,
        right: 10,
        zIndex: 1,
      }}>
        <IconButton onClick={handleToggleFavorite} aria-label={isFavorite ? 'favorited star icon' : 'not yet favorited star icon'}>
          {isFavorite ? 
            <Star style={{
                color: 'white',
                fontSize: '24px',
                border: '2px solid white',
                borderRadius: '50%',
                padding: '5px'
              }}
            /> :
            <StarBorder style={{
                color: 'white',
                fontSize: '24px',
                border: '2px solid white',
                borderRadius: '50%',
                padding: '5px'
              }} />}
        </IconButton>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '8px 8px 8px 0',
        borderRadius: '0 0 10px 10px',
      }}>
        <Typography variant="subtitle2" gutterBottom>
          {movie.title}
        </Typography>
      </div>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            {movie.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">{movie.overview}</Typography>
          <Typography variant="subtitle1" sx={{ mt: 3, fontSize: 14, textAlign: 'right' }}>
            <strong>Released:</strong> {formattedReleaseDate}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MovieItem;
