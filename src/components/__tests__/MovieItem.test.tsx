import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieItem from '../MovieItem';
import { Movie } from '../../interfaces/Movies';
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
  favorites: [
    {
      id: '1',
      poster_path: '/test',
      title: 'The Godfather',
      release_date: '2003-12-23',
      overview: 'desciption'
    },
  ],
  addToFavorites: jest.fn(),
  removeFromFavorites: jest.fn((id: string) => {}), 
  searchMovies: jest.fn(),
  isFavoritesPage: false,
  movieGalleryTitle: '',
  searchQuery: '',
  isSearching: false,
  toggleFavorites: jest.fn(),
};

const testMovie: Movie = {
  id: '1',
  poster_path: '/test',
  title: 'The Godfather',
  release_date: '2003-12-23',
  overview: 'description',
};

describe('MovieItem Component', () => {
    it('should toggle favorite movie on click', () => {
        render(
        <MovieContext.Provider value={{ ...mockContextValue, favorites: [testMovie] }}>
            <MovieItem movie={testMovie} />
        </MovieContext.Provider>
        );

        const starButton = screen.getByRole('button', { name: 'favorited star icon' });
        expect(starButton).toBeInTheDocument();

        userEvent.click(starButton);
        expect(mockContextValue.removeFromFavorites).toHaveBeenCalledWith(testMovie.id);

        userEvent.click(starButton);
        expect(mockContextValue.addToFavorites).toHaveBeenCalledWith(testMovie);
    });

    it('should open and close the dialog', () => {
        render(
            <MovieContext.Provider value={{ ...mockContextValue, favorites: [testMovie] }}>
                <MovieItem movie={testMovie} />
            </MovieContext.Provider>
        );
      
        // Open the dialog
        const image = screen.getByAltText(testMovie.title);
        userEvent.click(image);
      
        // Check if the dialog is open
        const dialogOverview = screen.getByText(testMovie.overview);
        expect(dialogOverview).toBeInTheDocument();
    });
});
