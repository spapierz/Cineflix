import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieContextProvider, { MovieContext } from '../../context/MovieContext';
import SearchBar from '../SearchBar';
import { Movie } from '../../interfaces/Movies';

interface MovieContextData {
  movies: Movie[];
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  searchMovies: (query: string) => void;
}

const movieContextDataMock = {
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
};

describe('SearchBar Component', () => {
  it('should call searchMovies function with the correct input value when typing in the search input', () => {
    const searchMoviesMock = jest.fn();
    render(
      <MovieContext.Provider value={{ ...movieContextDataMock, searchMovies: searchMoviesMock }}>
        <SearchBar />
      </MovieContext.Provider>
    );
  
    const searchInput = screen.getByPlaceholderText('Search all movies...');
    fireEvent.change(searchInput, { target: { value: 'Avatar' } });
  
    expect(searchMoviesMock).toHaveBeenCalledWith('Avatar');
  });
    

  it('should display the correct placeholder in the search input', () => {
    render(
      <MovieContext.Provider value={movieContextDataMock}>
        <SearchBar />
      </MovieContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search all movies...');
    expect(searchInput).toBeInTheDocument();
  });

  it('should display the search icon', () => {
    render(
      <MovieContext.Provider value={movieContextDataMock}>
        <SearchBar />
      </MovieContext.Provider>
    );

    const searchIcon = screen.getByRole('button', { name: '' });
    expect(searchIcon).toBeInTheDocument();
  });
});
