import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieGalleryTitle } from '../MovieGalleryTitle';
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
    ],
    favorites: [],
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn((id: string) => {}), 
    searchMovies: jest.fn(),
    isFavoritesPage: false,
    movieGalleryTitle: "Today's Popular Movies",
    searchQuery: '',
    isSearching: false,
    toggleFavorites: jest.fn(),
  };

describe('MovieGalleryTitle', () => {
  test('renders the correct movie gallery title', () => {
    render (
        <MovieContext.Provider value={{...mockContextValue}}>
          <MovieGalleryTitle />
        </MovieContext.Provider>
      );
    // Assert that the correct movie gallery title is rendered
    const titleElement = screen.getByText(mockContextValue.movieGalleryTitle);
    expect(titleElement).toBeInTheDocument();
  });

});
