import React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

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

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <Search />
      </SearchIcon>
      <SearchInput placeholder="Search movies..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
