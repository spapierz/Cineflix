import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Typography } from '@mui/material';

export const MovieGalleryTitle: React.FC = () => {
  const { movieGalleryTitle } = useContext(MovieContext);

  return (
    <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 500 }}>
      {movieGalleryTitle}
    </Typography>
  );
};

export default MovieGalleryTitle;
