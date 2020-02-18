import React from 'react';
import { AppBar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Typography variant="h2">My React - App</Typography>
    </AppBar>
  );
};

export default Header;
