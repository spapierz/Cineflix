import React, { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
import MovieContextProvider from './context/MovieContext';

const LazyMovieList = lazy(() => import('./components/MovieList'));
const LazySearchBar = lazy(() => import('./components/SearchBar'));

const title = 'Popular Movies';

const App: React.FC = () => {
  return (
    <MovieContextProvider>
      <div className="App">
        <Container sx={{ pt: 10}}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Suspense fallback={<div>Loading...</div>}>
            <LazySearchBar />
            <LazyMovieList />
          </Suspense>
        </Container>
      </div>
    </MovieContextProvider>
  );
};

export default App;
