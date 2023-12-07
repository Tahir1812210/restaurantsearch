import React from 'react';
import { Stack, TextField, Button } from '@mui/material';

const SearchBar = ({ onChange, setSearch, search }) => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      borderRadius="10px"
    >
      <TextField
        placeholder="Search Restaurants"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ height: '60px' }}
        onClick={onChange}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
