import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FavoritesButton } from '../FavoritesButton';
import { MovieContext } from '../../context/MovieContext';

// Mock the MovieContext value to avoid dependency on the actual context
const mockContextValue = {
    movies: [
      {
        id: '1',
        poster_path: '/test',
        title: 'The Godfather',
        release_date: '2003-12-23',
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

describe('FavoritesButton', () => {
  test('renders "No favorite movies yet" when there are no favorites', () => {
    render(
        <MovieContext.Provider value={{ ...mockContextValue }}>
            <FavoritesButton />
        </MovieContext.Provider>
    );

    // Assert that "No favorite movies yet" text is rendered
    const noFavoritesText = screen.getByText('No favorite movies yet.');
    expect(noFavoritesText).toBeInTheDocument();
  });
});
