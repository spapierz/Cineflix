import React, { Suspense, lazy, useContext } from 'react';
import { Container, Typography } from '@mui/material';


const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

/*
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
*/
const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Typography variant="h2" gutterBottom>
          Movie App
        </Typography>
        <Suspense fallback={<div>Loading...</div>}>
          <LazySearchBar />
          <LazyMovieList />
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
