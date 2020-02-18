import React from 'react';
import Header from '../Layout/Header';
import { Box } from '@material-ui/core';

const HomePage = () => {
  return (
    <Box>
      <Header />
      <main>
        <p>Hello World!</p>
      </main>
    </Box>
  );
};

export default HomePage;
