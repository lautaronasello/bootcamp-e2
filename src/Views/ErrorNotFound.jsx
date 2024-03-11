// NotFound.js

import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const ErrorNotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        minHeight: '80vh',
      }}
    >
      <Typography variant='h1' gutterBottom>
        Error
      </Typography>
      <Typography variant='body1' gutterBottom>
        Sorry, an unexpected error has occurred.{' '}
      </Typography>
      <Button component={Link} to='/' variant='contained' color='primary'>
        Ir a la página de inicio
      </Button>
    </Container>
  );
};

export default ErrorNotFound;
