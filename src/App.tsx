import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
//import './app.scss';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const App: React.FC = () => {
  // Sample movie data as an array of Movie objects
  const movies = [
    {
      title: 'Barbie',
      poster: 'barbie-image',
      description: 'barbie and ken lands',
      releaseDate: 'July',
      rating: '5*',
      imdbID: 'barbie',
    },
    {
      title: 'Indiana Jones',
      poster: 'indiana-jones-image',
      description: 'dial of doom',
      releaseDate: 'june',
      rating: '5*',
      imdbID: 'indiana',
    },
  ];

  return (
    <div className="App">
      <Container>
        <Typography variant="h2" gutterBottom>
          Movie App
        </Typography>
        <Suspense fallback={<div>Loading...</div>}>
          <LazySearchBar />
          {/* Pass the movies prop */}
          <LazyMovieList movies={movies} />
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
