import React, { Suspense, lazy } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import MovieContextProvider from './context/MovieContext';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const title = 'CineFlix';
const logo = "./assets/images/theater-icon.png";

const spinnerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const App: React.FC = () => {
  return (
    <MovieContextProvider>
        <Container sx={{ pt: 8 }}>
          <Typography variant="h2" gutterBottom>
            {title} <img alt="Fictional Cineflix logo" width="70px" height="auto" src={logo} />
          </Typography>
          <Suspense fallback={<div style={spinnerStyles}><CircularProgress /></div>}>
            <LazySearchBar />
            <LazyMovieList />
          </Suspense>
        </Container>
    </MovieContextProvider>
  );
};

export default App;
