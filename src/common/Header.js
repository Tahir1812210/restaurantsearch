import { Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Typography
      variant="h5"
      fontSize={34}
      color="primary"
      className="header"
      fontFamily="fantasy"
    >
      Restaurant App
    </Typography>
  );
};

export default Header;
