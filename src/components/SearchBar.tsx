import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { MovieContext } from '../context/MovieContext';

const SearchBarContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2px 4px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
}));

const SearchIcon = styled(IconButton)(({ theme }) => ({
  padding: 8,
  color: 'lightgrey',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export const SearchBar = () => {
  const { searchMovies } = useContext(MovieContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchMovies(value);
  };

  return (
    <SearchBarContainer>
        <SearchIcon>
            <Search />
        </SearchIcon>
        <SearchInput
            placeholder="Search all movies..."
            onChange={handleChange}
        />
    </SearchBarContainer>
  );
};

export default SearchBar;
