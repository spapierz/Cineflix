import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieList } from '../MovieList';
import { MovieContext } from '../../context/MovieContext';

const mockContextValue = {
    movies: [
      {
        id: '1',
        poster_path: '/test',
        title: 'The Godfather',
        release_date: '2003-12-23',
        overview: 'desciption'
      },
      {
        id: '2',
        poster_path: '/test',
        title: 'Jurassic Park',
        release_date: '1993-12-23',
        overview: 'desciption'
      },
    ],
    favorites: [],
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn((id: string) => {}), 
    searchMovies: jest.fn(),
    isFavoritesPage: false,
    movieGalleryTitle: '',
    searchQuery: '',
    isSearching: false,
    toggleFavorites: jest.fn(),
  };

  describe('MovieList', () => {
    test('renders the list of movies when not on favorites page', () => {
        render(
            <MovieContext.Provider value={{ ...mockContextValue }}>
              <MovieList />
            </MovieContext.Provider>
        );  
        // Assert that all movie items are rendered
        const movieItems = screen.getAllByRole('listitem');
        expect(movieItems).toHaveLength(mockContextValue.movies.length);
    });
  
    test('renders the list of favorite movies when on favorites page', () => {
        render(
            <MovieContext.Provider value={{ ...mockContextValue, isFavoritesPage: true }}>
              <MovieList />
            </MovieContext.Provider>
        );    
        // Assert that all favorite movie items are rendered
        const movieItems = screen.getAllByRole('list');
        expect(movieItems).toHaveLength(1);
    });
});
  