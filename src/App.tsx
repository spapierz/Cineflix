import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Movie App
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMovieList />
        <LazySearchBar />
      </Suspense>
    </Container>
  );
}

export default App;
