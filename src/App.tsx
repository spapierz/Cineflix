import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
//import './app.scss';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Movie App
        </Typography>
        <Suspense fallback={<div>Loading...</div>}>
          <LazySearchBar />
          <LazyMovieList />
        </Suspense>
      </Container>
    </div>
  )
};

export default App;