import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
import MovieList from './components/MovieList';
//import './app.scss';

//const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const App: React.FC = () => {
  const movies = [
    {
      title: 'Barbie',
      poster: 'barbie-image',
      description: 'barbie and ken lands',
      releaseDate: 'July',
      rating: '5*',
      id: 'barbie',
    },
    {
      title: 'Indiana Jones',
      poster: 'indiana-jones-image',
      description: 'dial of doom',
      releaseDate: 'june',
      rating: '5*',
      id: 'indiana',
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
          <MovieList movies={movies} />
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
