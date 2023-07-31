import React, { useContext, useCallback } from 'react';
import { Paper, IconButton, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import { MovieContext } from '../context/MovieContext';

const searchContainerStyle = {
  alignItems: 'center',
  padding: '2px 4px',
  borderRadius: '4px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
};

const searchIconStyle = {
  padding: 1,
  color: 'lightgrey',
};

const searchInputStyle = {
  marginLeft: '8px',
  color: 'rgba(0, 0, 0, 0.87)',
};

export const SearchBar = () => {
  const { searchMovies, searchQuery, isFavoritesPage } = useContext(MovieContext);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchMovies(value);
  }, [searchMovies]);

  return (
    <Paper sx={searchContainerStyle} role="search">
      <IconButton sx={searchIconStyle}>
        <Search />
      </IconButton>
      <InputBase
        sx={searchInputStyle}
        id="search-input"
        placeholder="Search all movies..."
        onChange={handleChange}
        aria-label="Search all movies"
      />
    </Paper>
  );
};

export default SearchBar;
