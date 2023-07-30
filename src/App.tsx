import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
import MovieContextProvider from './context/MovieContext';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const title = 'CineFlix';

const appStyles: React.CSSProperties = {
  minHeight: '100vh',
  padding: '20px',
  position: 'relative'
};

const verticalJaggedLinesStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%', // Full width
  height: '100%', // Full height
  background: `
    linear-gradient(to right, rgba(255, 255, 255, 1) 25%, transparent 50%, rgba(255, 255, 255, 1) 75%),
    repeating-linear-gradient(180deg, transparent, transparent 2px, rgba(255, 255, 255, 0.5) 2px, rgba(255, 255, 255, 0.5) 4px)
  `,
  opacity: 1,
  transition: 'opacity 5s ease-out', // Fade-out transition
};

const logo = "./assets/images/theater-icon.png";

const App: React.FC = () => {
  return (
    <MovieContextProvider>
      <div className="App" style={appStyles}>
        <Container sx={{ pt: 8}}>
          <Typography variant="h2" gutterBottom>
            {title} <img alt="Fictional Cineflix logo" width="55px" height="55px" src={logo} />
          </Typography>
          <Suspense fallback={<div style={verticalJaggedLinesStyles}>...loading</div>}>
            <LazySearchBar />
            <LazyMovieList />
          </Suspense>
        </Container>
      </div>
    </MovieContextProvider>
  );
};

export default App;
